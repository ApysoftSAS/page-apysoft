import { articles } from './articles'

// El artículo pilar tiene componente propio. Los demás se escriben como datos en
// articles.js y los muestra Post.vue. El sitemap toma los slug de estos dos archivos.
export const posts = [
  {
    slug: 'resolucion-2284-de-2023-anexo-tecnico-2',
    title: 'Resolución 2284 de 2023 y su Anexo Técnico 2: cómo nombrar y enviar los soportes de la factura en salud',
    excerpt: 'Qué regula la resolución, qué contiene cada anexo técnico y qué exige el Anexo Técnico 2 sobre el nombre, el formato y el envío de los soportes de cobro.',
    category: 'Normativa en salud',
    published: '2026-11-13',
    updated: '2026-11-13',
    component: () => import('../views/blog/Resolucion2284AnexoTecnico2.vue'),
  },
  ...articles.map((article) => ({
    ...article,
    component: () => import('../views/blog/Post.vue'),
    props: { slug: article.slug },
  })),
]

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
