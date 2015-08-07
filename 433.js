//tx-24? 22 gpio6 gpio25 //rx- 22? 18 gpio5 gpio24 
//25 rx 6
//24 tx 5
var rc = require('piswitch'); 
 rc.setup(
{ 
pin: 4,
    mode: 'wpi', // alternative: change to gpio and use root
    pulseLength: 330, // this works for me, but 350 is very common
    protocol: 1
});
if (process.argv.length < 3) {
  console.log("Usage: node example <code> [<type> [off]]\n"
              + " e.g., node example ff0f00ffffff tristate");
  return;
}
var code = process.argv[2]; var type = process.argv[3]; var offFlag = 
process.argv[4]; var offMsg = ''; var off; if (typeof type === 'undefined') {
  console.log("[INFO] Implicitly declared as binary.");
  type = 'binary';
}
if (typeof offFlag !== 'undefined' && offFlag === 'off') {
  off = true;
  offMsg = '-OFF';
} else if (type !== 'binary' && type !== 'tristate') {
  offMsg = '-ON';
}
console.log("[SEND] " + code + offMsg + " (type declared as: '" + type + 
"')"); rc.send(code, type, off);
