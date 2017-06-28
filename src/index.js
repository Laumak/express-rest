const chalk = require("chalk")
const express = require("express")

const apiRouter = require("./routes/api")

const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => {
  const message = chalk.green(`App listening on port ${port}`)
  console.log(message) // eslint-disable-line no-console
})

app.use("/api/v0/", apiRouter)
