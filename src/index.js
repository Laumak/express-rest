const bodyParser = require("body-parser")
const express    = require("express")
const mongoose   = require('mongoose')
const morgan     = require("morgan")

const apiRouter = require("./routes/api")

const app = express()
const port = process.env.PORT || 4000

mongoose.connect("mongodb://mongo:27017")

// HTTP request logging
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

app.use(bodyParser.json())

app.use("/api/v0/", apiRouter)

app.listen(port, () => {
  const message = `App listening on port ${port}`
  console.log(message) // eslint-disable-line no-console
})
