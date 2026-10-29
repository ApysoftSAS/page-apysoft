<script setup>
</script>
<template>
  <div id="galeryHeader">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div id="carousel-inner" class="carousel-inner">
        <div id="carousel-item" class="carousel-item">
          <img id="page" src="../../../public/images/desk/banner/v1.jpg" alt="imagen-desk-1 de apysfot">
          <img id="movil" src="../../../public/images/mobile/banner/v1.jpg" alt="imagen-mobile-1 de apysfot">
          <div class="carousel-caption d-md-block" id="information">
            <h2>Haz realidad tus ideas de negocio con nosotros</h2>
            <p>El futuro de tu empresa depende de tus decisiones presentes.</p>
          </div>
        </div>
        <div id="carousel-item" class="carousel-item active">
          <img id="page" src="../../../public/images/desk/banner/v2.jpg" alt="imagen-desk-2 de apysfot">
          <img id="movil" src="../../../public/images/mobile/banner/v2.jpg" alt="imagen-mobile-2 de apysfot">
          <div class="carousel-caption d-md-block" id="information">
            <h2>Elije sabiamente</h2>
            <p>Forja un camino exitoso y
              sostenible en el mundo empresarial en constante cambio</p>
          </div>
        </div>
        <div id="carousel-item" class="carousel-item">
          <img id="page" src="../../../public/images/desk/banner/v3.jpg" alt="imagen-desk-3 de apysfot">
          <img id="movil" src="../../../public/images/mobile/banner/v3.jpg" alt="imagen-mobile-3 de apysfot">
          <div class="carousel-caption d-md-block" id="information">
            <h2>Crece con nosotros</h2>
            <p>Permitanos ser ese aliado estratigico que te brinde las mejores herramientas para tu crecimiento constante.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/style/General/CarouselHeader.css";
</style>