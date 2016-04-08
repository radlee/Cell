var fs = require('fs');
console.log("----Execute Asynchronous Read----- ")
var stringData = fs.readFileSync("input.txt", 'utf8');

//Splitting Method
var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var setsString = splitString(stringData, ' ');

console.log("These are the lines")
// console.log(setsString)



var getPairedArray = function(setsString, split){
	var setsArr = [];
	for(var i =0; i< setsString.length; i++){
		var set = setsString[i].split(split)
		setsArr.push(set)
	}
	console.log("Array of Sets")
	return setsArr;
}

var paried = getPairedArray(setsString, ',');

// console.log(paried)



var dataList =[];
paried.forEach(function(item){

	// console.log(item)
	var item = String(item)
	var data = item.replace(/\D/g, '');
	// var data = item.replace("", '');
	dataList.push(data);
	// console.log(" -> " + data);
})
console.log("Data----------------")
console.log(dataList)

