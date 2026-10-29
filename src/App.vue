<script setup>
import Footer from './components/general/Footer.vue'
import Menu from './components/general/Menu.vue'
import IconOption from './components/general/IconOption.vue'
import CarouselHeader from './components/general/CarouselHeader.vue'
import About from './views/home/About.vue'
import WhyApysoft from './views/home/WhyApysoft.vue'
import ContactUs from  './views/home/ContactUs.vue'
import Service from './views/home/ServiceNew.vue'
import SplashIntro from './components/general/SplashIntro.vue'

</script>
<template>
  <SplashIntro></SplashIntro>
  <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
  <IconOption></IconOption>
  <Menu></Menu>
  <main id="main-content" tabindex="-1">
    <CarouselHeader></CarouselHeader>
    <About class="about-us" id="about-us"></About>
    <Service class="our-service" id="our-service"></Service>
    <WhyApysoft class="why-apysoft" id="why-apysoft"></WhyApysoft>
    <ContactUs class="contact-us" id="contact-us"></ContactUs>
  </main>
  <Footer class="footer" id="footer" ></Footer>
</template>

<style>
.skip-link {
  position: fixed;
  top: var(--space-3);
  left: var(--space-3);
  z-index: 1100;
  padding: var(--space-3) var(--space-5);
  color: var(--color-white);
  background: var(--color-brand);
  border-radius: var(--radius-md);
  transform: translateY(-160%);
}

.skip-link:focus {
  transform: translateY(0);
}

#main-content > section {
  scroll-margin-top: 5rem;
}
</style>
 