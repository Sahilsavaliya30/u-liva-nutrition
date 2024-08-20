new WOW().init();
var $ = jQuery.noConflict();
jQuery(document).ready(function ($) {

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
});