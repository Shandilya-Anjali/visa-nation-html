$(document).ready(function ($) {


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
    $(".nav-bar ul li.has-submenu").click(function () {
        var $dropdown = $(this).children(".sub-menu");

        // Close other dropdowns
        $(".nav-bar ul li.has-submenu").not(this).removeClass("active")
            .children(".sub-menu").slideUp();

        // Toggle active class and slide current dropdown
        $(this).toggleClass("active");
        $dropdown.stop().slideToggle();
    });

    // Toggle inner dropdown on click
    $(".sub-menu .mega-menu__right .menu-item ").click(function (event) {
        event.stopPropagation(); // Prevent dropdown from closing when inner dropdown is clicked
        $(this).toggleClass("open");

    });

    // Close dropdown when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest('.nav-bar ul li.has-submenu').length) {
            $(".nav-bar ul li.has-submenu ").removeClass("active")
                .children(".sub-menu").slideUp();
        }
    });


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