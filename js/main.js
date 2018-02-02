//Open login popup//
let login = document.querySelector('.login');
let loginPopup = document.querySelector('.login-popup');

login.addEventListener('click', function () {
   loginPopup.classList.add('active');
});

//Open data-analytics popup//
let dataAnalytics = document.querySelector('ul li.data-analytics');
let dataAnalyticsPopup = document.querySelector('.data-analytics_popup');

dataAnalytics.addEventListener('click', function () {
   dataAnalyticsPopup.classList.add('active');
});

//Open mobile menu//
let menuButton = document.querySelector('.mobile-menu');
let mobileMenuPopup = document.querySelector('nav');
let close = document.querySelectorAll('.close');
menuButton.addEventListener('click', () =>{
    mobileMenuPopup.classList.add('active')
});

for (let i = 0; i<close.length; i++){
    close[i].onclick = closePopup
}

function closePopup() {
    mobileMenuPopup.classList.remove('active');
    loginPopup.classList.remove('active');
    dataAnalyticsPopup.classList.remove('active');
}


//For bx-slider//
$(document).ready(function(){
    $('.slider').bxSlider({
        slideWidth: 378,
        minSlides:1,
        maxSlides: 3,
        shrinkItems: true,
        slideMargin:18,
        moveSlides: 1,
        responsive: true,
        adaptiveHeight: true,
    });

    $('.slider-second').bxSlider({
        slideWidth: 600,
        minSlides:1,
        maxSlides: 3,
        adaptiveHeight: true,
        shrinkItems: true,
        responsive: true,
        slideMargin:18,
        moveSlides: 1,
    });
});

let play = document.querySelector('#overlay');
let vid = document.querySelector('#video');


//Play video onclick
function videoPlay () {
    vid.play();
    vid.controls = 'true';
    play.style.display = 'none'
}