const INNER_WIDTH = window.innerWidth;

let map;

async function initMap(lat, lng, text) {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 1,
        linksControl: false,
        panControl: false,
        addressControl: false,
        zoomControl: false,
        fullscreenControl: false,
        enableCloseButton: false
    });

    positionMaps.forEach(position => {
        const marker = new google.maps.Marker({
            position: { lat: position.lat, lng: position.lng },
            map: map,
            icon: mapIcon
        });
        const info = new google.maps.InfoWindow({
            content: position.text
        });
        google.maps.event.addListener(marker, "mouseover", () => {
            info.open(map, marker);
        });
        // google.maps.event.addListener(marker, "click", () => {
        //     info.open(map, marker);
        // });
        google.maps.event.addListener(map, "click", function (event) {
            // infowindow.close();
            info.close(map, marker);
        });
        // google.maps.event.addListener(marker, "mouseout", () => {
        //     info.close(map, marker);
        // });
    });
    // const marker = new google.maps.Marker({
    //     position:  { lat: lat, lng: lng },
    //     map: map,
    //     icon: mapIcon,
    // });


    map.setOptions({
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c9c9c9"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }]
    });
}

function showMap() {
    const lat = 38.8951;
    const lng = -77.0364;
    const text = 'texttexttext';
    console.log(11111111111);
    initMap(lat, lng, text);
}

function openReadMore() {
    $(document).on('click', '.section__drop', function () {
        $(this).next().toggle(300);
        $(this).toggleClass('section__drop-open');
    });
}

function initSliders() {
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
    const banner = new Swiper('.banner__top .banner__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,

        pagination: {
            el: '.banner__pagination',
            clickable: true
        },
        navigation: {
            nextEl: ".banner__top .banner__next",
            prevEl: ".banner__top .banner__prev"
        }
    });
    const quotes = new Swiper('.quotes .banner__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,

        pagination: {
            el: '.banner__pagination',
            clickable: true
        },
        navigation: {
            nextEl: ".quotes .banner__next",
            prevEl: ".quotes .banner__prev"
        }
    });
    const popular = new Swiper('.popular__slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        pagination: {
            el: '.popular__pagination',
            clickable: true
        },
        navigation: {
            nextEl: ".popular__next",
            prevEl: ".popular__prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 8
            },
            666: {
                slidesPerView: 3
            },
            800: {
                slidesPerView: 4
            }

        }
    });
    const sliderProductThumbnail = new Swiper('.product__slider-thumbnail', {
        slidesPerView: 8,
        freeMode: true,
        spaceBetween: 10,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 4,
                spaceBetween: 8
            },
            1024: {
                slidesPerView: 4
            },
            1440: {
                slidesPerView: 8
            }

        }

    });


    const sliderProduct = new Swiper('.product__slider', {
        pagination: {
            el: '.product__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.product__next',
            prevEl: '.product__prev',
        },
        thumbs: {
            swiper: sliderProductThumbnail
        }
    });
}

function accordion() {
    $(document).on('click', '.faq__header', function () {
        let content = $(this).next('.faq__content');
        $(this).closest('.faq__item').prevAll().find('.faq__content').removeClass('open');
        $(this).closest('.faq__item').nextAll().find('.faq__content').removeClass('open');

        if (content.hasClass('open')) {
            content.removeClass('open');
        } else {
            content.addClass('open');
        }
    });
}

function playVideo() {
    $(document).on('click', '.video__img', function () {
        let video = '<iframe allowFullScreen allow=" fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" src="' + $(this).data('video') + '" title="' + $(this).data('title') + '"></iframe>';
        $(this).closest('.video__play').hide();
        $(this).replaceWith(video);
    });
}

