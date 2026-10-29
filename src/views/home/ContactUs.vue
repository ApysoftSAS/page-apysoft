<script setup>
  import {
    formData,
    state,
    reactiveKey,
    phoneRegex,
    phoneError,
    handleSubmit,
  } from "../../assets/js/processContact.js";
</script>

<!-- Resto del código... -->

<template>
  <section class="section" id="section-contact-us">
    <div class="container">
      <div class="contact-us-a">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="card">
              <div class="card-body mt-3">
                <form @submit.prevent="handleSubmit">
                  <h1 class="text-center">Contactanos</h1>
                  <br />
                  <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input v-model="formData.name" type="text" class="form-control" id="name"
                      aria-describedby="emailHelp" autocomplete="name" required/>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Correo</label>
                    <input v-model="formData.email" type="email" class="form-control" id="email" autocomplete="email" required/>
                  </div>
                  <div class="mb-3">
                    <label for="cellphone" class="form-label">Telefono/Celular</label>
                    <input v-model="formData.cellphone" type="tel" class="form-control" id="cellphone" required/>
                    <span v-if="phoneError" class="error-message" id="error-message">{{ phoneError }}</span>
                  </div>
                  <div class="mb-3">
                    <label for="body" class="form-label">Propuesta</label>
                    <textarea v-model="formData.body" class="form-control" id="body"
                      placeholder="Estamos emocionados por conocerte y aprender sobre tu proyecto. Por favor, cuéntanos más."
                      rows="4" required></textarea>
                  </div>
                  <div class="card-body d-flex justify-content-center" id="button-contact-us">
                    <button type="submit" class="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>
<style scoped>
  @import "../../assets/style/Home/contactUs.css";
</style>