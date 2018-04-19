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

$('#triggerEmpathize').click(function(){
  $('#offEmpathize').addClass('active')
  $('html, body').animate({
    scrollTop: $(".empathizeInfo").offset().top
  }, 800);
})

$('#offEmpathize').click(function(){
  $(this).removeClass('active')
  $('html, body').animate({
    scrollTop: $('.empathize').offset().top
  }, 800);
})