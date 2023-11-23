
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


$(document).ready(function(){
    openDrop();
});

$(window).load(function(){

});

$(window).resize(function(){

});