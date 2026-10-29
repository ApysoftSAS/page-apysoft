<script setup>
  import { handleScrollAnimation } from '../../assets/js/animations.js';
  handleScrollAnimation();
</script>
<template>
  <section class="section-our-service">
    <div class="container" >
      <div class="our-service-a">
        <div class="text-center">
        <h1>NUESTROS SERVICIOS</h1>
      </div>
      <div class="row mt-4">
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-4 mt-xs-3 card-col ">
          <div class="card">
            <img src="../../../public/images/desk/services/DesarrolloSitiosWeb.jpg" alt="Desarrollo de Sitios Web"
              style="width: 100%; height: 100%; object-fit: cover" />
            <div class="card-body">
              <h5 class="card-title text-center">Desarrollo de Sitios Web</h5>
              <p class="card-text">
                Creamos sitios web personalizados y responsivos
              </p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-4 mt-xs-3 card-col">
          <div class="card">
            <img src="../../../public/images/desk/services/DesarrolloSoftwareMedida.jpg" alt="Desarrollo Software a la Medida"
              style="width: 100%; height: 100%; object-fit: cover" />
            <div class="card-body">
              <h5 class="card-title text-center">Desarrollo de Software a la Medida</h5>
              <p class="card-text">
                Desarrollamos software a medida para optimizar operaciones
              </p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-4 mt-xs-3 card-col">
          <div class="card">
            <img src="../../../public/images/desk/services/ConsultoriaTecnologica.jpg" alt="Consultoria Tecnologica"
              style="width: 100%; height: 100%; object-fit: cover" />
            <div class="card-body">
              <h5 class="card-title text-center">Consultoría Tecnológica</h5>
              <p class="card-text">
                Asesoramos en estrategia tecnológica y seguridad
              </p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-4 mt-xs-3 card-col">
          <div class="card">
            <img src="../../../public/images/desk/services/TransformacionTecnologica.jpg" alt="Transformacion Tecnologica" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title text-center">Transformación Tecnológica</h5>
              <p class="card-text">Lideramos la transformación digital y capacitación</p>
            </div>
          </div>
        </div> 
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-4 mt-xs-3 card-col">
          <div class="card" >
            <img src="../../../public/images/desk/services/ServiciosNube.jpg" alt="Servicios en Nube" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title text-center">Servicios de Nube</h5>
              <p class="card-text">Implementamos y gestionamos AWS para la nube</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-4 mt-xs-3 card-col">
          <div class="card" >
            <img src="../../../public/images/desk/services/Integraciones.jpg" alt="Integraciones" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title text-center">Integraciones</h5>
              <p class="card-text">Conectamos sistemas y automatizamos flujos de trabajo</p>
            </div>
          </div>
        </div>    
      </div>
      </div>
      </div>
  </section>
</template>
<style scoped>
  @import "../../assets/style/Home/services.css";
</style>
