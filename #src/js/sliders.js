$(document).ready(function() {
    // СЛАЙДЕР
    $('.painting__block-mainslider').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: ".painting__block-minislider",
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    fade: false,
                }
            },
        ]
    });
    $('.painting__block-minislider').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider",
        focusOnSelect: true, 
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,

                }
            }
        ]
    });
    // якорные ссылки
    $('a[href^="#"].anchor').click(function(){ 
        let anchor = $(this).attr('href'); 
        $('html, body').animate({          
        scrollTop:  ($(anchor).offset().top - 75)  
        }, 600);               
    });
})

const nav = document.querySelector('.navigation');
nav.childNodes.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
})
document.addEventListener('click',(e) => {
    if (!e.target.classList.contains('navi')) {
        nav.classList.remove('active');
    }
})

const navShow = setTimeout(() => {
    nav.classList.add('active');
}, 1000)
const navClose = setTimeout(() => {
    nav.classList.remove('active');
}, 3000)

// let touchStartX = 0
// let touchStartY = 0
// let touchEndX = 0
// let touchEndY = 0
    
// function checkDirection() {
//     if (touchEndX < touchStartX) {
//         nav.classList.add('active');
//     }
//     if (touchEndX > touchStartX) {
//         nav.classList.remove('active');
//     }
// }

// document.addEventListener('touchstart', e => {
//     touchStartX = e.changedTouches[0].screenX;
// })

// document.addEventListener('touchend', e => {
//     touchEndX = e.changedTouches[0].screenX;
//     checkDirection()
// })