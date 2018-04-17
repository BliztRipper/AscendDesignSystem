//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js

AOS.init();

$('.navGrid__offMenu').click(function(){
  $('.offCanvas').addClass('active')
})

$('.offCanvas__close ').click(function(){
  $('.offCanvas').removeClass('active')
})