function toggleModal(btn, modal) {
    btn.click(function () {
        modal.show();
        if($('.product__build').length > 0 && $('.product__roomle iframe').length === 0 ){
            openRoomle()
        }

        $('body').css('overflow', 'hidden');
        return false;
    });
    $('.modal__close').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        return false;
    });
    $('.modal__btn-close').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modal.hide();
            $('body').css('overflow', 'visible');
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            $('body').css('overflow', 'visible');
        }
    });
}

function showPassword() {
    $('.form__eye').click(function (e) {
        $(this).toggleClass('active');
        $(this).hasClass('active') ? $(this).closest('.form__item').find('input').attr('type', 'text') : $(this).closest('.form__item').find('input').attr('type', 'password');
    });
}

const validateForm = (form, func) => {
    form.on("submit", function (e) {
        checkInput();
        e.preventDefault();
    });
    $.validator.addMethod("goodName", function (value, element) {
        return this.optional(element) || /^[\sаА-яЯіІєЄїЇґҐa-zA-Z0-9._-]{2,30}$/i.test(value);
    }, "Please enter correct");

    $.validator.addMethod("goodEmail", function (value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i.test(value);
    }, "Please enter correct email");

    $.validator.addMethod("goodPhone", function (value, element) {
        // return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
        return this.optional(element) || /^[+]*[0-9]{10,20}$/g.test(value);
    }, "Please enter correct phone number");

    form.validate({
        rules: {
            name: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 30
            },
            displayName: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 30
            },
            lastname: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 30
            },
            phone: {
                required: true,
                goodPhone: true

            },
            VAT: {
                required: true
            },
            phoneAccount: {
                goodPhone: true
            },
            email: {
                required: true,
                goodEmail: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            currentPassword: {
                required: true,
                minlength: 8
            },
            password_confirm: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            passwordNew: {
                required: true,
                minlength: 8
            },
            passwordNewRepeat: {
                required: true,
                minlength: 8,
                equalTo: "#passwordNew"
            },
            band_name: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 25
            },
            contact_name: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 25
            },
            password_reg: {
                required: true,
                minlength: 8
            },
            password_reg_confirm: {
                required: true,
                minlength: 8,
                equalTo: "#password_reg"
            }
        },
        messages: {
            name: {
                required: "This field is required",
                minlength: "First name can't be shorter than 2 characters",
                maxLength: "First name can't be longer than 30 characters "
            },
            lastname: {
                required: "This field is required",
                minlength: "Last name can't be shorter than 2 characters",
                maxLength: "Last name can't be longer than 30 characters "
            },
            phone: {
                required: "This field is required",
                phone: "Please enter correct phone number"
            },
            phoneAccount: {
                phone: "Please enter correct phone number"
            },
            email: {
                required: "This field is required",
                email: "Email invalid"
            },
            password: {
                required: "This field is required",
                minlength: "Password can't be shorter than 8 characters"
            },
            currentPassword: {
                required: "This field is required",
                minlength: "Password can't be shorter than 8 characters"
            },
            password_confirm: {
                required: "This field is required",
                equalTo: "Passwords not equal",
                minlength: "Password can't be shorter than 8 characters"
            },
            password_reg: {
                required: "This field is required",
                minlength: "Password can't be shorter than 8 characters"
            },
            password_reg_confirm: {
                required: "This field is required",
                equalTo: "Passwords not equal",
                minlength: "Password can't be shorter than 8 characters"
            },
            VAT: {
                required: "This field is required"
            },
            passwordNew: {
                required: "This field is required",
                minlength: "Last name can't be shorter than 8 characters"
            },
            passwordNewRepeat: {
                required: "This field is required",
                equalTo: "Passwords do not match"
            },
            band_name: {
                required: "This field is required",
                minlength: "Band name can't be shorter than 2 characters",
                maxLength: "Band name can't be longer than 30 characters "
            },
            contact_name: {
                required: "This field is required",
                minlength: "Contact name can't be shorter than 2 characters",
                maxLength: "Contact name can't be longer than 30 characters "
            }

        },
        submitHandler: function () {
            func();
            resetSelect();
            form[0].reset();
        }
    });
};

