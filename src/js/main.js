'use strict';

var mobile_menu_arrow = document.querySelector('.main-nav__mobile-menu-arrow');
var nav_main = document.querySelector('.main-nav');
var nav_main_list = document.querySelector('.main-nav__list');
var nav_main_item = document.querySelectorAll('.main-nav__item');
var nav_main_content = document.querySelectorAll('.main-nav__content');
var nav_main_link = document.querySelectorAll('.main-nav__link');
var nav_additional = document.querySelector('.additional-nav');
var nav_additional_title = document.querySelector('.additional-nav__title');
var nav_additional_list = document.querySelector('.additional-nav__list');
var nav_additional_item = document.querySelectorAll('.additional-nav__item');
var main_top_info = document.querySelector('.main-top-info');
var buy_now_button = document.querySelector('.buy-now-button');
var page_main = document.querySelector('.page-main');
var page_footer = document.querySelector('.page-footer');
var page_header = document.querySelector('.page-header');
var page_bottom_info = document.querySelector('.page-bottom-info');
var page_bottom_info_toggle = document.querySelector('.page-bottom-info__toggle');
var page_bottom_info_image = document.querySelector('.page-bottom-info__top-image');
var page_bottom_info_caption = document.querySelectorAll('.page-bottom-info__caption');
var page_bottom_info_wrapper = document.querySelectorAll('.page-bottom-info__wrapper');
var videoplayer = document.querySelector('.videoplayer');
var videoplayer_wrapper = document.querySelector('.videoplayer__wrapper');
var videoplayer_starter = document.querySelector('.videoplayer__starter');
var video = document.querySelector('video');
var video_block = document.querySelector('.modal-video');
var video_close = document.querySelector('.modal-video__close');
var btn_prev = document.querySelectorAll('.btn-prev');
var btn_next = document.querySelectorAll('.btn-next');
var btn_zoom = document.querySelectorAll('.btn-zoom');
var btn_close = document.querySelector('.btn-close');
var news = document.querySelectorAll('.news__section');
var image_wrappers = document.querySelectorAll('.news__image-wrapper');
var images = document.querySelectorAll('.news__image-wrapper img');
var images_one = document.querySelectorAll('.news__section--block_one img');
var images_two = document.querySelectorAll('.news__section--block_two img');
var images_three = document.querySelectorAll('.news__section--block_three img');
var modal_overlay = document.querySelector('.modal-overlay');
var modal_picture = document.querySelector('.modal-picture');
var modal_picture_img = document.querySelector('.modal-picture img');
var img_apple = document.querySelector('.img-apple');
var img_search = document.querySelector('.img-search');
var img_play = document.querySelector('.videoplayer__img-play');

function add(variable, class_name) {
    variable.classList.add(class_name);
}

function remove(variable, class_name) {
    variable.classList.remove(class_name);
}

function toggle(variable, class_name) {
    variable.classList.toggle(class_name);
}

function forRemove(variable, selector, prefix = '--no-js') {
    for (var i = 0; i < variable.length; i++) {
        variable[i].classList.remove(selector + prefix);
    }
}

function addPaddingForMobileImages(image_block, index, els) {
    if (!els) {
        if (image_block.length>1 && window.innerWidth <= 390) {
            image_wrappers[index].style.paddingBottom = '30px';
        }
    } else {
        if (image_block.length>1 && window.innerWidth <= 390) {
            image_wrappers[index].style.paddingBottom = '30px';
        } else {
            image_wrappers[index].style.paddingBottom = '';
        }
    }
}

function choice(function_1, els = '') {
    for (var index = 0; index < news.length; index++) {
        switch (index) {
            case 0:
                function_1(images_one, index, els);
            break;
            case 1:
                function_1(images_two, index, els);
            break;
            case 2:
                function_1(images_three, index, els);
            break;
        }
    }
}

function blur(selector_1 = '', selector_2 = '', selector_3 = '') {
    var mass = [selector_1, selector_2, selector_3];
    for (var index = 0; index < mass.length; index++) {
        if (mass[index] != '') {
            toggle(mass[index], 'blur');
        }
    }
}

/*Добавляем\удаляет классы\атрибуты*/

