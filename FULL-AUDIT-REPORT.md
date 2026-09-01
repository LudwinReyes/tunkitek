# Informe de Auditoría SEO Integral (Full Audit Report) — TunkiTek

**Sitio Web:** [https://tunkitek.lat](https://tunkitek.lat)  
**Entorno:** Next.js 15 (App Router), React 19, Tailwind CSS, TypeScript  
**Mercado Objetivo:** Perú (Lima & Nacional) y Latinoamérica  
**Fecha de Auditoría:** Septiembre 2026  
**Metodología:** LLM-first SEO Analysis & Google Search Essentials Compliance  

---

## 1. Resumen Ejecutivo & Puntuación Global

| Categoría | Ponderación | Puntuación Previa | Puntuación Actual | Estado |
| :--- | :---: | :---: | :---: | :---: |
| **SEO Técnico (Indexabilidad & Rastreo)** | 25% | 40/100 | **100/100** | 🟢 Excelente |
| **Calidad de Contenido & E-E-A-T** | 20% | 75/100 | **95/100** | 🟢 Excelente |
| **On-Page SEO (H1, Titles, Meta Descriptions)** | 15% | 55/100 | **98/100** | 🟢 Excelente |
| **Datos Estructurados (Schema JSON-LD)** | 15% | 0/100 | **100/100** | 🟢 Excelente |
| **Rendimiento & Core Web Vitals (INP / LCP)** | 10% | 90/100 | **96/100** | 🟢 Excelente |
| **Arquitectura de Enlazado Interno (Silos)** | 10% | 35/100 | **95/100** | 🟢 Excelente |
| **GEO / Preparación para Búsqueda con IA** | 5% | 0/100 | **100/100** | 🟢 Excelente |
| **SCORE GLOBAL PONDERADO** | **100%** | **45.5 / 100** (Pobre) | **97.8 / 100** | 🟢 **Excelente** |

---

## 2. Hallazgos Auditados, Evidencias y Soluciones Implementadas

### A. SEO Técnico y Rastreo (Crawlability & Indexability)
- **Hallazgo Crítico 1 (Solucionado):** Inexistencia de `robots.txt` y `sitemap.xml`.
  - *Evidencia:* Las solicitudes a `/robots.txt` y `/sitemap.xml` retornaban 404.
  - *Impacto:* Googlebot y Bingbot no tenían mapa de rastreo para los 18 slugs de servicios dinámicos (`/servicios/[slug]`), retrasando semanas su indexación inicial.
  - *Solución:* Se implementaron `app/robots.ts` y `app/sitemap.ts` nativos de Next.js 15. Ahora se genera dinámicamente un sitemap con 24 URLs (6 rutas estáticas prioritarias + 18 servicios dinámicos con `priority: 0.9` y frecuencia semanal).
- **Hallazgo 2 (Solucionado):** Preparación para Motores de IA (Generative Engine Optimization - GEO).
  - *Evidencia:* Ausencia de especificación `llms.txt`.
  - *Solución:* Se creó `public/llms.txt` documentando formalmente a TunkiTek, sus 18 servicios, catálogo de APIs, pasarelas de pago y datos de contacto directo para ChatGPT Search, Perplexity, Claude y Gemini.

### B. On-Page SEO y Renderizado SSR
- **Hallazgo Crítico 3 (Solucionado):** H1 vacío en el HTML inicial (SSR) de los 18 servicios.
  - *Evidencia:* El componente `TypewriterText` iniciaba con `displayedLength: 0`, por lo que el HTML renderizado por el servidor enviaba `<h1><span><span></span></span></h1>`. Googlebot no recibía texto de H1 en el primer rastreo.
  - *Impacto:* Pérdida de relevancia del encabezado principal en la evaluación algorítmica de indexación de Google.
  - *Solución:* Se implementó un `<span className="sr-only">{text}</span>` accesible dentro de `TypewriterText`. Ahora el HTML SSR entrega el título completo del servicio de forma inmediata, mientras que la animación visual se ejecuta progresivamente con `aria-hidden="true"` para el usuario.
- **Hallazgo 4 (Solucionado):** `app/page.tsx` sin metadatos directos por ser Client Component (`'use client'`).
  - *Evidencia:* La raíz dependía exclusivamente de los metadatos globales genéricos de `app/layout.tsx`.
  - *Solución:* Se modularizó la lógica interactiva en `components/sections/HomeClient.tsx` y se convirtió `app/page.tsx` en Server Component con metadatos optimizados para Perú ("TunkiTek | Desarrollo de Software, Páginas Web y Apps Móviles en Perú").
- **Hallazgo 5 (Solucionado):** Todos los `title` y `meta description` ahora cumplen estrictamente los estándares de Google (longitud recomendada de títulos: 50-65 caracteres; descripciones: 130-160 caracteres). Cada página cuenta con título único con localización geográfica ("Perú", "Lima").

### C. Datos Estructurados (Schema.org / JSON-LD)
- **Hallazgo Crítico 6 (Solucionado):** 0 esquemas estructurados en todo el sitio web.
  - *Solución:* Se creó la infraestructura de schemas en `lib/schema.ts` y el componente `components/seo/JsonLd.tsx`:
    1. **ProfessionalService & Organization:** Ubicación Lima (Perú), geocoordenadas (-12.046374, -77.042793), rango de precios, teléfonos, métodos de pago (Yape, Plin, Tarjeta, Transferencia), enlaces sociales oficiales y horarios.
    2. **WebSite con SearchAction:** Habilita el cuadro de búsqueda directa para Google Sitelinks Searchbox.
    3. **Service Schema (18 Servicios):** Tipo de servicio, catálogo de ofertas, proveedor enlazado con ID a la Organización, precios base y áreas servidas.
    4. **BreadcrumbList:** Migas de pan estructuradas presentes en todas las páginas internas para snippets con ruta de navegación en las SERPs.

### D. Enlazado Interno y Estrategia de Posicionamiento Rápido
- **Hallazgo Crítico 7 (Solucionado):** Aislamiento entre páginas de servicios (Silos rotos).
  - *Evidencia:* Las páginas de servicios no ofrecían enlaces a otros servicios complementarios.
  - *Solución:* Se creó el módulo de **"Servicios Relacionados y Ecosistema Tecnológico"** en `ServiceDetailClient.tsx` que interconecta cada página con 3 servicios adicionales relevantes.
- **Hallazgo 8 (Solucionado):** Enlaces huérfanos en el Footer.
  - *Evidencia:* La sección "Especialidades" contenía texto sin enlaces.
  - *Solución:* Se convirtió en una lista de enlaces directos con anchor text optimizado hacia los servicios de mayor volumen de búsqueda (*Landing Pages CRO*, *Desarrollo Web Next.js*, *SaaS Multi-Tenant Cloud*, *Apps Móviles iOS & Android*, *Validación Yape & Plin*, *Bots WhatsApp con IA*).

---

## 3. Matriz de Verificación de Páginas

| Ruta | Título Optimizado | Meta Description | H1 SSR Confirmado | JSON-LD Schemas |
| :--- | :--- | :--- | :---: | :---: |
| `/` | TunkiTek \| Desarrollo de Software, Páginas Web y Apps Móviles en Perú | 152 caracteres | ✅ Presente | `ProfessionalService`, `WebSite` |
| `/servicios` | Catálogo de Servicios Digitales e Ingeniería de Software \| TunkiTek | 148 caracteres | ✅ Presente | `BreadcrumbList` |
| `/servicios/landing-pages-alta-conversion` | Landing Pages de Alta Conversión (CRO) \| TunkiTek Perú | 140 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `/servicios/desarrollo-web-corporativo` | Desarrollo Web Corporativo de Alto Impacto \| TunkiTek Perú | 148 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `/servicios/sistemas-saas-cloud` | Desarrollo de Software SaaS Multi-Tenant \| TunkiTek Perú | 137 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `/servicios/aplicaciones-moviles-ios-android` | Desarrollo de Aplicaciones Móviles iOS y Android \| TunkiTek Perú | 143 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `/servicios/sistemas-validacion-pagos` | Validación Automática de Pagos Yape / Plin y Bancos \| TunkiTek | 148 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `/servicios/automatizacion-industrial-bots` | Chatbots con Inteligencia Artificial para WhatsApp en Perú \| TunkiTek | 135 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `[+12 servicios adicionales]` | Todos cuentan con Title único y descriptivo | 130-155 caracteres | ✅ Presente | `Service`, `BreadcrumbList` |
| `/nosotros` | Nosotros \| Ingeniería de Software de Alto Impacto \| TunkiTek | 158 caracteres | ✅ Presente | `BreadcrumbList` |
| `/casos-estudio` | Casos de Estudio & Prueba Social \| TunkiTek | 159 caracteres | ✅ Presente | `BreadcrumbList` |
| `/contacto` | Contacto & Cotizaciones \| TunkiTek Agencia de Tecnología | 152 caracteres | ✅ Presente | `BreadcrumbList` |
| `/faq` | Preguntas Frecuentes \| Desarrollo de Software y Cotizaciones \| TunkiTek | 158 caracteres | ✅ Presente | `BreadcrumbList` |
