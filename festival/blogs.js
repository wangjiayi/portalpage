var count = 2;
// var img1 = document.getElementById("img1");
var upload = document.getElementById("upload");
upload.addEventListener("click",creatdiv);
function creatdiv(){	
	var middle = document.getElementById("middle");
	photoDiv = document.createElement("div");
	middle.appendChild(photoDiv);
	photoDiv.id = "div" + count;
	photoDiv.className = "photoblog"; 

	photoImg = document.createElement("img");
	photoDiv.appendChild(photoImg); 
	photoImg.id = "img"+count;
	var photoId = document.getElementById(photoImg.id);
	photoId.src = window.URL.createObjectURL(document.getElementById("choose").files[0]);

	photoTags = document.createElement("div");
	photoDiv.appendChild(photoTags); 
	photoTags.className = "tag";
	photoTags.id = "tag" + count;

	tagInput = document.createElement("input");
	photoDiv.appendChild(tagInput);
	tagInput.className = "inputtag";
	tagInput.id = "inputtag" + count;
	tagInput.placeholder = "enter some commands"

	tagButton = document.createElement("button");
	photoDiv.appendChild(tagButton);
	tagButton.className = "add";
	tagButton.id = "add" + count;
	tagButton.innerHTML = "Add";
	tagButton_id = tagButton.id;
	tagButton.setAttribute("onclick", "showtag(this.id)");
	// tagButton_id.setAttribute = ("onclick", showtag(tagButton.id));

	count += 1;

	// AIzaSyAsjKKuNVOSumDO2kpa2XUdnbQk_RGp-ME
	// var APIrequest = require('request');
	// APIurl = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAsjKKuNVOSumDO2kpa2XUdnbQk_RGp-ME';
	// requestObject = {
	//           "requests": [
	//             {
	//               "image":{
	//                     "source": {photoId.src}
	//                 },
	//               "features": [{ "type": "LABEL_DETECTION" }]
	//             }
	//           ]
	//         }
	// APIrequest(
	//             { // HTTP header stuff
	//                 url: APIurl,
	//                 method: "POST",
	//                 headers: {"content-type": "application/json"},
	//                 // stringifies object and puts into HTTP request body as JSON
	//                 json: requestObject,
	//             },APIcallback);

}

// var tag = document.getElementsByClassName("tag");
// button.addEventListener("click",showtag(this.id));
// function showtag(click_id){
// 	alert(click_id);
	
// 	// var p = document.createElement("p");
// 	// tag.appendChild(tagButton);
// 	// tag.innerHTML = inputtag.value;
//}
// var button = document.getElementsByClassName("add");
// button[0].addEventListener("click",showtag);
function showtag(click_id){
	var inputtag_id = "inputtag" + click_id.slice(-1);
	var getlabel = document.getElementById(inputtag_id).value;

	var tag_id = "tag" + click_id.slice(-1);
	var tag = document.getElementById(tag_id);

	var p = document.createElement("p");
	p.innerHTML = getlabel;
	p.className = "myp";
	myp = document.getElementsByClassName("myp");
	var temp = true;
	for(i = 0; i < myp.length; i++){
		if(myp[i].innerText == getlabel){
			temp = false;
			break;
		}			
	}
	if(p.innerHTML == ""){
			alert("please enter your tags belong to this photo's festival");
	}else if(temp == false){
		alert("We already have this tag.");
		document.getElementById(inputtag_id).value = "";
	}else{		
			tag.appendChild(p);	
			document.getElementById(inputtag_id).value = "";
	}

	
}
var div0 = document.getElementById("img0");
var article1 = document.getElementById("article1");
var reset1 = document.getElementById("reset1");
div0.addEventListener("click",showarticle1);
function showarticle1(){
	if(article1.style.display == "block"){
		article1.style.display = "none";
	}else{
		article1.style.display = "block";
	}
	
}
reset1.addEventListener("click",showarticle1);

var div1 = document.getElementById("img1");
var article2 = document.getElementById("article2");
var reset2 = document.getElementById("reset2");
div1.addEventListener("click",showarticle2);
function showarticle2(){
	if(article2.style.display == "block"){
		article2.style.display = "none";
	}else{
		article2.style.display = "block";
	}
	
}
reset1.addEventListener("click",showarticle1);
reset2.addEventListener("click",showarticle2);



















