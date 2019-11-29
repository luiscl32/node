const express = require('express')
const logger = require("morgan")
const bodyParser = require("body-parser")
const app = express()

require('./routes/views')(app)
require('./routes/special')(app)

app.use( logger("dev"))
app.use( bodyParser.json())
app.use( bodyParser.urlencoded({ extended: false }))


app.listen(3000,() => {
  console.log('express ejecutado')
})