module.exports = function (callback) {

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// Already ready or interactive, execute callback
		callback.call();
	}
	else if (document.attachEvent) {
		// Old browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'interactive')
				callback.call();
		});
	}
	else if (document.addEventListener) {
		// Modern browsers
		document.addEventListener('DOMContentLoaded', callback);
	}
}
