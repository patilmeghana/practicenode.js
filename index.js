const calculator = require('./app');

x = 50, y = 20;

console.log("Addition of 50 and 30 is "
    + calculator.add(x, y));

//
function greet(name, callback) {
    console.log('hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('im callback func')
}

greet('megha', callMe);
