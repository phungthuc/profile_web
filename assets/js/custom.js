
/* Hoppex  HTML5 Template  */

/************ TABLE OF CONTENTS ***************
 01. Owl carousel slider
 02. Sticky header
 03. Prealoader
 04. Language switcher
 05. PrettyPhoto
 06. BrandCarousel
 07. Testimonial carousel
 08. ScrollToTop
 09. Cart Touch Spin
 10. PriceFilter
 11. Cart touch spin
 12. Fancybox activator
 13. ContactFormValidation
 14. Scoll to target
 15. PrettyPhoto

 **********************************************/


"use strict";



//Submenu Dropdown Toggle
if($('.main-header li.dropdown ul').length){
    $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
}



//Mobile Nav Hide Show
if($('.mobile-menu').length){

    $('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);

    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
    });

    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('.megamenu').slideToggle(900);
    });

    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function() {
        $('body').addClass('mobile-menu-visible');
    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
        $('body').removeClass('mobile-menu-visible');
    });


}




// Scroll to a Specific Div
if($('.scroll-to-target').length){
    $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);

    });
}



//Parallax Scene for Icons
if($('.parallax-scene-1').length){
    var scene = $('.parallax-scene-1').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-2').length){
    var scene = $('.parallax-scene-2').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-3').length){
    var scene = $('.parallax-scene-3').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-4').length){
    var scene = $('.parallax-scene-4').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-5').length){
    var scene = $('.parallax-scene-5').get(0);
    var parallaxInstance = new Parallax(scene);
}



//Add One Page nav
if($('.scroll-nav').length) {
    $('.scroll-nav').onePageNav();
}


//Update Header Style and Scroll to Top
function headerStyle() {
    if($('.main-header').length){
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.main-header');
        var scrollLink = $('.scroll-top');
        if (windowpos >= 350) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}
headerStyle();




function fullHeight(){
    $('.full-height').css("height", $(window).height());
}




//Hide Loading Box (Preloader)
function handlePreloader() {
    if($('.loader-wrap').length){
        $('.loader-wrap').delay(1000).fadeOut(500);
    }
    TweenMax.to($(".loader-wrap .overlay"), 1.2, {
        force3D: true,
        left: "100%",
        ease: Expo.easeInOut,
    });
}

if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function(){
        $('.loader-wrap').delay(200).fadeOut(500);
    })
}



//Fact counter
function CounterNumberChanger () {
    var timer = $('.timer');
    if(timer.length) {
        timer.appear(function () {
            timer.countTo();
        })
    }
}


// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('.filter-text').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filters-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            var count = $('.filter-layout').find(filterElement).length;
            $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
        });
    };
}


// ===Image Hover Script===
function onHoverthreeDmovement() {
    var tiltBlock = $('.js-tilt');
    if(tiltBlock.length) {
        $('.js-tilt').tilt({
            maxTilt: 20,
            perspective:700,
            glare: true,
            maxGlare: 0
        })
    }
}


// Tab Box
function tabBox () {
    if($('.tabs-box').length){
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')){
                return false;
            }else{
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }
}



// page direction
function directionswitch() {
    if ($('.page_direction').length) {

        $('.direction_switch button').on('click', function() {
            $('.boxed_wrapper').toggleClass(function(){
                return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
            })
        });
    };
}


// Color switcher
function swithcerMenu () {
    if ($('.switch_menu').length) {

        $('.switch_btn button').on('click', function(){
            $('.switch_menu').toggle(500)
        });

        $('#styleOptions').styleSwitcher({
            hasPreview: true,
            fullPath: 'assets/css/color/',
            cookie: {
                expires: 30,
                isManagingLoad: true
            }
        });

    };
}





// Cart Touch Spin
if ($('.quantity-spinner').length) {
    $("input.quantity-spinner").TouchSpin({
        verticalbuttons: true
    });
}



// Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}






/////////////////////////////
//Universal Code for All Owl Carousel Sliders
/////////////////////////////

if ($('.theme_carousel').length) {
    $(".theme_carousel").each(function (index) {
        var $owlAttr = {},
            $extraAttr = $(this).data("options");
        $.extend($owlAttr, $extraAttr);


        $(this).owlCarousel($owlAttr);


    });

}


// Main Slider Carousel
if ($('.banner-carousel').length) {
    $('.banner-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:false,
        margin:0,
        dots: false,
        nav:false,
        singleItem:true,
        smartSpeed: 500,
        autoplay: false,
        autoplayTimeout: 9000,
        navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-left-arrow-1 right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });
}





// One Item Carousel
if ($('.one-item-carousel').length) {
    $('.one-item-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        stagePadding: 0,
        singleItem:true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        navText: [ '<span class="fa fa-angle-left left"></span>', '<span class="fa fa-angle-right right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            850:{
                items:1
            },
            991:{
                items:2
            },
            1300:{
                items:3
            },
            1700:{
                items:4
            }
        }
    });
}





























