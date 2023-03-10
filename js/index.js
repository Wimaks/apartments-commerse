$(document).ready(function () {

    // $('.reviews').slick({
    //     infinite: false,
    //     appendArrows: $('.reviews__slider-btns'),
    //     slidesToShow: 3,
    //     // draggable: false,
    //     responsive: [{
    //         breakpoint: 1100,
    //         settings: {
    //             slidesToShow: 2
    //         }
    //     },
    //     {
    //         breakpoint: 785,
    //         settings: {
    //             slidesToShow: 1
    //         }
    //     }
    //     ]
    // });

    // $('.documents').slick({
    //     appendArrows: $('.documents__slider-btns'),
    //     slidesToShow: 4,
    //     infinite: false,
    //     responsive: [{
    //         breakpoint: 955,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     {
    //         breakpoint: 750,
    //         settings: {
    //             slidesToShow: 2
    //         }
    //     },
    //     {
    //         breakpoint: 430,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: false
    //         }
    //     }
    //     ]
    // });

    // $('.production').slick({
    //     infinite: false,
    //     appendArrows: $('.production__slider-btns'),
    //     slidesToShow: 5,
    //     // draggable: false,
    //     responsive: [
    //         {
    //             breakpoint: 1441,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 1001,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 550,
    //             settings: {
    //                 slidesToShow: 1,
    //                 arrows: false
    //             }
    //         }
    //     ]
    // });

    $('.tariff').slick({
        infinite: false,
        slidesToShow: 3,
        arrows: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    // 

    //* BURGER ACTIVE

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // ?????????????????? ???????? ?????? ?????????????? ???? ????????????
        $(this).toggleClass('active'); // ?????????????????? ???????? ???????????? ?????? ???????????????? ????????
    });

    // * ACCORDEON ACTIVE

    $('.faq-accordion__item').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
    })

    $('.service__link-header').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active')
    })

    //* FAQ

    // $('.faq__overflow').on('click', function (event) {
    //     event.preventDefault()

    //     $('.faq-accordion').toggleClass('active')
    // })

    // $('.tariff__overflow').on('click', function (event) {
    //     event.preventDefault()

    //     $(this).closest('.tariff__item').toggleClass('opened')
    // })

    // $('.delivery__overflow').on('click', function (event) {
    //     event.preventDefault()

    //     $('.delivery__list').toggleClass('opened')
    // })

    $('.popup-link').on('click', function (event) {
        event.preventDefault();

        $('.popup').toggleClass('active')
    })

    $('.popup__close').on('click', function (event) {
        event.preventDefault();

        $('.popup').removeClass('active')
        // $('.popup__content').removeClass('_sending')
        $('#form').trigger("reset");
        // $('.popup__form-input').removeClass('_error')
    })

    //* SMOOTH SCROLL

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');
        $('.nav, .nav-toggle, .burger').removeClass('active'); // ?????? ?????????????? ???? ?????????????? ?? ???????? ?????????????? ???????? ?? ???????????? ????????????

        // $('.header').removeClass('fixed')

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    })

    if (window.innerWidth <= 400) {
        $('#choose__item-title').html('?????????? ?????????????? ?????? ???????????? ??????????????')
    } else {
        $('#choose__item-title').html('?? ????????????')
    }

    // SVG

    // $("img.img-svg").each(function () {
    //     var $img = $(this);
    //     var imgClass = $img.attr("class");
    //     var imgURL = $img.attr("src");
    //     $.get(imgURL, function (data) {
    //         var $svg = $(data).find("svg");
    //         if (typeof imgClass !== "undefined") {
    //             $svg = $svg.attr("class", imgClass + " replaced-svg");
    //         }
    //         $svg = $svg.removeAttr("xmlns:a");
    //         if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
    //             $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
    //         }
    //         $img.replaceWith($svg);
    //     }, "xml");
    // });
});

