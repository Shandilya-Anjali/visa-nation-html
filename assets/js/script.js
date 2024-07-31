$(document).ready(function ($) {
     // Responsive menu start
    //  (function ($) {
    //     $.fn.menumaker = function (options) {
    //         var cssmenu = $(this),
    //             settings = $.extend({
    //                 format: "dropdown",
    //                 sticky: false
    //             }, options);
    //         return this.each(function () {
    //             $(this).find(".navbar-toggler").on('click', function () {
    //                 $(this).toggleClass('menu-opened');
    //                 var mainmenu = $(this).next('#menu-main-menu');
    //                 if (mainmenu.hasClass('open')) {
    //                     mainmenu.slideToggle().removeClass('open');
    //                 } else {
    //                     mainmenu.slideToggle().addClass('open');
    //                     if (settings.format === "dropdown") {
    //                         mainmenu.find('#menu-main-menu').show();
    //                     }
    //                 }
    //             });
    //             cssmenu.find('li ul.sub-menu, li ul.sub-inner-menu').parent().addClass('has-sub');
    //             function multiTg() {
    //                 cssmenu.find(".has-sub").prepend('<span class="submenu-button"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50495 5.64494L0.20524 1.3451C-0.0684144 1.07157 -0.0684144 0.628106 0.20524 0.354717C0.478651 0.0813054 0.922098 0.0813054 1.19549 0.354717L5.00007 4.15941L8.80452 0.354827C9.07805 0.081416 9.52145 0.081416 9.79486 0.354827C10.0684 0.628238 10.0684 1.07168 9.79486 1.34521L5.49508 5.64505C5.35831 5.78175 5.17925 5.85003 5.00009 5.85003C4.82085 5.85003 4.64165 5.78162 4.50495 5.64494Z"/></svg></span>');
    //                 cssmenu.find('.submenu-button').on('click', function () {
    //                     if ($(this).hasClass('submenu-opened')) {
    //                         cssmenu.find('.submenu-button').removeClass('submenu-opened');

    //                     } else {
    //                         cssmenu.find('.submenu-button').removeClass('submenu-opened');
    //                         $(this).addClass('submenu-opened');
    //                     }

    //                     if ($(this).siblings('ul').hasClass('open')) {
    //                         cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
    //                         cssmenu.find('.submenu-button').siblings('a').removeClass('active');
    //                     } else {
    //                         cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
    //                         cssmenu.find('.submenu-button').siblings('a').removeClass('active');
    //                         $(this).siblings('ul').addClass('open');
    //                         $(this).siblings('a').addClass('active');
    //                     }
    //                 });
    //                 cssmenu.find('a').on('click', function () {
    //                     if ($(this).attr('href') == '#') {

    //                         $(this).siblings('span').toggleClass('submenu-opened');
    //                         if ($(this).siblings('ul').hasClass('open')) {
    //                             $(this).siblings('ul').removeClass('open');
    //                         } else {
    //                             $(this).siblings('ul').addClass('open');
    //                         }
    //                     }
    //                 });
    //             };

    //             if (settings.format === 'multitoggle') multiTg();
    //             else cssmenu.addClass('dropdown');
    //             if (settings.sticky === true) cssmenu.css('position', 'fixed');
    //             function resizeFix() {
    //                 var mediasize = 1199.9;
    //                 if ($(window).width() > mediasize) {
    //                     cssmenu.find('ul').addClass('open');
    //                 }
    //                 if ($(window).width() <= mediasize) {
    //                     cssmenu.find('ul').removeClass('open');
    //                 }
    //             };

                
    //             resizeFix();
    //             return $(window).on('resize', resizeFix);
    //         });
    //     };
    // })($);
// Responsive menu end
    
    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });

    $(".navbar-toggler").click(function () {
        $('.nav-bar').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Toggle dropdown menu on click
    $(".nav-bar ul li.has-submenu").click(function() {
        var $dropdown = $(this).children(".sub-menu");

        // Close other dropdowns
        $(".nav-bar ul li.has-submenu").not(this).removeClass("active")
            .children(".sub-menu").slideUp();

        // Toggle active class and slide current dropdown
        $(this).toggleClass("active");
        $dropdown.stop().slideToggle();
    });

    // Toggle inner dropdown on click
    $(".sub-menu .mega-menu__right .menu-item ").click(function(event) {
        event.stopPropagation(); // Prevent dropdown from closing when inner dropdown is clicked
        $(this).toggleClass("open");

    });

    // Close dropdown when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.nav-bar ul li.has-submenu').length) {
            $(".nav-bar ul li.has-submenu ").removeClass("active")
                .children(".sub-menu").slideUp();
        }
    });

    // $(".nav-bar").menumaker({
    //     title: "Menu",
    //     format: "multitoggle"
    // });

    //banner-slider 
    if ($('.zigzag-slider-wrapper').length) {
        var zigzag_swiper = new Swiper(".zigzag-swiper", {
            slidesPerView: 1,
            spaceBetween: 88,
            slideShadows: false,
            loop: false,
            // effect: "fade",
            speed: 2500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slideShadows: false,
            fadeEffect: {
                crossFade: true
            },
        });
    }

    // Function to toggle accordion items
    function toggleAccordion($this) {
        var $content = $this.siblings(".accordion-content");
        var $plusIcon = $this.find(".plus");
        var $minusIcon = $this.find(".minus");

        if ($this.hasClass("active")) {
            $this.removeClass("active");
            $content.slideUp(200);
            $plusIcon.show();
            $minusIcon.hide();
        } else {
            $(".accordion-item > a").removeClass("active").find(".plus").show().siblings(".minus").hide();
            $(".accordion-content").slideUp(200);

            $this.addClass("active");
            $content.slideDown(200);
            $plusIcon.hide();
            $minusIcon.show();
        }
    }

    $(".accordion-item > a").on("click", function (e) {
        e.preventDefault(); // Prevent the default action of the link
        toggleAccordion($(this));
    });

    // Initialize: Hide all minus icons, show first accordion item
    $(".minus").hide();
    $(".accordion-content").slideUp(200);
    var $firstAccordion = $(".accordion-item:first > a");
    $firstAccordion.addClass("active").siblings(".accordion-content").slideDown(200);
    $firstAccordion.find(".plus").hide().siblings(".minus").show();


    
    
    
});

//counter
let count = document.querySelectorAll(".counter")
let arr = Array.from(count)

arr.map(function (item) {
    let startnumber = 0

    function counterup() {
        startnumber++
        item.innerHTML = startnumber

        if (startnumber == item.dataset.number) {
            clearInterval(stop)
        }
    }

    let stop = setInterval(function () {
        counterup()
    }, 2)

})