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

$('button.btn.header__button.mx-auto.d-block').click(function(e){
  $('section.hero').addClass('animated fadeOutLeft')
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