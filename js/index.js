$(function() {
    let header = $("#header");
    let banner = $("#banner");
    let bannerH = banner.innerHeight();
    let scrollPosition = $(window).scrollTop();
    $(window).on("scroll resize load", function() {
        bannerH = banner.innerHeight();
        scrollPosition = $(this).scrollTop();
        if (scrollPosition > bannerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    let nav = $("nav");
    let navToggle = $("navToggle");
    $("#navToggle").on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});