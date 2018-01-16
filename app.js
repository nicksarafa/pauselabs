const express = require('express')
const path = require('path')
const https = require('https')

const app = express()

app.enable('trust proxy')

app.use(function(req, res, next) {
  if (!req.secure && process.env.NODE_ENV === "production") {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  next()
}, express.static(path.join(__dirname, 'public')))

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port
    if (process.env.NODE_ENV !== "production") {
      console.log('App listening on port', port)
    }
  })
}

module.exports = app
