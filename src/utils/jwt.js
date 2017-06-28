const jwt = require("jsonwebtoken")

const env = require("../../env")
const tokenStates = {
  NO_TOKEN: "NO_TOKEN",
  SUCCESS: "SUCCESS"
}

const generateToken = ({ id = 1, roles = [ "admin" ] }) => {
  return jwt.sign({ id, roles }, env.SALT, { expiresIn: env.TOKEN_EXPIRY })
}

const verifyValidity = (token) => {
  if(!token) return tokenStates.NO_TOKEN

  try {
    jwt.verify(token, env.SALT)

    return tokenStates.SUCCESS
  } catch(error) {
    return error.message
  }
}

module.exports = { generateToken, verifyValidity, tokenStates }
