//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js

AOS.init();


$(document).ready(function(e) {
  $(window).on("scroll", function () {
    var scrollHeight = $(window).height(); //847
    var scrollTop = $(window).scrollTop(); // ScrollEvent
    var navHeight = $('.navGrid').innerHeight(); //124
    var sprintHeight = $('.main').innerHeight() + $('.sprint').innerHeight(); //1927
    var scrollOne = scrollTop + navHeight;
    var scrollTwo = navHeight + sprintHeight; // 2531
    var settop = $('#process').offset().top - 124;

    if (scrollTop > scrollHeight) {
      $('.navGrid').addClass('active');
      $('.navGrid').find('a').removeClass('active');
      $('.navGrid__menu-2').find('a').addClass('active');
    }else if (scrollTop > settop) {
      $('.navGrid').find('a').removeClass('active');
      $('.navGrid__menu-3').find('a').addClass('active');
    } else{
      $('.navGrid').removeClass('active');
      $('.navGrid').find('a').removeClass('active');
      $('.navGrid__menu-1').find("a").addClass('active');
    }
  });
})


