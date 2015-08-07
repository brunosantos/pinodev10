//tx-24? 22 gpio6 gpio25 //rx- 22? 18 gpio5 gpio24 
var rc = require('piswitch'); 
 rc.setup(
  { 
    pin: 4,
    mode: 'wpi', // alternative: change to gpio and use root
    pulseLength: 330, // this works for me, but 350 is very common
    protocol: 1
  }
);

var code = 'A'; 
var type = 'binary'; 
var off=true; 

rc.send('b2', 'rev', true);
rc.send('010100010000010101010101');

//rc.send(code,off);
//rc.send(code, type, off);

// if (typeof type === 'undefined') {
//   console.log("[INFO] Implicitly declared as binary.");
//   type = 'binary';
// }

// if (typeof offFlag !== 'undefined' && offFlag === 'off') {
//   off = true;
//   offMsg = '-OFF';
// } else if (type !== 'binary' && type !== 'tristate') {
//   offMsg = '-ON';
// }

// console.log("[SEND] " + code + offMsg + " (type declared a
