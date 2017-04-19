'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => { res.render('index') })

io.on('connection', (socket) => {
  console.log('Server connected to client!')
})

var port = process.env.PORT || 3000
server.listen(port, () => {
  console.log('Server listening on port ' + port)
})
server.on('error', (error) => {
  console.log(error)
})

module.exports = app
