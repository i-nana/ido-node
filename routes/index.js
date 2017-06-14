var Index = require('../app/controllers/index');
var Totoro = require('../app/controllers/Totoro')

module.exports = function (app) {
	app.get('/', Index.index);
	
	// Totoro ヾ(◍°∇°◍)ﾉﾞ
	app.post('/totoro', Totoro.index);
};