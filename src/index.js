const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { TARGET : target, PORT } = process.env;

if (!target) {
  throw Error('target must be set');
}

const port = PORT ? Number(PORT) : 3000;

const app = express();
app.use('*', createProxyMiddleware({target, changeOrigin: true}));
app.listen(port);
