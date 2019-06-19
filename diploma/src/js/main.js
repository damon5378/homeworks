
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

      //Anchor
      $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

      //upButton

      $('.dots__list').on('click', 'li', function(){
        var lindex = $(this).index();
        $( ".slider" ).slick('slickGoTo', parseInt(lindex)); // меняем слад на нужный индекс
        $('dots__list li').removeClass('active'); // change class
        $(this).addClass('active');
});
      $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var slideIndex = $(this).index();
        $('.dots__list li').removeClass('active');
        $('.dots__list li').eq(currentSlide).addClass('active')
  });



    //   var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    //    var delay = 1000; // Задержка прокрутки
 
    //   $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    //    В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" 
    //   if ($(this).scrollTop() > top_show) $('#up').fadeIn();
    //   else $('#up').fadeOut();
    // });
    // $('#up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    //   /* Плавная прокрутка наверх */
    //   $('body, html').animate({
    //     scrollTop: 0
    //   }, delay);
    // });
//       (function($) {  
//         $(function() {  
   
//     $('#up').click(function() {  
//     $('body,html').animate({scrollTop: top}, 2000);  
//     return false;  
//   })  
   
// })  
// });
      
      //Маска для телефона
      $('.phone').mask('8 (999) 999-99-99');
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


  var top_show = 1000; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 2000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#back-top').fadeIn();
      else $('#back-top').fadeOut();
    });
    $('#back-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

