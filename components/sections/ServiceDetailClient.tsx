'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  CheckCircle2,
  ShieldAlert,
  Cpu,
  Layers,
  Bot,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Check,
  Globe,
  Clock,
  ShieldCheck,
  Send,
  HelpCircle,
  ChevronDown,
  Code2,
  Lock,
  Flame,
  Activity,
  Server,
  ArrowUpRight,
  AlertTriangle,
  XCircle,
} from 'lucide-react';
import { ServiceDetail } from '@/lib/servicesData';
import { COMPANY_DATA } from '@/lib/data';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { TypewriterText } from '@/components/ui/TypewriterText';
import {
  textEnterLeft,
  visualEnterRight,
  ctaEnterBottom,
  bentoItemVariant,
  accordionContentVariants,
  accordionIconVariants,
} from '@/animations/pageMotion';
import {
  buttonHoverSpring,
  buttonTapSpring,
  customBadgeFloat,
} from '@/animations/serviceDetailMotion';

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectScope: `Cotización de ${service.title}`,
    timeline: '1 mes',
    message: '',
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FF4500]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#25D366]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#FF1493]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF4500]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#3B82F6]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#10A37F]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF4500]" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola TunkiTek, deseo agendar una Consultoría Técnica para el servicio de ${service.title}. Mi empresa requiere información sobre presupuestos y tiempos de entrega.`
  );
  const whatsappUrl = `https://wa.me/51${COMPANY_DATA.phone}?text=${whatsappMessage}`;

  const getPASData = (slug: string) => {
    switch (slug) {
      // 1. Web & Landing
      case 'landing-pages-alta-conversion':
        return {
          problemTitle: 'El Despilfarro de Presupuesto en Campañas de Ads',
          problemPoints: [
            'Landings lentas en WordPress o Elementor (>4 segundos) que hacen huir al 55% de tus visitas de Google o Meta Ads.',
            'Textos genéricos sin jerarquía visual ni copywriting persuasivo que confunden al comprador.',
            'Píxeles mal configurados y pérdida de datos de conversión por los bloqueos de cookies de iOS.',
            'Cero pruebas A/B: dinero quemado en tráfico sin saber qué variante convierte más.',
          ],
          solutionTitle: 'Landing Pages Next.js 15 & Conversión CRO Extrema',
          solutionPoints: [
            'Carga instantánea (< 0.6s) que garantiza que el 100% de los usuarios vean tu oferta de inmediato.',
            'Estructura psicológica basada en la fórmula PAS con gatillos de urgencia y claridad de valor.',
            'Meta Conversions API (CAPI) y Google Enhanced Conversions configurados en el servidor.',
            'Checkout directo a WhatsApp o formulario optimizado para capturar leads calificados al instante.',
          ],
        };
      case 'desarrollo-web-corporativo':
        return {
          problemTitle: 'El Colapso de las Webs Tradicionales y Plantillas Lentas',
          problemPoints: [
            'Tiempos de carga lentos (>4.5 segundos) que provocan la pérdida de clientes B2B antes de ver tu propuesta.',
            'Plantillas prefabricadas con plugins obsoletos vulnerables a inyecciones de código y malware.',
            'Nula optimización SEO estructural: motores de búsqueda penalizan la página y no rankean en Google Perú.',
            'Pérdida de autoridad corporativa frente a competidores con interfaces modernas y ágiles.',
          ],
          solutionTitle: 'Arquitectura Next.js 15 & SSR de Carga Sub-Segundo',
          solutionPoints: [
            'Tiempo de carga ultra-rápido (< 0.8s) con 99+ en Google PageSpeed Insights y retención máxima.',
            'Diseño orgánico a medida en Tailwind CSS sin plugins cautivos ni dependencias lentas.',
            'SEO semántico y datos estructurados Schema.org para dominar búsquedas comerciales clave.',
            'Seguridad perimetral Cloudflare con SSL automático y protección DDoS de nivel empresarial.',
          ],
        };
      case 'sitios-web-wordpress-profesional':
        return {
          problemTitle: 'WordPress Lento, Inseguro y Saturado de Plugins',
          problemPoints: [
            'Constructores visuales pesados (Elementor, Divi) que inflan el código y demoran la carga más de 5 segundos.',
            'Ataques constantes de fuerza bruta al wp-admin e infecciones de virus por plugins desactualizados.',
            'Dificultad para editar secciones sin desconfigurar el diseño en celulares.',
            'Caídas repentinas al actualizar versiones del núcleo de WordPress o plugins de terceros.',
          ],
          solutionTitle: 'WordPress Enterprise con Temas Propios y Caché Redis',
          solutionPoints: [
            'Desarrollo de temas a medida con bloques nativos Gutenberg de carga rápida (< 1.2s).',
            'Blindaje de seguridad con 2FA, firewall perimetral y eliminación de plugins vulnerables.',
            'Panel de administración limpio y personalizado para que tu equipo suba contenido con facilidad.',
            'Copias de seguridad diarias automáticas y hosting optimizado con NGINX y Redis Cache.',
          ],
        };
      case 'rediseno-migracion-web-moderna':
        return {
          problemTitle: 'Sitios Antiguos que Ahuyentan Clientes y Pierden Tráfico',
          problemPoints: [
            'Diseño desactualizado de hace más de 3 años que proyecta informalidad y desconfianza.',
            'Experiencia móvil frustrante con textos diminutos y botones difíciles de presionar.',
            'Miedo a rediseñar por temor a perder las posiciones ya ganadas en Google.',
            'Tecnologías obsoletas (Joomla, Drupal antiguo o HTML rígido) imposibles de escalar.',
          ],
          solutionTitle: 'Rediseño UI/UX de Alta Conversión con Migración Segura',
          solutionPoints: [
            'Nueva interfaz gráfica moderna con estética contemporánea y micro-interacciones suaves.',
            'Mapeo exhaustivo de redirecciones 301 para proteger y potenciar el 100% de tu posicionamiento SEO.',
            'Aceleración de velocidad a menos de 0.8s migrando a Server Components de Next.js 15.',
            'Pase a producción transparente en minutos sin tiempo de inactividad para tu empresa.',
          ],
        };

      // 2. E-Commerce
      case 'ecommerce-b2b-catalogos-masivos':
        return {
          problemTitle: 'Caídas en Días Pico y Catálogos Colapsados',
          problemPoints: [
            'Bases de datos lentas que tardan más de 3 segundos en filtrar entre 10,000 o 50,000 productos.',
            'Caídas vergonzosas durante Cyber Days y campañas de alto tráfico por servidores compartidos.',
            'Incapacidad de manejar precios mayoristas segmentados por tipo de cliente o volumen.',
            'Facturación manual que genera cuellos de botella y errores contables con SUNAT.',
          ],
          solutionTitle: 'Motor E-Commerce Headless & Búsqueda < 50ms',
          solutionPoints: [
            'Búsqueda y filtrado instantáneo en memoria con soporte para más de 50,000 SKUs sin lentitud.',
            'Infraestructura serverless autodesplegable que resiste picos masivos de tráfico sin interrupción.',
            'Precios mayoristas dinámicos por cliente, límites de crédito y cotizador B2B integrado.',
            'Emisión automática de Boletas y Facturas electrónicas sincronizadas con SUNAT.',
          ],
        };
      case 'ecommerce-pedidos-whatsapp':
        return {
          problemTitle: 'Carritos Abandonados y Vendedores Saturados',
          problemPoints: [
            'Pasarelas de pago engorrosas donde el 70% de clientes peruanos desiste por pedir demasiados datos.',
            'Asesores de venta perdiendo horas enviando fotos de catálogo, precios y cuentas bancarias una por una.',
            'Descoordinación de stock en tiempo real que resulta en ventas de productos agotados.',
            'Cero trazabilidad del origen del cliente ni métricas de conversión por canal.',
          ],
          solutionTitle: 'Catálogo Interactivo con Checkout 1-Clic a WhatsApp',
          solutionPoints: [
            'Experiencia de compra mobile-first donde el cliente selecciona productos y arma su carrito en segundos.',
            'Generación automática de mensaje estructurado con desglose del pedido y enlace directo de pago.',
            'Integración con QR dinámicos de Yape / Plin para cierre y pago inmediato.',
            'Aumento del 240% en velocidad de atención y reducción de consultas repetitivas a cero.',
          ],
        };
      case 'ecommerce-headless-alto-rendimiento':
        return {
          problemTitle: 'Límites Rígidos de Shopify y Monolitos Lentos',
          problemPoints: [
            'Temas de Shopify sobrecargados de aplicaciones de terceros que ralentizan la tienda a más de 4 segundos.',
            'Falta de libertad para diseñar flujos de checkout innovadores o experiencias interactivas personalizadas.',
            'Altas comisiones por transacción y dependencia de ecosistemas cerrados.',
            'Dificultad para conectar la misma tienda con una app móvil o pantallas físicas.',
          ],
          solutionTitle: 'Arquitectura Headless con Next.js 15 & Storefront API',
          solutionPoints: [
            'Frontend desacoplado ultrarrápido (< 0.7s) con puntuación 99+ en Google PageSpeed.',
            'Libertad de diseño al 100% manteniendo el panel habitual de Shopify o MedusaJS en el backend.',
            'Integración nativa con pasarelas peruanas (Niubiz, Culqi, Izipay) sin comisiones extra.',
            'Un solo catálogo unificado para tu web, app móvil y puntos de venta físicos.',
          ],
        };
      case 'ecommerce-tiendas-minoristas':
        return {
          problemTitle: 'Ventas Limitadas al Local Físico y Desorden de Pedidos',
          problemPoints: [
            'Dependencia exclusiva de ventas por mensajes sueltos en Instagram o Facebook sin automatización.',
            'Falta de control de inventario que genera ventas de productos agotados y reclamos de clientes.',
            'Dificultad para calcular costos de delivery por distritos de Lima y agencias a provincias.',
            'Desconfianza de compradores al no contar con pasarelas de pago seguras y formales.',
          ],
          solutionTitle: 'Tienda Virtual Integral B2C con Pasarelas Peruanas',
          solutionPoints: [
            'Acepta pagos con Visa, Mastercard, Yape, Plin y PagoEfectivo con confirmación inmediata.',
            'Matriz de costos de envío automatizada por distritos y provincias de todo el Perú.',
            'Panel administrativo simple para gestionar productos, stock y promociones desde tu celular.',
            'Recuperación automática de carritos abandonados y cupones de descuento para fidelización.',
          ],
        };

      // 3. SaaS & Cloud
      case 'aplicaciones-web-a-medida':
        return {
          problemTitle: 'Procesos Críticos en Hojas de Excel Desorganizadas',
          problemPoints: [
            'Archivos de Excel compartidos que se corrompen, se sobreescriben y no tienen control de cambios.',
            'Personal perdiendo horas cruzando datos manualmente entre distintas áreas de la empresa.',
            'Falta de seguridad: cualquier empleado puede copiar o borrar información confidencial del negocio.',
            'Imposibilidad de acceder a los datos de forma segura desde fuera de la oficina.',
          ],
          solutionTitle: 'Aplicación Web Progresiva (PWA) con Roles y Base Cloud',
          solutionPoints: [
            'Plataforma web accesible desde cualquier navegador o instalable como app en PC y celulares.',
            'Base de datos relacional PostgreSQL con respaldos automáticos y trazabilidad de cada acción.',
            'Control de permisos granular (RBAC) para administradores, supervisores y clientes.',
            'Generación de reportes ejecutivos, exportación a Excel y certificados PDF automáticos.',
          ],
        };
      case 'sistemas-saas-cloud':
        return {
          problemTitle: 'Dificultad para Escalar y Cobrar Software Recurrente',
          problemPoints: [
            'Arquitecturas monolíticas que colapsan cuando se superan los primeros 100 clientes concurrentes.',
            'Falta de aislamiento de datos que pone en riesgo la privacidad y cumplimiento legal entre empresas.',
            'Cobranzas manuales mes a mes que generan alta morosidad y fuga de clientes (Churn).',
            'Costos desorbitados de servidores por no usar arquitecturas elásticas Serverless.',
          ],
          solutionTitle: 'Arquitectura SaaS Multi-Tenant con Cobro Recurrente',
          solutionPoints: [
            'Aislamiento de datos estricto por cliente mediante Row-Level Security (RLS) en PostgreSQL.',
            'Facturación recurrente automatizada con Stripe Billing, Niubiz y facturación electrónica SUNAT.',
            'Panel maestro de administración para monitorear ingresos mensuales (MRR), usuarios activos y churn.',
            'Infraestructura serverless autodesplegable con costo operativo cercano a cero al inicio.',
          ],
        };
      case 'sistemas-validacion-pagos':
        return {
          problemTitle: 'Estafas con Yape Falso y Pérdidas Contables',
          problemPoints: [
            'Capturas de pantalla adulteradas de Yape/Plin que burlan al personal de ventas y almacén.',
            'Horas perdidas revisando manualmente el estado de cuenta bancario para confirmar transferencias.',
            'Retrasos en el despacho de pedidos mientras se verifica si el dinero ingresó realmente.',
            'Discrepancias contables a fin de mes por falta de un registro centralizado de transacciones.',
          ],
          solutionTitle: 'Validación en < 3s con OCR de Visión Artificial',
          solutionPoints: [
            'Lectura instantánea de comprobantes mediante modelos de visión por computadora que detectan fraudes.',
            'Cotejo automático en tiempo real con los movimientos bancarios de tu cuenta de empresa.',
            'Liberación y despacho inmediato del pedido tan pronto como el abono es confirmado.',
            'Dashboard de flujo de caja y alertas automáticas ante números de teléfono fraudulentos.',
          ],
        };
      case 'gestion-documental-segura':
        return {
          problemTitle: 'Contratos Físicos Extraviados y Riesgo de Fuga de Datos',
          problemPoints: [
            'Carpetas físicas archivadas donde buscar un contrato antiguo toma horas o días.',
            'Firma de documentos demorada por semanas debido a traslados físicos de los firmantes.',
            'Archivos confidenciales compartidos por correo sin ningún tipo de cifrado ni control de acceso.',
            'Falta de valor probatorio en acuerdos digitales informales ante litigios legales.',
          ],
          solutionTitle: 'Bóveda Cifrada AES-256 y Firma Electrónica Legal',
          solutionPoints: [
            'Almacenamiento cloud con encriptación militar AES-256 de extremo a extremo.',
            'Flujo de firma electrónica con certificado de trazabilidad (IP, fecha, hora y hash SHA-256) legal en Perú.',
            'Búsqueda semántica instantánea con OCR que encuentra texto dentro de PDFs escaneados.',
            'Registro inmutable de auditoría para saber con exactitud quién abrió o descargó cada archivo.',
          ],
        };

      // 4. Móvil & Sistemas Integrales
      case 'aplicaciones-moviles-ios-android':
        return {
          problemTitle: 'Falta de Presencia en el Bolsillo del Cliente y Desconexión',
          problemPoints: [
            'Pérdida de clientes frente a competidores que ofrecen apps móviles con pedidos en 1 toque.',
            'Personal en campo (repartidores, técnicos) desconectado y reportando datos en papel o WhatsApp.',
            'Apps móviles híbridas de mala calidad que se traban, consumen batería y tienen malas calificaciones.',
            'Rechazos continuos de Apple y Google por no cumplir con políticas complejas de privacidad.',
          ],
          solutionTitle: 'Apps Nativas en Flutter a 60fps con Publicación Oficial',
          solutionPoints: [
            'Código unificado para iOS y Android con rendimiento fluido nativo y bajo consumo de batería.',
            'Geolocalización GPS en vivo, trazado de rutas sobre mapas y funcionamiento 100% offline.',
            'Notificaciones push segmentadas para enviar promociones y avisos de estado de pedidos.',
            'Gestión integral de aprobación y publicación en Apple App Store y Google Play Store.',
          ],
        };
      case 'sistemas-integrales-omnichannel':
        return {
          problemTitle: 'Sistemas Desconectados y Caos en Sucursales',
          problemPoints: [
            'El almacén no sabe qué vendió la app móvil, la web muestra stock que no existe y la caja física colapsa.',
            'Puntos de venta lentos que se bloquean al imprimir tickets o leer códigos de barras.',
            'Imposibilidad de operar si se cae la conexión de internet en una de las tiendas físicas.',
            'Múltiples proveedores de software cobrando tarifas distintas sin solucionar la integración.',
          ],
          solutionTitle: 'Ecosistema Unificado: Web + App Móvil + Software Desktop',
          solutionPoints: [
            'Una sola base de datos centralizada: sincronización en tiempo real (< 200ms) entre todos los canales.',
            'Software desktop de caja rápida con soporte nativo para impresoras térmicas, balanzas y lectores.',
            'Modo de contingencia offline para seguir cobrando en tienda física aunque se corte el internet.',
            'Módulo multisede con control de inventario, transferencias de mercadería y facturación SUNAT.',
          ],
        };
      case 'paneles-administrativos-erp-crm':
        return {
          problemTitle: 'Sistemas Enlatados Caros y Cuotas Abusivas por Usuario',
          problemPoints: [
            'Plataformas como SAP o Zoho cobrando cientos de dólares mensuales por cada usuario registrado.',
            'Sistemas rígidos que obligan a tu empresa a cambiar sus procesos para encajar en el software.',
            'Kardex e inventarios descuadrados que generan contingencias tributarias graves ante SUNAT.',
            'Vendedores desorganizados perdiendo prospectos calificados por falta de un CRM claro.',
          ],
          solutionTitle: 'ERP & CRM Construido a tu Medida Sin Licencias Mensuales',
          solutionPoints: [
            'Software 100% propiedad de tu empresa: usuarios ilimitados sin pagar cuotas mensuales por persona.',
            'Kardex valorizado permanente con método promedio ponderado exigido por la SUNAT.',
            'Embudo visual de ventas Kanban con seguimiento de cotizaciones y alertas de cobranza preventiva.',
            'Liquidación automática de comisiones de ventas y reportes de rentabilidad en tiempo real.',
          ],
        };

      // 5. Automatización & IA
      case 'automatizacion-industrial-bots':
        return {
          problemTitle: 'Clientes que Preguntan a Toda Hora y Ventas Perdidas',
          problemPoints: [
            'Prospectos interesados que escriben por la noche o fin de semana y compran a la competencia por no recibir respuesta.',
            'Bots tradicionales basados en botones rígidos que frustran a los clientes y no entienden lenguaje natural.',
            'Riesgo de bloqueo de tu número comercial por usar aplicaciones de WhatsApp no oficiales.',
            'Falta de sincronización: los datos recolectados en el chat no se guardan en ningún CRM.',
          ],
          solutionTitle: 'Agentes de IA en WhatsApp Business API Oficial',
          solutionPoints: [
            'Inteligencia artificial Gemini 2.5 entrenada con tus catálogos, capaz de cotizar y resolver dudas 24/7.',
            'Conexión oficial verificada por Meta: cero riesgo de baneo o suspensión de línea.',
            'Comprensión de modismos peruanos, notas de voz, fotos de productos y documentos PDF.',
            'Sincronización instantánea de cada nuevo prospecto con HubSpot, Zoho o Google Sheets.',
          ],
        };
      case 'automatizacion-procesos-rpa':
        return {
          problemTitle: 'Cientos de Horas Perdidas en Tareas Manuales Repetitivas',
          problemPoints: [
            'Empleados calificados dedicando medio día a descargar facturas, copiar datos a Excel y enviar correos.',
            'Errores humanos de digitación de montos o RUCs que causan multas tributarias y retrasos en despachos.',
            'Sistemas desconectados que requieren que una persona pase la información de una pantalla a otra.',
            'Costos elevados de horas extras del personal administrativo a fin de mes.',
          ],
          solutionTitle: 'Robots de Software RPA & Pipelines en la Nube',
          solutionPoints: [
            'Robots que procesan miles de documentos, facturas y correos en segundos sin errores.',
            'Servidor de automatización n8n propio sin límites de ejecuciones mensuales ni pagos a Zapier.',
            'Sincronización bidireccional entre sistemas contables, ERPs, bancos y hojas de cálculo.',
            'Ahorro promedio de más de 100 horas hombre al mes y alertas en tiempo real por WhatsApp o Slack.',
          ],
        };
      case 'integracion-apis-pasarelas-pago':
        return {
          problemTitle: 'Sistemas Aislados e Integraciones que Fallan',
          problemPoints: [
            'Pasarelas de pago mal implementadas que rechazan tarjetas legítimas y pierden ventas.',
            'Formularios donde el usuario debe digitar manualmente su razón social o dirección fiscal con errores.',
            'Webhooks frágiles que se caen durante picos de compras dejando pedidos pagados sin registrar.',
            'Riesgo de vulnerabilidades de seguridad bancaria por no cumplir con el estándar PCI-DSS.',
          ],
          solutionTitle: 'Integraciones Robustas de APIs y Pasarelas de Pago',
          solutionPoints: [
            'Integración de Niubiz, Izipay, Culqi, Mercado Pago y Yape bajo estándares de seguridad PCI-DSS.',
            'Consulta instantánea de DNI y RUC en menos de 200ms para autocompletar datos fiscales SUNAT/RENIEC.',
            'Arquitectura de webhooks con colas de reintento que garantiza cero pagos perdidos.',
            'Soporte multi-moneda (Soles y Dólares) con confirmación inmediata de liquidación bancaria.',
          ],
        };

      default:
        return {
          problemTitle: 'Procesos Manuales y Tecnologías Ineficientes',
          problemPoints: [
            'Herramientas obsoletas que limitan el crecimiento comercial de tu empresa.',
            'Falta de integración y pérdida de tiempo en tareas repetitivas.',
            'Poco control sobre la información crítica del negocio.',
            'Fuga de clientes por no contar con una plataforma rápida y moderna.',
          ],
          solutionTitle: 'Arquitectura Digital TunkiTek de Alto Rendimiento',
          solutionPoints: [
            'Desarrollo en código limpio a medida con tecnologías de vanguardia.',
            'Automatización de procesos para ahorrar costos y acelerar la operación.',
            'Seguridad cloud de nivel empresarial y soporte técnico prioritario.',
            'Retorno de inversión medible desde el primer mes de despliegue.',
          ],
        };
    }
  };

  const pasData = getPASData(service.slug);

  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#FF4500]/15 via-[#FF1493]/10 to-transparent rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* ================= NAVEGACIÓN SUPERIOR / BREADCRUMBS ================= */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-white/60 hover:text-[#FF4500] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Catálogo de Servicios</span>
          </Link>

          <div className="text-[11px] font-bold px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-white/60 border border-neutral-200 dark:border-white/10 hidden sm:inline-block">
            {service.categoryLabel}
          </div>
        </div>

        {/* ================= 1. HERO ESPECÍFICO CON TYPEWRITER & TELEMETRÍA ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CRO Conversion Focus */}
          <motion.div
            variants={textEnterLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Dynamic Badge */}
            <motion.div
              animate={customBadgeFloat()}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717]/90 border border-neutral-200 dark:border-[#FF4500]/40 text-xs font-bold text-[#FF4500] shadow-md shadow-neutral-200/50 dark:shadow-[#FF4500]/10 backdrop-blur-md"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>{service.badge}</span>
            </motion.div>

            {/* H1 with Typewriter Animation */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white tracking-tight leading-[1.12]">
              <TypewriterText text={service.title} speed={30} delay={100} />
            </h1>

            {/* Subtitle & Value Statement */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-white/75 leading-relaxed font-normal">
              {service.heroDescription}
            </p>

            {/* Micro-Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {service.keyFeatures.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 dark:text-white/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4500] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Primary CRO Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#cotizar"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-extrabold text-sm shadow-xl shadow-[#FF4500]/30 hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <span>Cotizar Este Servicio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 dark:bg-[#1E1E1E] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-bold text-sm transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live Telemetry / Architecture Monitor */}
          <motion.div
            variants={visualEnterRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 p-6 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 relative overflow-hidden backdrop-blur-xl">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-white/40 ml-2">
                    tunkitek-core-engine.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SLA 99.99%</span>
                </div>
              </div>

              {/* Monitor Metrics Grid */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-white/50 mb-1">
                    <span>Tiempo de Respuesta (TTFB)</span>
                    <span className="text-[#FF4500] font-bold">&lt; 0.28s</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-neutral-200 dark:bg-white/10 overflow-hidden">
                    <div className="w-[94%] h-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] rounded-full" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-white/50 mb-1">
                    <span>Google Core Web Vitals</span>
                    <span className="text-[#25D366] font-bold">Puntuación 99+</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-neutral-200 dark:bg-white/10 overflow-hidden">
                    <div className="w-[99%] h-full bg-[#25D366] rounded-full" />
                  </div>
                </div>

                {/* Tech Stack Pills in Monitor */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-neutral-500 dark:text-white/50 uppercase tracking-wider mb-2">
                    Stack Certificado:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-[#222222] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white/80 font-medium"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= 2. SECCIÓN PAS: PROBLEMA VS SOLUCIÓN TUNKI ================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-xs font-bold text-[#FF4500] mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Análisis de Impacto Real (Fórmula PAS)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
              El Riesgo del Enfoque Tradicional vs La Solución TunkiTek
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Problema Tradicional (Rojo / Oscuro) */}
            <div className="rounded-3xl bg-neutral-100 dark:bg-[#161214] border border-red-500/20 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-500 font-extrabold text-sm uppercase tracking-wider mb-2">
                  <XCircle className="w-4 h-4" />
                  <span>El Desafío Tradicional del Sector</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {pasData.problemTitle}
                </h3>
                <ul className="space-y-3">
                  {pasData.problemPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-white/70">
                      <div className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                        ✕
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-red-500/10 text-xs text-red-600 dark:text-red-400 font-semibold">
                Consecuencia: Pérdida continua de clientes, sobrecostos y frustración operativa.
              </div>
            </div>

            {/* Solución TunkiTek (Verde / Élite) */}
            <div className="rounded-3xl bg-neutral-100 dark:bg-[#121A16] border border-[#25D366]/30 p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-lg shadow-[#25D366]/5">
              <div>
                <div className="flex items-center gap-2 text-[#25D366] font-extrabold text-sm uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Arquitectura de Ingeniería TunkiTek</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {pasData.solutionTitle}
                </h3>
                <ul className="space-y-3">
                  {pasData.solutionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 dark:text-white/90 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#25D366]/10 text-xs text-[#25D366] font-bold">
                Resultado: Estabilidad absoluta, automatización 24/7 y multiplicación de conversiones.
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. BENTO GRID DE CAPACIDADES TÉCNICAS (4 CARDS) ================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-bold text-[#FF4500] mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Capacidades de Vanguardia</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
              Ingeniería Especializada en Cada Módulo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap) => (
              <motion.div
                key={cap.id}
                variants={bentoItemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-3xl bg-white dark:bg-[#171717] border border-neutral-200 dark:border-white/10 hover:border-[#FF4500]/40 p-7 sm:p-8 space-y-4 transition-all duration-300 shadow-md shadow-neutral-200/50 dark:shadow-none flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-[#222222] border border-neutral-200 dark:border-white/10 flex items-center justify-center">
                      {renderIcon(cap.iconName)}
                    </div>
                    {cap.metric && (
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-black text-[#FF4500]">{cap.metric.value}</div>
                        <div className="text-[10px] uppercase font-bold text-neutral-500 dark:text-white/50">{cap.metric.label}</div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/70 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <ul className="pt-4 border-t border-neutral-200 dark:border-white/10 space-y-1.5">
                  {cap.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-white/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= 4. PROCESO DE EJECUCIÓN ÁGIL (4 SPRINTS) ================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-bold text-[#FF4500] mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Sprint de Implementación Ágil</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
              De la Estrategia a Producción en 4 Etapas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 p-6 space-y-3 relative shadow-md shadow-neutral-200/50 dark:shadow-none flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black text-[#FF4500]">{step.step}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-white/60">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-neutral-600 dark:text-white/65 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 5. INTEGRACIONES Y ECOSISTEMA ================= */}
        <div className="rounded-3xl bg-neutral-100 dark:bg-[#141414] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
              Ecosistema de Integraciones Certificadas
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/70 mt-2">
              Conectamos este servicio con los líderes bancarios, pasarelas y plataformas de marketing en Perú y el mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.integrations.map((integ, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-neutral-200 dark:border-white/10 space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900 dark:text-white text-sm">{integ.name}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF4500]/10 text-[#FF4500]">
                    {integ.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-white/65 leading-relaxed">{integ.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 6. PREGUNTAS FRECUENTES (FAQ ACORDEÓN) ================= */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-[#171717] border border-[#FF4500]/30 text-xs font-bold text-[#FF4500] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dudas Resueltas</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
              Preguntas Frecuentes sobre {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 dark:text-white hover:text-[#FF4500] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <motion.div
                    variants={accordionIconVariants}
                    animate={activeFaq === idx ? 'expanded' : 'collapsed'}
                  >
                    <ChevronDown className="w-4 h-4 text-[#FF4500] flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      variants={accordionContentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-600 dark:text-white/70 leading-relaxed border-t border-neutral-200 dark:border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 7. FORMULARIO DE COTIZACIÓN PRE-RELLENADO ================= */}
        <div id="cotizar" className="rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/15 p-8 sm:p-12 lg:p-14 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">¡Solicitud de Cotización Recibida!</h3>
              <p className="text-sm text-neutral-600 dark:text-white/70 max-w-md mx-auto">
                Gracias {formData.name || 'por tu interés'}. Un líder técnico analizará los requerimientos de{' '}
                <strong>{service.title}</strong> y se comunicará contigo vía WhatsApp/Email en menos de 2 horas.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white text-xs font-bold transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              <div className="text-center max-w-xl mx-auto mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-xs font-bold mb-2">
                  <span>Presupuesto Estimado: Desde {service.pricingHint.startingAt}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                  Solicitar Cotización Formal para {service.shortTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-white/70 mt-1">
                  Recibe una propuesta técnica detallada con desglose de sprints y costos en menos de 2 horas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Nombre y Apellido</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Roberto Sánchez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">WhatsApp / Celular</label>
                  <input
                    type="tel"
                    required
                    placeholder="999 999 999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Email Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="contacto@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Tiempo Estimado de Inicio</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                  >
                    <option value="Inmediato (< 1 semana)">Inmediato (en menos de 1 semana)</option>
                    <option value="1 mes">En este mes</option>
                    <option value="Próximo trimestre">Próximo trimestre</option>
                    <option value="Solo evaluando presupuestos">Solo evaluando presupuestos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-white/70 mb-1.5">Detalles del Requerimiento</label>
                <textarea
                  rows={3}
                  placeholder={`Describe brevemente los objetivos específicos para ${service.shortTitle}...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF5514] to-[#FF1493] text-white font-extrabold text-base shadow-xl shadow-[#FF4500]/30 hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud de Cotización</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
