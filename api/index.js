const Koa = require('koa');
const app = new Koa();

const config = require('./config/config');
app.use(async ctx => {
  ctx.body = `Hello Vercel. Port is ${config.port}`;
});

app.listen(config.port, () => {
  console.log(`${config.port}项目启动`)
});