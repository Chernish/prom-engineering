$(function () {
  $(".burger").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //добавляем/отменяем класс burger--active при клике на бургер
    $(this).toggleClass("burger--active");
    //добавляем/отменяем класс nav--active при клике на бургер
    $(".nav").toggleClass("nav--active");
  });
});

$(document).ready(function () {
  $(".nav").on("click", "a", function (event) {
    //при клике на ссылку убираем меню
    $(".nav").removeClass("nav--active");
    //при клике на ссылку возвращаем бургер в стандартное положение
    $(".burger").toggleClass("burger--active");
    //при клике на ссылку убираем у всех пунктов класс nav__link--current
    $(".nav ul li a").removeClass('nav__link--current');
    //при клике на ссылку убираем добаляем пукнту меню класс nav__link--current
    $(this).addClass("nav__link--current");
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      // получем расстояние до элемента
      top = $(id).offset().top;
    // условие если расстоояние больше 0 то код отрабатывает
    if(top > 0) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //анимируем переход на расстояние - top за 1000 мс
      $('body,html').animate({scrollTop: top - 100}, 1000);
    }
  });
});


$(window).scroll(function () {
  //отслеживаем скролл
  if ($(window).scrollTop() > 20) {
    //добавляем класс header__shadow при скроле больше 20
    $('.header').addClass('header__shadow');
  } else {
    //убираем класс header__shadow при скроле меньше 20
    $('.header').removeClass('header__shadow');
  }
});
