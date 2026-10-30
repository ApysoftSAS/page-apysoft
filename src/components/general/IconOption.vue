<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isWhatsappVisible = ref(false);
const isGoBackVisible = ref(false);
const isWhatsappRotating = ref(false);

let hideGoBackTimeout;
let whatsappRotationInterval;

const handleScroll = () => {
  isWhatsappVisible.value = window.scrollY > 530;
  window.clearTimeout(hideGoBackTimeout);

  if (!isWhatsappVisible.value) {
    isGoBackVisible.value = false;
    return;
  }

  isGoBackVisible.value = true;
  hideGoBackTimeout = window.setTimeout(() => {
    isGoBackVisible.value = false;
  }, 2000);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  whatsappRotationInterval = window.setInterval(() => {
    isWhatsappRotating.value = !isWhatsappRotating.value;
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.clearTimeout(hideGoBackTimeout);
  window.clearInterval(whatsappRotationInterval);
});
</script>
<template>
  <div
    id="go-back"
    class="go-back"
    :class="{ 'right-block': isGoBackVisible }"
    :style="{ opacity: isGoBackVisible ? 1 : 0 }"
  >
    <a href="#hero" id="go-back-a" class="go-back-a" aria-label="Volver al inicio">
      <img src="../../../public/images/ico/up-arrow.ico" alt="" id="datago-back">
    </a>
  </div>
  <div id="whatsapp-container" class="whatsapp-container" :class="{ 'right-block': isWhatsappVisible }">
    <a href="https://wa.me/573204478206" id="whatsapp-ico" class="whatsapp-ico" target="_blank" rel="noopener noreferrer" aria-label="Contactar a Apysoft por WhatsApp">
      <img
        src="../../../public/images/ico/whatsapp.ico"
        alt=""
        id="whatsapp-data"
        :class="{ 'rotate-vertical-center': isWhatsappRotating }"
      >
    </a>
  </div>
</template>
<style setup>
  @import './../../assets/style/General/IconOption.css';
</style>