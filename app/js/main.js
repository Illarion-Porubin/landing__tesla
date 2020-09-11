$(function () {
  $(".header-top__slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
  });

  $('.menu-btn').on('click',  function(){
    $('.menu-btn__inner').addClass('active');
  })

  $('.close-btn').on('click', function(){
    $('.menu-btn__inner').removeClass('active');
  })

});
