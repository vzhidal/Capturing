(function () {

	var startTime = window.performance.now();
	var writeMessage = function (message) {
		console.log(message + ": " + (window.performance.now() - startTime));
	};
	var ta = document.getElementById("rdwrap");
	var originalHtml = ta == null ? null : "<html><head>" + ta.value;

	writeMessage("originalHtml string was created");

	var capturedDocument = document.implementation.createHTMLDocument('');
	capturedDocument.open();
	capturedDocument.write(originalHtml);
	capturedDocument.close();

	writeMessage("fake document was created");

	doManipulations();

	writeMessage("dom manipulations were done");

	document.replaceChild(capturedDocument.documentElement, document.documentElement);

	writeMessage("injection to DOM was done");

	function removeElements(element) {
		for(var i = 0, len = element.length; i < len; i++) {
			if(element[i] && element[i].parentElement) {
				element[i].parentElement.removeChild(element[i]);
			}
		}
	}

	function doManipulations() {
		var messageBar = capturedDocument.getElementById("site-message-bar").parentNode;
		removeElements([messageBar]);

		var headerPanel = capturedDocument.querySelectorAll(".header-container .header-panel");
		removeElements(headerPanel);

		var heroHome = capturedDocument.getElementById("hero-home").parentNode;
		removeElements([heroHome]);

		var heroInnovations = capturedDocument.getElementById("hero-innovations").parentNode;
		removeElements([heroInnovations]);


		var about = capturedDocument.querySelectorAll(".section.about")[0].parentNode;
		removeElements([about]);

		var script = capturedDocument.getElementsByTagName("script");
		removeElements(script);
	}

})();
