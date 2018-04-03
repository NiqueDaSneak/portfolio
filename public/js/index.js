$(document).ready(() => {


  $(window).on("orientationchange", (event) => {

    if (window.orientation === 90) {
      $('.hide-orientation').fadeIn()
    }

    if (window.orientation === -90) {
      $('.hide-orientation').fadeIn()
    }

    if (window.orientation === 0) {
        $('.hide-orientation').fadeOut()
    }
  })

    // SOCKET & BOT CLIENT
    var socket = io.connect();

    // UI

    // INITIAL FADE IN
    $('.main-content').fadeIn(1200)
    $('.main-content p:first-of-type').fadeTo(4800, 1)


    // MENU TOGGLE
    $('.toggle').on('click', () => {
        if ($('.toggle').hasClass('open')) {
            $('.menu').css('bottom', '-5vh')
            $('.toggle').removeClass('open').text('MORE')
        } else {
            $('.menu').css('bottom', '2vh')
            $('.toggle').addClass('open').text('CLOSE')
        }
        return false
    })

    // load approach screen
    $('.approach').on('click', () => {
          // add class approach-ui to '.main-content'
          $('.main-content').addClass('approach-ui')
    })

    // exit chat
    $('.chat-ui header a').click(() => {
        $('.chat-ui').fadeOut(1200, () => {
            $('.main-content').fadeIn(1200)
            $('.btns').empty()
            $('.messages').empty()
        })
        return false
    })

    // end of DOM READY
})
