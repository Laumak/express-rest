const express = require("express")
const bodyParser = require("body-parser")

const apiRouter = require("./routes/api")

const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => {
  const message = `App listening on port ${port}`
  console.log(message) // eslint-disable-line no-console
})

app.use(bodyParser.json())

app.use("/api/v0/", apiRouter)
