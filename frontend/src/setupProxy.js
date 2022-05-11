const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.hvrange.xyz:8000',
      changeOrigin: true,
    })
  );
};