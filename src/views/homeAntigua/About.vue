<script setup>
  import { handleScrollAnimation } from '../../assets/js/animations.js';
  handleScrollAnimation();
</script>
<template>
    <section class="section-about-us" >
        <div class="container"> 
            <div class="about-us-a">
                <div class="row" data-aos="fade-up">
                <div class="col-6" id="information">
                    <div class="text-center">
                        <h1>¿QUIENES SOMOS?</h1>
                    </div>
                    <br>
                    <p>Somos una empresa especializada en el desarrollo de software que se destaca por la aplicación de las
                    mejores prácticas y metodologías ágiles.</p>
                    <p>
                    Nuestra misión es impulsar la productividad de nuestros
                    clientes a través de soluciones tecnológicas innovadoras.
                    </p>
                </div>
                <div class="col-6" id="img-about-us">
                    <img src="../../../public/images/desk/about/v1.jpg" alt="quienes somos de apysfot">
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
<style setup>
    @import '../../assets/style/Home/About.css';
</style>
