$(function() {


    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let navToggle = $("#navToggle");
    let nav = $("#nav");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
        
    });

    function checkScroll(scrollPos, introH) {

        if (scrollPos >= introH - 65) {

            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }

    }

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 65
        }, 300);
        console.log(blockId);

        nav.removeClass("active");
        navToggle.removeClass("active");

        $("[data-scroll]").removeClass("active");
        $(this).addClass("active");
    });


    /* Nav Toggle */


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("active");
        navToggle.toggleClass("active");
    });


    /* Reviews Slick Slider https://kenwheeler.github.io/slick/*/

    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: true
      });
      
});