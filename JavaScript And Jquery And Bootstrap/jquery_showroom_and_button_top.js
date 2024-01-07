/*Button And Top*/
new WOW().init(); //Wow animation
//Scroll to Top Button
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200)
            $(".onTop").fadeIn();
        else
            $(".onTop").fadeOut();
            });
    $(".onTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "slow");
    });
}); 
/*Scroll*/
$(document).ready(function () {
    $("#click-black").click(function () {
        $('html, body').animate({
            scrollTop: $("#black").offset().top
        }, 2000);
    });
    $("#click-collection").click(function () {
        $('html, body').animate({
            scrollTop: $("#collect").offset().top
        }, 2000);
    });
    $("#click-showroom").click(function () {
        $('html, body').animate({
            scrollTop: $("#showroom").offset().top 
        }, 2000);
    });
});