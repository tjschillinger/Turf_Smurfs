$('body').jvmobilemenu({
// selector to click outside menu to close
notMenuClick: $('.page'),

// speed to open and close menu
slideSpeed: 0.3,

// width of the mobile menu
menuWidth: 240

});

var elem = $( '.mobile-menu' )[0];

$( document ).on( 'click', function ( e ) {
    if ( $( e.target ).closest( elem ).length === 0 ) {
        $(".mobile-menu").removeClass("menu-open");
    }
});

$(".hamburger").click(function() {
    $(".mobile-menu").toggleClass("menu-open");
});

$("#contact-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-this-page").offset().top-100 },
        2000, 'swing');
});

$("#contact-scroll-2").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-this-page").offset().top-100 },
        2000, 'swing');
});