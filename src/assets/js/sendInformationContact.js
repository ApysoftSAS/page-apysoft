// assets/js/api.js
import CryptoJS from 'crypto-js';


export async function enviarFormulario(formData) {
  const url = 'https://sendemail.apysoft.com.co/';
  const yearMonth = new Date().toISOString().slice(0, 7).replace('-', '');

    const dataToEncrypt = yearMonth + 'apysoft2023';

    // Encripta la API key
    const encryptedApiKey = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(dataToEncrypt));
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': encryptedApiKey  // Agrega el encabezado X-API-Key con la API key encriptada
      },
      body: JSON.stringify(formData)
    };
  
    try {
      const response = await fetch(url, requestOptions);
      if (response.status >= 400) {
        // Si la respuesta del servidor no es exitosa, lanzamos un error
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      // Convertir la respuesta a JSON y devolverla
      return await response.json();
    } catch (error) {
      // Capturar errores de red u otros errores
      throw new Error(`Error al realizar la solicitud: ${error.message}`);
    }
  }
  