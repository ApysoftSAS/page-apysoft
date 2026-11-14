<script setup>
import CarouselHeader from '../../components/general/CarouselHeader.vue'
import About from './About.vue'
import WhyApysoft from './WhyApysoft.vue'
import ContactUs from './ContactUs.vue'
import Service from './ServiceNew.vue'
import { useSeo } from '../../composables/useSeo'

useSeo({
  title: 'Apysoft SAS | Desarrollo de software en Yopal, Casanare',
  description: 'Apysoft SAS desarrolla software a la medida, sitios web e integraciones. Sede principal en Yopal, Casanare; atención remota en Colombia y otros países.',
  path: '/',
})
</script>
<template>
  <CarouselHeader></CarouselHeader>
  <About class="about-us" id="about-us"></About>
  <Service class="our-service" id="our-service"></Service>
  <section class="pg-band" aria-labelledby="dokapys-band-heading">
    <div class="container pg-band-inner">
      <div>
        <span class="section-tag">Producto de Apysoft</span>
        <h2 id="dokapys-band-heading">DOKAPYS: automatización documental para el sector salud</h2>
        <p>Clasifica, renombra y organiza los soportes PDF de las facturas de salud por paciente y por factura.</p>
      </div>
      <div class="pg-band-actions">
        <RouterLink class="btn btn-primary" to="/productos/dokapys">Conocer DOKAPYS</RouterLink>
        <RouterLink class="pg-link" to="/blog">Ir al blog</RouterLink>
      </div>
    </div>
  </section>
  <WhyApysoft class="why-apysoft" id="why-apysoft"></WhyApysoft>
  <ContactUs class="contact-us" id="contact-us"></ContactUs>
</template>
