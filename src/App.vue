<script setup>
import Logo from './components/general/Logo.vue'
import Footer from './components/general/Footer.vue'
import Menu from './components/general/Menu.vue'
import IconOption from './components/general/IconOption.vue'
import About from './views/home/About.vue'
//import Service from './views/home/service.vue'
import WhyApysoft from './views/home/WhyApysoft.vue'
import ContactUs from  './views/home/ContactUs.vue'
import Service from './views/home/ServiceNew.vue'

</script>
<template>
  <Logo></Logo>
  <IconOption></IconOption>
  <Menu></Menu>
  <About class="about-us" id="about-us"></About>
  <Service class="our-service" id="our-service" ></Service>
  <WhyApysoft class="why-apysoft" id="why-apysoft" ></WhyApysoft>
  <ContactUs class="contact-us" id="contact-us"></ContactUs>
  <Footer class="footer" id="footer" ></Footer>
</template>
 