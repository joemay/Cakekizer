(function(old) {
	$.fn.attr = function() {
		if (arguments.length === 0) {
			if (this.length === 0) {
				return null;
			}

			var obj = {};
			$.each(this[0].attributes, function() {
				if (this.specified) {
					obj[this.name] = this.value;
				}
			});
			return obj;
		}

		return old.apply(this, arguments);
	};
})($.fn.attr);


function cakekizer(code) {

	var $el = $(code);

	var attributes = '',
		content = $el.html(),
		href = $el.attr('href'),
		isFirstItem = true;

	if ($el.prop('tagName') === 'A') {
		$.each($el.attr(), function(index, value) {
			if (index !== 'href') {
				if (isFirstItem) {
					attributes += "'" + index + "' =>" + "'" + value + "'";
					isFirstItem = false;
				} else {
					attributes += ", '" + index + "' =>" + "'" + value + "'";
				}
			}
		});

		// Other version
		// var cake = "$this->html->link('" + content + "', array('controller' => '', 'action' => '" + href + "'), array(" + attributes + ");";

		var cake = "$this->html->link(__('" + content + "'), array('controller' => '', 'action' => '" + href + "'), array(" + attributes + ", 'escape' => FALSE));";

	} else if ($el.prop('tagName') === 'IMG') {

		$.each($el.attr(), function(index, value) {
			if (index !== 'src') {
				if (isFirstItem) {
					attributes += "'" + index + "' =>" + "'" + value + "'";
					isFirstItem = false;
				} else {
					attributes += ", '" + index + "' =>" + "'" + value + "'";
				}
			}
		});
		var cake = "$this->html->image('" + $el.attr('src') + "', array(" + attributes + "));";
	} else {

		$.each($el.attr(), function(index, value) {

			if (isFirstItem) {
				attributes += "'" + index + "' =>" + "'" + value + "'";
				isFirstItem = false;
			} else {
				attributes += ", '" + index + "' =>" + "'" + value + "'";
			}

		});

		var cake = "$this->html->tag('" + $el.prop('tagName').toLowerCase() + "', '" + content + "', array(" + attributes + ", 'escape' => FALSE));";

	}
	console.log('<?php echo ' + cake + ' ?>');
};