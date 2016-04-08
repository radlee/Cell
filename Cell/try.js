var walter = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”"
var jesse = "Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”"
var saul = "Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”"
var gus = "Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”"

var waltersApps = "“Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”"
var jessesApps = "“Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.”"
var saulsApps = "“I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”"
var gussApps = "“I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”"


var getData = function(string, name){
	var data = string.replace(/\D/g, '');
	console.log(name + " -> " + data);
	return name
}

var Faceblock = "Faceblock"
var Instantgam = "Instantgam"
var Tooter = "Tooter"
var Snaptalk = "Snaptalk"
var LankedOn = "LankedOn"

var str = waltersApps;


var getData = function(stringApps, name){
	var res = str.match(/FaceblockInstantgam/gi);
	console.log("The App : " + res)
	return res;
}


getData(walter, 'walter')
getData(jesse, 'jesse')
getData(saul, 'saul')
getData(gus, 'gus')
