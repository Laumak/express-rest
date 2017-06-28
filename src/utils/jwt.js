const jwt = require("jsonwebtoken")
const salt = require("../../env").salt

const generateToken = (user = { id: 1, roles: ["admin"] }) => {
  const { id, roles } = user
  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  return jwt.sign({ id, roles }, salt, { expiresIn: "5m" })
}

const verifyValidity = (token) => {
  if(!token) return "NO_TOKEN"

  try {
    jwt.verify(token, salt)
    // jwt.verify(token, secretOrPublicKey, [options, callback])
    return "SUCCESS"
  } catch(error) {
    return error.message
  }
}

module.exports = { generateToken, verifyValidity }
