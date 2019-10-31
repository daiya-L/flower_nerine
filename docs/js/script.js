new WOW().init();

Pace.on('done', function(){
  $('.wrap').fadeIn();
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function() {
  $(".nav-toggle").click(function() {
    $(".nav-toggle div").toggleClass("active");
    $(".gnav").toggleClass("nav-open");
  });
});

$(function() {
  $(".gnav__list a").click(function() {
    $(".nav-toggle div").toggleClass("active");
    $(".gnav").toggleClass("nav-open");
  });
});

$(document).ready(function(){
  $(window).bind("scroll", function() {
    var navHeight = $( window ).height();
      if ($(window).scrollTop() > navHeight) {
        $('nav').addClass('fixed');
      }
      else {
        $('nav').removeClass('fixed');
      }
  });
});
