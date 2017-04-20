$(document).ready(() => {

    // SOCKET & BOT CLIENT
    var socket = io.connect();

    // UI
    $('.main-content').fadeIn(1200)
    $('.links:last-child').on('click', () => {
      $('.menu').css('bottom', '2vh')
      return false
    })
})
