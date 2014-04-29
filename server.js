var page = require('webpage').create(),
	fs = require('fs'),
	path = 'index.html';


function puts(error, stdout, stderr) {
	sys.puts(stdout)
}

page.open(path, function(status) {

	var result = page.evaluate(function() {

		// main.js
		var client = new ZeroClipboard(document.getElementById("copy-button"), {
			moviePath: "/vendors/ZeroClipboard.swf"
		});


		client.on('ready', function(readyEvent) {
			console.log( 'ZeroClipboard SWF is ready!' );

			client.on('aftercopy', function(event) {
				// `this` === `client`
				// `event.target` === the element that was clicked
				event.target.style.display = 'none';
				//alert('Copied text to clipboard: ' + event.data['text/plain']);
			});
		});



		return cakekizer($('#container').html());




	});
	console.log(result);
	phantom.exit();
});