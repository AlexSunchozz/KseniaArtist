const burger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      body = document.body;
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

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