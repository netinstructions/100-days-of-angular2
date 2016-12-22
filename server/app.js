"use strict";
require('angular2-universal-polyfills');
require('./__workaround.node'); // temporary until 2.1.1 things are patched in Core
var angular2_express_engine_1 = require('angular2-express-engine');
var app_module_1 = require('../client/app.module');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('.html', angular2_express_engine_1.createEngine({}));
app.use('/api', api);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.get('/*', function (req, res) {
    // Our Universal - express configuration object
    var expressConfig = {
        req: req,
        res: res,
        ngModule: app_module_1.AppModule,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3000'
    };
    // NOTE: everything passed in here will be set as properties to the top level Zone
    // access these values in your code like this: Zone.current.get('req');
    // this is temporary; we will have a non-Zone way of getting these soon
    res.render('index', expressConfig);
});
module.exports = app;
