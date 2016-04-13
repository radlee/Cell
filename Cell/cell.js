var waltersApps = "“Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”"
var jessesApps = "“Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.”"
var saulsApps = "“I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”"
var gussApps = "“I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”"

var Tooter = "Tooter"
var Snaptalk = "Snaptalk"
var LankedOn = "LankedOn"
var Faceblock = "Faceblock"
var Instantgam = "Instantgam"

var fs = require('fs');
//Read lines Asynchronously------------------------
fs.readFile("input.txt", 'utf8', function(err, data){
	if(err) throw err;
	//Splits every user's line of string with a provided separator
	var splitString = function(stringToSplit, separator){
		var arrayOfStrings = stringToSplit.split(separator);
		return arrayOfStrings;
	}
	var allUsers = splitString(data, '\n')
	// console.log(allUsers)

	console.log("\nName and Data --->")
	var customersInfo = [];
	allUsers.forEach(function(user){
		//Strips Out Name and DATA and returns an Object---
		var getNamesAndData = function(user){
			var arrString = user.split(' ');
			return {
				name : arrString[0],
				data :user.replace(/\D/g, '')
			}
		}
		var user = getNamesAndData(user);
		customersInfo.push(user)
		// console.log(user)
	})
	console.log(customersInfo)

	console.log(customersInfo[3].data)


	//Function that returns an Array of Apps for a specified Customer

	var getApps = function(appsString){
		//Returns an Array of words----['word1', 'word2.', 'word3,']----
		var string = splitString(appsString, ' ');
		//Remove all panctuation from the string for Walter
		var cleanString =[];
		var string = splitString(appsString, ' ');
		var removed = string.map(function(word){
			var cleanWord = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
			var cleanWord = cleanWord.replace(/\s+/g,"");
			cleanString.push(cleanWord);
		})
			//store Apps for the Customer
			var appsList = [];
			console.log("\n|--Apps!--->")
			console.log("-----------<")
			var words = cleanString.map(function(word){
				if(word === "Faceblock"){
					appsList.push(word)
				}
				if(word === "Instantgam"){
					appsList.push(word)
				}
				if(word === "LankedOn"){
					appsList.push(word)
				}
				if(word === "Snaptalk"){
					appsList.push(word)
				}
				if(word === "Tooter"){
					appsList.push(word)
				}
		})
		return {
			apps :  appsList
		}
	}

	var theApps = getApps(jessesApps);
	console.log(theApps);

	console.log(theApps.apps[0]);


});



//------------------------------------------------------------------------


// var user = getNamesAndData(jesse);
// console.log(user)
// var user = getNamesAndData(saul);
// console.log(user)
// var user = getNamesAndData(gus);
// console.log(user)


//
// //Remove all panctuation from the string for Jesse
// var cleanString =[];
// var string = splitString(jessesApps, ' ');
// var removed = string.map(function(word){
// 	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// 	var repl = repl.replace(/\s+/g,"");
// 	cleanString.push(repl);
// })
//
//
//
// // //store apps for Jesse
// var jessesApps = [];
// console.log("\nJesse's Apps!-------")
// var words = cleanString.map(function(word){
// 	if(word === "Faceblock"){
// 		jessesApps.push(word)
// 	}
// 	if(word === "Instantgam"){
// 		jessesApps.push(word)
// 	}
// 	if(word === "LankedOn"){
// 		jessesApps.push(word)
// 	}
// 	if(word === "Snaptalk"){
// 		jessesApps.push(word)
// 	}
// 	if(word === "Tooter"){
// 		jessesApps.push(word)
// 	}
// })
// console.log(jessesApps)
//
//
// //Remove all panctuation from the string for Saul
// var cleanString =[];
// var string = splitString(saulsApps, ' ');
// //Removing All Panctuation------------------
// var removed = string.map(function(word){
// 	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// 	var repl = repl.replace(/\s+/g,"");
// 	cleanString.push(repl);
// })
//
// // //store apps for Saul
// var saulsApps = [];
// console.log("\nSaul's Apps!--------")
// var words = cleanString.map(function(word){
// 	if(word === "Faceblock"){
// 		saulsApps.push(word)
// 	}
// 	if(word === "Instantgam"){
// 		saulsApps.push(word)
// 	}
// 	if(word === "LankedOn"){
// 		saulsApps.push(word)
// 	}
// 	if(word === "Snaptalk"){
// 		saulsApps.push(word)
// 	}
// 	if(word === "Tooter"){
// 		saulsApps.push(word)
// 	}
// })
// console.log( saulsApps)
//
// //Remove all panctuation from the string for Gus
// var cleanString =[];
//
// var string = splitString(gussApps, ' ');
// //Removing All Panctuation------------------
// var removed = string.map(function(word){
// 	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// 	var repl = repl.replace(/\s+/g,"");
// 	cleanString.push(repl);
// })
//
// //store apps for Gus
// var gussApps = [];
// console.log("\nGus's Apps!--------")
// var words = cleanString.map(function(word){
// 	if(word === "Faceblock"){
// 		gussApps.push(word)
// 	}
// 	if(word === "Instantgam"){
// 		gussApps.push(word)
// 	}
// 	if(word === "LankedOn"){
// 		gussApps.push(word)
// 	}
// 	if(word === "Snaptalk"){
// 		gussApps.push(word)
// 	}
// 	if(word === "Tooter"){
// 		gussApps.push(word)
// 	}
// })
// console.log( gussApps)
console.log("\n");

//---------------------------------------------------------------------


// var getData = function(string, name){
// 	var data = string.replace(/\D/g, '');
// 	console.log(name + " -> " + data);
// 	return name
// }

// getData(walter, name)
// getData(jesse, 'jesse')
//
// getData(saul, 'saul')
// getData(gus, 'gus')
