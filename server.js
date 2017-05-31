const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./router')

const app = express()
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Use * for all urls
// Use before routes
app.use(cors({origin: '*'})) // Secure

app.use('/', routes)

const PORT = 5000
app.listen(PORT, function () {
  console.log('Server is listening on port', PORT)
})

module.exports = app
