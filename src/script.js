(function ($) {
  $(window).scroll(() => {
    $('#sticky-nav').css('top', $(window).scrollTop())
  })
})
