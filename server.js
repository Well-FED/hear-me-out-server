const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./router')

const app = express()

const PORT = 5000

// Use * for all urls
// Use before routes
app.use(cors({origin: 'http://localhost:3000'})) // Secure

app.use('/', routes)

app.listen(PORT, function () {
  console.log('Server is listening on port', PORT)
})

module.exports = app
