const INNER_WIDTH =window.innerWidth
function openReadMore(){
    $(document).on('click', '.section__drop', function (){
        $(this).next().toggle(300)
        $(this).toggleClass('section__drop-open')
    })
}

function initSliders(){
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
}





function dropMenuHeader(){
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
    $('.header__burger').toggleClass("header__burger-open");
    $('.header').toggleClass('header__show');
    if($('.header').hasClass('header__show')){
        $('.header').animate({left: '0'}, 200);
    } else{
        $('.header').animate({left: '-110%'}, 200);
    }
    $('body').toggleClass('hidden');
    $('.header__back').toggleClass('header__back-show')
};

function mobileChange(){
    if(INNER_WIDTH <= 666) {
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
    $(document).on("click", ".side__item button", function() {
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
        if(INNER_WIDTH<= 666){
            $('.side__block.show').animate({left: '0'}, 500);
        } else {
            $('.side__block.show').animate({left: '5.9rem'}, 500);
        }

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

function ajaxSend(date, url, funcSuccess, funcError) {
    $.ajax({
        url: url,
        data: date,
        method: 'POST',
        success: function (res) {
            console.log('success ajax');
            funcSuccess(res);
        },
        error: function (error) {
            funcError(error);
        },

    });
}

// send form
function sendForm(form, url, funcSuccess, funcError) {
    form = form.serialize();
    ajaxSend(form, url, funcSuccess, funcError);
}

function searchSuccess(){
    $('.header__search-form').hide(300);
    $('.header__search').show(300)
    $('.header__search-form')[0].reset()
}
function openSearch(){
    $(document).on('click','.header__search', function (){
        $(this).hide()
        $('.header__search-form').show(300)
    })
    $(document).on('click','.header__search-btn', function (e){
        e.preventDefault();
        sendForm($('.header__search-form'),'/wp-admin/admin-ajax.php', searchSuccess, searchSuccess)
    })
}



$(document).ready(function(){
    openReadMore();
    showSideMenu()
    mobileChange()
    dropMenuHeader()
    initSliders()
    openSearch()
    $(document).on('click','.header__burger,.header__hide', openMenu )
});

$(window).load(function(){

});

$(window).resize(function(){

});