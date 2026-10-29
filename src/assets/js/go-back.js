document.addEventListener("DOMContentLoaded", function() {
  var goBack = document.getElementById("go-back");

  window.addEventListener("scroll", function() {
    goBack.style.opacity = "1";
    clearTimeout(window.scrollTimeout);
    
    window.scrollTimeout = setTimeout(function() {
      goBack.style.opacity = "0";
    }, 2000);
  });
});