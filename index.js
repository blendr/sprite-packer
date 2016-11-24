var path = require('path');
var spritesheet = require('spritesheet-js');
var deasync = require('deasync');

module.exports = function() {
};

module.exports.prototype.pack = function(packId, files, destPath) {
	var sprites = [];
	for(var id in files) {
		var file = files[id];

		sprites.push(file);
	}

	var done = false;
	spritesheet(sprites, {
		//format: 'pixi.js',
		name: packId,
		path: destPath,
		trim: false,
		powerOfTwo: true,
		padding: 10
	}, function(err) {
		done = true;
		if(err) {
			throw err;
		}
	});
	deasync.loopWhile(function() { return !done; });

	return {
		json: packId + '.json',
		image: packId + '.png'
	};
};
