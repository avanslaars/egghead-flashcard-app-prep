const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://clumsy-grandiflora.glitch.me',
      changeOrigin: true
    })
  )
}
