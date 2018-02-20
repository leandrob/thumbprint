var crypto = require('crypto');

module.exports.calculate = function (cert) {
	var shasum = crypto.createHash('sha1');
	shasum.update(new Buffer(cert, 'base64'));
	return shasum.digest('hex');
}
