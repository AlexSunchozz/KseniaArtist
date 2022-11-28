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


// -------------- POPUP -------------
function searchDescr(photo) {
    const parent = photo.parentElement;
    if (parent.children.length === 1) {
        return searchDescr(parent)
    } else {
        for (let i of parent.children) {
            if (i.classList.contains('descr')) {
                return i.innerHTML
            }
        }
    }
}

function goNextPhoto() {
    let photoIndex = 0;
    var photos = document.querySelectorAll('.show-img img')
    for (let photo of photos) {
        if (photo.classList.contains('show')) {
            break;
        } else {
            photoIndex += 1;
        }
    }
    photos.forEach(i => {
        i.classList.remove('show');
    })
    if (photoIndex === photos.length-1) {
        photos[0].classList.add('show');
    } else {
        photos[photoIndex+1].classList.add('show');
    }
    photos.forEach(i => {
        if (i.classList.contains('show')) {
            popupImg.src = i.src;
            popupText.innerHTML = searchDescr(i)
        }
    })
}

function goPrevPhoto() {
    let photoIndex = 0;
    for (let photo of photos) {
        if (photo.classList.contains('show')) {
            break;
        } else {
            photoIndex += 1;
        }
    }
    photos.forEach(i => {
        i.classList.remove('show');
    })
    if (photoIndex === 0) {
        photos[photos.length-1].classList.add('show');
    } else {
        photos[photoIndex-1].classList.add('show');
    }
    photos.forEach(i => {
        if (i.classList.contains('show')) {
            popupImg.src = i.src;
            popupText.innerHTML = searchDescr(i)
        }
    })
}

function popupClose() {
    popup.classList.remove('show');
    body.classList.remove('lock');
    photos.forEach(item => {
        item.classList.remove('show')
    })
}

const popup = document.querySelector('.popup'),
      popupImg = popup.querySelector('.popup__content .popup__content-img'),
      popupText = popup.querySelector('.popup__content .popup__content-text'),
      photos = document.querySelectorAll('.show-img img')

document.addEventListener('click', e => {
    console.log('TARGET: ', e.target)
    if (e.target.parentElement.classList.contains('show-img')) {
        console.log('ARFAADFASAaS')
        popup.classList.add('show')
        body.classList.add('lock')
        e.target.classList.add('show')
        popupImg.src = e.target.src;
        popupText.innerHTML = searchDescr(e.target)
    }
})

// переходы и закрытие
popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__arrow-next') || e.target.parentElement == popup.querySelector('.popup__arrow-next')) {
        goNextPhoto()
    } else if (e.target.classList.contains('popup__arrow-prev')  || e.target.parentElement == popup.querySelector('.popup__arrow-prev')) {
        goPrevPhoto()
    } else if (e.target.classList.contains('popup-close')  || e.target.parentElement == popup.querySelector('.popup-close')) {
        popupClose()
    }
})

// переходы и закрытие (клавиатура)
// window.addEventListener('keydown', (event) => {
//     if (popup.classList.contains('show')) {
//         console.log(event.code)
//         if (event.code === 'ArrowRight') {
//             goNextPhoto()
//         } else if (event.code === 'ArrowLeft') {
//             goPrevPhoto()
//         } else if (event.code === 'Escape') {
//             popupClose()
//         }
//     }
// });

// -------------- SLIDERS -------------
$(document).ready(function() {
    // СЛАЙДЕР
    $('.painting__block-mainslider_p').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: ".painting__block-minislider_p",
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
    $('.painting__block-minislider_p').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider_p",
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

    $('.painting__block-mainslider_i').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: ".painting__block-minislider_i",
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
    $('.painting__block-minislider_i').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider_i",
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

    $('.painting__block-mainslider_n').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: ".painting__block-minislider_n",
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
    $('.painting__block-minislider_n').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider_n",
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

    $('.painting__block-mainslider_m').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: ".painting__block-minislider_m",
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
    $('.painting__block-minislider_m').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider_m",
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

    $('.painting__block-mainslider_f').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: ".painting__block-minislider_f",
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
    $('.painting__block-minislider_f').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider_f",
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

$('.painting__block-mainslider_p').on('afterChange', function(event, slick, currentSlide, nextSlide){
    const blocks = document.querySelectorAll('.painting__block-item')
    console.log(blocks[currentSlide].children[0])
    blocks.forEach(item => {
        if(!item.classList.contains('slick-current')) {
            item.children[0].classList.remove('show-img')
            item.children[1].classList.remove('descr')
        } else {
            item.children[0].classList.add('show-img')
            item.children[1].classList.add('descr')
        }
    })
});

$('.painting__block-mainslider_i').on('afterChange', function(event, slick, currentSlide, nextSlide){
    const blocks = document.querySelectorAll('.painting__block-item')
    console.log(blocks[currentSlide].children[0])
    blocks.forEach(item => {
        if(!item.classList.contains('slick-current')) {
            item.children[0].classList.remove('show-img')
            item.children[1].classList.remove('descr')
        } else {
            item.children[0].classList.add('show-img')
            item.children[1].classList.add('descr')
        }
    })
});

$('.painting__block-mainslider_n').on('afterChange', function(event, slick, currentSlide, nextSlide){
    const blocks = document.querySelectorAll('.painting__block-item')
    console.log(blocks[currentSlide].children[0])
    blocks.forEach(item => {
        if(!item.classList.contains('slick-current')) {
            item.children[0].classList.remove('show-img')
            item.children[1].classList.remove('descr')
        } else {
            item.children[0].classList.add('show-img')
            item.children[1].classList.add('descr')
        }
    })
});

$('.painting__block-mainslider_m').on('afterChange', function(event, slick, currentSlide, nextSlide){
    const blocks = document.querySelectorAll('.painting__block-item')
    console.log(blocks[currentSlide].children[0])
    blocks.forEach(item => {
        if(!item.classList.contains('slick-current')) {
            item.children[0].classList.remove('show-img')
            item.children[1].classList.remove('descr')
        } else {
            item.children[0].classList.add('show-img')
            item.children[1].classList.add('descr')
        }
    })
});

$('.painting__block-mainslider_f').on('afterChange', function(event, slick, currentSlide, nextSlide){
    const blocks = document.querySelectorAll('.painting__block-item')
    console.log(blocks[currentSlide].children[0])
    blocks.forEach(item => {
        if(!item.classList.contains('slick-current')) {
            item.children[0].classList.remove('show-img')
            item.children[1].classList.remove('descr')
        } else {
            item.children[0].classList.add('show-img')
            item.children[1].classList.add('descr')
        }
    })
});


// -------------- LEFT FIXED NAVBAR -------------
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