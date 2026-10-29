function aplicarAnimacion(elemento, animation, scrollValueY) {
    var miDiv = document.querySelector(elemento);
    var posicion = window.scrollY;
    if (posicion > scrollValueY) {
        miDiv.classList.add(animation);
      } else {
        miDiv.classList.remove(animation);
      }
  }
  
  export function handleScrollAnimation() {
    const elements = [
      { selector: '.whatsapp-container', animation: 'right-block', scrollValueY:530},
      { selector: '.go-back', animation: 'right-block', scrollValueY:530},
      { selector: '.about-us-a', animation: 'right-block', scrollValueY:250},
      { selector: '.our-service-a', animation: 'left-block', scrollValueY:800},
      { selector: '.why-apysoft-a', animation: 'right-block', scrollValueY:1700},
      { selector: '.contact-us-a', animation: 'left-block', scrollValueY:2300},
    ];
    const elementsTable = [
      { selector: '.whatsapp-container', animation: 'right-block', scrollValueY:550},
      { selector: '.go-back', animation: 'right-block', scrollValueY:550},
      { selector: '.about-us-a', animation: 'right-block', scrollValueY:250},
      { selector: '.our-service-a', animation: 'left-block', scrollValueY:1200},
      { selector: '.why-apysoft-a', animation: 'right-block', scrollValueY:2500},
      { selector: '.contact-us-a', animation: 'left-block', scrollValueY:3600},
    ];
    const elementsMobile = [
      { selector: '.whatsapp-container', animation: 'right-block', scrollValueY:550},
      { selector: '.go-back', animation: 'right-block', scrollValueY:550},
      { selector: '.about-us-a', animation: 'right-block', scrollValueY:200},
      { selector: '.our-service-a', animation: 'left-block', scrollValueY:900},
      { selector: '.why-apysoft-a', animation: 'right-block', scrollValueY:3500},
      { selector: '.contact-us-a', animation: 'left-block', scrollValueY:4500},
    ];
    window.addEventListener('scroll', function () {
      if(window.innerWidth > 1020){
        elements.forEach(({ selector, animation, scrollValueY }) => {
          aplicarAnimacion(selector, animation, scrollValueY);
        });
      }
      else if(window.innerWidth > 720 && window.innerWidth < 1019){
        elementsTable.forEach(({ selector, animation, scrollValueY }) => {
          aplicarAnimacion(selector, animation, scrollValueY);
        });
      }
      else if(window.innerWidth > 200 && window.innerWidth < 719){
        elementsMobile.forEach(({ selector, animation, scrollValueY }) => {
          aplicarAnimacion(selector, animation, scrollValueY);
        });
      }
    });
  }