//  Partner Carousel
if ($('.partner-carousel').length) {
    $('.partner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        stagePadding: 0,
        singleItem:true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        navText: [ '<span class="flaticon-next left"></span>', '<span class="flaticon-next right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1300:{
                items:4
            }
        }
    });
}











//Accordion Box
if($('.accordion-box').length){
    $(".accordion-box").on('click', '.acc-btn', function() {

        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');

        if($(this).hasClass('active')!==true){
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')){
            return false;
        }else{
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);
        }
    });
}



if ($('.dial').length) {
    $('.dial').appear(function() {
        var elm = $(this);
        var color = elm.attr('data-fgColor');
        var perc = elm.attr('value');
        elm.knob({
            'value': 0,
            'min': 0,
            'max': 100,
            'skin': 'tron',
            'readOnly': true,
            'thickness': 0.05,
            'dynamicDraw': true,
            'displayInput': false
        });
        $({
            value: 0
        }).animate({
            value: perc
        }, {
            duration: 2000,
            easing: 'swing',
            progress: function() {
                elm.val(Math.ceil(this.value)).trigger('change');
            }
        });
        $(this).append(function() {});
    }, {
        accY: 20
    });
}



//Progress Bar / Levels
if($('.progress-levels .progress-box .bar-fill').length){
    $(".progress-box .bar-fill").each(function() {
        $('.progress-box .bar-fill').appear(function(){
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
        });

    },{accY: 0});
}



//Fact Counter + Text Count
if($('.count-box').length){
    $('.count-box').appear(function(){

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function() {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    },{accY: 0});
}






//====== Magnific Popup
$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
});



//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',

        youtube : {
            controls : 0,
            showinfo : 0
        },

        helpers : {
            media : {}
        }
    });
}



if($('.paroller').length){
    $('.paroller').paroller({
        factor: -0.1,            // multiplier for scrolling speed and offset, +- values for direction control
        factorLg: -0.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
        type: 'foreground',     // background, foreground
        direction: 'vertical' // vertical, horizontal
    });
}



if($('.paroller-2').length){
    $('.paroller-2').paroller({
        factor: 0.05,            // multiplier for scrolling speed and offset, +- values for direction control
        factorLg: 0.05,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
        type: 'foreground',     // background, foreground
        direction: 'horizontal' // vertical, horizontal
    });
}




// Elements Animation
if($('.wow').length){
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
        }
    );
    wow.init();
}



// AOS Animation
if ($("[data-aos]").length) {
    AOS.init({
        duration: '1000',
        disable: 'false',
        easing: 'ease',
        mirror: true
    });
}




//Contact Form Validation
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType:  'json',
                success: function(data) {
                    if( data.status = 'true' ) {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                }
            });
        }
    });
}



//Search Popup
if($('#search-popup').length){
    //Show Popup
    $('.search-toggler').on('click', function() {
        $('#btn-search').prop('disabled',true)
        $('.btn-txt').text("Đang kiểm tra.")
        let phone = $('#search_phone').val()
        
        // let url = "https://a509-101-99-33-243.ngrok-free.app/"
        let url = "http://manage.local/"
            $.ajax({
                type: "POST",
                data: { phone: phone},
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                url: url + "api/search/",
                async: false,
                beforeSend: function(){
                   $('#btn-search').prop('disabled',true)
                   $('.btn-txt').text("Đang kiểm tra.")
                },
                success: function(data) {
                    setTimeout(function() {
                        $('#btn-search').prop('disabled',false)
                        $('.btn-txt').text("Kiểm tra.")
                        $('#search-popup').addClass('popup-visible');
                        $('#search-results').html(data)
                    }, 3000);
                },
                error: function() {
                    $('#search-popup').removeClass('popup-visible');
                    $('#btn-search').prop('disabled',false)
                    $('.btn-txt').text("Kiểm tra.")
                }
            }); //end ajax
    });

    $(document).keydown(function(e){
        if(e.keyCode === 27) {
            $('#search-popup').removeClass('popup-visible');
        }
    });

    //Hide Popup
    $('.close-search,.search-popup .overlay-layer').on('click', function() {
        $('#search-popup').removeClass('popup-visible');
    });
}



$('select:not(.ignore)').niceSelect();





// Dom Ready Function
jQuery(document).on('ready', function () {
    (function ($) {
        // add your functions
        tabBox ();
        directionswitch ();
        swithcerMenu ();
        CounterNumberChanger ();
        onHoverthreeDmovement ();
        priceFilter ();




    })(jQuery);
});



jQuery(window).on('scroll', function(){
    (function ($) {

        headerStyle ();


    })(jQuery);
});



// Instance Of Fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        handlePreloader ();
        projectMasonaryLayout ();
        fullHeight();


    })(jQuery);
});






$(window).enllax();
