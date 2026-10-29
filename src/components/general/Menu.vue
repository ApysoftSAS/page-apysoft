<script setup>
  import { makeNavSticky } from '../../scripts/nav'; // Asegúrate de que la ruta sea correcta
  import CarouselHeader from '../general/CarouselHeader.vue'
  import { onMounted } from 'vue';
  onMounted(() => {
    makeNavSticky(); // Llama a la función para hacer que la navegación sea pegajosa
  });
  import { scrollToSection } from '../../assets/js/moveSection';
  const scrollTo = (sectionId) => {
        scrollToSection(sectionId);
    };
</script>
<template>
  <div id="header">
    <CarouselHeader></CarouselHeader>
    <nav class="tabs-container">
        <a href="#" class="nav-option" id="quienes-somos-link" @click="scrollTo('about-us')">¿QUIENES SOMOS?</a>
        <a href="#" class="nav-option" id="nuestros-servicios-link" @click="scrollTo('our-service')">NUESTROS SERVICIOS</a>
        <a href="#" class="nav-option" id="por-que-apysoft-link" @click="scrollTo('why-apysoft')">¿POR QUÉ APYSOFT?</a>
        <a href="#" class="nav-option" id="contactanos-link" @click="scrollTo('contact-us')">CONTACTANOS</a>
    </nav>
  </div>
</template>
<style setup>
    @import './../../assets/style/General/nav.css';
    @import './../../assets/style/General/nav1.css';
</style>