function resetSelect() {
    let selectElement = $(".form__select");
    selectElement.each(function () {
        $(this).val(selectElement.find("option:first").val());
    });
    $('.form__select').select2({});
    $('.form__select').on('select2:select', function (e) {
        let rendered = $(this).closest('.form__item-wrap').find('.select2-selection__rendered');
        let renderedText = rendered.text();
        if (renderedText !== 'Choose from the list') {
            rendered.addClass('black');
        } else {
            rendered.removeClass('black');
        }
    });
    selectElement.val(selectElement.find("option:first").val());
    $('.form__select option:first-child').prop('selected', true);
}

function filterMob() {
    // $('.filter__mob').click(function (){
    //     $(this).closest('.filter__block').find('.filter__item-wrapper').toggleClass('show')
    // })
}

function spline() {
    if ($('.spline__container').length > 0) {
        let name = $('.spline__container').data('name').split(',');
        let info = $('.spline__container').data('info').split('/');

        let chart = [];
        for (let i = 0; i < name.length; i++) {
            let data = info[i].split(',').map(Number);
            let panel = {
                name: name[i].trim(),
                data: data
            };
            chart.push(panel);
        }

        let options = {
            series: chart,
            chart: {
                height: 300,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
            }
        };

        var spline = new ApexCharts(document.querySelector(".spline__container"), options);
        spline.render();

        let arr = [];
        let i = 0;
        $('.apexcharts-legend-marker').each(function () {
            arr.push($(this).css("background-color"));
        });
        $('.spline__desc-title span').each(function () {
            $(this).css("background-color", `${arr[i]}`);
            i++;
        });
    }
}
function checkInput() {
    $(document).on("click", '.form button', function (e) {
        $(this).closest('.form').find('.form__item').each(function () {
            if ($(this).find('.form__input').hasClass('error')) {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
    });
}

function dropMenuHeader() {
    let dropMenu = $('.header__drop-menu .header__drop-btn');
    let dropSubmenu = '.header__drop-btn-wrap .header__drop-btn';

    dropMenu.click(function () {
        let submenu = $(this).closest('.header__drop').find('.header__drop-wrap');
        $('.header__drop-list').removeClass('show');
        if ($(this).hasClass('header__drop-btn-open')) {
            $(this).removeClass('header__drop-btn-open');
        } else {
            $('.header__drop-btn').removeClass('header__drop-btn-open');
            $(this).addClass('header__drop-btn-open');
        }
        if (submenu.hasClass('show')) {
            submenu.removeClass('show');
        } else {
            $('.header__drop-wrap').removeClass('show');
            submenu.addClass('show');
        }
    });

    $(document).on('click', dropSubmenu, function () {
        let submenu = $(this).closest('.header__drop-item').find('.header__drop-list');
        if ($(this).hasClass('header__drop-btn-open')) {
            $(this).removeClass('header__drop-btn-open');
        } else {
            $('.header__drop-content .header__drop-btn').removeClass('header__drop-btn-open');
            $(this).addClass('header__drop-btn-open');
        }
        if (submenu.hasClass('show')) {
            submenu.removeClass('show');
        } else {
            $('.header__drop-list').removeClass('show');
            submenu.addClass('show');
        }
    });
}

function openMenu() {
    $('.header__burger').toggleClass("header__burger-open");
    $('.header').toggleClass('header__show');
    if ($('.header').hasClass('header__show')) {
        $('.header').animate({ left: '0' }, 200);
    } else {
        $('.header').animate({ left: '-150%' }, 200);
    }
    $('body').toggleClass('hidden');
    $('.header__back').toggleClass('header__back-show');
};

function mobileChange() {
    if (INNER_WIDTH <= 666) {
        // $('.header__drop-item').each(function () {
        //     $(this).append('<div class="header__drop-btn-wrap"><button class="header__drop-btn"></button></div>');
        // });
        // $('.header__block').append($('.header__social'));

        $('.delivery__text h2, .delivery__text h3').wrapAll("<div class='delivery__text-block'></div>");
        $(".footer-mobile").wrapAll("<div class='footer__item footer__item-mob'></div>");

        const main = new Swiper('.feedback__slider', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            pagination: {
                el: '.feedback__pagination',
                clickable: true
            }
        });

        const gallery = new Swiper('.gallery__slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            pagination: {
                el: '.gallery__pagination',
                clickable: true
            },
            navigation: {
                nextEl: ".gallery__next",
                prevEl: ".gallery__prev"
            }
        });

        let slidersCount = $('.feedback .swiper-pagination-bullet').length;
        $('.feedback .swiper-pagination-bullet').css('width', `calc(100%/${slidersCount})`);

        $('.popular .container').append($('.slider__nav'));

        $('.dealers__country').each(function () {
            $(this).closest('.dealers__item').find('.dealers__img').after($(this));
        });
    }
    if (INNER_WIDTH <= 1024) {
        $('.advice__top-desc').prepend($('.advice__top-title'));
        $('.header__drop-item').each(function () {
            $(this).append('<div class="header__drop-btn-wrap"><button class="header__drop-btn"></button></div>');
        });
        $('.header__block').append($('.header__social'));
        $('.header__icon-mob').prepend($('.header__phone'));
    } else {
        $('body').addClass('desc');
    }
}

