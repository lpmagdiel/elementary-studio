import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import BodyParser from 'koa-bodyparser';
const APP = new Koa();
const PORT = process.env.PORT || 3001;
const PATH = './dist';

const static_pages = new Koa();
static_pages.use(serve(PATH));
APP.use(mount("/", static_pages));

APP.use(BodyParser());

APP.listen(PORT, () => {
    console.log(`elementary studio run on: http://localhost:${PORT}`);
});