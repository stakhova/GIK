
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

function dropMenu(){
    let dropMenu = $('.header__drop-menu .header__drop-btn')
    let dropSubmenu = ('.header__drop-btn-wrap .header__drop-btn')

    dropMenu.click(function (){
      let submenu = $(this).closest('.header__drop').find('.header__drop-wrap')
      $('.header__drop-list').removeClass('show')
      if($(this).hasClass('header__drop-btn-open')){
          $(this).removeClass('header__drop-btn-open')
      } else{
          $('.header__drop-btn').removeClass('header__drop-btn-open')
          $(this).addClass('header__drop-btn-open')
      }
      if(submenu.hasClass('show')){
            submenu.removeClass('show')
      }else{
          $('.header__drop-wrap').removeClass('show')
          submenu.addClass('show')
      }
    })

    $(document).on('click', dropSubmenu, function (){
        let submenu = $(this).closest('.header__drop-item').find('.header__drop-list')
        if($(this).hasClass('header__drop-btn-open')){
            $(this).removeClass('header__drop-btn-open')
        } else{
            $('.header__drop-content .header__drop-btn').removeClass('header__drop-btn-open')
            $(this).addClass('header__drop-btn-open')
        }
        if(submenu.hasClass('show')){
            submenu.removeClass('show')
        }else{
            $('.header__drop-list').removeClass('show')
            submenu.addClass('show')
        }
    })
}

function openMenu() {
    // $(this).toggleClass("header__burger-open");
    $('.header').toggleClass('header__show');
    $('body').toggleClass('hidden');
    $('.header__back').toggleClass('header__back-show')
};
function mobileChange(){

    if(window.innerWidth <= 666) {
        $('.header__drop-item').each(function (){
            $(this).append('<div class="header__drop-btn-wrap"><button class="header__drop-btn"></button></div>')
        })
        $('.header__block').append($('.header__social'))
        $('.delivery__text h2, .delivery__text h3').wrapAll("<div class='delivery__text-block'></div>")
        $(".footer__item:nth-child(4), .footer__item:nth-child(5)").wrapAll("<div class='footer__item footer__item-mob'></div>");

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
    } else{
        $('body').addClass('desc')
    }


}

function showSideMenu(){

    let block = $('.side__block')
    $(".side__item button").on("click", function() {
        let tab = $(this).data('tab-name')

        if($(this).hasClass('active')){
            block.removeClass("show")
            block.addClass("hide")
            setTimeout(function(){
                $('.side__content').removeClass('show')
            },500)
        } else {
            block.removeClass("hide")
            block.addClass('show')
            $('.side__content').each(function (){
                let tabContent = $(this).data('name')
                if( tab == tabContent){
                    $(this).toggleClass('show')
                    $(this).nextAll().removeClass('show')
                    $(this).prevAll().removeClass('show')

                }
            })
        }

        $(this).toggleClass('active')
        $(this).prevAll().removeClass('active')
        $(this).nextAll().removeClass('active')
        console.log(1234,$(this).nextAll())
        console.log(1234,$(this).prevAll())

        $('.side__block.show').animate({left: '5.9rem'}, 500);
        $('.side__block.hide').animate({left: '-100%'}, 500);
    });

    $(document).on('click','.side__block-close', function (){
        block.removeClass("show")
        block.addClass("hide")
        $('.side__item > *').removeClass("active")
        setTimeout(function(){
            $('.side__content').removeClass('show')
        },500)
        $('.side__block.hide').animate({left: '-100%'}, 500);
    })
}
$(document).ready(function(){
    openDrop();
    showSideMenu()
    mobileChange()
    dropMenu()

    $(document).on('click','.header__burger,.header__hide', openMenu )
});

$(window).load(function(){

});

$(window).resize(function(){

});