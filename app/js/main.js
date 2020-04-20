$(function(){
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor:'.slider-dots',
    // asNavFor:'.header__map'
  });
  $('.slider-dots').slick({
    asNavFor:'.header__slider',
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
  focusOnSelect: true
  })
  // $('.header__map').slick({
  //   asNavFor:'.header__slider',
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // })
});