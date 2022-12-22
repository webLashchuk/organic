$(function () {
    //sticky header
    const headerHeight = $('.header').outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= headerHeight) {
            $('.header').addClass('header__sticky')
        } else {
            $('.header').removeClass('header__sticky')
        }
    });

    $('.burger-btn, .mobile-menu__logo, .burger-link, .burger-menu__link, .burger-cart, .burger-contacts__link').on('click', function () {
        $('.logo').toggleClass('logo-menu');
        $('.mobile-menu__inner').toggleClass('mobile-menu__inner--active');
        $('.overlay').toggleClass('overlay--active');
        $('body').toggleClass('lock');
    });

    const swiper = new Swiper('.reviews__slider', {
        speed: 600,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

    $('.product-card__rating').rateYo({
        starWidth: '14px',
        spacing: '2.5px',
        readOnly: true,
        ratedFill: "#ffa858",
        starSvg: '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.57751 0.781287C6.88511 -0.122413 8.16321 -0.122403 8.47081 0.781287L9.45431 3.67075C9.59231 4.07602 9.97291 4.34853 10.401 4.34853H13.4812C14.4611 4.34853 14.8563 5.61178 14.0511 6.17025L11.6403 7.84218C11.2735 8.09662 11.1197 8.56342 11.2636 8.98612L12.2031 11.7462C12.5139 12.6594 11.4792 13.4399 10.6865 12.8901L8.09401 11.0922C7.75131 10.8544 7.29701 10.8544 6.95421 11.0922L4.36181 12.8901C3.56911 13.4399 2.53441 12.6594 2.84521 11.7462L3.78471 8.98612C3.92861 8.56342 3.77481 8.09662 3.40791 7.84218L0.997211 6.17025C0.191911 5.61178 0.587112 4.34853 1.56711 4.34853H4.64731C5.07541 4.34853 5.45601 4.07602 5.59401 3.67075L6.57751 0.781287Z" fill="#FFA858"/></svg>',
    });

    $('.review__rating').rateYo({
        starWidth: '21px',
        spacing: '1.5px',
        readOnly: true,
        ratedFill: "#ffa858",
        starSvg: '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.57751 0.781287C6.88511 -0.122413 8.16321 -0.122403 8.47081 0.781287L9.45431 3.67075C9.59231 4.07602 9.97291 4.34853 10.401 4.34853H13.4812C14.4611 4.34853 14.8563 5.61178 14.0511 6.17025L11.6403 7.84218C11.2735 8.09662 11.1197 8.56342 11.2636 8.98612L12.2031 11.7462C12.5139 12.6594 11.4792 13.4399 10.6865 12.8901L8.09401 11.0922C7.75131 10.8544 7.29701 10.8544 6.95421 11.0922L4.36181 12.8901C3.56911 13.4399 2.53441 12.6594 2.84521 11.7462L3.78471 8.98612C3.92861 8.56342 3.77481 8.09662 3.40791 7.84218L0.997211 6.17025C0.191911 5.61178 0.587112 4.34853 1.56711 4.34853H4.64731C5.07541 4.34853 5.45601 4.07602 5.59401 3.67075L6.57751 0.781287Z" fill="#FFA858"/></svg>',
    });
})