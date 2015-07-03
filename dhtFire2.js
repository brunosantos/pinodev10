

var sensorLib = require('node-dht-sensor');
var date = new Date();

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
        }, 5000);

                var Firebase = require('firebase');
                var myRootRef = new Firebase('https://intense-torch-2736.firebaseio.com');
                myRootRef.child("pi").push(
                        {
			                              
                                        "date":date.toJSON(),
                                        "time":date.getHours(),
                                        "humidity":readout.humidity.toFixed(2),
                                        "temperature":readout.temperature.toFixed(2)
				
                               
                        }
                );
    }
};

if (sensor.initialize()) {
    sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}















