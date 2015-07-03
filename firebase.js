
var Firebase = require('firebase');
var myRootRef = new Firebase('https://intense-torch-2736.firebaseio.com');
myRootRef.push(
	{
		"pi": {
			"date":"June 23, 1912",
			"time":"00:00:00",
			"humidity":"0",
			"temperature":"0"
		}
	}
);
