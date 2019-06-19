
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
  			slidesToShow: 1,
  			slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
  			prevArrow: $('.arrows__left'),
  			nextArrow: $('.arrows__right'),
  			responsive: [
  				{
  					breakpoint: 1200,
  					settings: {
  						slidesToShow: 1,
  						slidesToScroll: 1,
  					}
  				},
  				{
  					breakpoint: 992,
  					settings: {
  						slidesToShow: 1,
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
var map = $('.map');
var mapTop = map.offset().top;
$(window).bind('scroll', function(){
  var windowTop = $(this).scrollTop();
  if(windowTop > mapTop) {
    $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A622bee0e611bd867da26aff4a64c2bd86c01dc7d950fbcf0e5f56282881b53ca&amp;width=100%25&amp;height=670&amp;lang=ru_RU&amp;scroll=false"></script>')
    $(window).unbind('scroll');
  	}
  });

});




