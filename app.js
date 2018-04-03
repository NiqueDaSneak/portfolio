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

app.get('/approach', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/approach.html'))
})


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
