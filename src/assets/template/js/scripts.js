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
        var header = $('.header__body');
        menu_top = header.position().top + header.outerHeight();
        $('.fly-menu').css({'top':menu_top}).toggleClass('active');
    });

    $('.toogle-search').click(function(){
        $('.fly-search').toggleClass('active');
    });


    $('.open-popup-link').magnificPopup({
        type:'inline'
    });

    collapseReview = function(num_def=3){
        if ($(window).width()<750){
            //сворачиваем отзывы
            review_count = $('.review__item').length;
            if (review_count>num_def) {
                $('.review__item').each(function(ind){
                    indx = ind+1;
                    if (indx>num_def){
                        $(this).addClass('review__item--hidden');
                    }
                });
                $('.review__more').addClass('active');
            }

        }else{
            //разворачиваем отзывы
            $('.review__item').removeClass('review__item--hidden');
            $('.review__more').removeClass('active');
        }
        return true;
    }
    collapseReview(3);

    showReview = function(num_def=3){
        reviews = $('.review__item--hidden');
        review_count = reviews.length;
        if (review_count){
            reviews.each(function(ind){
                indx = ind;
                if (indx<num_def){
                    $(this).removeClass('review__item--hidden');
                }
            });
        }

        review_count = $('.review__item--hidden').length;
        if (!review_count){
            $('.review__more').removeClass('active');
        }


    }

    $('.review-more').click(function(){
        showReview(3);
        return false;
    });

    //заадем высоту хедеру, чтобы при установки позиции фиксед не дергался сайт
    setHeightHeader = function(){
        var header_height = $('.header').outerHeight();
        $('.header').css({'min-height':header_height});
    }
    setHeightHeader();


});
$(window).resize(function(){
    var width = $(window).width();
    //collapseReview(1);
    stepsSlider();

});

setFixedHeader = function(){
    var header = $('.header__body');
    var header_relative = $('.header__body').not('.slideTop');
    var relative_bottom = 0;
    if (header_relative.length>0){
        relative_bottom = header_relative.offset().top + header_relative.outerHeight();
    }
    var scroll = $(window).scrollTop();
    if ((relative_bottom+50)<scroll) {
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
    //чтобы плавно выезжал
    if (relative_bottom<scroll) {
        header.addClass('slideTop');
    }else{
        header.removeClass('slideTop');
    }
};


$(document).scroll(function(){
    setFixedHeader();
});