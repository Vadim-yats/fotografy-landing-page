$(function () {


    $('.header__slider').slick({
        fade: true,
        speed: 900,
        autoplay: 4000,
        arrows: false,
    });


    $('.slider-item__info-menu').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });

    new WOW().init();

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'reviews-dots',
    });

});
