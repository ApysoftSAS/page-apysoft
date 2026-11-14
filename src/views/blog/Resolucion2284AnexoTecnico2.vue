<script setup>
import { posts, formatDate } from '../../data/posts'
import { useSeo, breadcrumb, publisher, SITE } from '../../composables/useSeo'

const post = posts.find((p) => p.slug === 'resolucion-2284-de-2023-anexo-tecnico-2')
const path = `/blog/${post.slug}`
const description = 'Qué exige el Anexo Técnico 2 de la Resolución 2284 de 2023: cómo nombrar, digitalizar y enviar los soportes de cobro de la factura de venta en salud.'

// Tabla del numeral 1 del Anexo Técnico 2. La factura (1) y el RIPS (14) no usan esta nomenclatura.
const supports = [
  ['2.1', 'Resumen de atención u hoja de evolución', 'HEV'],
  ['2.2', 'Epicrisis', 'EPI'],
  ['3', 'Resultado de los procedimientos de apoyo diagnóstico', 'PDX'],
  ['4', 'Descripción quirúrgica', 'DQX'],
  ['5', 'Registro de anestesia', 'RAN'],
  ['6', 'Comprobante de recibido del usuario', 'CRC'],
  ['7.1', 'Traslado asistencial de pacientes', 'TAP'],
  ['7.2', 'Transporte no asistencial ambulatorio de la persona', 'TNA'],
  ['8.1', 'Factura de venta por el cobro a la aseguradora SOAT, la ADRES o la entidad que haga sus veces', 'FAT'],
  ['8.2', 'Factura de venta del material de osteosíntesis expedida por el proveedor', 'FMO'],
  ['9', 'Orden o prescripción facultativa', 'OPF'],
  ['10', 'Lista de precios', 'LDP'],
  ['11', 'Hoja de atención de urgencia', 'HAU'],
  ['12', 'Hoja de atención odontológica', 'HAO'],
  ['13', 'Hoja de administración de medicamentos', 'HAM'],
  ['15', 'Evidencia del envío del trámite respectivo', 'PDE'],
]

const faqs = [
  {
    q: '¿Qué es el Anexo Técnico 2 de la Resolución 2284 de 2023?',
    a: 'Es el anexo titulado "Envío y recepción de los soportes de cobro". Define cómo se nombran los archivos de los soportes, en qué formato se presentan, cómo se digitalizan y comprimen, y qué condiciones debe cumplir el canal por el que se envían a la entidad responsable de pago.',
  },
  {
    q: '¿Cómo nombrar los soportes de la factura en salud?',
    a: 'Según el Anexo Técnico 2, el nombre del archivo PDF se forma con la abreviatura del soporte, el Número de Identificación Tributaria (NIT) y el número de la factura con su prefijo, separados por guion bajo. Por ejemplo, una epicrisis: EPI_999999999_A999999999.pdf.',
  },
  {
    q: '¿En qué formato se envían los soportes de cobro?',
    a: 'La factura de venta en salud se presenta en XML y el RIPS se envía validado mediante el mecanismo único de validación del Ministerio. Los soportes 2 al 13 del Anexo Técnico 1 se digitalizan o se generan desde el software de la institución, de manera independiente y en formato PDF.',
  },
  {
    q: '¿Qué cambia en las facturas multiusuario?',
    a: 'En las facturas de venta en salud multiusuario, al nombre de cada soporte se le agrega un guion bajo seguido del tipo y el número del documento de identificación de la persona.',
  },
  {
    q: '¿La entidad responsable de pago puede exigir soportes adicionales?',
    a: 'El artículo 3 de la resolución indica que los soportes son, como máximo, los detallados en el Anexo Técnico 1 y que no se pueden exigir soportes adicionales. Las partes sí pueden pactar menos soportes, con excepción del RIPS, que es obligatorio.',
  },
  {
    q: '¿Desde cuándo aplica la Resolución 2284 de 2023?',
    a: 'La Resolución 1885 de 2024 fijó un cronograma por grupos: 1 de febrero de 2025 para prestadores de alta complejidad y entidades responsables de pago, 1 de abril de 2025 para prestadores de mediana complejidad y 1 de junio de 2025 para prestadores de baja complejidad y proveedores de tecnologías en salud.',
  },
]

