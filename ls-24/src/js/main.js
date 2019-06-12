
// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// button.addEventListener('click', function() {
// 	modal.classList.add('modal_active');
// });

// close.addEventListener('click', function() {
// 	modal.classList.remove('modal_active')
// });
// Инициализация WOW.js
new WOW().init();

  	$(document).ready(function(){
      //Валидация
      $('#modal-form').validate({
        rules: {
          phone: {
            required: true
          }
        },
        messages: {
          phone: {
            required: "Заполните поле"
          }
        }
      });
      $('#offer-form').validate({
        errorClass: "invalid",
        rules: {
          username: {
            required: true,
            minlength: 2,
            maxlength: 15
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Осталось символов: {0}")
          },
          email: "Введите корректный email",
          phone: "Заполните поле"
        }
      });
      $('#brif-form').validate({
        rules: {
          username: {
            required: true,
            minlength: 2,
            maxlength: 15
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Осталось символов: {0}")
          },
          email: "Введите корректный email",
          phone: "Заполните поле"
        }
      });
      
      //Маска для телефона
      $('.phone').mask('+375 (99) 999-99-99');
      //Слайдер
  		$('.slider').slick({
  			slidesToShow: 3,
  			slidesToScroll: 1,
  			prevArrow: $('.arrows__left'),
  			nextArrow: $('.arrows__right'),
  			responsive: [
  				{
  					breakpoint: 1200,
  					settings: {
  						slidesToShow: 2,
  						slidesToScroll: 1,
  					}
  				},
  				{
  					breakpoint: 992,
  					settings: {
  						slidesToShow: 2,
  						slidesToScroll: 1
  					}
  				},
  				{
  					breakpoint: 768,
  					settings: {
  						slidesToShow: 1,
  						slidesToScroll: 1
  					}
  				},
  				{
  					breakpoint: 576,
  					settings: {
  						slidesToShow: 1,
  						slidesToScroll: 1
  					}
  				},
  				{
  					breakpoint: 320,
  					settings: {
  						slidesToShow: 1,
  						slidesToScroll: 1
  					}
  				}
  			]
  		});
var brif = $('.brif');
var brifTop = brif.offset().top;
$(window).bind('scroll', function(){
  var windowTop = $(this).scrollTop();
  if(windowTop > brifTop) {
    $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A766849459304b4a26ea616772d0d87808c7528b3a704b24f3d2c4ad3fc1a9232&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>')
    $(window).unbind('scroll');
  	}
  });

});




