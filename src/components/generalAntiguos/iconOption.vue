<script setup>
  import '../../assets/js/go-back.js';
  import '../../assets/js/girate-whatsapp.js';
  import { handleScrollAnimation } from '../../assets/js/animations.js';
  handleScrollAnimation()
</script>
<template>
  <div class="go-back" id="go-back">
    <a href="#" id="go-back-a" class="go-back-a">
      <img src="../../../public/images/ico/up-arrow.ico" alt="go-back de apysfot" id="datago-back">
    </a>
  </div>
  <div class="whatsapp-container" id="whatsapp-container">
    <a href="https://wa.me/+573204478206" id="whatsapp-ico" class="whatsapp-ico" target="_blank">
      <img src="../../../public/images/ico/whatsapp.ico" alt="WhatsApp Icon de apysfot" id="whatsapp-data">
    </a>
  </div>
</template>
<style setup>
  @import './../../assets/style/General/iconOption.css';
</style>