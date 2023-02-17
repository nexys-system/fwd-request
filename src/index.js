const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { TARGET : target } = process.env;

if (!target) {
  throw Error('target must be set');
}

const app = express();
app.use('*', createProxyMiddleware({target, changeOrigin: true}));
app.listen(3000);
