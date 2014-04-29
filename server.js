var page = require('webpage').create(),
	fs = require('fs'),
	path = '/Applications/MAMP/htdocs/Cakekizer/index.html';


function puts(error, stdout, stderr) {
	sys.puts(stdout)
}

page.open(path, function(status) {
	var result = page.evaluate(function() {
		return cakekizer($('#container').html());
	});
	console.log(result);
	phantom.exit();
});