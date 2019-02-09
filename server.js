const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const songs = require('./routes/songs')
const playlists = require('./routes/playlists')

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/songs', songs)
app.use('/playlists', playlists)

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
