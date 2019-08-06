window.addEventListener('DOMContentLoaded', function(){
    'use strict';

const ourOffer = document.querySelector('.offer__image');

    let ourOfferFunction = (target) => {
      let defaultSrc = target.src;
      console.log('переменная с исходным src: ' + defaultSrc);
      target.src = target.dataset.img;
      console.log('новое значение src: ' + target.src);
      target.dataset.img = defaultSrc;
      console.log('новое значение data: ' + target.dataset.img);
    };

    ourOffer.addEventListener('mouseover', (event) => {
      let target = event.target;

      if(target.matches('.sony')){
        ourOfferFunction(target);
      }
    });
    ourOffer.addEventListener('mouseout', (event) => {
      let target = event.target;

      if(target.matches('.sony')){
        ourOfferFunction(target);
      }
    });

});