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
            },{
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                    
                }
            }
        ]
        // variableWidth: true,
    });
    $('.painting__block-minislider').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: ".painting__block-mainslider"
        // dots: false,
        // adaptiveHeight: true,
        // variableWidth: true,
    });
})