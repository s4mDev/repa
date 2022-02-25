/* eslint-disable */

import '../scss/main.scss';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import 'slick-slider';
import 'jquery-nice-select';

$('.speakers__slider').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 3500,
    speed: 500,
    arrows: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
});

$('.packages__slider').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3500,
    speed: 500,
    arrows: true,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
});

const sliderWhat = $('.what__slider');
const sliderLenght = $('.what__slider > div').length - 1;
let currentSlider;
console.log(sliderLenght);

sliderWhat.slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    arrows: true,
});

sliderWhat.mousewheel(function(e) {
  e.preventDefault();
  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});

$('.media__slider').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    asNavFor: '.media__nav',
});

$('.media__nav').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 6,
    autoplaySpeed: 3500,
    speed: 500,
    arrows: true,
    asNavFor: '.media__slider',
    responsive: [
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            }
          },
      ]
});

$('.popup-youtube').magnificPopup({
    type: 'iframe',
});

$('.popup-btn').click(function () {
    const popupId = $(this).attr('data-popup');
    $('.' + popupId).addClass('modal_open');
    $('body').addClass('open-modal');
    $('html').addClass('locked');
});

$('.popup-close').click(function () {
    $('body').removeClass('open-modal');
    $('.modal').removeClass('modal_open');
    $('html').removeClass('locked');
});

$('.backdrop').click(function () {
    $('body').removeClass('open-modal');
    $('.modal').removeClass('modal_open');
    $('html').removeClass('locked');
});

$('.close-btn').click(function () {
    $('body').removeClass('open-modal');
    $('.modal').removeClass('modal_open');
    $('html').removeClass('locked');
});

$('ul.forum__nav').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.forum__wrapper').find('div.forum__block').removeClass('active').eq($(this).index()).addClass('active');
});

$('.dropdown-nav').click(function () {
    $(this).toggleClass('open');
});

$('.header-mob__burger').click(function () {
    $('body').toggleClass('open-nav');
    $('html').toggleClass('locked');
});

$('.select-init').niceSelect();

$(window).scroll(function() {
    const height = $(window).scrollTop();
    if(height > 100){
    $('.header-mob').addClass('header-fixed');
    } else{
    $('.header-mob').removeClass('header-fixed');
    }
    });