add(page_bottom_info, 'page-bottom-info--closed');
remove(mobile_menu_arrow, 'main-nav__mobile-menu-arrow--no-js');
remove(page_header, 'page-header--no-js');
remove(nav_main, 'main-nav--no-js');
remove(nav_main_list, 'main-nav__list--no-js');
remove(nav_additional, 'additional-nav--no-js');
remove(buy_now_button, 'buy-now-button--no-js');
remove(nav_additional_title, 'additional-nav__title--no-js');
remove(nav_additional_list, 'additional-nav__list--no-js');
remove(main_top_info, 'main-top-info--no-js');
remove(page_bottom_info, 'page-bottom-info--no-js');
remove(page_bottom_info_image, 'page-bottom-info__top-image--no-js');
remove(page_bottom_info_toggle, 'page-bottom-info__toggle--no-js');
remove(btn_close, 'btn-close--no-js');
remove(img_search, 'img-search--no-js');
remove(img_apple, 'img-apple--no-js');
forRemove(nav_main_item, 'main-nav__item');
forRemove(nav_main_content, 'main-nav__content');
forRemove(nav_main_link, 'main-nav__link');
forRemove(nav_additional_item, 'additional-nav__item');
forRemove(page_bottom_info_wrapper, 'page-bottom-info__wrapper');
forRemove(page_bottom_info_caption, 'page-bottom-info__caption');
forRemove(images, 'no-js', '');
forRemove(image_wrappers, 'news__image-wrapper');
forRemove(btn_prev, 'btn-prev');
forRemove(btn_next, 'btn-next');
forRemove(btn_zoom, 'btn-zoom');
choice(addPaddingForMobileImages);

window.onload = function() {
    toggleImage();
}

/*Убираем классы, которые могут нарушить переход между мобильной и планшетной ориентацией*/

window.onresize = function () {
    var resizeTimeout;
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        if (window.innerWidth > 480 && window.innerWidth < 769 && page_bottom_info.classList.contains('page-bottom-info--animated-mobile')) {
            remove(page_bottom_info, 'page-bottom-info--animated-mobile');
            add(page_bottom_info, 'page-bottom-info--animated');
        } else if (window.innerWidth <= 480 && page_bottom_info.classList.contains('page-bottom-info--animated')) {
            remove(page_bottom_info, 'page-bottom-info--animated');
            if (page_bottom_info.classList.contains('page-bottom-info--opened')) {
                add(page_bottom_info, 'page-bottom-info--animated-mobile');
                [].forEach.call(page_bottom_info_wrapper, function(el) {
                    var caption = el.previousSibling;
                    add(caption, 'page-bottom-info__caption--active');
                    add(el, 'page-bottom-info__wrapper--open');
                });
            } else {
                [].forEach.call(page_bottom_info_wrapper, function(el) {
                    var caption = el.previousSibling;
                    remove(caption, 'page-bottom-info__caption--active');
                    remove(el, 'page-bottom-info__wrapper--open');
                });
            }
        }
        if (window.innerWidth < 769 && !page_header.classList.contains('page-header--change')) {
            add(page_header, 'page-header--change');
        }
        if (window.innerWidth < 769 && !page_bottom_info.classList.contains('page-bottom-info--change')) {
            add(page_bottom_info, 'page-bottom-info--change');
        }
        if (window.innerWidth <= 480 && modal_picture.classList.contains('modal-picture--active')) {
            zoomModalClose();
        }
        choice(addPaddingForMobileImages, 'true');
        toggleImage();
        if (window.innerWidth > 768 && page_header.classList.contains('page-header--opened')) {
            remove(page_header, 'page-header--opened');
            toggle(modal_overlay, 'modal-overlay--active');
            blur(page_main, page_footer);
            remove(mobile_menu_arrow, 'main-nav__mobile-menu-arrow--active');
        }
    }, 100);
}

/*Открытие/закрытие меню для мобильных устройств*/

mobile_menu_arrow.addEventListener('click', function() {
    if (page_header.classList.contains('page-header--closed')) {
        remove(page_header, 'page-header--closed');
        add(page_header, 'page-header--opened');
    } else if (page_header.classList.contains('page-header--opened')) {
        remove(page_header, 'page-header--opened');
        add(page_header, 'page-header--closed');
        add(modal_overlay, 'modal-overlay--closed');
        setTimeout(function() {
            remove(modal_overlay, 'modal-overlay--closed');
        }, 500);
    } else {
        add(page_header, 'page-header--opened');
    }
    toggle(mobile_menu_arrow, 'main-nav__mobile-menu-arrow--active');
    toggle(modal_overlay, 'modal-overlay--active');
    blur(page_main, page_footer);
    if (page_header.classList.contains('page-header--change')) {
        remove(page_header, 'page-header--change');
    }
});

/*Закрытие меню при клике по модальному окну*/

