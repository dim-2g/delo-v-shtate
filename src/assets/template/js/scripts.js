$(function() {
    stepsSlider = function(){
        $('.process__list').not('.slick-initialized').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerPadding: '0px',
            centerMode: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: false,
                    }
                }
            ]
        });
    }
    stepsSlider();

    sertificatySlider = function(){
        $('.sertificaty__list').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
    }
    sertificatySlider();

    $('.toogle-menu').click(function(){
        $('.fly-menu').toggleClass('active');
    });

});
$(window).resize(function(){
    var width = $(window).width();

    stepsSlider();
});