function showSideMenu() {
    let block = $('.side__block');
    $(document).on("click", ".side__item button", function () {
        let tab = $(this).data('tab-name');

        if ($(this).hasClass('active')) {
            block.removeClass("show");
            block.addClass("hide");
            setTimeout(function () {
                $('.side__content').removeClass('show');
            }, 300);
        } else {
            block.removeClass("hide");
            block.addClass('show');
            $('.side__content').each(function () {
                let tabContent = $(this).data('name');
                if (tab == tabContent) {
                    $(this).toggleClass('show');
                    $(this).nextAll().removeClass('show');
                    $(this).prevAll().removeClass('show');
                }
            });
        }
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        if (INNER_WIDTH <= 666) {
            $('.side__block.show').animate({ left: '0' }, 400);
        } else if (INNER_WIDTH > 666 && INNER_WIDTH <= 1024) {
            $('.side__block.show').animate({ left: '3.7rem' }, 400);
        } else {
            $('.side__block.show').animate({ left: '5.9rem' }, 400, "linear");
        }

        $('.side__block.hide').animate({ left: '-100%' }, 400);
    });

    $(document).on('click', '.side__block-close', function () {
        block.removeClass("show");
        block.addClass("hide");
        $('.side__item > *').removeClass("active");
        setTimeout(function () {
            $('.side__content').removeClass('show');
        }, 300);
        $('.side__block.hide').animate({ left: '-100%' }, 400);
    });
}

function openFullScreen(){

    $(".product__open-button").click(function(e) {
        e.stopPropagation(); // Prevent the click event from bubbling up
        let currentImage = $('.product__slider .swiper-slide-active img').attr('src')
        $(".product__open-image").attr("src", currentImage);
        $(".product__open").fadeIn();
        $(this).addClass('open')
        if($(this).hasClass('open')){

        }
    });
    $(document).click(function(e){
        if (!$(e.target).is('img')) {
            $('.product__open').hide();
        }
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
        }

    });
}

// send form
function sendForm(form, url, funcSuccess, funcError) {
    form = form.serialize();
    ajaxSend(form, url, funcSuccess, funcError);
}

function searchActive() {
    $('.faq .form__input').focus(function () {
        $(this).closest('.form__item').addClass('big active');
        $(this).removeAttr('placeholder');
    });
    $('.faq .form__input').blur(function () {
        $(this).closest('.form__item').removeClass('big active');
        $(this).attr('placeholder', 'Search');
    });
    $(document).on('submit', '.faq__form', function (e) {
        e.preventDefault();
        sendForm($('.faq__form'), '/wp-admin/admin-ajax.php', faqSearchSuccess, faqSearchSuccess);
    });
}

