$(document).ready(() => {

    // SOCKET & BOT CLIENT
    var socket = io.connect();

    // UI
    $('.main-content').fadeIn(1200)

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
})
