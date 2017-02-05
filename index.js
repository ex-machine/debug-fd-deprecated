var util = require('util');

if (!util.deprecate._isPatched) {
	var deprecateOriginal = util.deprecate;
	var noop = function () {};
	
	util.deprecate = function (fn, msg) {
		if (typeof msg === 'string' && msg.indexOf('`DEBUG_FD` is deprecated.') === 0) {
			return noop;
		} else {
			var args = new Array(arguments.length);

			for (var i = 0; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			return deprecateOriginal.apply(this, args);
		}
	};
	
	util.deprecate._isPatched = true;
}
