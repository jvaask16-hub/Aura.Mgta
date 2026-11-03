const SUPA_URL = process.env.SUPABASE_URL || 'https://ikcskvnqvixkrphtxdbq.supabase.co';
const SUPA_KEY = process.env.SUPABASE_KEY || 'sb_publishable_DhAGa5ce3FYs_9xoE6UfMQ_jY9EIz24';

const HEADERS = {
    apikey: SUPA_KEY,
    Authorization: 'Bearer ' + SUPA_KEY,
    'Content-Type': 'application/json'
};

module.exports = async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store, max-age=0');

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const action = req.query.action || 'catalogo';

    try {
        if (action === 'catalogo') {
            const urls = [
                '/rest/v1/catalogo_publico?select=id,nombre,categoria,pvp,stock,imagen_url,descripcion,tallas,genero,destacado,visible&order=destacado.desc,id.desc',
                '/rest/v1/inventario?select=id,nombre,categoria,pvp,stock,imagen_url,descripcion,tallas,genero,destacado,visible&order=id.desc',
                '/rest/v1/inventario?select=id,nombre,categoria,pvp,stock&order=id.desc'
            ];

            let items = [];
            for (const u of urls) {
                const r = await fetch(SUPA_URL + u, { headers: HEADERS });
                if (r.ok) {
                    const data = await r.json();
                    // Jamas enviar 'costo' ni campos internos al navegador publico
                    items = (data || [])
                        .filter(p => p.visible !== false && (p.stock === undefined || p.stock >= 0))
                        .map(p => ({
                            id: p.id,
                            nombre: p.nombre,
                            categoria: p.categoria,
                            pvp: Number(p.pvp) || 0,
                            stock: Number(p.stock) || 0,
                            imagen_url: p.imagen_url || '',
                            descripcion: p.descripcion || '',
                            tallas: p.tallas || 'S, M, L',
                            genero: p.genero || 'Unisex',
                            destacado: !!p.destacado
                        }));
                    break;
                }
            }
            return res.status(200).json({ items });
        }

        if (action === 'codigo') {
            const limpio = String(req.query.c || '').trim().toUpperCase();
            if (!limpio) {
                return res.status(200).json({ valido: false });
            }

            const intentos = [
                `/rest/v1/rpc/consultar_codigo_publico`,
                `/rest/v1/embajadores?select=nombre,codigo,meta,usos,reclamado,premio,descuento_amigo&codigo=ilike.${encodeURIComponent(limpio)}&limit=1`
            ];

            try {
                const rRpc = await fetch(SUPA_URL + intentos[0], {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify({ p_codigo: limpio })
                });
                if (rRpc.ok) {
                    const d = await rRpc.json();
                    const f = Array.isArray(d) ? d[0] : d;
                    if (f && (f.codigo || f.valido)) {
                        return res.status(200).json({
                            valido: true,
                            codigo: f.codigo || limpio,
                            embajadora: f.embajadora || f.nombre || 'Embajador(a) Aura',
                            beneficio: f.beneficio || f.descuento_amigo || '10% OFF en tu compra',
                            premio: f.premio || '$10.00 OFF en su compra',
                            usos: Number(f.usos ?? 0),
                            meta: Number(f.meta ?? 5),
                            reclamado: Boolean(f.reclamado)
                        });
                    }
                }
            } catch (e) {}

            const rTbl = await fetch(SUPA_URL + intentos[1], { headers: HEADERS });
            if (rTbl.ok) {
                const d = await rTbl.json();
                if (Array.isArray(d) && d[0]) {
                    const e = d[0];
                    return res.status(200).json({
                        valido: true,
                        codigo: e.codigo,
                        embajadora: e.nombre,
                        beneficio: e.descuento_amigo || '10% OFF en tu compra',
                        premio: e.premio || '$10.00 OFF en su compra',
                        usos: Number(e.usos ?? 0),
                        meta: Number(e.meta ?? 5),
                        reclamado: Boolean(e.reclamado)
                    });
                }
            }

            return res.status(200).json({ valido: false });
        }

        return res.status(400).json({ error: 'Accion invalida' });
    } catch (err) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};
