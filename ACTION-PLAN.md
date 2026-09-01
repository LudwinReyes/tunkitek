# Plan de Acción para Posicionamiento Rápido en Google (Action Plan) — TunkiTek

Este documento contiene la hoja de ruta operativa para posicionar el sitio web de **TunkiTek (tunkitek.lat)** en los primeros resultados de Google Perú y Latinoamérica en el menor tiempo posible tras su despliegue a producción.

---

## Fase 1: Mejoras Técnicas & On-Page Ejecutadas en el Código (Completadas ✅)

1. **Rastreo e Indexación:**
   - [x] Generador de `robots.txt` (`app/robots.ts`) con permisos abiertos para Googlebot y motores de búsqueda de IA.
   - [x] Generador de `sitemap.xml` (`app/sitemap.ts`) con las 24 URLs (6 rutas principales + 18 servicios dinámicos).
   - [x] Especificación `llms.txt` y `llms-full.txt` en `public/` para motores de búsqueda con IA (GEO).
   - [x] Archivo `humans.txt` para señales E-E-A-T de transparencia de autoría.

2. **Garantía de Encabezados (H1) e Indexabilidad SSR:**
   - [x] Corrección de `TypewriterText.tsx`: Se incluyó un `span.sr-only` con el texto íntegro para que Googlebot indexe el H1 completo en el primer barrido de renderizado por servidor.
   - [x] Cada una de las 24 páginas cuenta exactamente con 1 solo `<h1>` semántico y keyword-rich.

3. **Metadatos y Etiquetas Sociales:**
   - [x] Conversión de `app/page.tsx` a Server Component con metadatos dedicados para Perú.
   - [x] Todos los 18 servicios utilizan sus `metaTitle` específicos (50-65 caracteres) y descripciones persuasivas (130-160 caracteres).
   - [x] Inclusión de `canonical` en todas las páginas evitando problemas de contenido duplicado.
   - [x] Directivas OpenGraph completas con `locale: 'es_PE'` y Twitter Cards `summary_large_image`.

4. **Datos Estructurados (Schema JSON-LD):**
   - [x] Inyección de esquema `ProfessionalService` y `Organization` en la raíz.
   - [x] Inyección de esquema `WebSite` con `SearchAction`.
   - [x] Inyección de esquema `Service` individual para cada uno de los 18 servicios.
   - [x] Inyección de esquema `BreadcrumbList` en todas las páginas internas.

5. **Arquitectura de Enlazado Interno (Malla de Silos):**
   - [x] Módulo dinámico de **Servicios Relacionados** al pie de cada servicio para transferir PageRank interno a través de los 18 servicios.
   - [x] Enlaces en el Footer hacia los 6 servicios de mayor intención de búsqueda comercial en Perú.

---

## Fase 2: Protocolo de Lanzamiento y Aceleración en Google Search Console (Inmediato al Desplegar 🚀)

Para que Google indexe y posicione los servicios a máxima velocidad una vez que el sitio esté publicado con su dominio `https://tunkitek.lat`:

### Paso 1: Verificación de Propiedad en Google Search Console (Día 1)
1. Ingresa a [Google Search Console](https://search.google.com/search-console).
2. Añade la propiedad mediante **Dominio** (`tunkitek.lat`) agregando el registro TXT en tu proveedor de DNS (Cloudflare, Namecheap, GoDaddy, etc.).
3. Si utilizas el MCP de Google Search Console configurado en tu entorno (`gscServer`), puedes verificar el estado de indexación y sitemaps directamente desde la consola del agente.

### Paso 2: Envío Forzado del Sitemap XML (Día 1)
1. En Google Search Console, dirígete a la sección **Sitemaps** (en el menú lateral izquierdo).
2. En el campo "Añadir un sitemap nuevo", escribe:
   `https://tunkitek.lat/sitemap.xml`
3. Haz clic en **Enviar**. Esto notificará al bot de Google para que programe de inmediato el rastreo de las 24 URLs.

### Paso 3: Inspección y Solicitud de Indexación Manual de las URLs Clave (Día 1 y 2)
Google impone una cuota de inspección/indexación diaria (alrededor de 10-15 URLs por día). Prioriza solicitar la indexación manual de:
1. `https://tunkitek.lat/` (Home)
2. `https://tunkitek.lat/servicios` (Catálogo general)
3. `https://tunkitek.lat/servicios/landing-pages-alta-conversion`
4. `https://tunkitek.lat/servicios/desarrollo-web-corporativo`
5. `https://tunkitek.lat/servicios/sistemas-saas-cloud`
6. `https://tunkitek.lat/servicios/aplicaciones-moviles-ios-android`
7. `https://tunkitek.lat/servicios/sistemas-validacion-pagos`
8. `https://tunkitek.lat/servicios/automatizacion-industrial-bots`
9. `https://tunkitek.lat/servicios/paneles-administrativos-erp-crm`

*Procedimiento:* Pega la URL en la barra superior de GSC ("Inspeccionar cualquier URL en https://tunkitek.lat") y presiona el botón **"Solicitar indexación"**.

---

## Fase 3: Estrategia de Crecimiento Rápido de Autoridad (Semanas 1 a 4 📈)

Para escalar a los primeros puestos superando a competidores establecidos:

### 1. Ficha de Google Business Profile (Local SEO Perú)
- Crea y verifica el perfil de **TunkiTek** en Google Business Profile como empresa de desarrollo de software / servicios informáticos en Lima, Perú.
- Vincula la URL del sitio web: `https://tunkitek.lat`.
- Completa el catálogo de productos/servicios en la ficha de Google enlazando directamente a las páginas de servicios respectivas.

### 2. Señales de Marca & Redes Sociales
- Asegura que los perfiles sociales enlacen a la web:
  - LinkedIn: `https://linkedin.com/company/tunkitek`
  - GitHub: `https://github.com/tunkitek`
  - Instagram: `https://instagram.com/tunkitek.lat`
- Cada post en LinkedIn o blog técnico que mencione un desarrollo debe enlazar con anchor text descriptivo a la página del servicio correspondiente (ej. enlace hacia `/servicios/sistemas-validacion-pagos` al hablar de conciliación de pagos con Yape).

### 3. Registro en Directorios Profesionales Locales
- Dar de alta el perfil de TunkiTek en directorios de alta reputación empresarial como:
  - Clutch.co (categoría Software Development Peru)
  - GoodFirms
  - Crunchbase
  - Proveedores de Software de la Cámara de Comercio de Lima (CCL) si aplica.

### 4. Monitoreo Semanal de Palabras Clave
- Monitorear en Search Console las impresiones y clics para consultas clave:
  - `desarrollo web peru`
  - `software a medida lima`
  - `agencia de software lima`
  - `validacion yape plin ecommerce`
  - `desarrollo saas peru`
  - `chatbots whatsapp business peru`
- Cuando una página empiece a aparecer en posiciones entre la 8 y la 20 ("Low hanging fruits"), enriquecer su sección de Preguntas Frecuentes o sus ejemplos de entregables para impulsarla al Top 3.
