'use strict';
(function() {

	document.getElementById("getDataButton").onclick = function () {
		console.log('making a request');
			var httpRequest = new XMLHttpRequest();
		    httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');
		    httpRequest.send();
		    httpRequest.onreadystatechange = responseMethod;
	}

    function responseMethod() {
        // Check if our state is "DONE"
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          // If our request was successful we get a return code/status of 200
          if (httpRequest.status === 200) {
            // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
            console.log(httpRequest.responseText);
          } else {
            // This is the scenario that there was an error with our request
            console.log('There was a problem with the request.');
          }
        }
     }

})();

