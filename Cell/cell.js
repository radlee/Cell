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
var getData = function(stringData, name){
	var data = stringData.replace(/\D/g, '');
	console.log(name + " -> " + data);
	return data;
}



var str = waltersApps;


// var getData = function(stringApps, name){
// 	var res1 = str.match(/Faceblock/gi);
// 	var res2 = str.match(/Faceblock/gi);
// 	console.log("The App : " + res1)
// 	return res1;
// }

getData(walter, 'walter')
getData(jesse, 'jesse')

//Get Apps for Each Person
var getApps = function(stringApps, name){
	var data = stringApps.replace(/Faceblock/g, '');
	console.log(data)
}



getApps(walter, 'walter')

getData(walter, 'walter')
getData(jesse, 'jesse')
getData(saul, 'saul')
getData(gus, 'gus')
