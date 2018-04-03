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

    // link logo to homepage
    $('.logo').click(() => {
      window.location = "/";
    })

    // rotation of logo
    setInterval(() => {
      $('.logo').toggleClass('rotate')
    }, 4000)

    // click to top btn
    $('.FAB').click(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })

    // INITIAL FADE IN
    $('.main-content').fadeIn(1200)
    $('.main-content p:first-of-type').fadeTo(3000, 1)


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
    $('.approach-btn').on('click', () => {
          // add class approach-ui to '.main-content'
          $('.main-content p').remove()
          $('footer').remove()
          $('.menu').remove()
          $('.main-content').addClass('approach-ui').css('display', 'inline-block')
          $('.logo').addClass('approach-ui')
          setTimeout(() => {
            $('.approach').removeClass('hide')
          }, 100)

          setTimeout(() => {
            $('.approach').css('opacity', '1')
          }, 500)
    })

    // end of DOM READY
})
