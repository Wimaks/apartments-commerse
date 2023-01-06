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

    // $('.tariff').slick({
    //     infinite: false,
    //     slidesToShow: 4,
    //     appendArrows: $('.tariff__slider-btns'),
    //     responsive: [{
    //         breakpoint: 1230,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     {
    //         breakpoint: 955,
    //         settings: {
    //             slidesToShow: 2
    //         }
    //     },
    //     {
    //         breakpoint: 650,
    //         settings: {
    //             slidesToShow: 1
    //         }
    //     }]
    // })

    // 

    //* BURGER ACTIVE

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    });

    // * ACCORDEON ACTIVE

    $('.faq-accordion__item').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
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
        $('.nav, .nav-toggle, .burger').removeClass('active'); // при скролле по нажатию в меню убирать меню и менять бургер

        // $('.header').removeClass('fixed')

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    })

    if (window.innerWidth <= 400) {
        $('#choose__item-title').html('Дарим клининг при заказе ремонта')
    } else {
        $('#choose__item-title').html('И кстати')
    }

    const content = [
        `<ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Монтаж потолочной люстры</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Монтаж настенной бра</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Сверление отверстий под точечный
                    светильник</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Монтаж точечного
                    светильника</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Монтаж светильника в потолок типа
                    "Армстронг"</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Установка механизма накладной
                    розетки/выключателя</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Коммутация соединительной/распределительной
                    коробки (до 5 проводов)</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Открытая прокладка
                    кабеля</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Прокладка кабеля в
                    кабель-канале</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Прокладка кабеля в гофрированной
                    трубе</span><span>90₽/м.п.</span>

            </li>
        </ul>`,
        `<h1>2</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>3</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>4</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>5</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>6</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>7</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>8</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>9</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`,
        `<h1>10</h1><ul class="price__list">
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от
                    500₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>от 400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">МLorem ipsum dolor sit amet consectetur.</span><span>350₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>400₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>190₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>250₽/шт</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>60₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>150₽/м.п.</span>
            </li>
            <li class="price__list-link">
                <span class="service__name">Lorem ipsum dolor sit amet consectetur.</span><span>90₽/м.п.</span>
            </li>
        </ul>`]

    if ($('#first').on('click', function () {
        $('.price__right').html(content[0])
    }));

    if ($('#second').on('click', function () {
        $('.price__right').html(content[1])
    }));

    if ($('#third').on('click', function () {
        $('.price__right').html(content[2])
    }));

    if ($('#fourth').on('click', function () {
        $('.price__right').html(content[3])
    }));

    if ($('#fifth').on('click', function () {
        $('.price__right').html(content[4])
    }));

    if ($('#sixth').on('click', function () {
        $('.price__right').html(content[5])
    }));

    if ($('#seventh').on('click', function () {
        $('.price__right').html(content[6])
    }));

    if ($('#eighth').on('click', function () {
        $('.price__right').html(content[7])
    }));

    if ($('#ninth').on('click', function () {
        $('.price__right').html(content[8])
    }));

    if ($('#tenth').on('click', function () {
        $('.price__right').html(content[9])
    }));
});

