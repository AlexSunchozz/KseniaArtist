const burger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      body = document.body,
      mainDie = document.querySelector('.main-die');

// Бургер
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    mainDie.classList.toggle('active');
})
//

// Плашка при открытии меню на планшетах
mainDie.addEventListener('click',(i)=> {
    mainDie.classList.remove('active');
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
})
$(document).keydown(function(e) {
    if (e.code === 'Escape') {
        mainDie.classList.remove('active');
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    }
})
//

// slider on index
// СЛАЙДЕР
$('.religious-slider').slick({
    // infinite: false,
    // centerMode: true,
    // centerPadding: '80px',
    slidesToShow: 3,
    // adaptiveHeight: true,
    // variableWidth: true,
});