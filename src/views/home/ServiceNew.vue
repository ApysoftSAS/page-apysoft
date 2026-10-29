<script setup>
  import { handleScrollAnimation } from '../../assets/js/animations.js';
  handleScrollAnimation();
</script>
<template>
    <section class="section-our-service">
        <div class="container">
            <div class="our-service-a">
                <div class="text-center">
                    <h1>NUESTROS SERVICIOS</h1>
                </div>
                <div class="cards">
                    <div class="card  m-1" >
                        <div id="img-why-apysoft">
                            <img src="../../../public/images/desk/services/DesarrolloSitiosWeb.jpg" class="card-img-top"
                                alt="Desarrollo de Sitios Web" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Desarrollo de Sitios Web</h5>
                            <p class="card-text">
                                Creamos sitios web personalizados y responsivos
                            </p>
                        </div>
                    </div>
                    <div class="card  m-1" >
                        <div id="img-why-apysoft">
                            <img src="../../../public/images/desk/services/DesarrolloSoftwareMedida.jpg"
                                class="card-img-top" alt="Desarrollo Software a la Medida" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Desarrollo de Software a la Medida</h5>
                            <p class="card-text">
                                Desarrollamos software a medida para optimizar operaciones
                            </p>
                        </div>
                    </div>
                    <div class="card  m-1" >
                        <div id="img-why-apysoft">
                            <img src="../../../public/images/desk/services/ConsultoriaTecnologica.jpg"
                                alt="Consultoria Tecnologica" class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Consultoría Tecnológica</h5>
                            <p class="card-text">
                                Asesoramos en estrategia tecnológica y seguridad
                            </p>
                        </div>
                    </div>
                    <div class="card  m-1" >
                        <div id="img-why-apysoft">
                            <img src="../../../public/images/desk/services/TransformacionTecnologica.jpg"
                                alt="Transformacion Tecnologica" class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Transformación Tecnológica</h5>
                            <p class="card-text">
                                Lideramos la transformación digital y capacitación
                            </p>
                        </div>
                    </div>
                    <div class="card  m-1" >
                        <div id="img-why-apysoft">
                            <img src="../../../public/images/desk/services/ServiciosNube.jpg" alt="Servicios en Nube"
                                class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Servicios de Nube</h5>
                            <p class="card-text">
                                Implementamos y gestionamos AWS para la nube
                            </p>
                        </div>
                    </div>
                    <div class="card  m-1" >
                        <div id="img-why-apysoft">
                            <img src="../../../public/images/desk/services/Integraciones.jpg" alt="Integraciones"
                                class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Integraciones</h5>
                            <p class="card-text">
                                Conectamos sistemas y automatizamos flujos de trabajo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    @import "../../assets/style/Home/ServiceNew.css";
</style>