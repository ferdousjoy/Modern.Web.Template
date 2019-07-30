$(function ($) {
    'use strict';

    //    Progress bar
    $(document).ready(function () {
        $('#bar1').barfiller();
    });
    $(document).ready(function () {
        $('#bar2').barfiller();
    });
    $(document).ready(function () {
        $('#bar3').barfiller();
    });
    $(document).ready(function () {
        $('#bar4').barfiller();
    });
    $(document).ready(function () {
        $('#bar5').barfiller();
    });

    //    Filterizr start
    $('.filtr-container').filterizr();

    //    VenuBox plugin start
    $('.venobox').venobox();

    //    Counter plugin start
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });



    //testimonial part plugin

    $('.slide_testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        nextArrow: false,
        prevArrow: false,
        infinite: true,
    });

    //    client part plugin

    $('.client_slider').slick({
        slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		autoplaySpeed: 2000,
		infinite: true,
		
    });





});
