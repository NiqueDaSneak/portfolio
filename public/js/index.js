$(document).ready(() => {

    // SOCKET & BOT CLIENT
    var socket = io.connect();
    socket.on('botMessage', (data) => {
        $('.messages').prepend("<p class='bot-message'>" + data.data + "</p>")
    })
    socket.on('menuButtons', (data) => {
        if (data.sendEmail) {
            $('.btns').append("<button type='button' class='external'><a href='mailto:thisisdom4@gmail.com'>Craft your email</a></button>")
        }
        if (data.callPhone) {
            $('.btns').append("<button type='button' class='external'><a href='tel:5132917758'>Make the call</a></button>")
        }

        for (var i = 0; i < data.data.length; i++) {
            $('.btns').append("<button type='button' value='" + data.data[i] + "'>" + data.data[i] + "</button>")
            $('.btns').css('left', '0vh')
        }
    })

    // UI

    // INITIAL FADE IN
    $('.main-content').fadeIn(1200)

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

    // CHAT

    // load welcomeMessage
    $('.chat').on('click', () => {
        $('.main-content').fadeOut(1200).promise().done(() => {
            $('.chat-ui').fadeIn(1200).promise().done(() => {
                socket.emit('welcomeMessage')
            })
        })
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

    $('.btns').click(() => {
      if ($(event.target).parent().hasClass('external')) {
        socket.emit('welcomeMessage')
      } else {
        socket.emit('menuRequest', {data: event.target.value})
      }
        $('.btns').empty()
        $('.messages').empty()
    })

    // end of DOM READY
})
