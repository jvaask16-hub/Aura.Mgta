const crypto = require('crypto');

const SUPA_URL = process.env.SUPABASE_URL || 'https://ikcskvnqvixkrphtxdbq.supabase.co';
const SUPA_KEY = process.env.SUPABASE_KEY || 'sb_publishable_DhAGa5ce3FYs_9xoE6UfMQ_jY9EIz24';
const LOBBY_PASSWORD = process.env.AURA_LOBBY_PASSWORD || 'aura2026';
const TOKEN_SECRET = process.env.AURA_TOKEN_SECRET || ('aura_secret_' + SUPA_KEY);

const HEADERS = {
    apikey: SUPA_KEY,
    Authorization: 'Bearer ' + SUPA_KEY,
    'Content-Type': 'application/json',
    Prefer: 'resolution=merge-duplicates,return=representation'
};

function crearToken() {
    const exp = Date.now() + 1000 * 60 * 60 * 12; // 12 horas
    const payload = `lobby:${exp}`;
    const sig = crypto.createHmac('sha256', TOKEN_SECRET).update(payload).digest('hex');
    return Buffer.from(`${payload}:${sig}`).toString('base64');
}

function verificarToken(token) {
    if (!token) return false;
    try {
        const decoded = Buffer.from(String(token), 'base64').toString('utf8');
        const partes = decoded.split(':');
        if (partes.length !== 3) return false;
        const [scope, expStr, sig] = partes;
        if (scope !== 'lobby') return false;
        if (Date.now() > Number(expStr)) return false;
        const esperado = crypto.createHmac('sha256', TOKEN_SECRET).update(`${scope}:${expStr}`).digest('hex');
        return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(esperado));
    } catch (e) {
        return false;
    }
}

module.exports = async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store, max-age=0');

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const action = body.action;

    // 1. Login: valida la contraseña en el servidor (nunca en el navegador)
    if (action === 'login') {
        const pass = String(body.password || '').trim();
        if (pass === LOBBY_PASSWORD) {
            return res.status(200).json({ ok: true, token: crearToken() });
        }
        return res.status(401).json({ ok: false, error: 'Contraseña incorrecta' });
    }

    // 2. Todas las demas acciones requieren token firmado valido
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : (body.token || '');
    if (!verificarToken(token)) {
        return res.status(401).json({ ok: false, error: 'Sesion no autorizada o expirada' });
    }

    try {
        if (action === 'cargar_todo') {
            const [rEmb, rInv, rPed] = await Promise.all([
                fetch(`${SUPA_URL}/rest/v1/embajadores?select=*&order=id.asc`, { headers: HEADERS }),
                fetch(`${SUPA_URL}/rest/v1/inventario?select=*&order=id.asc`, { headers: HEADERS }),
                fetch(`${SUPA_URL}/rest/v1/pedidos?select=*&order=id.desc`, { headers: HEADERS })
            ]);

            const embData = rEmb.ok ? await rEmb.json() : [];
            const invData = rInv.ok ? await rInv.json() : [];
            const pedData = rPed.ok ? await rPed.json() : [];

            return res.status(200).json({
                ok: true,
                embajadores: embData,
                inventario: invData,
                pedidos: pedData
            });
        }

        if (action === 'sincronizar_todo') {
            const { embajadores, inventario, pedidos } = body;

            if (Array.isArray(embajadores) && embajadores.length > 0) {
                await fetch(`${SUPA_URL}/rest/v1/embajadores?on_conflict=id`, {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify(embajadores)
                });
            }

            if (Array.isArray(inventario) && inventario.length > 0) {
                const rInvExt = await fetch(`${SUPA_URL}/rest/v1/inventario?on_conflict=id`, {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify(inventario)
                });
                if (!rInvExt.ok) {
                    const invBase = inventario.map(p => ({
                        id: p.id,
                        nombre: p.nombre,
                        categoria: p.categoria || 'General',
                        costo: p.costo,
                        pvp: p.pvp,
                        stock: p.stock
                    }));
                    await fetch(`${SUPA_URL}/rest/v1/inventario?on_conflict=id`, {
                        method: 'POST',
                        headers: HEADERS,
                        body: JSON.stringify(invBase)
                    });
                }
            }

            if (Array.isArray(pedidos) && pedidos.length > 0) {
                await fetch(`${SUPA_URL}/rest/v1/pedidos?on_conflict=id`, {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify(pedidos)
                });
            }

            return res.status(200).json({ ok: true });
        }

        if (action === 'guardar_prenda') {
            const p = body.prenda;
            if (!p || !p.id) return res.status(400).json({ ok: false });
            let r = await fetch(`${SUPA_URL}/rest/v1/inventario?on_conflict=id`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify([p])
            });
            let soloBase = false;
            if (!r.ok) {
                soloBase = true;
                const base = {
                    id: p.id,
                    nombre: p.nombre,
                    categoria: p.categoria || 'General',
                    costo: p.costo,
                    pvp: p.pvp,
                    stock: p.stock
                };
                r = await fetch(`${SUPA_URL}/rest/v1/inventario?on_conflict=id`, {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify([base])
                });
            }
            return res.status(200).json({ ok: r.ok, soloBase });
        }

        if (action === 'eliminar_prenda') {
            const id = body.id;
            await fetch(`${SUPA_URL}/rest/v1/inventario?id=eq.${encodeURIComponent(id)}`, {
                method: 'DELETE',
                headers: HEADERS
            });
            return res.status(200).json({ ok: true });
        }

        if (action === 'eliminar_embajador') {
            const id = body.id;
            await fetch(`${SUPA_URL}/rest/v1/embajadores?id=eq.${encodeURIComponent(id)}`, {
                method: 'DELETE',
                headers: HEADERS
            });
            return res.status(200).json({ ok: true });
        }

        if (action === 'eliminar_pedido') {
            const id = body.id;
            await fetch(`${SUPA_URL}/rest/v1/pedidos?id=eq.${encodeURIComponent(id)}`, {
                method: 'DELETE',
                headers: HEADERS
            });
            return res.status(200).json({ ok: true });
        }

        return res.status(400).json({ ok: false, error: 'Accion desconocida' });
    } catch (err) {
        return res.status(500).json({ ok: false, error: 'Error interno en servidor' });
    }
};
