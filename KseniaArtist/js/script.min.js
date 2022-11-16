// const { active } = require("browser-sync");

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
//
// $(document).keydown(function(e) {
//     if (e.code === 'Escape') {
//         mainDie.classList.remove('active');
//         burger.classList.remove('active');
//         menu.classList.remove('active');
//         body.classList.remove('lock');
//     }
// })
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
    $('a[href^="#"].anchor').click(function(){ 
        let anchor = $(this).attr('href'); 
        $('html, body').animate({          
        scrollTop:  ($(anchor).offset().top - 75)  
        }, 600);               
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
            if (e.getAttribute('href').slice(1) == elem.id){
                elem.classList.add('active','fade');
            } else {
                elem.classList.remove('active','fade');
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
const navContentAbout = document.querySelectorAll('.tab-container__content-links a');
navContentAbout.forEach(element => {
    element.addEventListener('click',(e)=>{e.preventDefault();})
    element.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        clearNotActiveClassNavContentAbout(e.target)
        let href = e.target.getAttribute('href').slice(1);
        if(e.target.classList.contains('active')){
            document.querySelectorAll('.content-image__block').forEach((elem)=>{
                if(elem.id == href){
                    
                    elem.classList.add('active','fade')

                } else {
                    elem.classList.remove('active', 'fade')
                }
            })
        }
        checkNonActiveTabBlock()
    })
});

function checkNonActiveTabBlock(){
    document.querySelectorAll('.content-item').forEach(elem=>{
        if (getComputedStyle(elem).display == 'none'){
            elem.childNodes[1].childNodes[1].classList.add('active')
            elem.childNodes[3].childNodes[1].classList.add('active')
        }
    })
}
function clearNotActiveClassNavContentAbout(e){
    navContentAbout.forEach(value => {
        if (value != e){
            value.classList.remove('active');
        }
    });
}

//Sticky блок и хеддер
const   activeTabBlock = document.querySelectorAll('.content-item'),
        containerTab = document.querySelector('.exhibitions__tab-container');

function addSticky(){
    posElem = containerTab.getBoundingClientRect().top;
    activeTabBlock.forEach(e=>{
        if (e.classList.contains('active')){
            const elemSticky = e.childNodes[3];
            if (posElem < 200){
                elemSticky.classList.add('sticky');
                
                document.querySelector('header').classList.add('hide');
        
            } else {
                elemSticky.classList.remove('sticky');
                document.querySelector('header').classList.remove('hide');
            }
        
            if (Math.abs(e.getBoundingClientRect().top) == e.ofsetHeight || (elemSticky.getBoundingClientRect().bottom <= elemSticky.clientHeight/2)){
                document.querySelector('header').classList.remove('hide')
            }
        }
    })
    
}
window.addEventListener('scroll', addSticky)
//

//Табы 768px
const tabsItemsSelect = $('.mobile-content__items')
    function clearNotActiveClassSelect(e){
        tabsItemsSelect.each(function(i, value){
            if (value != e){
                $(value).removeClass('active')
            }
        })
    }
    document.querySelector('.mobile-content__items').addEventListener('click',(e)=>{
        e.target.classList.toggle('active')
        if (e.target.classList.contains('active')){
            document.querySelector('.arrow').classList.add('active')
        } else {
            document.querySelector('.arrow').classList.remove('active')
        }
    })

    tabsItemsSelect.change(function(i){
        i.preventDefault()
        $(i.target).addClass('active')
        clearNotActiveClassSelect(i.target)
        if ($(i.target).hasClass('active')) {
            $('.mobile-content__list').each(function(index, value){
                if (value.id == i.target.value){
                    $(value).addClass('active')
                } else { $(value).removeClass('active')}
            })
        } 
    })
//


