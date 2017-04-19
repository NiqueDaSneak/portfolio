'use strict'

const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => { res.render('index') })

var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
app.on('error', (error) => {
  console.log(error)
})

module.exports = app
