$(document).ready(function ($) {

    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });

    $(".has-submenu").hover(
        function () {
            $('.mega-menu ul').stop().slideDown(0);
            $("body").addClass("menu-open");

        },
        function () {
            $("body").removeClass("menu-open");
            $('.mega-menu ul').stop().slideUp(100);
        });

    //banner-slider 
    if ($('.zigzag-slider-wrapper').length) {
        var zigzag_swiper = new Swiper(".zigzag-swiper", {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: false,
            // effect: "fade",
            speed: 2500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            fadeEffect: {
                crossFade: true
            },
        });
    }

});
