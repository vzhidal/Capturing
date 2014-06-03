(function () {

	var startTime = window.performance.now();
	var writeMessage = function (message) {
		console.log(message + ": " + (window.performance.now() - startTime));
	};
	var ta = document.getElementById("rdwrap");
	var originalHtml = ta == null ? null : "<html><head>" + ta.value;

	writeMessage("originalHtml string was created");


	doManipulations();

	writeMessage("dom manipulations were done");

	document.open();
	document.write(originalHtml);
	document.close();

	writeMessage("injection to DOM was done");


	function doManipulations() {
		var messageBar = originalHtml.match(/site-message-bar/);
	}
})();
