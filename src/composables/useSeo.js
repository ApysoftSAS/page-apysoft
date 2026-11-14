import { useHead } from '@unhead/vue'

export const SITE = 'https://apysoft.com.co'
const OG_IMAGE = `${SITE}/images/desk/logo/logo.png`

// Etiquetas por página: title, descripción, canónica, Open Graph y JSON-LD.
export function useSeo({ title, description, path, type = 'website', jsonLd = [] }) {
  const url = SITE + path
  useHead({
    title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: OG_IMAGE },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    script: jsonLd.map((data) => ({ type: 'application/ld+json', innerHTML: JSON.stringify(data) })),
  })
}

// items: [[nombre, ruta], ...]
export const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: SITE + path,
  })),
})

export const publisher = {
  '@type': 'Organization',
  name: 'Apysoft SAS',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: OG_IMAGE },
}
