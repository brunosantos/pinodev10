var sensorLib = require('node-dht-sensor');

var sensor = {
    initialize: function () {
        return sensorLib.initialize(22, 4);
    },
    read: function () {
        var readout = sensorLib.read();
        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
            'humidity: ' + readout.humidity.toFixed(2) + '%');
        setTimeout(function () {
            sensor.read();
        }, 2000);

		var Firebase = require('firebase');
		var myRootRef = new Firebase('https://intense-torch-2736.firebaseio.com');
		myRootRef.push(
			{
				"pi": {
					"date":"June 23, 1912",
					"time":"00:00:00",
					"humidity":readout.humidity.toFixed(2),
					"temperature":readout.temperature.toFixed(2)
				}
			}
		);
    }
};

if (sensor.initialize()) {
    sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}








