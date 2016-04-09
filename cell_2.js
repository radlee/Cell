var walter = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”"
var jesse = "Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”"
var saul = "Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”"
var gus = "Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”"

var waltersApps = "“Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”"
var jessesApps = "“Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.”"
var saulsApps = "“I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”"
var gussApps = "“I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”"


console.log("\n");
//Reads each line from the file and returns string of numbers
var getData = function(string, name){
	var data = string.replace(/\D/g, '');
	console.log(name + " -> " + data);
	return name
}

getData(walter, 'walter')
getData(jesse, 'jesse')
getData(saul, 'saul')
getData(gus, 'gus')

console.log("\n");

var Tooter = "Tooter"
var Snaptalk = "Snaptalk"
var LankedOn = "LankedOn"
var Faceblock = "Faceblock"
var Instantgam = "Instantgam"

//Splits every user's line of string with a provided separator
var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}
//Returns an Array of words----['word1', 'word2.', 'word3,']----
var string = splitString(waltersApps, ' ');
//Remove all panctuation from the string for Walter
var cleanString =[];
var string = splitString(waltersApps, ' ');
var removed = string.map(function(word){
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

//Remove all panctuation from the string for Jesse
var cleanString =[];
var string = splitString(jessesApps, ' ');
var removed = string.map(function(word){
	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var repl = repl.replace(/\s+/g,"");
	cleanString.push(repl);
})



// //store apps for Jesse
var jessesApps = [];
console.log("\nJesse's Apps!-------")
var words = cleanString.map(function(word){
	if(word === "Faceblock"){
		jessesApps.push(word)
	}
	if(word === "Instantgam"){
		jessesApps.push(word)
	}
	if(word === "LankedOn"){
		jessesApps.push(word)
	}
	if(word === "Snaptalk"){
		jessesApps.push(word)
	}
	if(word === "Tooter"){
		jessesApps.push(word)
	}
})
console.log(jessesApps)


//Remove all panctuation from the string for Saul
var cleanString =[];
var string = splitString(saulsApps, ' ');
//Removing All Panctuation------------------
var removed = string.map(function(word){
	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var repl = repl.replace(/\s+/g,"");
	cleanString.push(repl);
})

// //store apps for Saul
var saulsApps = [];
console.log("\nSaul's Apps!--------")
var words = cleanString.map(function(word){
	if(word === "Faceblock"){
		saulsApps.push(word)
	}
	if(word === "Instantgam"){
		saulsApps.push(word)
	}
	if(word === "LankedOn"){
		saulsApps.push(word)
	}
	if(word === "Snaptalk"){
		saulsApps.push(word)
	}
	if(word === "Tooter"){
		saulsApps.push(word)
	}
})
console.log( saulsApps)

//Remove all panctuation from the string for Gus
var cleanString =[];

var string = splitString(gussApps, ' ');
//Removing All Panctuation------------------
var removed = string.map(function(word){
	var repl = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var repl = repl.replace(/\s+/g,"");
	cleanString.push(repl);
})

//store apps for Gus
var gussApps = [];
console.log("\nGus's Apps!--------")
var words = cleanString.map(function(word){
	if(word === "Faceblock"){
		gussApps.push(word)
	}
	if(word === "Instantgam"){
		gussApps.push(word)
	}
	if(word === "LankedOn"){
		gussApps.push(word)
	}
	if(word === "Snaptalk"){
		gussApps.push(word)
	}
	if(word === "Tooter"){
		gussApps.push(word)
	}
})
console.log( gussApps)
console.log("\n");



