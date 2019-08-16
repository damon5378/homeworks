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

    const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
              for(let i = 0; i < tabContent.length; i++){
                if(index === i) {
                  tab[i].classList.add('active');
                  tabContent[i].classList.remove('d-none');
                } else {
                  tab[i].classList.remove('active');
                  tabContent[i].classList.add('d-none');
                }
              }
            };

            tabHeader.addEventListener('click', (event) => {
              let target = event.target;
                  target = target.closest('.service-header-tab');
              if(target){
                tab.forEach((item, i) => {
                  if(item === target){
                    toggleTabContent(i);
                  }
                });
              }
            });
    };
    tabs();

    //Timer
    function countTimer(deadline){
        let timerDays = document.querySelector('#timer-days'),
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24,
                days = Math.floor(timeRemaining / 60 / 60 / 24);
                days = (days < 10) ? "0" + days : days;
                hours = (hours < 10) ? "0" + hours : hours;
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                    return {timeRemaining, days, hours, minutes, seconds};
                }

        function updateClock(){
            let timer = getTimeRemaining();
            
            timerDays.textContent = timer.days;
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if(timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            } else {
                clearInterval(updateClock);
                timerDays.textContent = '00';
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
            
        }
        
        updateClock();
    }
    
    countTimer('24 august 2019 17:00:00');


});