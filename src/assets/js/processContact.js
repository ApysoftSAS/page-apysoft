// ContactFormLogic.js

import { enviarFormulario } from "./sendInformationContact";
import { ref, reactive } from "vue";

// Datos del formulario
const formData = reactive({
  name: "",
  email: "",
  cellphone: "",
  body: "",
});

const state = reactive({
  submitResult: null,
  success: false,
  error: false,
  loading: false,
});

const reactiveKey = ref(0);
const phoneRegex = /^[0-9+() -]+$/;
const phoneError = ref(null);
let phoneErrorTimeout;

// Función para manejar el envío del formulario
const handleSubmit = async () => {
  state.success = false;
  state.error = false;

  const phoneDigits = formData.cellphone.replace(/\D/g, "");
  if (!phoneRegex.test(formData.cellphone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    clearTimeout(phoneErrorTimeout);
    phoneError.value = "Por favor, ingrese un número de teléfono válido.";

    phoneErrorTimeout = setTimeout(() => {
      phoneError.value = null;
    }, 2000);

    return;
  }

  clearTimeout(phoneErrorTimeout);
  phoneError.value = null;
  state.loading = true;

  try {
    const response = await enviarFormulario(formData);
    state.submitResult = response.message;

    if (response.status === "success") {
      state.success = true;
      formData.name = "";
      formData.email = "";
      formData.cellphone = "";
      formData.body = "";
      reactiveKey.value += 1;
    } else {
      state.error = true;
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    state.error = true;
  } finally {
    state.loading = false;
  }
};

export { formData, state, reactiveKey, phoneRegex, phoneError, handleSubmit };
