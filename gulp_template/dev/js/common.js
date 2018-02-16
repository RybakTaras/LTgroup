'use strict';
// svg4everybody({});

$(document).ready(function(){
  // MENU BUTTON
    $('.header-nav__btn').click(function(){
      $('.header-nav__svg').toggleClass('open');
    })
  // WOW JS
    new WOW().init();
});
