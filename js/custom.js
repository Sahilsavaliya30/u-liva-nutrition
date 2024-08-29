new WOW().init();
var $ = jQuery.noConflict();
jQuery(document).ready(function ($) {

    function appHeight() {
        let header = document.querySelector('header');
        document.documentElement.style.setProperty(
            "--header-height",
            `${header.offsetHeight}px`
        );
    }
    appHeight();
    $(window).resize(function () {
        appHeight();
    });

    $(".menu-icon").click(function () {
        $(this).toggleClass("menu-close");
        $(".navigation-bar").toggleClass("slide-menu");
        $("body").addClass("body-fixed");
    });

    $(".sidebar-overlay, .close-menu").click(function () {
        $(".menu-icon").removeClass("menu-close");
        $(".navigation-bar").removeClass("slide-menu");
        $("body").removeClass("body-fixed");
    });

    var header_height = $(".header-main").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $(".header-main").addClass("has-sticky");
            $("body").addClass("sticky-header");
            $("body").css("padding-top", header_height);
        } else {
            $(".header-main").removeClass("has-sticky");
            $("body").removeClass("sticky-header");
            $("body").css("padding-top", 0);
        }
    });

    $(".latest-blog-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    });

    $(".product-highlight-silder").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: '.product-highlight-arrow',
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });

    $(".certification-img-wrapper").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
        ],
    });
});