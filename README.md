# aura.mgta — Suite Comercial, Cotizador & Gestor de Afiliados

Plataforma comercial y financiera para la tienda de ropa **aura.mgta** (Isla de Margarita).

## Características
- **Cotizador de Cuenta Completa**: Desglose financiero, costo real vs. precio de venta, flete, y aplicación directa de cupones.
- **Gestor & Creador de Embajadores**: Códigos personalizados, metas de 5 u 8 personas, beneficios configurables y filtro por tipo de cliente.
- **Protección Antifraude Automática**: Bloqueo instantáneo de auto-compra y trampas cruzadas recíprocas entre amigos.
- **Calculadora de Lotes al Proveedor**: Prorrateo de envíos globales (ej. 12 prendas por $40) y sugerencia de PVP rentable para sostener promociones.
- **Catálogo & Inventario**: Control de stock y costos por prenda.
- **Registro de Planillas Históricas**: Creación de órdenes con número de folio (PLN-XXXX), persistencia y tickets listos para WhatsApp.
- **Conectividad Cloud con Supabase**: Base de datos PostgreSQL en tiempo real con sincronización bidireccional y fallback a LocalStorage si estás offline.

---

## Estructura del Proyecto
- `index.html`: Aplicación web completa lista para producción.
- `schema.sql`: Script SQL con las tablas, políticas de seguridad RLS e inserts iniciales para Supabase.
- `vercel.json`: Configuración de despliegue optimizada para Vercel.
- `.gitignore`: Archivos ignorados por Git.

---

## Paso 1: Configurar la Base de Datos en Supabase (Gratis)
1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta o inicia sesión.
2. Crea un nuevo proyecto (ej. `aura-mgta-suite`).
3. En el menú lateral izquierdo, ve a **SQL Editor**.
4. Abre el archivo `schema.sql` de este repositorio, copia todo su contenido, pégalo en el editor de Supabase y haz clic en **Run** (Ejecutar).
5. Ve a **Project Settings** > **API**.
6. Copia dos datos:
   - **Project URL** (ej. `https://xxxx.supabase.co`)
   - **Project API Keys** -> `anon` `public` (la clave pública que empieza por `eyJ...`)

---

## Paso 2: Subir a GitHub
1. Abre tu terminal en la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "feat: aura.mgta suite web con soporte supabase y vercel"
   git branch -M main
   ```
2. Crea un repositorio nuevo en [https://github.com/new](https://github.com/new) (ej. `aura-mgta-suite`).
3. Vincula y sube el código:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/aura-mgta-suite.git
   git push -u origin main
   ```

---

## Paso 3: Desplegar en Vercel (1 Clic)
1. Entra a [https://vercel.com](https://vercel.com) e inicia sesión con tu GitHub.
2. Haz clic en **Add New...** > **Project**.
3. Selecciona el repositorio `aura-mgta-suite` y haz clic en **Deploy**.
4. En menos de 30 segundos tendrás tu página web activa con un enlace público (ej. `https://aura-mgta-suite.vercel.app`).

---

## Paso 4: Conectar la Web a Supabase
1. Abre tu página web desplegada en Vercel.
2. Haz clic en el botón superior derecho **"Conectar Supabase"** (icono de base de datos).
3. Pega tu **Project URL** y tu **Anon Key** que copiaste en el Paso 1.
4. Haz clic en **"Guardar y Conectar"**.
5. ¡Listo! Verás el indicador en verde: **Supabase Conectado**. Todos tus pedidos, prendas y códigos quedarán resguardados en la base de datos cloud y sincronizados en cualquier dispositivo.
