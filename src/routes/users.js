const express = require("express")
const usersRouter = express.Router()

const users = [
  { id: 1, email: "lauri@mits.fi", name: "Lauri Mäkinen" },
  { id: 2, email: "markus@mits.fi", name: "Markus Mäkinen" },
]

usersRouter.route("/")
  .get((req, res) => {
    res.send({ users })
  })

usersRouter.route("/:id")
  .get((req, res) => {
    const userId = req.params.id
    const user = users.find(user => user.id == userId)

    res.send({ user })
  })

module.exports = usersRouter
