
function openDrop(){
    $('.section__drop').click(function (){
        $(this).next().toggle(300)
        $(this).toggleClass('section__drop-open')
    })
}

const main = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".testimonials__next",
        prevEl: ".testimonials__prev"
    }
});



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
});

$(window).load(function(){

});

$(window).resize(function(){

});