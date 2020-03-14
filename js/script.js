$(document).ready(function () {
    //getting start menu button from DOM
    const startButton = $('#menu-start');
    const productButton = $('#menu-product');
    const technicalDataButton = $('#menu-technical-data');
    const orderButton = $('#menu-order');
    const contactButton = $('#menu-contact');

    startButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $("header").offset().top
            },
            'slow');
    });

    productButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".product").offset().top
            },
            'slow');
    });

    technicalDataButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".technical-data").offset().top
            },
            'slow');
    });

    orderButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".order").offset().top
            },
            'slow');
    });

    contactButton.on('click', function () {
        $('html,body').animate({
                scrollTop: $(".contact").offset().top
            },
            'slow');
    });
})