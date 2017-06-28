const express = require("express")
const usersRouter = express.Router()

const users = [
  { id: 1, email: "john@email.com", name: "John Doe" },
  { id: 2, email: "jane@email.com", name: "Jane Doe" },
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
