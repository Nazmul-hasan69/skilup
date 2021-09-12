$(function () {
   //sticky Nav
   $(window).on('scroll', function () {
      if ($(window).scrollTop() > 0) {
         $('#navigation').addClass('stickyNav')
      } else {
         $('#navigation').removeClass('stickyNav')
      }
   })
   //Back to Top Button
   $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
         $('#backToTop').fadeIn()
      } else {
         $('#backToTop').fadeOut()
      }
   })
   $('#backToTop').on('click', function () {
      $('html,body').animate({
         scrollTop: 0
      }, )
   })

   //slick sliders
   $('.slick_slider_init').slick({
      prevArrow: '<i class="slider_arrow slider_arrow_left fas fa-chevron-left"></i>',
      nextArrow: '<i class="slider_arrow slider_arrow_right fas fa-chevron-right"></i>',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
   });
});