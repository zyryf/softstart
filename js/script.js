$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow");

  //getting start menu button from DOM
  const startButton = $("#menu-start");
  const productButton = $("#menu-product");
  const downloadButton = $("#menu-download");
  const technicalDataButton = $("#menu-technical-data");
  const contactButton = $("#menu-contact");
  const navigation = document.querySelector(".navigation");
  const hamburger = document.querySelector(".hamburger");
  const logoMobile = $(".logo-mobile");

  function turn_Off_Mobile_Nav_Bar() {
    if (document.body.clientWidth < 1000) {
      navigation.classList.toggle("nav--active");
      navigation.classList.toggle("navigation");
      hamburger.classList.toggle("hamburger--active");
    }
  }

  logoMobile.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      "slow"
    );
  });

  startButton.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      "slow"
    );
    turn_Off_Mobile_Nav_Bar();
  });

  productButton.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(".product").offset().top,
      },
      "slow"
    );
    turn_Off_Mobile_Nav_Bar();
  });

  downloadButton.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(".download").offset().top,
      },
      "slow"
    );
    turn_Off_Mobile_Nav_Bar();
  });

  technicalDataButton.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(".technical-data").offset().top,
      },
      "slow"
    );
    turn_Off_Mobile_Nav_Bar();
  });

  contactButton.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(".contact").offset().top,
      },
      "slow"
    );
    turn_Off_Mobile_Nav_Bar();
  });
});
