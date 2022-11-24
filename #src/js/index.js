'use strict'

// -------------- MENU BURGER -------------
const burger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      body = document.body,
      mainDie = document.querySelector('.main-die');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    mainDie.classList.toggle('active');
})

// -------------- SLIDER -------------
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
    $('a[href^="#"].anchor').click(function(){ 
        let anchor = $(this).attr('href'); 
        $('html, body').animate({          
        scrollTop:  ($(anchor).offset().top - 75)  
        }, 600);               
    });
})

// -------------- PAINTING CARDS HOVER -------------
const paintingCards = document.querySelectorAll('.painting__container-row-item');
paintingCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.card-block__a').classList.add('active');      
    })
    card.addEventListener('mouseout', () => {
        card.querySelector('.card-block__a').classList.remove('active');      
    })
})