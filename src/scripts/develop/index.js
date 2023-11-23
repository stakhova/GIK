
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
    $(".side__item h2").on("click", function() {
        let tab = $(this).data('tab-name')
        $('.side__content-item').hide()
        $('.side__content-item').each(function (){
            let tabContent = $(this).data('name')
            if( tab == tabContent){
                $(this).css('display','flex')
            }
        })
        $(".side__content").animate({left: '5.9rem'}, 500);
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