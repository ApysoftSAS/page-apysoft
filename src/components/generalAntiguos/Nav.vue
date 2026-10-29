<script setup>
  import { makeNavSticky } from '../../scripts/nav'; // Asegúrate de que la ruta sea correcta
  import GaleryHeader from '../General/GaleryHeader.vue';
  import { onMounted } from 'vue';
  onMounted(() => {
    makeNavSticky(); // Llama a la función para hacer que la navegación sea pegajosa
  });
</script>
<template>
  <div id="header">
  <GaleryHeader></GaleryHeader>
  <nav class="tabs-container">
    <a href="#about-us" class="nav-option" id="quienes-somos-link">¿QUIENES SOMOS?</a>
    <a href="#our-service" class="nav-option" id="nuestros-servicios-link">NUESTROS SERVICIOS</a>
    <a href="#why-apysoft" class="nav-option" id="por-que-apysoft-link">¿POR QUÉ APYSOFT?</a>
    <a href="#contact-us" class="nav-option" id="contactanos-link">CONTACTANOS</a>
  </nav>
  </div>
</template>
<style setup>
    @import './../../assets/style/General/nav.css';
    @import './../../assets/style/General/nav1.css';
    @import './../../assets/style/General/galeryHeader.css';
</style>





