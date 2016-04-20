var express = require('express'),
    ejs = require('ejs');
    bodyParser = require('body-parser'),
    compression = require('compression');
/*cfgManager = require('node-config-manager');*/

var	app = express();

var db = require('./server/utils/dbUtil'),
    dbUrl = process.env.DB_URL || 'mongodb://localhost/trackmycoin';

db.connect(dbUrl);

/*options = {
  configDir: './server/config',
  env: process.env.NODE_ENV || "default",
  camelCase: true
};

cfgManager.init(options);

cfgManager.addConfig('aws')
  .addConfig('db')
  .addConfig('ldap_config')
  .addConfig('schema'); */

var routeMap = require('./server/routeMap');

app.use(compression());
app.use('/', express.static('www'));
//app.use('/catalog/admin', express.static('bower_components'));
app.set('port', process.env.PORT || 3000);
app.set('views', './www');
app.set('view engine', 'ejs');
app.use(bodyParser.json());	// for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));

routeMap.listenRoutes( app );

//	Server Setup
app.listen(app.get('port'), function() {
	console.log('Server Started & Listening @ ' + app.get('port'))
});