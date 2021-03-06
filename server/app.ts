import 'angular2-universal-polyfills';
import './__workaround.node'; // temporary until 2.1.1 things are patched in Core
import { createEngine, ExpressEngineConfig } from 'angular2-express-engine';
import { AppModule } from '../client/app.module';

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

var api = require('./routes/api');

var app: express.Application = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('.html', createEngine({}));

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err : any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.get('/*', (req, res) => {

  // Our Universal - express configuration object
  const expressConfig : ExpressEngineConfig = {
    req,
    res,
    ngModule: AppModule,
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