useSeo({
  title: 'Resolución 2284 de 2023, Anexo Técnico 2: guía de soportes',
  description,
  path,
  type: 'article',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description,
      inLanguage: 'es-CO',
      datePublished: post.published,
      dateModified: post.updated,
      mainEntityOfPage: SITE + path,
      author: publisher,
      publisher,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    breadcrumb([['Inicio', '/'], ['Blog', '/blog'], ['Resolución 2284 de 2023, Anexo Técnico 2', path]]),
  ],
})
</script>

<template>
  <section class="pg-hero pg-hero--article" id="hero" aria-labelledby="post-heading">
    <div class="container">
      <nav class="pg-breadcrumb" aria-label="Ruta de navegación">
        <ol>
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li aria-current="page">Resolución 2284 de 2023, Anexo Técnico 2</li>
        </ol>
      </nav>
      <span class="section-tag">{{ post.category }}</span>
      <h1 id="post-heading">{{ post.title }}</h1>
      <p class="pg-meta">
        Por Apysoft SAS · Última revisión:
        <time :datetime="post.updated">{{ formatDate(post.updated) }}</time>
      </p>
    </div>
  </section>

  <section class="pg-section section-padding">
    <div class="container">
      <article class="prose">
        <p class="prose-note">
          Este artículo es informativo y no constituye asesoría jurídica. Resume el texto de la norma a la fecha de
          la última revisión. Antes de tomar decisiones, consulte las fuentes oficiales enlazadas al final.
        </p>

        <p>
          Si su institución factura servicios de salud en Colombia, la Resolución 2284 de 2023 define qué soportes
          acompañan la factura y cómo se entregan. Su Anexo Técnico 2 baja al detalle: cómo se llama cada archivo, en
          qué formato va y por qué canal se envía.
        </p>
        <p>
          Esta guía explica primero la norma y sus anexos, y después se detiene en lo que pide el Anexo Técnico 2
          sobre la presentación digital de los soportes.
        </p>

        <h2>Qué es la Resolución 2284 de 2023 y a quién aplica</h2>
        <p>
          La Resolución 2284 de 2023 fue expedida por el Ministerio de Salud y Protección Social el 28 de diciembre de
          2023 y publicada en el Diario Oficial 52.623 del 29 de diciembre de 2023. Establece los soportes de cobro de
          la factura de venta en salud y el Manual Único de Devoluciones, Glosas y Respuestas.
        </p>
        <p>Según su artículo 2, aplica a:</p>
        <ul>
          <li>
            <strong>Entidades responsables de pago:</strong> EPS, entidades adaptadas, administradoras de riesgos
            laborales en su actividad en salud, entidades territoriales cuando celebran acuerdos de voluntades y
            regímenes especiales y de excepción.
          </li>
          <li>
            <strong>Prestadores de servicios de salud:</strong> instituciones prestadoras (IPS), profesionales
            independientes y transporte especial de pacientes.
          </li>
          <li><strong>Proveedores de tecnologías en salud.</strong></li>
        </ul>
        <p>
          El artículo 3 fija la regla central: la factura va acompañada de sus soportes, que incluyen el RIPS con
          carácter obligatorio y, como máximo, los detallados en el Anexo Técnico 1. No se pueden exigir soportes
          adicionales, aunque las partes pueden pactar menos, salvo el RIPS.
        </p>
        <p>
          El mismo artículo ordena que los soportes se envíen de forma digital o electrónica, según el Anexo Técnico
          2, por los canales principales y de contingencia que acuerden las partes.
        </p>

        <h3>No la confunda con la Resolución 2275 de 2023</h3>
        <p>
          Algunas personas la buscan como "resolución 2284 de 2013"; el año correcto es 2023. Tampoco es la Resolución
          2275 de 2023, que trata sobre el RIPS y la factura electrónica de venta en salud y tiene sus propios anexos
          técnicos 1 y 2. Cuando alguien mencione "el Anexo Técnico 2", confirme de cuál resolución habla.
        </p>

        <h2>Qué contiene cada anexo técnico de la Resolución 2284</h2>
        <ul>
          <li>
            <strong>Anexo Técnico 1, "Soportes de cobro":</strong> define y describe los soportes. Fue sustituido por
            el anexo de la Resolución 1885 de 2024, que es la versión que debe consultar.
          </li>
          <li>
            <strong>Anexo Técnico 2, "Envío y recepción de los soportes de cobro":</strong> reglas de nombre, formato,
            digitalización, compresión y envío de los archivos.
          </li>
          <li>
            <strong>Anexo Técnico 3, "Manual Único de Devoluciones, Glosas y Respuestas":</strong> de obligatorio
            cumplimiento según el artículo 4, que además señala que las causas de devolución y glosa son taxativas.
          </li>
        </ul>
        <p>
          El Anexo Técnico 1 vigente enumera quince soportes: la factura de venta en salud, el registro de la atención
          (resumen de atención o epicrisis), los resultados de procedimientos de apoyo diagnóstico, la descripción
          quirúrgica, el registro de anestesia, el comprobante de recibido del usuario, los soportes de traslado o
          transporte, las facturas relacionadas con SOAT, ADRES y material de osteosíntesis, la orden o prescripción
          facultativa, la lista de precios, las hojas de atención de urgencia, de atención odontológica y de
          administración de medicamentos, el RIPS y la evidencia del envío del trámite respectivo.
        </p>
        <p>Cuáles aplican a cada factura depende del servicio prestado y de lo pactado entre las partes.</p>

        <h2>Desde cuándo aplica: Resoluciones 627 y 1885 de 2024</h2>
        <p>El artículo 12 de la resolución, sobre transitoriedad, se ha modificado dos veces:</p>
        <ul>
          <li>
            <strong>Resolución 627 de 2024</strong> (15 de abril de 2024, Diario Oficial 52.730): trasladó el inicio a
            los servicios prestados y facturados desde el 1 de octubre de 2024.
          </li>
          <li>
            <strong>Resolución 1885 de 2024</strong> (30 de septiembre de 2024, Diario Oficial 52.896): reemplazó esa
            fecha por un cronograma por grupos y sustituyó el Anexo Técnico 1.
          </li>
        </ul>
        <p>El cronograma de la Resolución 1885 de 2024 es el siguiente:</p>
        <ul>
          <li><strong>1 de febrero de 2025:</strong> prestadores de alta complejidad y entidades responsables de pago.</li>
          <li><strong>1 de abril de 2025:</strong> prestadores de mediana complejidad.</li>
          <li>
            <strong>1 de junio de 2025:</strong> prestadores de baja complejidad, profesionales independientes no
            obligados a facturar electrónicamente, entidades con objeto social diferente y proveedores de tecnologías
            en salud.
          </li>
        </ul>
        <p>
          Para los servicios prestados antes de cada fecha, la misma resolución dio plazo hasta el 31 de diciembre de
          2025 para tramitarlos conforme a las normas anteriores.
        </p>
        <p>
          En esta revisión no identificamos modificaciones posteriores a la Resolución 1885 de 2024. Confirme la
          vigencia en el normograma de la Superintendencia Nacional de Salud antes de aplicar lo aquí descrito.
        </p>

        <h2>Qué pide el Anexo Técnico 2 de la Resolución 2284 sobre los soportes</h2>
        <p>
          El Anexo Técnico 2 de la Resolución 2284 de 2023 se divide en aspectos técnicos del envío, normas generales
          de los archivos y características de los archivos. Estos son sus puntos principales.
        </p>

        <h3>Nomenclatura de los soportes de la factura en salud</h3>
        <p>
          Cuando el soporte es un documento PDF, el nombre del archivo se arma con tres partes separadas por guion
          bajo:
        </p>
        <ol>
          <li>La abreviatura del soporte.</li>
          <li>El Número de Identificación Tributaria (NIT), numérico.</li>
          <li>El número de la factura, incluido el prefijo, alfanumérico.</li>
        </ol>
        <p>
          El ejemplo que trae el anexo para una epicrisis es <code>EPI_999999999_A999999999.pdf</code>. La tabla resume
          la abreviatura de cada soporte.
        </p>

        <div class="prose-table">
          <table>
            <caption>Abreviaturas de los soportes de cobro según el Anexo Técnico 2 de la Resolución 2284 de 2023</caption>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Soporte</th>
                <th scope="col">Abreviatura</th>
                <th scope="col">Ejemplo de nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="[num, name, abbr] in supports" :key="abbr">
                <td>{{ num }}</td>
                <td>{{ name }}</td>
                <td><strong>{{ abbr }}</strong></td>
                <td><code>{{ abbr }}_999999999_A999999999.pdf</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Dos soportes no usan esta nomenclatura: la factura de venta en salud (soporte 1) y el RIPS (soporte 14). Su
          nombre y sus características son los definidos por la DIAN y el Ministerio de Salud y Protección Social.
        </p>

        <h3>Facturas multiusuario</h3>
        <p>
          Cuando una factura cubre a varias personas, cada soporte lleva al final un guion bajo seguido del tipo y el
          número del documento de identificación de la persona. Así se distingue a quién corresponde cada archivo
          dentro de la misma factura.
        </p>

        <h3>Formato de los archivos</h3>
        <ul>
          <li>La <strong>factura de venta en salud</strong> se presenta a la entidad responsable de pago en formato XML.</li>
          <li>
            El <strong>RIPS</strong> se envía conforme a la normativa del Ministerio y validado mediante el mecanismo
            único de validación.
          </li>
          <li>
            Los <strong>soportes 2 al 13</strong> se digitalizan o se generan desde el software de la institución, de
            manera independiente y en formato PDF editable.
          </li>
        </ul>

        <h3>Digitalización y compresión</h3>
        <ul>
          <li><strong>Escala:</strong> escala de grises para texto.</li>
          <li><strong>Resolución:</strong> 300 dpi.</li>
          <li><strong>Tipo de archivo:</strong> PDF.</li>
          <li>
            <strong>Compresión:</strong> los archivos se seleccionan y se comprimen en un solo archivo, sin
            subcarpetas dentro del comprimido.
          </li>
          <li><strong>Peso máximo:</strong> 1 GB.</li>
        </ul>

        <h3>Envío y acuse de recibido</h3>
        <ul>
          <li>Los archivos se envían encriptados, con clave asimétrica tipo RSA válida para cifrar y para firmar digitalmente.</li>
          <li>
            Se envían a sitios seguros, con capacidad suficiente para soportes de gran tamaño y contraseñas de
            complejidad alta.
          </li>
          <li>
            El medio pactado debe generar un acuse de recibido automático, con fecha y hora. No se pueden establecer
            validaciones previas que impidan generarlo.
          </li>
        </ul>

        <h2>Errores frecuentes al preparar los soportes de cobro de la factura de venta en salud</h2>
        <p>Al comparar la práctica diaria con el texto del anexo, estos son los descuidos más comunes:</p>
        <ul>
          <li><strong>Nombres fuera de la estructura:</strong> abreviatura equivocada, NIT faltante o factura sin su prefijo.</li>
          <li>
            <strong>Varios soportes en un solo PDF:</strong> el anexo pide que cada soporte se genere de manera
            independiente.
          </li>
          <li><strong>Multiusuario sin identificar a la persona:</strong> falta el tipo y el número de documento al final del nombre.</li>
          <li><strong>Digitalización deficiente:</strong> resolución inferior a 300 dpi o un formato distinto a PDF.</li>
          <li><strong>Comprimidos con subcarpetas:</strong> el anexo indica que el archivo comprimido no debe contenerlas.</li>
          <li><strong>Mezclar normas:</strong> aplicar los anexos de la Resolución 2275 de 2023 creyendo que son los de la 2284.</li>
          <li>
            <strong>Sin control de avance:</strong> con cientos de documentos, no saber cuáles ya quedaron renombrados
            y cuáles siguen pendientes.
          </li>
        </ul>

        <h2>Cómo automatizar la organización y el renombrado de los soportes</h2>
        <p>
          Renombrar a mano exige abrir cada PDF, reconocer qué documento es, a qué paciente y a qué factura pertenece,
          escribir el nombre y moverlo a su carpeta. Es un trabajo repetitivo y basado en reglas, por lo que se puede
          automatizar en buena parte.
        </p>
        <p>Un proceso automatizado suele seguir estos pasos:</p>
        <ol>
          <li>Leer el contenido de cada PDF, con OCR cuando es un escaneo sin texto.</li>
          <li>Clasificar el documento por tipo, a partir de reglas y palabras clave.</li>
          <li>Extraer los datos que identifican al paciente y a la factura.</li>
          <li>Renombrar el archivo con una estructura fija y agruparlo por paciente y por factura.</li>
          <li>Dejar registro de lo procesado y apartar lo que necesita revisión de una persona.</li>
        </ol>
        <p>
          Eso es lo que hace <RouterLink to="/productos/dokapys">DOKAPYS</RouterLink>, la plataforma web de
          automatización documental de Apysoft para el sector salud. Funciona con reglas configurables: cada
          institución puede crear sus tipos documentales con su abreviatura, sus palabras clave y los campos que se
          extraen, y probar los cambios antes de publicarlos.
        </p>
        <p>
          DOKAPYS ayuda a organizar y nombrar los soportes de forma consistente; no certifica ni garantiza el
          cumplimiento de la norma. Antes de radicar, verifique que el nombre final de cada archivo corresponda a la
          estructura del Anexo Técnico 2 y a lo acordado con cada entidad responsable de pago.
        </p>
        <p>
          Si quiere ver cómo funciona, conozca
          <RouterLink to="/productos/dokapys">las funcionalidades de DOKAPYS</RouterLink>.
        </p>

        <h2>Preguntas frecuentes</h2>
        <template v-for="faq in faqs" :key="faq.q">
          <h3>{{ faq.q }}</h3>
          <p>{{ faq.a }}</p>
        </template>

        <h2>Fuentes oficiales</h2>
        <ul>
          <li>
            <a href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No%202284%20de%202023.pdf" target="_blank" rel="noopener noreferrer">Resolución 2284 de 2023, texto y anexos técnicos (Ministerio de Salud y Protección Social, PDF)</a>
          </li>
          <li>
            <a href="https://normograma.supersalud.gov.co/compilacion/docs/resolucion_minsaludps_2284_2023.htm" target="_blank" rel="noopener noreferrer">Resolución 2284 de 2023 con notas de vigencia (normograma de la Superintendencia Nacional de Salud)</a>
          </li>
          <li>
            <a href="https://normograma.supersalud.gov.co/compilacion/docs/resolucion_minsaludps_0627_2024.htm" target="_blank" rel="noopener noreferrer">Resolución 627 de 2024 (normograma de la Superintendencia Nacional de Salud)</a>
          </li>
          <li>
            <a href="https://normograma.supersalud.gov.co/compilacion/docs/resolucion_minsaludps_1885_2024.htm" target="_blank" rel="noopener noreferrer">Resolución 1885 de 2024 y Anexo Técnico 1 vigente (normograma de la Superintendencia Nacional de Salud)</a>
          </li>
          <li>
            <a href="https://normograma.supersalud.gov.co/compilacion/docs/resolucion_minsaludps_2275_2023.htm" target="_blank" rel="noopener noreferrer">Resolución 2275 de 2023, para no confundirla (normograma de la Superintendencia Nacional de Salud)</a>
          </li>
        </ul>
        <p class="prose-note">
          Última revisión de este artículo: {{ formatDate(post.updated) }}. Las normas pueden cambiar; verifique
          siempre la versión vigente en las fuentes oficiales.
        </p>
      </article>
    </div>
  </section>

  <section class="pg-cta" aria-labelledby="post-cta-heading">
    <div class="container">
      <h2 id="post-cta-heading">Organice y renombre sus soportes con DOKAPYS</h2>
      <p>Clasifica cada PDF, extrae los datos clave y lo agrupa por paciente y por factura.</p>
      <RouterLink class="btn btn-primary" to="/productos/dokapys">Conocer DOKAPYS</RouterLink>
    </div>
  </section>
</template>
