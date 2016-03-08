/*
 Todo: Module Dependencies
 @author:
 @date: 1/4/16
 @time: 4:40 PM
 */


var koa = require('koa');
var router = require('koa-router')();
var cors = require('koa-cors');
var release = require('./db/release');
var user = require('./db/user');
var action = require('./db/actions');


var app =  koa();
app.use(cors());
router.prefix('/api/v1');
router.get('/datasets', release.getAll);
router.get('/datasets/:id', release.getOne);
router.post('/users', user.create);
router.get('/user/:email', user.get);
//router.get('/actions/user/:user_id/:dataset_id', action.getActionsByUser);
router.get('/actions/:dataset_id', action.getAll);
router.post('/appreciate', action.appreciate);
router.post('/views', action.view);
router.post('/comments', action.comment);


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
console.log('server is listening on 5000');

