<script setup>
import { posts, formatDate } from '../../data/posts'
import { useSeo, breadcrumb } from '../../composables/useSeo'

useSeo({
  title: 'Blog de Apysoft: facturación y soportes en salud',
  description: 'Guías sobre soportes de cobro, facturación en salud y automatización documental para IPS, clínicas y hospitales en Colombia.',
  path: '/blog',
  jsonLd: [breadcrumb([['Inicio', '/'], ['Blog', '/blog']])],
})
</script>

<template>
  <section class="pg-hero" id="hero" aria-labelledby="blog-heading">
    <div class="container">
      <nav class="pg-breadcrumb" aria-label="Ruta de navegación">
        <ol>
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li aria-current="page">Blog</li>
        </ol>
      </nav>
      <h1 id="blog-heading">Blog de Apysoft</h1>
      <p>Guías sobre soportes de cobro, facturación en salud y automatización documental.</p>
    </div>
  </section>

  <section class="pg-section section-padding" aria-label="Artículos">
    <div class="container">
      <ul class="pg-grid">
        <li v-for="post in posts" :key="post.slug" class="pg-card pg-post">
          <span class="section-tag">{{ post.category }}</span>
          <h2><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h2>
          <p class="pg-post-meta">Última revisión: <time :datetime="post.updated">{{ formatDate(post.updated) }}</time></p>
          <p>{{ post.excerpt }}</p>
          <RouterLink class="pg-link" :to="`/blog/${post.slug}`" :aria-label="`Leer: ${post.title}`">Leer el artículo</RouterLink>
        </li>
      </ul>
    </div>
  </section>

  <section class="pg-cta" aria-labelledby="blog-cta-heading">
    <div class="container">
      <h2 id="blog-cta-heading">¿Prepara soportes de facturas de salud?</h2>
      <p>DOKAPYS clasifica, renombra y organiza los soportes PDF por paciente y por factura.</p>
      <RouterLink class="btn btn-primary" to="/productos/dokapys">Conocer DOKAPYS</RouterLink>
    </div>
  </section>
</template>
