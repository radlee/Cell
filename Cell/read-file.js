var fs = require('fs');

console.log("----Execute Synchronous Read----- ")
console.log("Execute before File Raeading ");
//synchronously--------------------------------------
fs.readFile("input.txt", 'utf8', function(err, data){
	console.log(data)
});


console.log("Execute after Raeading a File synchronously, probably ");

//Asynchronously-------------------------------------
var fs = require('fs');

console.log("----Execute Asynchronous Read----- ")

var data = fs.readFileSync("apps.txt", 'utf8');

console.log(data);

console.log("Execute after Raeading a File Asynchronously, probably ");
