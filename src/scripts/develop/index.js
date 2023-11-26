
function openDrop(){
    $('.section__drop').click(function (){
        $(this).next().toggle(300)
        $(this).toggleClass('section__drop-open')
    })
}

const testimonials = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".testimonials__next",
        prevEl: ".testimonials__prev"
    }
});


const banner = new Swiper('.banner__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,

    pagination: {
        el: '.banner__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".banner__next",
        prevEl: ".banner__prev"
    }
});
function mobChange(){
    if(window.innerWidth <= 666) {

        $('.header__top-block').prepend($('.header__logo'))
        $('.header__block').append($('.header__social'))
        $('.delivery__text h2, .delivery__text h3').wrapAll("<div class='delivery__text-block'></div>")
        $(".footer__item:nth-child(4), .footer__item:nth-child(5)").wrapAll("<div class='footer__item footer__item-mob'></div>");

        //feeback-slider init
        const main = new Swiper('.feedback__slider', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            pagination: {
                el: '.feedback__pagination',
                clickable: true,
            },
        });
        let slidersCount = $('.feedback .swiper-pagination-bullet').length
        $('.feedback .swiper-pagination-bullet').css('width',`calc(100%/${slidersCount})`)
    }


}

function showSideMenu(){
    $(".side__item > *").on("click", function() {
        let tab = $(this).data('tab-name')
        // $('.side__content').hide()
        $(this).toggleClass('active')
        $(this).prev().removeClass('active')
        $(this).next().removeClass('active')
        $('.side__content').each(function (){
            let tabContent = $(this).data('name')
            console.log(12345,tab,tabContent)
            if( tab == tabContent){
                console.log(55555,$(this))
                $(this).toggleClass('show')
                $(this).next().removeClass('show')
                $(this).prev().removeClass('show')
                $(this).find('.side__content-item').toggleClass('flex')
            }
        })
        // $('.side__content').fadeOut(500);
        $('.side__content').animate({left: '-100%'}, 500);
        $('.side__content.show').animate({left: '5.9rem'}, 500);
    });
}
$(document).ready(function(){
    openDrop();
    showSideMenu()
    mobChange()
});

$(window).load(function(){

});

$(window).resize(function(){

});