modal_overlay.addEventListener('click', function() {
    if (video_block.classList.contains('display-no')) {
        remove(mobile_menu_arrow, 'main-nav__mobile-menu-arrow--active');
        remove(page_header, 'page-header--opened');
        add(page_header, 'page-header--closed');
        remove(modal_overlay, 'modal-overlay--active');
        blur(page_main, page_footer);
        if (page_header.classList.contains('page-header--change')) {
            remove(page_header, 'page-header--change');
        }
    }
});

/*Функция открытия\закрытия нижнего меню под планшет и телефон*/

page_bottom_info_toggle.addEventListener('click', function() {
    /*Планшет*/
    if (window.innerWidth > 480 && window.innerWidth < 769) {
        add(page_bottom_info, 'page-bottom-info--animated');
        if (page_bottom_info.classList.contains('page-bottom-info--closed')) {
            remove(page_bottom_info, 'page-bottom-info--closed');
            add(page_bottom_info, 'page-bottom-info--opened');
            setTimeout(function() {
                toggleImage();
            }, 1200);
        } else {
            add(page_bottom_info, 'page-bottom-info--closed');
            remove(page_bottom_info, 'page-bottom-info--opened');
            setTimeout(function() {
                toggleImage();
            }, 1000);
        }
    } else if (window.innerWidth <= 480) {
        /*Телефон*/
        add(page_bottom_info, 'page-bottom-info--animated-mobile');
        toggleImage();
        if (page_bottom_info.classList.contains('page-bottom-info--closed')) {
            remove(page_bottom_info, 'page-bottom-info--closed');
            add(page_bottom_info, 'page-bottom-info--opened');
            [].forEach.call(page_bottom_info_wrapper, function(el) {
                var caption = el.previousSibling;
                add(caption, 'page-bottom-info__caption--active');
                add(el, 'page-bottom-info__wrapper--open');
            });
        } else {
            remove(page_bottom_info, 'page-bottom-info--opened');
            add(page_bottom_info, 'page-bottom-info--closed');
            [].forEach.call(page_bottom_info_wrapper, function(el) {
                var caption = el.previousSibling;
                remove(caption, 'page-bottom-info__caption--active');
                remove(el, 'page-bottom-info__wrapper--open');
            });
        }
    }
    if (page_bottom_info.classList.contains('page-bottom-info--change')) {
        remove(page_bottom_info, 'page-bottom-info--change');
    }
});

/*Смена иконки переключателя нижнего меню*/

function toggleImage() {
    if (window.innerWidth > 480 && window.innerWidth < 769 && page_bottom_info.classList.contains('page-bottom-info--closed')) {
        page_bottom_info_toggle.firstElementChild.setAttribute('xlink:href', 'img/svg_sprite.svg#right_arrows');
    } else if (window.innerWidth > 480 && window.innerWidth < 769 && page_bottom_info.classList.contains('page-bottom-info--opened')) {
        page_bottom_info_toggle.firstElementChild.setAttribute('xlink:href', 'img/svg_sprite.svg#cross');
    } else if (window.innerWidth <= 480) {
        page_bottom_info_toggle.firstElementChild.setAttribute('xlink:href', 'img/svg_sprite.svg#mobile_bottom_menu_arrow');
    }
};

/*Открытие\закрытие пункта нижнего меню при нажатии*/

[].forEach.call(page_bottom_info_caption, function(el) {
    el.addEventListener('click', function() {
        var points = [];
        var wrapper = el.nextElementSibling;
        toggle(el, 'page-bottom-info__caption--active');
        toggle(wrapper, 'page-bottom-info__wrapper--open');
        if (page_bottom_info.classList.contains('page-bottom-info--change')) {
            remove(page_bottom_info, 'page-bottom-info--change');
        }
        /*Если все пункты закрыты, закрываем меню, иначе открываем*/
        [].forEach.call(page_bottom_info_caption, function(el) {
            if (el.classList.contains('page-bottom-info__caption--active')) {
                points.push('true');
            } else {
                points.push('false');
            }
        });
        if (points.every(elem => elem == 'true')) {
            remove(page_bottom_info, 'page-bottom-info--closed');
            add(page_bottom_info, 'page-bottom-info--opened');
            add(page_bottom_info, 'page-bottom-info--animated-mobile');
        } else if (points.every(elem => elem == 'false')) {
            remove(page_bottom_info, 'page-bottom-info--opened');
            add(page_bottom_info, 'page-bottom-info--closed');
        }
    });
});

/*Открытие видео*/

