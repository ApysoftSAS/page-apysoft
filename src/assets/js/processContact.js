// ContactFormLogic.js

import { handleScrollAnimation } from "./animations.js";
import { enviarFormulario } from "./sendInformationContact";
import { ref, reactive } from "vue";
import Swal from "sweetalert2";

handleScrollAnimation();

// Datos del formulario
const formData = reactive({
  name: "",
  email: "",
  cellphone: "",
  body: "",
});

const state = reactive({
  submitResult: null,
});

const reactiveKey = ref(0);
const phoneRegex = /^[0-9+()-]*$/;
const phoneError = ref(null);

// Función para manejar el envío del formulario
const handleSubmit = async () => {
  if (!phoneRegex.test(formData.cellphone)) {
    // Muestra el mensaje de error
    phoneError.value = "Por favor, ingrese un número de teléfono válido.";

    // Desvanecer el mensaje de error después de 2 segundos
    setTimeout(() => {
      phoneError.value = null;
    }, 2000);

    return; // Detiene el envío del formulario si la validación falla
  }

  try {
    // Realiza la solicitud HTTP con la función importada
    const response = await enviarFormulario(formData);
    // Maneja la respuesta del servidor
    console.log("Respuesta del servidor:", response);

    // Establece el resultado del envío para mostrar un mensaje de éxito
    state.submitResult = response.message;

    // Limpia el formulario solo si la respuesta es exitosa
    if (response.status === "success") {
      formData.name = "";
      formData.email = "";
      formData.cellphone = "";
      formData.body = "";
      reactiveKey.value += 1;
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: response.message,
      });
    }else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al enviar el formulario. Por favor, inténtalo más tarde",
          });
    }

 
  } catch (error) {
    console.log("Error al enviar el formulario:", error);
    // Muestra una alerta de error
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hubo un problema al enviar el formulario. Por favor, inténtalo más tarde",
    });
    reactiveKey.value += 1;
  }
};

export { formData, state, reactiveKey, phoneRegex, phoneError, handleSubmit };
