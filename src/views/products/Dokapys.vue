<script setup>
import { useSeo, breadcrumb, publisher, SITE } from '../../composables/useSeo'

const description = 'DOKAPYS clasifica, renombra y organiza los soportes PDF de las facturas de salud por paciente y factura, desde el navegador. Solicite una demostración.'

// Llamada a la acción única de la página: formulario de contacto del inicio.
const demo = { path: '/', hash: '#contact-us' }

// [PENDIENTE DE CONFIRMAR] Video de demostración y subtítulos.
// Al definir las rutas (por ejemplo '/videos/dokapys-demo.mp4' y '/videos/dokapys-demo.es.vtt')
// la sección de video se muestra sola.
const video = { src: '', captions: '', poster: '' }

// Recortes del video de demostración (datos ficticios de "Clínica Demo").
// Se muestran fragmentos, no pantallas completas.
const shots = [
  {
    src: '/images/dokapys/dokapys-documentos.webp', w: 1080, h: 675,
    alt: 'Listado de documentos en DOKAPYS con tipo documental, paciente, factura y estado, con datos de ejemplo',
    title: 'Cada PDF, clasificado y con sus datos',
    text: 'Tipo de documento, paciente y número de factura quedan identificados y listos para buscar y filtrar.',
  },
  {
    src: '/images/dokapys/dokapys-pacientes.webp', w: 1564, h: 620,
    alt: 'Vista de pacientes en DOKAPYS: facturas y documentos renombrados de un paciente de ejemplo, con descarga de paquetes',
    title: 'Todo organizado por paciente y por factura',
    text: 'Consulte los documentos ya renombrados de cada paciente y descargue el paquete de cada factura cuando lo necesite.',
  },
  {
    src: '/images/dokapys/dokapys-ejecuciones.webp', w: 880, h: 200,
    alt: 'Historial de una ejecución en DOKAPYS: archivos recibidos, procesados, en revisión manual, omitidos y con error',
    title: 'Trazabilidad de cada ejecución',
    text: 'Cada proceso deja su registro: archivos recibidos, procesados, omitidos, con error y en revisión manual.',
  },
]

const steps = [
  {
    title: 'Recibe los PDF',
    text: 'Usted los carga desde el navegador, como carpeta o como archivos sueltos, o su institución configura una fuente permanente de la que DOKAPYS los toma.',
  },
  {
    title: 'Lee cada documento',
    text: 'DOKAPYS lee el contenido de cada PDF. Si el archivo es un escaneo sin texto, utiliza reconocimiento óptico de caracteres (OCR).',
  },
  {
    title: 'Clasifica y extrae los datos clave',
    text: 'Identifica el tipo documental: factura, autorización, historia clínica, epicrisis, orden médica, laboratorio, imagen diagnóstica, fórmula médica, incapacidad o remisión. Cuando están en el documento, extrae la identificación y el nombre del paciente, los números de factura, autorización y orden, los códigos de servicio y la fecha.',
  },
  {
    title: 'Renombra y organiza',
    text: 'Cada archivo queda con un nombre estándar formado por la abreviatura del tipo de documento, la identificación del paciente y el número de factura, y se agrupa por paciente y por factura.',
  },
  {
    title: 'Registra y aparta lo que requiere revisión',
    text: 'Cada ejecución guarda su historial: archivos recibidos, procesados, omitidos, con fallo y enviados a revisión manual. Los documentos que no se pudieron leer o no tienen paciente identificable se apartan para que una persona los revise.',
  },
]

const features = [
  { icon: 'fa-chart-pie', title: 'Inicio con indicadores', text: 'Documentos totales, procesados, en proceso, con error, renombrados manualmente y pacientes únicos, con gráficos de distribución por tipo de documento.' },
  { icon: 'fa-file-lines', title: 'Documentos', text: 'Listado con búsqueda y filtros por estado, tipo, paciente y fecha. Permite abrir el PDF original al lado y corregir a mano el tipo o los datos extraídos.' },
  { icon: 'fa-hospital-user', title: 'Pacientes', text: 'Vista por paciente con sus facturas y documentos ya renombrados, y descarga de los paquetes de cada factura.' },
  { icon: 'fa-upload', title: 'Carga de archivos', text: 'Suba una carpeta o archivos PDF desde el computador y procéselos.' },
  { icon: 'fa-clock', title: 'Programación', text: 'Ejecuciones automáticas, por ejemplo diarias a una hora fija, con historial detallado de cada ejecución.' },
  { icon: 'fa-gear', title: 'Configuración', text: 'Defina de dónde se toman los documentos y, opcionalmente, a dónde se deja una copia organizada por paciente y factura.' },
  { icon: 'fa-sliders', title: 'Reglas a la medida', text: 'Cree sus propios tipos documentales, con abreviatura, palabras clave y campos a extraer. Los cambios se guardan como borrador, se prueban en un laboratorio sin afectar los datos reales y se publican cuando están listos, con historial de versiones.' },
  { icon: 'fa-copy', title: 'Control de duplicados', text: 'Detecta cuando se intenta cargar un archivo idéntico a uno ya registrado y lo rechaza.' },
  { icon: 'fa-building', title: 'Multiempresa', text: 'Cada institución trabaja en su propio espacio, separado de las demás, con usuarios de rol administrador o usuario.' },
  { icon: 'fa-globe', title: 'Desde el navegador', text: 'No requiere instalar nada en el computador del usuario.' },
]

