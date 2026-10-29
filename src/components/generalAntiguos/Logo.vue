<script setup>
import { onMounted } from 'vue';
import { cambiarEstilo } from '../../assets/js/ColorChange';

onMounted(() => {
  document.getElementById("logo").addEventListener("click", cambiarEstilo);
});
</script>
<template>
 <header class="text-white  position-absolute">
        <div class="container">
            <div class="row">
                <div id="logo" class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-4">
                    <a href="#">
                        <img src="../../../public/images/desk/logo/logo.png" class="img-fluid" alt="Logo Empresarial de apysfot">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
<style setup>
    @import './../../assets/style/General/logo.css';
</style>





