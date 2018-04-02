//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js

AOS.init();

$(window).on("scroll", function () {
  var scrollHeight = $(window).height(); //847
  var navHeight = $('.navGrid').innerHeight(); //124
  var sprintHeight = $('.main').innerHeight() + $('.sprint').innerHeight(); //1927
  var scrollOne = $(window).scrollTop() + navHeight;
  var scrollTwo = $(window).scrollTop() + sprintHeight + navHeight;
  
  if (scrollOne > scrollHeight) {
    $('.navGrid').addClass('active');
    $('.navGrid').find('a').removeClass('active');
    $('.navGrid__menu-2' ).find( "a" ).addClass('active');
  } else if(($(window).scrollTop() > 2800) ){
    $('.navGrid').find('a').removeClass('active');
    $('.navGrid__menu-3' ).find( "a" ).addClass('active');
  } else {
    $('.navGrid').removeClass('active');
    $('.navGrid').find('a').removeClass('active');
    $('.navGrid__menu-1' ).find( "a" ).addClass('active');
  }
});

