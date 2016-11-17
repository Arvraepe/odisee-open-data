/**
 * Created by vanraar on 03/11/16.
 */

require('app-module-path').addPath(__dirname + '/api');

global.R = require('ramda');

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Cors = require('cors');

App.use(BodyParser.json());
App.use(Cors());
App.use(Express.static('views'));


require('routes/MonumentRoutes').init(App);

App.listen(8080, () => console.log('Server started'));