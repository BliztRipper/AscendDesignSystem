//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js   

AOS.init();


$('.navGrid__offMenu').click(function(){
  $('.offCanvas').toggleClass('active')
})

$('.offCanvas__close').click(function(){
  $('.offCanvas').removeClass('active')
})

$('button.btn.header__button.mx-auto.d-block').click(function(){
  $('body').addClass('animated fadeOutLeft');
  setTimeout(function() {
    window.location.href='empathize.html';
  }, 750);
})

$('.gotoDay2').click(function(){
  $('body').addClass('animated fadeOutLeft');
  setTimeout(function() {
    window.location.href='user-experience.html';
  }, 750);
})

$('.gotoDay3').click(function(){
  $('body').addClass('animated fadeOutLeft');
  setTimeout(function() {
    window.location.href='user-interface.html';
  }, 750);
})

$('.gotoDay4').click(function(){
  $('body').addClass('animated fadeOutLeft');
  setTimeout(function() {
    window.location.href='prototype.html';
  }, 750);
})

$('.gotoDay5').click(function(){
  $('body').addClass('animated fadeOutLeft');
  setTimeout(function() {
    window.location.href='test.html';
  }, 750);
})

$('.gotoDay6').click(function(){
  $('body').addClass('animated fadeOutLeft');
  setTimeout(function() {
    window.location.href='stakeholder.html';
  }, 750);
})

$('.backto1').click(function(){
  $('body').addClass('animated fadeOutDown');
  setTimeout(function() {
    window.location.href ='empathize.html';
  }, 750);
})
$('.backto2').click(function(){
  $('body').addClass('animated fadeOutDown');
  setTimeout(function() {
    window.location.href = 'user-experience.html';
  }, 750);
})
$('.backto3').click(function(){
  $('body').addClass('animated fadeOutDown');
  setTimeout(function() {
    window.location.href = 'user-interface.html';
  }, 750);
})
$('.backto4').click(function(){
  $('body').addClass('animated fadeOutDown');
  setTimeout(function() {
    window.location.href = 'prototype.html';
  }, 750);
})
$('.backto5').click(function(){
  $('body').addClass('animated fadeOutDown');
  setTimeout(function() {
    window.location.href = 'test.html';
  }, 750);
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

$('.navGrid__offMenu').on("click", function() {
  var el = $('.navGrid__offMenu--text');
  el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
});