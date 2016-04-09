var fs = require('fs');
fs.readFile("apps.txt", 'utf8', function(err, data){
	if(err) throw err;
	
	//Splitting Method
var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}


console.log(setsString)


//Remove all panctuation from the string for Walter
var cleanString =[];
var setsString = splitString(data, ' ');
var removed = setsString.map(function(word){
	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var repl = repl.replace(/\s+/g,"");
	cleanString.push(repl);
})

//store apps for walter
var waltersApps = [];
console.log("\nWalter's Apps!-------")
var words = cleanString.map(function(word){

	if(word === "Faceblock"){
		waltersApps.push(word)
	}
	if(word === "Instantgam"){
		waltersApps.push(word)
	}
	if(word === "LankedOn"){
		waltersApps.push(word)
	}
	if(word === "Snaptalk"){
		waltersApps.push(word)
	}
	if(word === "Tooter"){
		waltersApps.push(word)
	}
})
console.log( waltersApps)


});













// var getPairedArray = function(setsString, split){
// 	var setsArr = [];
// 	for(var i =0; i< setsString.length; i++){
// 		var set = setsString[i].split(split)
// 		setsArr.push(set)
// 	}
// 	console.log("Array of Sets")
// 	return setsArr;
// }

// var paried = getPairedArray(setsString, '\n');

// console.log(paried)



// var dataList =[];
// paried.forEach(function(item){

// 	console.log(item)
// 	var item = String(item)
// 	var data = item.replace(/\D/g, '');
// 	// var data = item.replace("", '');
// 	dataList.push(data);
// 	console.log(" -> " + data);
// })
// console.log("Data----------------")
// console.log(paried)

