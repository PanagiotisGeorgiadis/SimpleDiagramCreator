var express = require("express");
var router = express.Router();
var routerHelperClass = require("./utils/RouterHelperClass.js");

var simpleDiagramApp = express();

simpleDiagramApp.use("/styles", express.static(__dirname + "/public/styles/"));
simpleDiagramApp.use("/icons", express.static(__dirname + "/public/icons/"));
simpleDiagramApp.use("/main", express.static(__dirname));

simpleDiagramApp.get("/", function(request, response) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

simpleDiagramApp.listen(3000);

