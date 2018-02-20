var insideverb = document.getElementsByClassName("insideverb");
var insidenoun = document.getElementsByClassName("insidenoun");
var insideadj = document.getElementsByClassName("insideadj");
var nounres = "";
var verbres = "";
var adres = "";
function onboard(){
	for(var i = 0; i < insideverb.length; i++){
		insideverb[i].value = " ";
	}
	
	for(var i = 0; i < insidenoun.length; i++){
		insidenoun[i].value = " ";
	}
	
	for(var i = 0; i < insideadj.length; i++){
		insideadj[i].value = " ";
	}
}
function original(){
	insideverb[0].value = "drink";
	insidenoun[0].value = "apple";
	insidenoun[1].value = "apple";
	insideadj[0].value = "nice";
	insideadj[1].value = "nice";
}

function trysubmit(){
	var nouns = document.getElementById("noun").value;
	var verbs = document.getElementById("verb").value;
	var adverbs = document.getElementById("adverb").value;

    nounres = document.getElementById("nounres");
	verbres = document.getElementById("verbres");
	adres = document.getElementById("adres");
		
	if(nouns != ""){
		nounres.innerHTML = nouns;
		document.getElementById("noun").value = "";
	}
	if(verbs != ""){
		verbres.innerHTML = verbs;
		document.getElementById("verb").value = "";
	}
	if(adverbs != ""){
		adres.innerHTML = adverbs;
		document.getElementById("adverb").value = "";
	}
}
function startgame(){
	insideverb[0].value = verbres.innerHTML;
	insidenoun[0].value = nounres.innerHTML;
	insidenoun[1].value = nounres.innerHTML;
	insideadj[0].value = adres.innerHTML;
	insideadj[1].value = adres.innerHTML;
	document.getElementById("art").style.display = "block";
	
}

























