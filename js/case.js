let login = document.querySelector('.login');
let loginPopup = document.querySelector('.login-popup');

login.addEventListener('click', function () {
    loginPopup.classList.add('active');
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
}