const burger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

// slider on index
// СЛАЙДЕР
$(document).ready(function() {
    // СЛАЙДЕР
    $('.religious-slider').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('#slider-nagigation'),
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
        speed: 900, 
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})