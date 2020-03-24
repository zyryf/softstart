
$(document).ready(function () {
    //getting start menu button from DOM
    const startButton = $('#menu-start');
    const productButton = $('#menu-product');
    const technicalDataButton = $('#menu-technical-data');
    const orderButton = $('#menu-order');
    const contactButton =  document.querySelector('#menu-contact');
    const navigation = document.querySelector('.navigation');
    const hamburger =  document.querySelector('.hamburger');


    startButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $("header").offset().top
            },
            'slow');
            navigation.classList.toggle('nav--active');
            navigation.classList.toggle('navigation');
            hamburger.classList.toggle('hamburger--active');
    });

    productButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".product").offset().top
            },
            'slow');
            navigation.classList.toggle('nav--active');
            navigation.classList.toggle('navigation');
            hamburger.classList.toggle('hamburger--active');
    });

    technicalDataButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".technical-data").offset().top
            },
            'slow');
            navigation.classList.toggle('nav--active');
            navigation.classList.toggle('navigation');
            hamburger.classList.toggle('hamburger--active');
    });

    orderButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".order").offset().top
            },
            'slow');
            navigation.classList.toggle('nav--active');
            navigation.classList.toggle('navigation');
            hamburger.classList.toggle('hamburger--active');
    });

    contactButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".contact").offset().top
            },
            'slow');
            navigation.classList.toggle('nav--active');
            navigation.classList.toggle('navigation');
            hamburger.classList.toggle('hamburger--active');
    });
})