function tab() {
    $(".tab__header-item").click(function () {
        $(".tab__header-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab__content-item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
}

function faqSearchSuccess() {
    // $('.faq__form input').attr('placeholder','Search')
    // $('.faq__form input[name=search]').val('')
    // $('.faq__form').removeClass('big')
}
function searchSuccess() {
    $('.header__search-form').hide(400);
    $('.header__search').show(400);
    $('.header__search-form')[0].reset();
    $('.header__search-block').removeClass('show');
    if(innerWidth >666){
        $('.header__phone').show(300);
    }

}
function openSearch() {
    $(document).on('click', '.header__search', function () {
        if (INNER_WIDTH <= 1024) {
            $('.header__phone').hide();
        }
        $(this).hide();
        $('.header__search-form').show(300);
        $('.header__search-block').addClass('show');

    });
    $(document).on('click', '.header__search-btn', function (e) {
        e.preventDefault();
        sendForm($('.header__search-form'), '/wp-admin/admin-ajax.php', searchSuccess, searchSuccess);
    });
}

function firstSubmenuActive() {
    $('.head .header__drop-item').removeClass('active');
    $('.head .header__drop-item:first-child').addClass('active');
    $('.head .header__append-content>*').remove();
    let firstActive = $('.head .header__drop-item:first-child').find('.header__drop-list').clone();
    let firstTitle = $('.head .header__drop-item:first-child').find('.header__drop-title h2').text();
    $('.head .header__append-content').append(firstActive);
    $('.head .header__append-link span').text(firstTitle);
}

function headerSubmenu() {
    if (INNER_WIDTH > 1024) {
        firstSubmenuActive();
        $('.head .header__drop-item').each(function () {
            $(this).on("mouseover", function () {
                let submenu = $(this).find('.header__drop-list').clone();
                $('.head .header__drop-item').removeClass('active');
                $(this).addClass('active');
                $('.head .header__append-content .header__drop-list').remove();
                $('.head .header__append-content').append(submenu);

                let title = $(this).find('.header__drop-title h2').text();
                $('.head .header__append-link span').text(title);
            });
        });

        $('.head .header__drop-wrap').each(function () {
            $(this).on("mouseleave", firstSubmenuActive);
        });
    }
}

function setActiveArticle() {
    $('.articles__category-item').click(function () {
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        let val = $(this).text();
        $('.articles__input').val(val);
        sendForm($('.articles__category'), '/wp-admin/admin-ajax.php', function () {});
    });
}

function checkInputsToValid() {
    let isValid = true;
    function hideError() {
        $('.step__block.active .form__input-error').each(function () {
            if ($(this).css("display") === "block") {
                $('.step__block.active').prepend('<span class="message__required">Please fill the required fields </span.>');
            } else {
                $('.message__required').remove();
            }
        });
    }
    $(document).on('input', '.form__input-required, .form__select-required', function () {
        let ths = $(this);
        if (ths.hasClass('form__input-required')) {
            let error = $(this).closest('.form__item-wrap').find('.form__input-error');

            if ($(this).val() == '') {
                error.show();
                isValid = false;
            } else {
                error.hide();
            }
        }

        if (ths.hasClass('form__select-required')) {
            let error = $(this).closest('.form__item-wrap').find('.form__input-error');
            if ($(this).val() == '' || $(this).val() == 'default') {
                error.show();
                isValid = false;
            } else {
                error.hide();
            }
        }
        hideError();
    });
    $(document).on('click', '.question__radio-required', function () {
        $('.step__block.active .question__radio-required').each(function () {
            let radioGroup = $(this).find('input[type="radio"]');
            let error = $(this).closest('.question__item').find('.form__input-error');

            if (!radioGroup.is(':checked')) {
                error.show();
                isValid = false;
            } else {
                error.hide();
            }
        });
        hideError();
    });
    return isValid;
}

function validateAdviceForm() {
    let isValid = true;

    $('.step__block.active .form__input-required').each(function () {
        let error = $(this).closest('.form__item-wrap').find('.form__input-error');

        if ($(this).val() == '') {
            error.show();
            isValid = false;
        } else {
            error.hide();
        }
    });

    $('.form__input-required[name=email]').each(function () {
        let error = $(this).closest('.form__item-wrap').find('.form__input-error');
        let val = $(this).val();
        let regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i;

        if (!regex.test(val)) {
            error.show();
            isValid = false;
        } else {
            error.hide();
        }
    });

    $('.step__block.active .question__radio-required').each(function () {
        let radioGroup = $(this).find('input[type="radio"]');
        let error = $(this).closest('.question__item').find('.form__input-error');

        if (!radioGroup.is(':checked')) {
            error.show();
            isValid = false;
        } else {
            error.hide();
        }
    });

    $('.step__block.active .form__select-required').each(function () {
        let error = $(this).closest('.form__item-wrap').find('.form__input-error');
        if ($(this).val() == '' || $(this).val() == 'default') {
            error.show();
            isValid = false;
        } else {
            error.hide();
        }
    });

    if (isValid) {
        $('.message__required').remove();
    }

    return isValid;
}




function submitUserForm() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
        $('#g-recaptcha-error-advice').html(`<span class="form__input-error" >This field is required</span>`);
        return false;
    }
    return true;
}
function verifyCaptchaAdviceForm() {
    $('#g-recaptcha-error-advice').html('');
}
window.verifyCaptchaRegistration = verifyCaptchaAdviceForm;






function sendQuestionForm() {
    $(document).on('submit', '.question__form', function (e) {
        e.preventDefault();
        if(submitUserForm('advice')) {
            let formData = new FormData($('.question__form')[0]);
            if (!validateAdviceForm()) {
                checkInputsToValid();
            } else {
                $.ajax({
                    url: '/wp-admin/admin-ajax.php',
                    method: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false,
                    cache: false,
                    success: function () {
                        console.log('success ajax');
                    },
                    error: function (error) {}

                });
                checkInputsToValid();
            }
        }
    });
}


function openRoomle(){
    // $(document).on('change', '.modal__roomle',function (){
        let currentProduct = $('.product__build').attr('data-configurationID')
        console.log('currentProduct',currentProduct)
        let fullLink = `https://www.roomle.com/t/cp/?configuratorId=gikacoustics&id=${currentProduct}&api=false`
        $('.product__roomle').append(`<iframe src=${fullLink}></iframe>`)
    // })
}

// const configurator = await RoomleConfiguratorApi.createConfigurator(
//     'demoConfigurator',
//     // document.getElementById('configurator-container'),
//     // {
//     //     ...options,
//     //     skin: {
//     //         'primary-color': '#1d68bd', // optional but please use a CSS RGB hex like #ff00ff if you want to rely on the color detection see explaination above
//     //         'color-on-primary': '#f4e440', // optional, Roomle can decide this for you
//     //         'cta-color': '#980d3f',  // please use a CSS RGB hex like #ff00ff if you want to rely on the color detection see explaination above
//     //         'color-on-cta': '#8e8e8e', // optional, Roomle can decide this for you
//     //     },
//     // },
//
// );
// configurator.ui.callbacks.onButtonClicked = (name) => {
//     if (name === 'savedraft') {
//         console.log('Custom save draft!');
//         return true;
//     }
//     return false;
// };


function adviceStep() {
    $(document).on('click', '.step__next[type=button]', function () {
        let currentBlock = $(this).closest('.step__block');
        currentBlock.find('.message__required').remove();
        checkInputsToValid();
        if (validateAdviceForm()) {
            $('.step__item').each(function () {
                if (currentBlock.data('step') == $(this).data('active')) {
                    $(this).addClass('fill');
                }
            });
            currentBlock.removeClass('active');
            currentBlock.next().addClass('active');
            $('.step__item').each(function () {
                if ($('.step__block.active').data('step') == $(this).data('active')) {
                    $(this).addClass('active');
                }
            });
        } else {
            $("html, body").animate({ scrollTop: 0 }, 400);
            currentBlock.prepend('<span class="message__required">Please fill the required fields </span.>');
        }
    });
    $(document).on('click', '.step__prev', function () {
        let currentBlock = $(this).closest('.step__block');
        currentBlock.removeClass('active');
        currentBlock.prev().addClass('active');
        checkInputsToValid();
    });
}

function customUpload() {
    $(document).on('change', '.form__item-upload input', function () {
        $(this).closest('.form__item-upload').find('.form__item-file').text($(this)[0].files[0].name);
    });
}

$(document).ready(function () {
    let formFilter = $('.filter__block');
    $('.filter__select').each(function () {
        const currentSelect = $(this);
        const currentSelectDropdown = currentSelect.closest('.filter__item-wrapper').find('.filter__dropdown');
        currentSelect.select2({
            minimumResultsForSearch: -1,
            dropdownParent: currentSelectDropdown
        });
    });

    $('.filter__select').on('select2:select', function (e) {
        sendForm(formFilter, '/wp-admin/admin-ajax.php');
    });
    $('.form__select').select2({});

    $('.form__select').on('select2:select', function (e) {
        let rendered = $(this).closest('.form__item-wrap').find('.select2-selection__rendered');
        let renderedText = rendered.text();
        if (renderedText !== 'Choose from the list') {
            rendered.addClass('black');
        } else {
            rendered.removeClass('black');
        }
    });
    toggleModal($('.product__build'), $('.modal__roomle'));
    openFullScreen();
    adviceStep();
    tab();
    searchActive();
    openReadMore();
    showSideMenu();
    mobileChange();
    dropMenuHeader();
    initSliders();
    openSearch();
    headerSubmenu();
    playVideo();
    accordion();
    showPassword();
    setActiveArticle();
    filterMob();
    spline();
    showMap();
    sendQuestionForm();
    // checkInputsToValid();
    customUpload();
    toggleModal($('.account__logout'), $('.modal__logout'));


    $(document).on('click', '.header__burger,.header__hide', openMenu);

    let formSign = $('.sign__form');
    validateForm(formSign, function () {
        sendForm(formSign, '/wp-admin/admin-ajax.php');
    });
    let formSignReset = $('.sign__form-reset');
    validateForm(formSignReset, function () {
        sendForm(formSignReset, '/wp-admin/admin-ajax.php', function () {
            $('.sign__form-reset').hide();
            $('.sign__block  > .sign__title').hide();
            $('.sign__block  > .sign__subtitle').hide();
            $('.form__success').show();
        }, function () {
            $('.sign__form-reset').hide();
            $('.sign__block  > .sign__title').hide();
            $('.sign__block  > .sign__subtitle').hide();
            $('.form__success').show();
        });
    });

    let formReg = $('.sign__form-reg');
    validateForm(formReg, function () {
        sendForm(formReg, '/wp-admin/admin-ajax.php');
    });

    let formContact = $('.contact__form');
    validateForm(formContact, function () {
        sendForm(formContact, '/wp-admin/admin-ajax.php');
    });

    let formAccount = $('.account__form');
    validateForm(formAccount, function () {
        sendForm(formAccount, '/wp-admin/admin-ajax.php');
    });

    let formChangePassword = $('.account__form-password');
    validateForm(formChangePassword, function () {
        sendForm(formChangePassword, '/wp-admin/admin-ajax.php');
    });

    let formVat = $('.account__vat');
    validateForm(formVat, function () {
        sendForm(formVat, '/wp-admin/admin-ajax.php');
    });
});

$(window).load(function () {});

$(window).resize(function () {});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
