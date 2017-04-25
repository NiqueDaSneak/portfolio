$(document).ready(() => {

    // SOCKET & BOT CLIENT
    var socket = io.connect();
    socket.on('botMessage', (data) => {
        console.log(data.data)
        $('.messages').prepend("<p class='bot-message'>" + data.data + "</p>")
    })
    socket.on('menuButtons', (data) => {
        for (var i = 0; i < data.data.length; i++) {
            $('.btns').append("<button type='button' value='" + data.data[i] + "'>" + data.data[i] + "</button>")
            $('.btns').addClass('exposed')
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

    $('.chat-ui header a').click(() => {
        $('.chat-ui').fadeOut(1200, () => {
            $('.main-content').fadeIn(1200)
        })
        return false
    })

    $('.btns').click(() => {
      socket.emit('menuRequest', { data: event.target.value })
      $('.btns').removeClass('exposed')
    })

    // end of DOM READY
})
