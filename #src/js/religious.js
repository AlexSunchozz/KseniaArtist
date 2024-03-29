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

// открытие popup`a
photos.forEach(item => {
    item.addEventListener('click',e => {
        popup.classList.add('show')
        body.classList.add('lock')
        item.classList.add('show')
        popupImg.src = item.src;
        searchDescr(item)
        popupText.innerHTML = searchDescr(item)
    })
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
window.addEventListener('keydown', (event) => {
    if (popup.classList.contains('show')) {
        console.log(event.code)
        if (event.code === 'ArrowRight') {
            goNextPhoto()
        } else if (event.code === 'ArrowLeft') {
            goPrevPhoto()
        } else if (event.code === 'Escape') {
            popupClose()
        }
    }
});


// -------------- SCALING OF WORKS -------------
const images = document.querySelectorAll('.religious-block__item')
let width = parseInt(window.getComputedStyle(body).getPropertyValue('width'))

if (width < 370) {
    resizeImg(9, 2.5)   
} else {
    resizeImg(10)   
}

function resizeImg(kIcon, kMosaic = 3) {
    images.forEach(item => {
        if(item.hasAttribute('data-width') && item.hasAttribute('data-height')) {
            let img = item.querySelector('.religious-block__item-image')
            if (img.classList.contains('icon')) {
                img.style.width = item.getAttribute('data-width') * kIcon + 'px'
                img.style.height = item.getAttribute('data-height') * kIcon + 'px'
            } else if (img.classList.contains('paint')) {
                img.style.width = item.getAttribute('data-width') * kMosaic + 'px'
                img.style.height = item.getAttribute('data-height') * kMosaic + 'px'
            }
        }
    })
}

