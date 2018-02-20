// var sectiondiv = document.getElementById('sectiondiv');
// sectiondiv.addEventListener('click',function(){
// 	sectiondiv.style.backgroundColor = "blue";
// })
var glass = document.getElementById('glass');
var lipstick = document.getElementById('lipstick');
var blash = document.getElementById('blash');
var makeup = document.getElementById('makeup');
var myphoto = document.getElementById('myphoto');
var speak = document.getElementById('speak');
var face = document.getElementById('face');

var image5 = document.getElementById('image5');
var image6 = document.getElementById('image6');
var image7 = document.getElementById('image7');
var image8 = document.getElementById('image8');


glass.addEventListener('click',callfunction);
lipstick.addEventListener('click',callfunction);
blash.addEventListener('click',callfunction);
function callfunction(){
	 if (makeup.checked == true){
	 	alert("Already done! Start all over!");
	 	lipstick.checked = false;
	 	glass.checked = false;
	 	blash.checked = false;
	 	makeup.checked = false;
	 }
	 if (lipstick.checked == true && glass.checked == true && blash.checked == true){
	 	myphoto.src = "images/1_5.jpg";
	 	speak.innerHTML= "No eyeglass!!Preety blash and lip color.";
	 	face.src = "images/face/9.jpg";
	 	image5.style.display = "block";
	 	image6.style.display = "block";
	 	image7.style.display = "block";
	 	image5.style.width = "200px";
	 	image6.style.width = "200px";
	 	image7.style.width = "200px";
	 	image8.style.display = "none";
	 }else if (lipstick.checked == true && glass.checked == true && blash.checked == false){
	 	myphoto.src = "images/1_4.jpg";
	 	speak.innerHTML= "No eyeglass!!lip color looks good.";
	 	face.src = "images/face/7.jpg";
	 	image5.style.display = "block";
	 	image7.style.display = "block"; 	
	 	image5.style.width = "200px";
	 	image7.style.width = "200px";
	 	image6.style.display = "none";
	 	image8.style.display = "none";
	 }else if(lipstick.checked == true && glass.checked == false && blash.checked == true){
	 	myphoto.src = "images/3.png";
	 	speak.innerHTML= "Looks not bad~~";
	 	face.src = "images/face/4.jpg";
	 	image7.style.display = "block";
	 	image6.style.display = "block"; 	
	 	image7.style.width = "200px";
	 	image6.style.width = "200px";
	 	image5.style.display = "none";
	 	image8.style.display = "none";
	 }else if(lipstick.checked == true && glass.checked == false && blash.checked == false){
	 	myphoto.src = "images/2_2.png";
	 	speak.innerHTML= "I love this beautiful lipstick!";
	 	face.src = "images/face/3.jpg";
	 	image7.style.display = "block";	
	 	image7.style.width = "400px";
	 	image5.style.display = "none"; 
	 	image6.style.display = "none";
	 	image8.style.display = "none";
	 }else if(lipstick.checked == false && glass.checked == true && blash.checked == true){
	 	myphoto.src = "images/1_3.jpg";
	 	speak.innerHTML= "The eyeglass block my blush!";
	 	face.src = "images/face/2.jpg";
	 	image6.style.display = "block";
	 	image5.style.display = "block"; 	
	 	image6.style.width = "200px";
	 	image5.style.width = "200px";
	 	image7.style.display = "none";
	 	image8.style.display = "none";
	 }else if(lipstick.checked == false && glass.checked == true && blash.checked == false){
	 	myphoto.src = "images/1_2.png";
	 	speak.innerHTML= "I don't like eyeglass!!!!!";
	 	face.src = "images/face/6.jpg";
	 	image5.style.display = "block";		
	 	image5.style.width = "400px";
	 	image7.style.display = "none";
	 	image6.style.display = "none"; 
	 	image8.style.display = "none";
	 }else if(lipstick.checked == false && glass.checked == false && blash.checked == true){
	 	myphoto.src = "images/2_1.png";
	 	speak.innerHTML= "only blase????";
	 	face.src = "images/face/8.jpg";
	 	image6.style.display = "block";		
	 	image6.style.width = "400px";
	 	image5.style.display = "none";
	 	image7.style.display = "none"; 
	 	image8.style.display = "none";
	 }else if(lipstick.checked == false && glass.checked == false && blash.checked == false){
	 	myphoto.src = "images/1_1.png";
	 	speak.innerHTML= "I want to hang out! Help me makeup please!";
	 	face.src = "images/face/1.jpg";
	 	image6.style.display = "block";		
	 	image5.style.display = "block";
	 	image7.style.display = "block"; 
	 	image8.style.display = "block";
	 	image5.style.width = "200px";
	 	image6.style.width = "200px";
	 	image7.style.width = "200px";
	 	image8.style.width = "200px";
	 }
	 	
}

makeup.addEventListener('click',function(){
	 if (makeup.checked == true){
	 	lipstick.checked = false;
	 	glass.checked = false;
	 	blash.checked = false;
	 	myphoto.src = "images/4.png";
	 	speak.innerHTML= "Thank you very much, I like my makeup!";
	 	face.src = "images/face/5.jpg";
	 	image8.style.width = "400px";
	 	image5.style.display = "none";
	 	image7.style.display = "none";
	 	image6.style.display = "none";
	 }else{
	 	callfunction();
	 }
})


























