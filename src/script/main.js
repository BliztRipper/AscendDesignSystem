//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../../node_modules/jquery-lazy/jquery.lazy.min.js


$('img.menu-bars').click(function () {
  $('.sidebar').toggleClass('active')
})

$(function () {
  $('.lazy-load').lazy();
});