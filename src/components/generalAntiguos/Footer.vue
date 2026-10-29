<script setup>
  import { ref } from "vue";
  const currentDate = ref(new Date().getFullYear());
</script>
<template>
  <section id="section-footer">
    <footer>
      <section class="flex-column text-center pt-2" id="social">
        <a href="mailto:apysoft2023@gmail.com" class=" me-4" target="_blank">
          <i class="fab fa-google"></i>
        </a>
        <a href="https://www.instagram.com/apysoft_s.a.s" class="me-4" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/apysoft/" class="me-4" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ApysoftSAS" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </section>
      <div class="flex-column text-center pt-2">
        <span class="text-center">
          © {{ currentDate }} Copyright:
          <a class="text-dark" href="">APYSOFT</a>
        </span>
      </div>
    </footer>
  </section>
</template>
<style scoped>
  @import "../../assets/style/General/footer.css";
</style>