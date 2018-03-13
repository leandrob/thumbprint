var crypto = require('crypto');

module.exports.calculate = function (cert,algo) {
	if( algo == undefined ) { algo = 'sha1'; }

	var shasum = crypto.createHash(algo);
	var der = new Buffer(cert, 'base64').toString('binary')
	shasum.update(der);
	return shasum.digest('hex');
}
