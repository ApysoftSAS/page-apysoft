document.addEventListener("DOMContentLoaded", function () {
    const whatsappContainer = document.getElementById("whatsapp-data");
  
    setInterval(function () {
      whatsappContainer.classList.toggle("rotate-vertical-center");
    }, 1000);
  });