const audiences = [
  { title: 'Facturación', text: 'Reúna cada factura con sus soportes, agrupados por paciente y por factura.' },
  { title: 'Radicación', text: 'Descargue el paquete de cada factura con los documentos ya renombrados.' },
  { title: 'Cartera', text: 'Ubique los documentos de una factura con la búsqueda y los filtros por paciente, tipo y fecha.' },
  { title: 'Auditoría de cuentas médicas', text: 'Abra el PDF original junto a los datos extraídos y consulte el historial de cada ejecución.' },
]

const faqs = [
  { q: '¿Hay que instalar algo para usar DOKAPYS?', a: 'No. DOKAPYS se usa desde el navegador y no requiere instalar nada en el computador del usuario.' },
  { q: '¿Funciona con PDF escaneados?', a: 'Sí. Cuando el PDF es un escaneo sin texto, DOKAPYS usa OCR para leerlo. Los documentos que no se pueden leer se apartan para revisión manual.' },
  { q: '¿Cómo clasifica los documentos?', a: 'Con reglas configurables y extractores por tipo de documento. Cada regla define la abreviatura, las palabras clave y los campos que se extraen.' },
  { q: '¿Qué pasa con los documentos que no reconoce?', a: 'Quedan clasificados como "otro" o "desconocido". Los que no tienen un paciente identificable pasan a revisión manual, y usted puede corregir a mano el tipo o los datos extraídos.' },
  { q: '¿Se pueden crear tipos documentales propios?', a: 'Sí. Cada institución puede crear sus tipos documentales. Los cambios se guardan como borrador, se prueban en un laboratorio sin afectar los datos reales y se publican cuando están listos, con historial de versiones.' },
  { q: '¿Qué ocurre si se carga dos veces el mismo archivo?', a: 'DOKAPYS detecta que el archivo es idéntico a uno ya registrado y lo rechaza.' },
  { q: '¿La información de mi institución queda separada de la de otras?', a: 'Sí. Cada institución trabaja en su propio espacio, separado de las demás, con usuarios de rol administrador o usuario.' },
  { q: '¿DOKAPYS garantiza el cumplimiento de la Resolución 2284 de 2023?', a: 'No. DOKAPYS ayuda a organizar y nombrar los soportes de forma consistente, pero no certifica ni garantiza el cumplimiento de ninguna norma, no interpreta historias clínicas y no presta asesoría jurídica.' },
]

useSeo({
  title: 'DOKAPYS: automatización documental para salud | Apysoft',
  description,
  path: '/productos/dokapys',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'DOKAPYS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description,
      url: `${SITE}/productos/dokapys`,
      inLanguage: 'es-CO',
      publisher,
    },
    breadcrumb([['Inicio', '/'], ['Productos', '/productos/dokapys'], ['DOKAPYS', '/productos/dokapys']]),
  ],
})
</script>

