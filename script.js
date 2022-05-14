$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


function initOWL(){
    var owlHome = $('.js-homepage-category');
    owlHome .owlCarousel({
        items:1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar
    });
    function startProgressBar() {
        $(".js-category-slider-progress").css({
          width: "100%",
          transition: "width 5000ms"
        });
      }
      
      function resetProgressBar() {
        $(".js-category-slider-progress").css({
          width: 0,
          transition: "width 0s"
        });
      }
}

document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider('.slider', {
    loop: true,
    autoplay: false,
    swipe: true
  });
  var thumbnailsItem = document.querySelectorAll('.slider__thumbnails-item');

  function setActiveThumbnail() {
    var sliderItemActive = document.querySelector('.slider__item_active');
    var index = parseInt(sliderItemActive.dataset.index);
    for (var i = 0, length = thumbnailsItem.length; i < length; i++) {
      if (i !== index) {
        thumbnailsItem[i].classList.remove('active');
      } else {
        thumbnailsItem[index].classList.add('active');
      }
    }
  }
  setActiveThumbnail();
  document.querySelector('.slider').addEventListener('slider.set.active', setActiveThumbnail);
  var sliderThumbnails = document.querySelector('.slider__thumbnails');
  sliderThumbnails.addEventListener('click', function(e) {
    $target = e.target.closest('.slider__thumbnails-item');
    if (!$target) {
      return;
    }
    var index = parseInt($target.dataset.slideTo, 10);
    slider.moveTo(index);
  });
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}