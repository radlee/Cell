var walter = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”"
var jesse = "Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”"
var saul = "Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”"
var gus = "Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”"

var waltersApps = "“Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”"
var jessesApps = "“Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.”"
var saulsApps = "“I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”"
var gussApps = "“I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”"

//Apps
var Faceblock = "Faceblock"
var Instantgam = "Instantgam"
var Tooter = "Tooter"
var Snaptalk = "Snaptalk"
var LankedOn = "LankedOn"

//Get Data for each person 
var user ={};
var getData = function(stringData, name){
	var data = stringData.replace(/\D/g, '');
	var data = Number(data);
	// list.push(data);
	// var sorted = list.sort();
	
	// console.log(name + " -> " + data);
	// console.log(sorted);
	return user[name] = data;
}
console.log(user);

for(var key in user){
	if(user.hasOwnProperty(key)){
		console.log(key + " -> " + user[key]);
	}
}



getData(jesse, "jesse")
getData(saul, "saul")
getData(gus, "gus")















// var displayInfo = function(object){
// 	var output ="";

// 	if(typeof object.name == "string"){
// 		output += "Name : " + object.name + "\n";
// 	}

// 	if(typeof object.data == "number"){
// 		output += "Data : " + object.data + "\n";
// 	}
// 	if(typeof object.apps == "function"){
// 		output += "Apps : " + object.apps + "\n";
// 	}

// 	console.log(output);
// }


// displayInfo({
// 	name : "walter bosso",
// 	data : 67
// })var displayInfo = function(object){
// 	var output ="";

// 	if(typeof object.name == "string"){
// 		output += "Name : " + object.name + "\n";
// 	}

// 	if(typeof object.data == "number"){
// 		output += "Data : " + object.data + "\n";
// 	}
// 	if(typeof object.apps == "function"){
// 		output += "Apps : " + object.apps + "\n";
// 	}

// 	console.log(output);
// }


// displayInfo({
// 	name : "walter bosso",
// 	data : 67
// })