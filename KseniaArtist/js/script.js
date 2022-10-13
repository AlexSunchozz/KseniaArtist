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
// mainDie.addEventListener('click',(i)=> {
//     mainDie.classList.remove('active');
//     burger.classList.remove('active');
//     menu.classList.remove('active');
//     body.classList.remove('lock');
// })
$(document).keydown(function(e) {
    if (e.code === 'Escape') {
        mainDie.classList.remove('active');
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    }
})
//

// СЛАЙДЕР
$(document).ready(function() {
    // СЛАЙДЕР
    $('.religious-slider').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.nav'),
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

const cards = document.querySelectorAll('.painting__container-row-item');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        console.log(card.querySelector('.card-block__a'));
        card.querySelector('.card-block__a').classList.add('active');      
    })
    card.addEventListener('mouseout', () => {
        console.log(card.querySelector('.card-block__a'));
        card.querySelector('.card-block__a').classList.remove('active');      
    })
})

//Табы Об авторе
const navLink = document.querySelectorAll('.tab-container__links a');
navLink.forEach(function(e){
    e.addEventListener('click', (elem)=>{
        elem.preventDefault();
        e.classList.add('active');
        clearNotActiveClass(e);
        document.querySelectorAll('.content-item').forEach( elem => {
            if (e.id == elem.id){
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        })
    })
})
function clearNotActiveClass(e){
    navLink.forEach(value => {
        if (value != e){
            value.classList.remove('active');
        }
    });
}
//Табы внутри табов Об авторе