videoplayer_starter.addEventListener('click', function(event) {
    event.preventDefault();
    remove(video_block, 'display-no');
    add(modal_overlay, 'modal-overlay--active');
    blur(page_header, page_main, page_footer);
    video.currentTime = 0;
    video.play();
});

/*Закрытие видео*/

video_close.addEventListener('click', function() {
    add(video_block, 'display-no');
    remove(modal_overlay, 'modal-overlay--active');
    blur(page_header, page_main, page_footer);
    video.pause();
    add(modal_overlay, 'modal-overlay--closed');
    setTimeout(function() {
        remove(modal_overlay, 'modal-overlay--closed');
    }, 500);
});

/*Воспроизведение\остановка видео при клике*/

video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

/*вывод видео на полный экран при двойном щелчке (и обратно)*/

function isFullScreen() {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

video.addEventListener('dblclick', function() {
    if (isFullScreen()) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
    } else {
        if (video.requestFullscreen) video.requestFullscreen();
        else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
        else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
        else if (video.msRequestFullscreen) video.msRequestFullscreen();
    }
});

/*Изменение иконки воспроизведения видео при наведении курсора мыши*/

/*
videoplayer_wrapper.addEventListener('mouseover', function() {
    if (window.innerWidth > 768 && !img_play.firstElementChild.classList.contains('#play_icon_active')) {
        img_play.firstElementChild.setAttribute('xlink:href', 'img/svg_sprite.svg#play_icon_active');
    }
});

videoplayer_wrapper.addEventListener('mouseout', function() {
    if (window.innerWidth > 768) {
        img_play.firstElementChild.setAttribute('xlink:href', 'img/svg_sprite.svg#play_icon');
    }
});
*/

/*Переключение картинок*/

function btnsForImage(image_block, index) {
    var i = 0;
    if (image_block.length > 1) {
        btn_prev[index].addEventListener('click', function() {
            remove(image_block[i], 'show');
            i = i - 1;
            if (i < 0) {
              i = image_block.length - 1;
            }
            add(image_block[i], 'show');
        });
        btn_next[index].addEventListener('click', function() {
            remove(image_block[i], 'show');
            i = i + 1;
            if (i >= image_block.length) {
              i = 0;
            }
            add(image_block[i], 'show');
        });
    } else {
        add(btn_prev[index], 'display-no');
        add(btn_next[index], 'display-no');
    }

    btn_zoom[index].addEventListener('click', function () {
        addPicture(image_block, i);
    });

    var images_blocks = [images_one, images_two, images_three];
    [].forEach.call(images_blocks, function(el) {
        [].forEach.call(el, function(elem) {
            elem.addEventListener('click', function () {
                if (window.innerWidth > 480 && window.innerWidth < 769) {
                    addPicture(el, i);
                }
            });
        });
    });
}

/*Увеличение картинки при клике*/

function addPicture(image_block, index) {
    var images = [];
    add(modal_picture, 'modal-picture--active');
    add(page_header, 'page-header--blocking');
    blur(page_header, page_main, page_footer);
    for (var ind = 0; ind < image_block.length; ind++) {
        var image = '../' + image_block[ind].getAttribute('src');
        images.push(image);
    }
    zoomModalOpen(images, index);
}

function zoomModalOpen(sourses, currentPicture) {
    var i = currentPicture;
    modal_picture_img.setAttribute('src', sourses[i]);
    if (sourses.length > 1) {
        remove(btn_prev[3], 'display-no');
        remove(btn_next[3], 'display-no');
        btn_prev[3].addEventListener('click', function() {
            i = i - 1;
            if (i < 0) {
              i = sourses.length - 1;
            }
            modal_picture_img.setAttribute('src', sourses[i]);
        });
        btn_next[3].addEventListener('click', function() {
            i = i + 1;
            if (i >= sourses.length) {
              i = 0;
            }
            modal_picture_img.setAttribute('src', sourses[i]);
        });
    } else {
        add(btn_prev[3], 'display-no');
        add(btn_next[3], 'display-no');
    }
}

choice(btnsForImage);

/*Закрытие увеличеных картинок*/

function zoomModalClose() {
    add(modal_picture, 'modal-picture--closed');
    setTimeout(function() {
        remove(modal_picture, 'modal-picture--closed');
    }, 500);
    remove(modal_picture, 'modal-picture--active');
    remove(page_header, 'page-header--blocking');
    blur(page_header, page_main, page_footer);
}

btn_close.addEventListener('click', function() {
    zoomModalClose();
});
