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
    if (e.target.classList.contains('popup__arrow-next')) {
        goNextPhoto()
    } else if (e.target.classList.contains('popup__arrow-prev')) {
        goPrevPhoto()
    } else if (e.target.classList.contains('popup-close')) {
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
const images = document.querySelectorAll('.mosaic-block__item')

let width = parseInt(window.getComputedStyle(body).getPropertyValue('width')),

if (width < 1000 && width > 900) {
    resizeImg(Math.floor(parseInt(width)/100) * 1.3)   
} else if (width <= 900 && width > 700) {
    resizeImg(Math.floor(parseInt(width)/100) * 1.5)   
} else if(width <= 700 && width > 400) {
    resizeImg(Math.floor(parseInt(width)/100) * 2)   
} else if (width < 400 ) {
    resizeImg(Math.floor(parseInt(width)/100) * 2.5)   
} else {
    resizeImg(Math.floor(parseInt(width)/100))   
}



// window.addEventListener('resize', e => {
//     width = window.getComputedStyle(body).getPropertyValue('width')
//     if (parseInt(width) <= 1000) {
//         resizeImg(Math.floor(parseInt(width)/100) * 1.5)
//     }
//     resizeImg(Math.floor(parseInt(width)/100))
// })


function resizeImg(k) {
    images.forEach(item => {   
        if(item.hasAttribute('data-width') && item.hasAttribute('data-height')) {
            let img = item.querySelector('.mosaic-block__item-image')
    
            if(item.parentElement.classList.contains('solo')) {
                const container = document.querySelector('.mosaic-container')
                if (item.getAttribute('data-width') * k < parseInt(window.getComputedStyle(container).getPropertyValue('width'))) {
                    img.style.width = item.getAttribute('data-width') * k + 'px'
                    img.style.height = item.getAttribute('data-height') * k + 'px'
                }
            } else {
                img.style.width = item.getAttribute('data-width') * k + 'px'
                img.style.height = item.getAttribute('data-height') * k + 'px'
            }
        }
    })
}

