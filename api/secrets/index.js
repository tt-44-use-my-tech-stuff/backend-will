const jwtSecret = process.env.JWT_SECRET || "This is a secret." //use env secret or fallback to "shh"

module.exports = {
  jwtSecret
}