<script setup>
import { articles } from '../../data/articles'
import { formatDate } from '../../data/posts'
import { useSeo, breadcrumb, publisher, SITE } from '../../composables/useSeo'

const props = defineProps({ slug: { type: String, required: true } })
const post = articles.find((a) => a.slug === props.slug)
const path = `/blog/${post.slug}`

useSeo({
  title: post.seoTitle,
  description: post.description,
  path,
  type: 'article',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
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
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    breadcrumb([['Inicio', '/'], ['Blog', '/blog'], [post.title, path]]),
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
          <li aria-current="page">{{ post.category }}</li>
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
        <p class="prose-note"><strong>Respuesta corta:</strong> {{ post.answer }}</p>

        <!-- v-html: contenido propio de src/data/articles.js, no de usuarios -->
        <template v-for="section in post.sections" :key="section.h2">
          <h2>{{ section.h2 }}</h2>
          <div v-html="section.html"></div>
        </template>

        <h2>Preguntas frecuentes</h2>
        <template v-for="faq in post.faqs" :key="faq.q">
          <h3>{{ faq.q }}</h3>
          <p>{{ faq.a }}</p>
        </template>
      </article>
    </div>
  </section>

  <section class="pg-cta" aria-labelledby="post-cta-heading">
    <div class="container">
      <h2 id="post-cta-heading">Conversemos sobre lo que necesita tu empresa</h2>
      <p>Apysoft SAS · Yopal, Casanare · Atención remota en Colombia y otros países.</p>
      <RouterLink class="btn btn-primary" :to="{ path: '/', hash: '#contact-us' }">Contáctanos</RouterLink>
    </div>
  </section>
</template>
