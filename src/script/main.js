//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js

AOS.init();

$(window).on("scroll", function () {
  var scrollHeight = $(window).height();
  var scrollPosition = $(window).scrollTop() + 60;
  if (scrollPosition > scrollHeight) {
    $('.navGrid').addClass('active');
  } else {
    $('.navGrid').removeClass('active');
  }
});