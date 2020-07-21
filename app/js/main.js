$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-dots',
    // asNavFor:'.header__map'
  });
  $('.slider-dots').slick({
    asNavFor: '.header__slider',
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true
  });
  $('.swamps-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider__map'
  });
  $('.slider__map').slick({
    asNavFor: '.swamps-slider',
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true
  })
});


// часы
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()=>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

let digitHour = document.querySelector('.digit-hour');
let digitMinutes = document.querySelector('.digit-minutes');
let digitSeconds = document.querySelector('.digit-seconds');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

digitHour.innerHTML = h+':';
digitMinutes.innerHTML = m+':';
digitSeconds.innerHTML = s;

if(h < 10){
  digitHour.innerHTML = "0"+h+':';
}
if(m < 10){
  digitMinutes.innerHTML = "0"+m+':';
}
if(s < 10){
  digitSeconds.innerHTML = "0"+s;
}
})

// swiper------------------
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : true,
  },
 loop: true,
});


// плавный скролл до якоря
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


// прелоадер---------------------
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 200);
}


// progress-bar--------------------------------------------

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;

  progress.style.height = per + '%';

}


// back-to-top--------------------------------------------
function btnToTop() {
  let button = $('.btn-totop');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 100) {
      button.fadeIn();
    }
    else {
      button.fadeOut();
    }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 500);
  })
}

btnToTop();


// radiobuttons--------------------

let changeLanguage = document.querySelector('.change__language');
let en = document.querySelector('.en');
let westColor = document.querySelector('#west-color');
let eastColor = document.querySelector('#east-color');
let nordColor = document.querySelector('#nord-color');
let southColor = document.querySelector('#south-color');
let headerAside = document.querySelector('#header__aside');
let contBg = document.querySelector('body');
let headerBg = document.querySelector('.header');
let colorThemeBg = document.querySelectorAll('.color-theme-bg');
let colorThemeBorder = document.querySelectorAll('.color-theme-border')
let sliderDotsContent = document.querySelectorAll('.slider__dots-content');
let colorThemeShadow = document.querySelectorAll('.color-theme-shadow');
let slickCurrent = document.querySelector('.slick-current');
let sliderItemInfoTitle = document.querySelector('.slider-item__info-title');



changeLanguage.onclick = () => {
  if (changeLanguage.checked) {
    sliderItemInfoTitle.innerHTML = ('EAST SWAMPS');
    en.style.color = '#fff';
    en.style.textShadow = '0 0 5px #fff, 0 0 15px #fff';
  }
  else{
    sliderItemInfoTitle.innerHTML = ('западные болота');
    en.style.textShadow = 'none';
    en.style.color = 'rgba(255, 255, 255, 0.7)';
  }
}

westColor.onclick = () => {
  if (westColor.checked) {
    let style = document.getElementById("style")
    if (westColor.checked) {
    style.href = "../css/west-color-theme.min.css";
    }

  }
}

eastColor.onclick = () => {
  let style = document.getElementById("style")
  if (eastColor.checked) {
  style.href = "../css/green-color-theme.min.css";
  }
  else{
    
  }
}

nordColor.onclick = () => {
  let style = document.getElementById("style")
  if (nordColor.checked) {
  style.href = "../css/nord-color-theme.min.css";
  }
  else{
    
  }
}

southColor.onclick = () => {
  // if (southColor.checked) {
  //  headerAside.style.backgroundColor = 'rgba(250, 145, 72, 0.2)';
  //  contBg.style.backgroundColor = '#27211d';
  //  headerBg.style.backgroundImage = 'url(../img/2618137.jpg)';
 
  // colorThemeBg.forEach(element =>{
  //   element.style.backgroundColor = '#fa9148';
  // });

  // sliderDotsContent.forEach(element =>{
  //   element.style.backgroundColor = 'rgba(250,145,72, 0.5)';
  //   element.style.border = '1px solid #FA9148'
  // });

  // colorThemeBorder.forEach(element =>{
  //   element.style.border = '1px solid #FA9148'
  // });

  // colorThemeShadow.forEach(element =>{
  //   element.style.boxShadow = '0px 0px 35px rgba(231, 174, 133, 0.8)';
  // });

  // }
  let style = document.getElementById("style")
  if (southColor.checked) {
  style.href = "../css/south-color-theme.min.css";
  }
  else{
    
  }
}



// aos----------------------------
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  