<template>
  <section class="pg-hero pg-hero--split" id="hero" aria-labelledby="dokapys-heading">
    <div class="container">
      <div>
      <nav class="pg-breadcrumb" aria-label="Ruta de navegación">
        <ol>
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li>Productos</li>
          <li aria-current="page">DOKAPYS</li>
        </ol>
      </nav>
      <span class="section-tag">Automatización documental para el sector salud</span>
      <h1 id="dokapys-heading">DOKAPYS: organice y renombre los soportes de sus facturas de salud sin hacerlo archivo por archivo</h1>
      <p>
        DOKAPYS es una plataforma web que lee cada PDF, identifica qué tipo de documento es, extrae los datos clave
        y lo deja renombrado y agrupado por paciente y por factura.
      </p>
      <RouterLink class="btn btn-primary" :to="demo">Solicite una demostración</RouterLink>
      </div>
      <img
        class="pg-hero-img"
        src="/images/dokapys/dokapys-panel.webp"
        alt="Panel de inicio de DOKAPYS con indicadores de documentos y gráficos de distribución por tipo, con datos de ejemplo"
        width="1590"
        height="920"
        fetchpriority="high"
      >
    </div>
  </section>

  <section class="pg-section section-padding" aria-labelledby="problema-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">El problema</span>
        <h2 id="problema-heading">Preparar los soportes a mano es lento y difícil de controlar</h2>
      </div>
      <div class="pg-narrow">
        <p>
          Para cobrar un servicio de salud, su institución debe entregar la factura junto con sus soportes
          (autorizaciones, historia clínica, órdenes médicas, resultados, entre otros) en formato digital,
          organizados y nombrados de una forma específica.
        </p>
        <p>
          Muchos equipos lo hacen a mano: abren cada PDF, identifican qué documento es, de qué paciente y de qué
          factura, lo renombran y lo guardan en la carpeta correcta. Con cientos o miles de documentos el trabajo es
          lento, se cometen errores de nombre y es difícil saber qué quedó procesado y qué no.
        </p>
        <p>
          Si quiere repasar qué pide la norma sobre el nombre y el envío de los soportes, lea nuestra guía sobre la
          <RouterLink class="pg-link" to="/blog/resolucion-2284-de-2023-anexo-tecnico-2">Resolución 2284 de 2023 y su Anexo Técnico 2</RouterLink>.
        </p>
      </div>
    </div>
  </section>

  <section class="pg-section pg-section--alt section-padding" aria-labelledby="como-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">Cómo funciona</span>
        <h2 id="como-heading">De la carpeta de PDF al paquete organizado, en cinco pasos</h2>
      </div>
      <ol class="pg-steps">
        <li v-for="step in steps" :key="step.title">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="pg-section section-padding" aria-labelledby="vistas-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">El producto</span>
        <h2 id="vistas-heading">Así se ve DOKAPYS</h2>
      </div>
      <div class="pg-shots">
        <figure v-for="shot in shots" :key="shot.src" class="pg-shot">
          <img :src="shot.src" :alt="shot.alt" :width="shot.w" :height="shot.h" loading="lazy" decoding="async">
          <figcaption>
            <h3>{{ shot.title }}</h3>
            <p>{{ shot.text }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="pg-section pg-section--alt section-padding" aria-labelledby="funciones-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">Funcionalidades</span>
        <h2 id="funciones-heading">Lo que encuentra dentro de DOKAPYS</h2>
      </div>
      <ul class="pg-grid">
        <li v-for="f in features" :key="f.title" class="pg-card">
          <span class="pg-card-icon" aria-hidden="true"><i :class="['fas', f.icon]"></i></span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="pg-section section-padding" aria-labelledby="publico-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">A quién le sirve</span>
        <h2 id="publico-heading">Para IPS, clínicas y hospitales en Colombia</h2>
        <p>Pensado para las áreas que preparan, radican y revisan las cuentas médicas.</p>
      </div>
      <ul class="pg-grid pg-grid--4">
        <li v-for="a in audiences" :key="a.title" class="pg-card">
          <h3>{{ a.title }}</h3>
          <p>{{ a.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="video.src" class="pg-section section-padding" aria-labelledby="video-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">Demostración</span>
        <h2 id="video-heading">Vea DOKAPYS en funcionamiento</h2>
      </div>
      <video class="pg-video" controls preload="none" playsinline :poster="video.poster || undefined">
        <source :src="video.src" type="video/mp4">
        <track v-if="video.captions" kind="captions" srclang="es" label="Español" :src="video.captions" default>
      </video>
    </div>
  </section>

  <section class="pg-section pg-section--alt section-padding" aria-labelledby="faq-heading">
    <div class="container">
      <div class="pg-head">
        <span class="section-tag">Preguntas frecuentes</span>
        <h2 id="faq-heading">Preguntas frecuentes sobre DOKAPYS</h2>
      </div>
      <div class="pg-faq">
        <details v-for="faq in faqs" :key="faq.q">
          <summary>{{ faq.q }}</summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <section class="pg-cta" aria-labelledby="cierre-heading">
    <div class="container">
      <h2 id="cierre-heading">Conozca DOKAPYS con sus propios tipos de documento</h2>
      <p>Cuéntenos cómo prepara hoy los soportes de sus facturas y le mostramos el funcionamiento de la plataforma.</p>
      <RouterLink class="btn btn-primary" :to="demo">Solicite una demostración</RouterLink>
    </div>
  </section>
</template>
