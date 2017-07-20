let $ = require("jquery");

class JQueryWrapper {
	get(url) {
		return $.get(url);
	}
}

module.exports = new JQueryWrapper();