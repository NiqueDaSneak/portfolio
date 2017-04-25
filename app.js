'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
var fs = require('fs')
var db = JSON.parse(fs.readFileSync('db/chat.json', 'utf8'))

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
    console.log('Server connected to client!')

    socket.on('welcomeMessage', () => {

        socket.emit('botMessage', { data: db.welcomeMessage.message })

        var menuButtons = function() {
          return socket.emit('menuButtons', { data: db.welcomeMessage.options })
        }

        setTimeout(menuButtons, 1800)
    })

    socket.on('mainMenu', () => {
        socket.emit('botMessage', { data: mainMenuMessage() })
    })

    socket.on('menuRequest', (data) => {

      console.log(db[data.data].message);
      // socket.emit('botMessage', { data:  })
    })

})

var port = process.env.PORT || 3000
server.listen(port, () => {
    console.log('Server listening on port ' + port)
})
server.on('error', (error) => {
    console.log(error)
})

module.exports = app
