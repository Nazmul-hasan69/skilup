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
       },)
    })
});