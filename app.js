/*
 * @Date: 2022-03-31 00:49:36
 * @LastEditors: geekwen
 * @LastEditTime: 2022-04-01 00:42:46
 * @FilePath: /cfweb-fe/app.js
 * @Description: Description
 */

const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const static = require('koa-static');
const Promise = require('bluebird');
const { renderToString } = require('@vue/server-renderer');
const manifest = require('./dist/server/ssr-manifest.json');
// 'app.js' 是以入口的名字加上 `.js` 后缀命名的
const server = new Koa();
const appPath = path.join(__dirname, './dist', 'server', manifest['app.js']);
const createApp = require(appPath).default;

server.use(static(path.join(__dirname, './dist/client', 'img')));
server.use(static(path.join(__dirname, './dist/client', 'js')));
server.use(static(path.join(__dirname, './dist/client', 'css')));
server.use(static(path.join(__dirname, './dist/client', 'favicon.ico')));

server.use(async (ctx) => {
  const context = ctx;
  const { app } = createApp();
  const appContent = await renderToString(app);
  const resultHtml = await new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, './dist/client', 'index.html'), (err, html) => {
      if (err) {
        reject(err);
      }
      const newHtml = html
        .toString()
        .replace('<div id="app">', `<div id="app">${appContent}`);
      resolve(newHtml);
    });
  });
  context.set('Content-Type', 'text/html');
  context.body = resultHtml;
});

console.log('You can navigate to http://localhost:8080');

server.listen(8080);
