// Artículos del blog escritos como datos. Los muestra src/views/blog/Post.vue.
// Estructura pensada para buscadores y asistentes de IA: una respuesta corta al inicio,
// subtítulos en forma de pregunta y preguntas frecuentes (se publican como FAQPage).
// Las preguntas salen del autocompletado de Google para Colombia (noviembre de 2026).
// Regla: no se publican precios, clientes, plazos ni cifras que Apysoft no haya confirmado.

const contacto = `<p>Si quieres revisar tu caso, <a href="/#contact-us">escríbenos por el formulario de contacto</a> o por WhatsApp y conversamos sobre lo que necesitas.</p>`

export const articles = [
  {
    slug: 'que-es-software-a-la-medida',
    title: 'Qué es el software a la medida y cuándo conviene frente al software enlatado',
    seoTitle: 'Qué es software a la medida y cuándo conviene | Apysoft',
    description: 'Qué es el software a la medida, en qué se diferencia del software enlatado, ejemplos y cómo saber si tu empresa o pyme lo necesita.',
    excerpt: 'Diferencias entre software a la medida y software enlatado, ejemplos y señales de que tu empresa necesita uno.',
    category: 'Software a la medida',
    published: '2026-11-13',
    updated: '2026-11-13',
    answer: 'El software a la medida es un programa que se diseña y se construye para los procesos de una empresa concreta, en lugar de adaptarse la empresa a un producto genérico. Conviene cuando tu operación tiene reglas propias que el software comercial no cubre o cuando necesitas conectar varios sistemas entre sí.',
    sections: [
      {
        h2: '¿Qué es el software a la medida?',
        html: `<p>Es una aplicación desarrollada según los requerimientos de una organización: sus procesos, sus roles, sus reportes y sus reglas de negocio. También se le llama software hecho a la medida o desarrollo de software a medida.</p>
<p>La diferencia de fondo es quién se adapta a quién. Con un producto comercial, la empresa ajusta su forma de trabajar a lo que el programa permite. Con un desarrollo a la medida, el programa se construye alrededor de la forma de trabajar de la empresa.</p>`,
      },
      {
        h2: 'Software a medida vs. software enlatado: ¿en qué se diferencian?',
        html: `<p>El software enlatado, comercial o "de caja" es un producto ya construido que muchas empresas usan por igual, normalmente pagando una licencia o una suscripción.</p>
<div class="prose-table"><table>
<caption>Comparación general entre software a la medida y software enlatado</caption>
<thead><tr><th scope="col">Aspecto</th><th scope="col">Software a la medida</th><th scope="col">Software enlatado</th></tr></thead>
<tbody>
<tr><td>Ajuste a tus procesos</td><td>Se diseña a partir de ellos</td><td>Trae procesos predefinidos</td></tr>
<tr><td>Puesta en marcha</td><td>Requiere tiempo de análisis y construcción</td><td>Suele estar disponible de inmediato</td></tr>
<tr><td>Inversión</td><td>Mayor al inicio; se paga el desarrollo</td><td>Menor al inicio; pago recurrente de licencias</td></tr>
<tr><td>Cambios y nuevas funciones</td><td>Los decides tú</td><td>Dependen del fabricante</td></tr>
<tr><td>Integración con otros sistemas</td><td>Se construye según lo que necesites</td><td>Limitada a lo que el producto ofrezca</td></tr>
</tbody></table></div>
<p>Ninguna opción es mejor en todos los casos. Si un producto comercial cubre bien tu necesidad, casi siempre es el camino más rápido.</p>`,
      },
      {
        h2: '¿Cuándo conviene un software a la medida para empresas y pymes?',
        html: `<ul>
<li><strong>Tu proceso es particular.</strong> Llevas el control en hojas de cálculo porque ningún programa se ajusta a cómo trabajas.</li>
<li><strong>Usas varios sistemas que no se hablan.</strong> La misma información se digita dos o tres veces.</li>
<li><strong>Pagas por funciones que no usas</strong> y te faltan las que sí necesitas.</li>
<li><strong>Dependes de reportes manuales</strong> para tomar decisiones.</li>
<li><strong>El software es parte de tu servicio</strong> y necesitas diferenciarte con él.</li>
</ul>
<p>Si tu necesidad es estándar, como la contabilidad o la nómina, lo habitual es empezar con un producto comercial e integrar lo que haga falta.</p>`,
      },
      {
        h2: 'Ejemplos de software a la medida',
        html: `<ul>
<li>Un sistema para programar y hacer seguimiento a órdenes de servicio en campo.</li>
<li>Un portal donde los clientes consultan el estado de sus pedidos o trámites.</li>
<li>Una herramienta interna que reúne datos de varios sistemas en un solo tablero.</li>
<li>Un flujo de aprobación de documentos con los pasos y responsables propios de la empresa.</li>
</ul>
<p>Son ejemplos generales de lo que suele construirse; el alcance real siempre se define con cada empresa.</p>`,
      },
      {
        h2: '¿Quién realiza el desarrollo de software a la medida para un negocio?',
        html: `<p>Lo puede hacer un equipo interno, un profesional independiente o una empresa de desarrollo de software. Lee <a href="/blog/que-hace-una-empresa-de-desarrollo-de-software">qué hace una empresa de desarrollo de software y cómo elegirla</a>.</p>
<p>En Apysoft desarrollamos software a la medida desde Yopal, Casanare, con atención remota para empresas de Colombia y otros países. Si te interesa el tema de la inversión, revisa <a href="/blog/cuanto-cuesta-un-software-a-la-medida-en-colombia">de qué depende el costo de un software a la medida</a>.</p>${contacto}`,
      },
    ],
    faqs: [
      { q: '¿Qué significa software a medida?', a: 'Significa que el programa se construye para los procesos y requerimientos de una empresa específica, en lugar de ser un producto genérico igual para todos los clientes.' },
      { q: '¿Cuál es la diferencia entre software a medida y software enlatado?', a: 'El software enlatado es un producto ya construido que se usa tal como viene, con ajustes limitados. El software a la medida se diseña a partir de los procesos de la empresa y sus cambios los decide la propia empresa.' },
      { q: '¿Una pyme puede tener software a la medida?', a: 'Sí. El alcance se puede definir por fases, empezando por el proceso que más trabajo manual genera y ampliando después.' },
    ],
  },
  {
    slug: 'cuanto-cuesta-un-software-a-la-medida-en-colombia',
    title: '¿Cuánto cuesta un software a la medida en Colombia? Factores que definen el precio',
    seoTitle: '¿Cuánto cuesta un software a la medida en Colombia?',
    description: 'De qué depende el costo de un software a la medida en Colombia: alcance, integraciones, diseño, soporte y forma de cobro. Qué preparar para cotizar.',
    excerpt: 'Los factores que definen el costo de un desarrollo a la medida y qué información preparar para pedir una cotización.',
    category: 'Software a la medida',
    published: '2026-11-13',
    updated: '2026-11-13',
    answer: 'No existe un precio único: el costo de un software a la medida en Colombia depende del alcance, del número de funciones y de usuarios, de las integraciones con otros sistemas, del diseño y del soporte posterior. Por eso se cotiza después de entender el proceso que se quiere resolver.',
    sections: [
      {
        h2: '¿De qué depende el costo de un software a la medida?',
        html: `<ul>
<li><strong>Alcance:</strong> cuántos procesos cubre y cuántas pantallas, reportes y reglas de negocio requiere.</li>
<li><strong>Usuarios y roles:</strong> no es lo mismo una herramienta interna para cinco personas que un portal para clientes.</li>
<li><strong>Integraciones:</strong> conexión con ERP, CRM, pasarelas de pago, facturación u otros sistemas.</li>
<li><strong>Diseño:</strong> el nivel de detalle de la interfaz y si debe funcionar en celular.</li>
<li><strong>Datos existentes:</strong> si hay que migrar información desde hojas de cálculo o un sistema anterior.</li>
<li><strong>Infraestructura:</strong> dónde se aloja y qué disponibilidad necesita.</li>
<li><strong>Seguridad y permisos:</strong> el tipo de información que maneja.</li>
<li><strong>Soporte y mantenimiento:</strong> correcciones, mejoras y acompañamiento después de la entrega.</li>
</ul>`,
      },
      {
        h2: '¿Cómo se cobra el desarrollo de software?',
        html: `<p>Las formas más comunes en el mercado son tres:</p>
<ul>
<li><strong>Precio por alcance definido:</strong> se acuerda qué se entrega y un valor total.</li>
<li><strong>Por tiempo dedicado:</strong> se paga por las horas o los meses de trabajo del equipo. Es habitual cuando el alcance todavía está cambiando.</li>
<li><strong>Por fases:</strong> se construye una primera versión con lo esencial y se cotiza cada etapa siguiente.</li>
</ul>
<p>Trabajar por fases permite empezar con lo más importante y decidir el resto con el sistema ya en uso.</p>`,
      },
      {
        h2: '¿Cuánto cuesta la hora de desarrollo de software en Colombia?',
        html: `<p>Varía según la experiencia del equipo, la tecnología y el tipo de proyecto, y cada proveedor maneja su propia tarifa. Más que comparar el valor de la hora, compara qué incluye cada propuesta: análisis, diseño, pruebas, documentación, despliegue y soporte.</p>
<p>En Apysoft no publicamos una tarifa general porque cada cotización parte del alcance de cada proyecto.</p>`,
      },
      {
        h2: '¿Qué preparar para pedir una cotización?',
        html: `<ol>
<li>El problema que quieres resolver y cómo lo manejas hoy.</li>
<li>Quiénes usarían el sistema y qué haría cada uno.</li>
<li>Los sistemas que ya usas y con los que debería conectarse.</li>
<li>Los reportes o resultados que esperas obtener.</li>
<li>Lo que es indispensable para la primera versión y lo que puede esperar.</li>
</ol>
<p>Con esa información es más fácil recibir propuestas comparables. Si aún dudas entre desarrollar o comprar un producto, lee <a href="/blog/que-es-software-a-la-medida">qué es el software a la medida y cuándo conviene</a>.</p>${contacto}`,
      },
    ],
    faqs: [
      { q: '¿Cuánto cuesta un software a la medida?', a: 'Depende del alcance, las integraciones, el diseño, la migración de datos y el soporte. No hay un precio estándar; se cotiza después de entender el proceso que se quiere resolver.' },
      { q: '¿Se puede desarrollar un software por etapas?', a: 'Sí. Es común construir primero una versión con las funciones esenciales y cotizar las etapas siguientes por separado.' },
      { q: '¿El mantenimiento se cobra aparte?', a: 'Depende de cada propuesta. Conviene preguntar desde el inicio qué incluye la entrega y cómo se manejan las correcciones y mejoras posteriores.' },
    ],
  },
  {
    slug: 'pagina-web-para-empresas',
    title: 'Página web para empresas: qué debe tener y de qué depende su costo',
    seoTitle: 'Página web para empresas: qué debe tener y su costo',
    description: 'Qué debe tener la página web de una empresa, cómo crearla paso a paso y de qué depende cuánto cuesta. Guía para pymes en Colombia.',
    excerpt: 'Lo que no puede faltar en el sitio web de tu empresa, los pasos para crearlo y los factores que definen su costo.',
    category: 'Páginas web',
    published: '2026-11-13',
    updated: '2026-11-13',
    answer: 'La página web de una empresa debe decir con claridad qué ofrece, a quién y cómo contactarla; cargar rápido, verse bien en celular y poder ser encontrada en Google. Su costo depende del número de secciones, del diseño, de las funciones adicionales y de quién mantenga el contenido.',
    sections: [
      {
        h2: '¿Qué debe tener una página web para una empresa?',
        html: `<ul>
<li><strong>Un mensaje claro al entrar:</strong> qué haces y para quién.</li>
<li><strong>Servicios o productos</strong> explicados en lenguaje del cliente.</li>
<li><strong>Datos de contacto visibles:</strong> formulario, WhatsApp, correo y ubicación.</li>
<li><strong>Diseño adaptable a celular.</strong></li>
<li><strong>Carga rápida</strong> e imágenes optimizadas.</li>
<li><strong>SEO básico:</strong> título y descripción por página, direcciones legibles y mapa del sitio.</li>
<li><strong>Dominio propio y certificado de seguridad (HTTPS).</strong></li>
<li><strong>Contenido útil</strong>, como preguntas frecuentes o un blog, que responda lo que tus clientes buscan.</li>
</ul>`,
      },
      {
        h2: '¿Cómo crear una página web para mi empresa?',
        html: `<ol>
<li>Define el objetivo: recibir contactos, vender en línea o informar.</li>
<li>Reúne el contenido: textos, fotos, logo y datos de contacto.</li>
<li>Registra el dominio y elige dónde se alojará el sitio.</li>
<li>Diseña la estructura: inicio, servicios, nosotros y contacto.</li>
<li>Construye, revisa en celular y publica.</li>
<li>Regístrala en Google Search Console y en tu perfil de empresa de Google.</li>
</ol>
<p>Puedes hacerlo con un constructor de sitios o con un desarrollo profesional. El constructor sirve para empezar rápido; el desarrollo profesional da más control sobre diseño, velocidad, SEO y funciones propias.</p>`,
      },
      {
        h2: '¿Cuánto cuesta una página web para una empresa?',
        html: `<p>Depende de estos factores:</p>
<ul>
<li>Número de páginas o secciones.</li>
<li>Diseño a partir de plantilla o diseño propio.</li>
<li>Funciones adicionales: tienda, pagos, reservas, áreas privadas o integraciones.</li>
<li>Quién escribe los textos y aporta las imágenes.</li>
<li>Costos recurrentes: dominio, alojamiento y mantenimiento.</li>
</ul>
<p>No publicamos un precio general porque cada sitio se cotiza según su alcance.</p>`,
      },
      {
        h2: '¿Página web, landing page o portal?',
        html: `<p>Una <strong>landing page</strong> es una sola página enfocada en una acción, como solicitar información. Un <strong>sitio corporativo</strong> presenta la empresa y sus servicios en varias secciones. Un <strong>portal web</strong> añade funciones, como áreas con usuario y contraseña o consultas en línea.</p>
<p>En Apysoft desarrollamos los tres tipos. Si lo que necesitas va más allá de un sitio informativo, revisa <a href="/blog/que-es-software-a-la-medida">qué es el software a la medida</a>.</p>${contacto}`,
      },
    ],
    faqs: [
      { q: '¿Qué es una página web para una empresa?', a: 'Es el sitio en internet donde la empresa presenta lo que ofrece, responde las dudas de sus clientes y recibe contactos o ventas.' },
      { q: '¿Cuánto cuesta una página web para una empresa?', a: 'Depende del número de secciones, del diseño, de las funciones adicionales como tienda o pagos y de los costos recurrentes de dominio, alojamiento y mantenimiento.' },
      { q: '¿Puedo crear la página web de mi empresa gratis?', a: 'Existen constructores con planes gratuitos que sirven para empezar, normalmente con limitaciones como no usar dominio propio o mostrar publicidad de la plataforma.' },
    ],
  },
  {
    slug: 'desarrollo-de-software-y-paginas-web-en-yopal-casanare',
    title: 'Desarrollo de software y páginas web en Yopal, Casanare',
    seoTitle: 'Desarrollo de software y páginas web en Yopal, Casanare',
    description: 'Apysoft SAS desarrolla software a la medida y páginas web en Yopal, Casanare, con atención remota para empresas de toda Colombia.',
    excerpt: 'Qué servicios de software y páginas web ofrece Apysoft desde Yopal, Casanare, y cómo trabajamos con empresas de la región y del país.',
    category: 'Yopal y Casanare',
    published: '2026-11-13',
    updated: '2026-11-13',
    answer: 'Apysoft SAS es una empresa de desarrollo de software con sede principal en Yopal, Casanare, Colombia. Desarrolla software a la medida, páginas web e integraciones, y atiende de forma remota a empresas de Colombia y otros países.',
    sections: [
      {
        h2: '¿Qué servicios de software hay en Yopal, Casanare?',
        html: `<p>Desde Yopal, Apysoft ofrece estos servicios:</p>
<ul>
<li><strong>Desarrollo de sitios web:</strong> sitios corporativos, páginas de aterrizaje y portales web.</li>
<li><strong>Software a la medida:</strong> aplicaciones según los procesos y requerimientos de cada negocio.</li>
<li><strong>Consultoría tecnológica:</strong> revisión de necesidades y alternativas para orientar decisiones.</li>
<li><strong>Transformación digital:</strong> identificación de procesos que se pueden digitalizar y los pasos para hacerlo.</li>
<li><strong>Servicios en la nube AWS:</strong> planeación, migración o gestión de infraestructura en Amazon Web Services.</li>
<li><strong>Integración de sistemas:</strong> conexión de herramientas como ERP, CRM, pasarelas de pago y APIs.</li>
</ul>
<p>Además contamos con un producto propio, <a href="/productos/dokapys">DOKAPYS</a>, una plataforma de automatización documental para el sector salud.</p>`,
      },
      {
        h2: '¿Diseñan páginas web en Yopal, Casanare?',
        html: `<p>Sí. Diseñamos y desarrollamos páginas web para empresas de Yopal y de los demás municipios de Casanare. Si estás empezando, lee <a href="/blog/pagina-web-para-empresas">qué debe tener la página web de una empresa</a>.</p>`,
      },
      {
        h2: '¿Atienden empresas fuera de Yopal?',
        html: `<p>Sí. La sede principal está en Yopal, Casanare, y trabajamos de forma remota con empresas del resto de Colombia y de otros países. Las reuniones, el seguimiento y las entregas se pueden hacer en línea.</p>`,
      },
      {
        h2: '¿Cómo es trabajar con una empresa de software de la región?',
        html: `<p>Trabajar con un proveedor local facilita reunirse, conocer la operación de cerca y mantener la comunicación en el mismo horario. Si quieres saber qué evaluar antes de contratar, lee <a href="/blog/que-hace-una-empresa-de-desarrollo-de-software">qué hace una empresa de desarrollo de software y cómo elegirla</a>.</p>`,
      },
      {
        h2: '¿Cómo contactar a Apysoft en Yopal?',
        html: `<ul>
<li>Formulario: <a href="/#contact-us">apysoft.com.co, sección Contáctanos</a>.</li>
<li>WhatsApp: <a href="https://wa.me/573204478206" target="_blank" rel="noopener noreferrer">+57 320 447 8206</a>.</li>
<li>Correo: <a href="mailto:apysoft2023@gmail.com">apysoft2023@gmail.com</a>.</li>
</ul>`,
      },
    ],
    faqs: [
      { q: '¿Hay empresas de desarrollo de software en Yopal, Casanare?', a: 'Sí. Apysoft SAS es una empresa de desarrollo de software con sede principal en Yopal, Casanare, que ofrece software a la medida, páginas web, consultoría tecnológica, transformación digital, servicios en la nube AWS e integración de sistemas.' },
      { q: '¿Quién hace páginas web en Yopal, Casanare?', a: 'Apysoft SAS diseña y desarrolla sitios corporativos, páginas de aterrizaje y portales web desde Yopal, Casanare.' },
      { q: '¿Apysoft atiende empresas de otras ciudades de Colombia?', a: 'Sí. Atiende de forma remota a empresas de Colombia y de otros países.' },
    ],
  },
  {
    slug: 'que-hace-una-empresa-de-desarrollo-de-software',
    title: 'Qué hace una empresa de desarrollo de software y cómo elegir una',
    seoTitle: 'Qué hace una empresa de desarrollo de software',
    description: 'Qué hace una empresa de desarrollo de software, qué etapas sigue un proyecto y qué preguntar antes de contratar una en Colombia.',
    excerpt: 'Las etapas de un proyecto de software y las preguntas que conviene hacer antes de contratar a un proveedor.',
    category: 'Software a la medida',
    published: '2026-11-13',
    updated: '2026-11-13',
    answer: 'Una empresa de desarrollo de software analiza una necesidad de negocio, diseña la solución, la construye, la prueba, la pone en funcionamiento y le da soporte. Para elegir una, revisa cómo entiende tu problema, qué incluye su propuesta y cómo maneja los cambios y el soporte.',
    sections: [
      {
        h2: '¿Qué hace una empresa de desarrollo de software?',
        html: `<ol>
<li><strong>Entiende el problema:</strong> levanta los requerimientos con las personas que usarán el sistema.</li>
<li><strong>Diseña:</strong> define pantallas, flujos, datos y arquitectura.</li>
<li><strong>Desarrolla:</strong> construye el software por entregas.</li>
<li><strong>Prueba:</strong> verifica que funcione como se acordó.</li>
<li><strong>Despliega:</strong> lo publica en el ambiente donde se va a usar.</li>
<li><strong>Da soporte:</strong> corrige, ajusta y mejora con el uso.</li>
</ol>
<p>Muchas empresas trabajan con metodologías ágiles: entregas cortas y frecuentes que el cliente revisa, en lugar de una sola entrega al final.</p>`,
      },
      {
        h2: '¿Cómo elegir una empresa de desarrollo de software en Colombia?',
        html: `<p>Más que buscar "la mejor empresa", busca la que mejor entienda tu caso. Estas preguntas ayudan:</p>
<ul>
<li>¿Preguntan por tu proceso antes de hablar de tecnología?</li>
<li>¿La propuesta detalla qué se entrega y qué no?</li>
<li>¿Cómo y cada cuánto muestran avances?</li>
<li>¿Qué pasa si necesitas cambios durante el proyecto?</li>
<li>¿Quién queda como dueño del código y de los datos?</li>
<li>¿Qué soporte hay después de la entrega y cómo se cobra?</li>
<li>¿Pueden mostrarte trabajos anteriores o una demostración?</li>
</ul>`,
      },
      {
        h2: '¿Empresa, freelancer o equipo propio?',
        html: `<p>Un <strong>equipo propio</strong> tiene sentido cuando el software es el centro del negocio y habrá trabajo permanente. Un <strong>profesional independiente</strong> funciona para tareas puntuales y bien delimitadas. Una <strong>empresa</strong> aporta varios perfiles (análisis, diseño, desarrollo y pruebas) y continuidad si una persona no está disponible.</p>`,
      },
      {
        h2: 'Cómo trabajamos en Apysoft',
        html: `<p>En Apysoft aplicamos metodologías ágiles y desarrollamos soluciones a la medida, no plantillas genéricas. Nuestra sede principal está en Yopal, Casanare, y atendemos de forma remota a empresas de Colombia y otros países.</p>
<p>Puedes ampliar en <a href="/blog/que-es-software-a-la-medida">qué es el software a la medida</a> y en <a href="/blog/cuanto-cuesta-un-software-a-la-medida-en-colombia">de qué depende su costo</a>.</p>${contacto}`,
      },
    ],
    faqs: [
      { q: '¿Qué es una empresa de desarrollo de software?', a: 'Es una empresa que diseña, construye y mantiene programas y aplicaciones para otras organizaciones o para ofrecerlos como producto propio.' },
      { q: '¿Qué hace una empresa de desarrollo de software?', a: 'Analiza la necesidad del cliente, diseña la solución, la desarrolla, la prueba, la pone en funcionamiento y le da soporte.' },
      { q: '¿Cómo saber si una empresa de software es confiable?', a: 'Revisa si entiende tu proceso, si su propuesta detalla el alcance, cómo muestra avances, quién queda como dueño del código y qué soporte ofrece después de la entrega.' },
    ],
  },
  {
    slug: 'transformacion-digital-para-pymes',
    title: 'Transformación digital para pymes: qué es y por dónde empezar',
    seoTitle: 'Transformación digital para pymes: por dónde empezar',
    description: 'Qué es la transformación digital en una empresa, por qué es importante y cinco pasos para empezar en una pyme en Colombia.',
    excerpt: 'Qué significa transformar digitalmente una empresa y cinco pasos prácticos para empezar en una pyme.',
    category: 'Transformación digital',
    published: '2026-11-13',
    updated: '2026-11-13',
    answer: 'La transformación digital en una empresa es cambiar la forma de trabajar apoyándose en tecnología: pasar procesos manuales a herramientas digitales, conectar la información y usar los datos para decidir. En una pyme se empieza por un proceso concreto, no por comprar tecnología.',
    sections: [
      {
        h2: '¿Qué es la transformación digital en una empresa?',
        html: `<p>Es un cambio en cómo opera la empresa, apoyado en tecnología. Incluye las herramientas, pero también los procesos y la forma de trabajo de las personas.</p>
<p>No es lo mismo que <strong>digitalizar</strong>. Digitalizar es pasar algo del papel a un archivo o a un sistema. Transformar es rediseñar el proceso aprovechando que ahora la información es digital.</p>`,
      },
      {
        h2: '¿Por qué es importante la transformación digital?',
        html: `<ul>
<li>Disminuye tareas repetitivas, como digitar la misma información varias veces.</li>
<li>Deja la información en un solo lugar y disponible para quien la necesita.</li>
<li>Permite hacer seguimiento a lo que pasa en la operación.</li>
<li>Facilita atender a los clientes por canales digitales.</li>
</ul>
<p>El resultado depende de cada empresa y de cómo se implemente; la tecnología por sí sola no lo garantiza.</p>`,
      },
      {
        h2: 'Transformación digital para pymes: cinco pasos para empezar',
        html: `<ol>
<li><strong>Elige un proceso que duela:</strong> el que más tiempo o reprocesos genera.</li>
<li><strong>Descríbelo como es hoy:</strong> pasos, responsables, documentos y herramientas.</li>
<li><strong>Define qué quieres mejorar</strong> y cómo sabrás que mejoró.</li>
<li><strong>Escoge la herramienta:</strong> un producto comercial si cubre la necesidad, o un <a href="/blog/que-es-software-a-la-medida">software a la medida</a> si el proceso es particular.</li>
<li><strong>Capacita al equipo</strong> y ajusta con el uso antes de pasar al siguiente proceso.</li>
</ol>`,
      },
      {
        h2: 'Errores comunes al empezar',
        html: `<ul>
<li>Comprar tecnología antes de entender el proceso.</li>
<li>Querer cambiar todo al mismo tiempo.</li>
<li>No involucrar a quienes usarán la herramienta.</li>
<li>Dejar sistemas aislados que obligan a digitar dos veces.</li>
</ul>
<p>En Apysoft acompañamos procesos de transformación digital: identificamos qué se puede digitalizar y definimos contigo los pasos a seguir.</p>${contacto}`,
      },
    ],
    faqs: [
      { q: '¿Qué es transformación digital?', a: 'Es el cambio en la forma de operar de una organización apoyado en tecnología: procesos, herramientas y forma de trabajo.' },
      { q: '¿Cuál es la diferencia entre digitalización y transformación digital?', a: 'Digitalizar es pasar información o tareas del papel a un medio digital. La transformación digital rediseña el proceso completo aprovechando esa información digital.' },
      { q: '¿Por dónde empieza la transformación digital en una pyme?', a: 'Por un proceso concreto que genere mucho trabajo manual: se describe cómo funciona hoy, se define qué se quiere mejorar y después se elige la herramienta.' },
    ],
  },
]
