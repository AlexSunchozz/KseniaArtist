const burger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})