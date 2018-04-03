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
    var socket = io.connect()

    // UI

    // link logo to homepage
    $('.logo').click(() => {
      window.location = "/"
    })

    // rotation of logo
    setInterval(() => {
      $('.logo').toggleClass('rotate')
      setTimeout(() => {
        $('.logo').toggleClass('rotate')
      }, 800)
    }, 4000)

    // click to top btn
    $('.FAB').click(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    })

    // img carosels
    var counters = {
      'people': 1,
      'ideas': 1,
      'proto': 1
    }
    $('section img').click((event) => {
        var section = $(event.target).data('section')
        var direction = $(event.target).data('direction')

        if (direction === 'fwd') {
          if (counters[section] === 3) {
            counters[section] = 1
          } else {
            counters[section]++
          }
        } else {
          if (counters[section] === 1) {
            counters[section] = 3
          } else {
            counters[section]--
          }
        }

        $('.' + section + '-img').attr('src', '/img/' + section + counters[section] + '.png')

    })

    // scrolling on imgs
    let touchstartX = 0
    let touchstartY = 0
    let touchendX = 0
    let touchendY = 0

    const gestureZone = document.getElementById('gestureZone')

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX
        touchstartY = event.changedTouches[0].screenY
    }, false)

    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX
        touchendY = event.changedTouches[0].screenY
        handleGesture(event)
    }, false)

    function handleGesture(event) {
      if (touchendX <= touchstartX) {
        console.log('Swiped left')
        console.log($(event.target))

            var section = $(event.target).data('section')
            var direction = 'back'

            if (direction === 'fwd') {
              if (counters[section] === 3) {
                counters[section] = 1
              } else {
                counters[section]++
              }
            } else {
              if (counters[section] === 1) {
                counters[section] = 3
              } else {
                counters[section]--
              }        }

            console.log('/img/' + section + counters[section] + '.png')
            $('.' + section + '-img').attr('src', '/img/' + section + counters[section] + '.png')


      }

      if (touchendX >= touchstartX) {
        console.log('Swiped right')
        console.log($(event.target))

            var section = $(event.target).data('section')
            var direction = 'fwd'

            if (direction === 'fwd') {
              if (counters[section] === 3) {
                counters[section] = 1
              } else {
                counters[section]++
              }
            } else {
              if (counters[section] === 1) {
                counters[section] = 3
              } else {
                counters[section]--
              }        }

            console.log('/img/' + section + counters[section] + '.png')
            $('.' + section + '-img').attr('src', '/img/' + section + counters[section] + '.png')


      }

      if (touchendY <= touchstartY) {
        console.log('Swiped up')
        console.log($(event.target))
      }

      if (touchendY >= touchstartY) {
        console.log('Swiped down')
        console.log($(event.target))
      }

      if (touchendY === touchstartY) {
        console.log('Tap')
        console.log($(event.target))
      }
    }

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
