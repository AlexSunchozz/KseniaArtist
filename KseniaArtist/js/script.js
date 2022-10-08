const burger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

// slider on index
// СЛАЙДЕР
$('.religious-slider').slick({
    centerMode: true,
    // centerPadding: '80px',
    slidesToShow: 3,
    // adaptiveHeight: true,
    // variableWidth: true,
});