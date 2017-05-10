'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
var fs = require('fs')
var db = JSON.parse(fs.readFileSync('db/chat.json', 'utf8'))

var path = require('path')
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
    console.log('Server connected to client!')

    socket.on('welcomeMessage', () => {

        socket.emit('botMessage', {data: db.welcomeMessage.message})

        var menuButtons = function() {
            return socket.emit('menuButtons', {data: db.welcomeMessage.options})
        }

        setTimeout(menuButtons, 1200)
    })

    socket.on('mainMenu', () => {
        socket.emit('botMessage', {data: mainMenuMessage()})
    })

    socket.on('menuRequest', (data) => {
      console.log(data.data);
        socket.emit('botMessage', {
            data: db[data.data].message
        })
        if (data.data === 'Send Email') {
            socket.emit('menuButtons', {
                data: db[data.data].options,
                sendEmail: true
            })
        } else if (data.data === 'Call Him') {
          socket.emit('menuButtons', {
              data: db[data.data].options,
              callPhone: true
          })
        } else {
            socket.emit('menuButtons', {
                data: db[data.data].options
            })
        }
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
