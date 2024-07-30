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

});
