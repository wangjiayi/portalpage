var cur = 0;
var left = 0;
var blockNumbers = 0;
initUI();

function gotNewPlace() {
    var newPlace = document.getElementById("zipbox").value;
    var script = document.createElement('script');
    script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+newPlace+"')&format=json&callback=callbackFunction"
    script.id = "jsonpCall";

    var oldScript = document.getElementById("jsonpCall");
    if (oldScript != null) {
        document.body.removeChild(oldScript);
    }
    document.body.appendChild(script);
}

function callbackFunction(data) {
    // data contains object returned from server

    // dump it to the Web page
    var result = data.query.results.channel;

    var time = document.getElementById("time");
    var date = document.getElementById("date")
    var temp = result.lastBuildDate;
        time.innerHTML = temp.substring(16,26)
        date.innerHTML = temp.substring(4,17)


    var location = document.getElementById("location");
        location.innerHTML = result.location.city + "," + result.location.region;
    var tempreture = document.getElementById("tempreture");
        tempreture.innerHTML = result.item.condition.temp;
    var weather = document.getElementById("weather");
        weather.innerHTML = result.item.condition.text;

    var image = document.getElementById("image");
    if(weather.innerHTML.includes("ain")|| weather.innerHTML.includes("hower")){
        image.src = "../WeatherApp/rain.png";
    } else if(weather.innerHTML.includes("Cloudy")){
        image.src = "../WeatherApp/part-sun.png";
    } else if(weather.innerHTML.includes("now")){
        image.src = "../WeatherApp/snow.png";
    } else if(weather.innerHTML.includes("thunder")){
        image.src = "../WeatherApp/thunder.png";
    } else{
        image.src = "../WeatherApp/sunny.png";
    }

    var humidity = document.getElementById("humidity");
        humidity.innerHTML = result.atmosphere.humidity;
    var wind = document.getElementById("wind");
        wind.innerHTML = result.wind.speed;


    for(var i = 0; i < 10; i++){
        var results = result.item.forecast[i];

        var day = document.getElementById("day" + i);
        day.innerHTML = results.day;

        var dayweather = document.getElementById("day" + i +"_weather");
        dayweather.innerHTML = results.text;

        var images = document.getElementById("day" + i + "_image");
        if(dayweather.innerHTML.includes("ain")|| dayweather.innerHTML.includes("hower")){
        images.src = "../WeatherApp/rain.png";
        } else if(dayweather.innerHTML.includes("Cloudy")){
            images.src = "../WeatherApp/part-sun.png";
        } else if(dayweather.innerHTML.includes("now")){
            images.src = "../WeatherApp/snow.png";
        } else if(dayweather.innerHTML.includes("thunder")){
            images.src = "../WeatherApp/thunder.png";
        } else{
            images.src = "../WeatherApp/sunny.png";
        }

        var dayhigh = document.getElementById("day" + i + "_h");
        dayhigh.innerHTML = results.low;

        var daylow = document.getElementById("day" + i + "_l");
        daylow.innerHTML = results.high;        
    }
    
}

// function moveNext(){
//     if(cur >= 4){
//         document.getElementById("b_button").style.display = "none";
//         document.getElementById("f_button").style.display = "block";
//     }else{
//         document.getElementById("f_button").style.display = "block";
//         document.getElementById("b_button").style.display = "block";
//     }
//     document.getElementById("block" + cur).style.display = "none";
//     document.getElementById("block" + (cur + 5)).style.display = "block";
//     cur++;
    
// }
// function movePre(){
//     if(cur == 1){
//         document.getElementById("f_button").style.display = "none";
//         document.getElementById("b_button").style.display = "block";
//     }else if(cur >= 6){
//         document.getElementById("b_button").style.display = "none";
//         document.getElementById("f_button").style.display = "block";
//     }else{
//         document.getElementById("f_button").style.display = "block";
//         document.getElementById("b_button").style.display = "block";
//     }
//         document.getElementById("block" + (cur - 1)).style.display = "block";
//         document.getElementById("block" + (cur + 4)).style.display = "none";
//         cur--;
    
// }  
    
   /* functions defined when Web page is loaded, but run when button is pushed. */

function initUI(){
    var weatherSlider = document.getElementById("down");
    var sliderBarWidth = weatherSlider.clientWidth;
    var weatherBlocks = document.getElementsByClassName("forecasts");

    if (sliderBarWidth >=1000)
    {
        blockNumbers = 5;
    }
    else if(sliderBarWidth <1000 && sliderBarWidth >=800)
    {
        blockNumbers = 4;
    }
    else if(sliderBarWidth <800 && sliderBarWidth >=600)
    {
        blockNumbers = 3;
    }
    else if(sliderBarWidth <600 && sliderBarWidth >=400)
    {
        blockNumbers = 2;
    }
    var tmp = 0;
    var space = (sliderBarWidth - blockNumbers*200) / blockNumbers;
    for (i = 0; i < weatherBlocks.length; i++) {
        weatherBlocks[i].style.left = tmp + "px";
        tmp = tmp + space;
    }
}
function moveNext() {

    var weatherBlocks = document.getElementsByClassName("forecasts");
    var weatherSlider = document.getElementById("down");
    var sliderBarWidth = weatherSlider.clientWidth;
    var space = (sliderBarWidth - blockNumbers*200) / blockNumbers;
    var leftMost = 200*10+9*space; // length of ten boxes + spacing + padding

    if(parseInt(weatherBlocks[0].style.left) > (-leftMost + sliderBarWidth) ){
      for (i = 0; i < weatherBlocks.length; i++) {
          weatherBlocks[i].style.left = (parseInt(weatherBlocks[i].style.left) - 200 - space) + "px";
        }
    }
}

function movePre() {
    var weatherBlocks = document.getElementsByClassName("forecasts");
    var weatherSlider = document.getElementById("down");
    var sliderBarWidth = weatherSlider.clientWidth;
    var space = (sliderBarWidth - blockNumbers*200) / blockNumbers;
    if(parseInt(weatherBlocks[0].style.left) < 0 ){
      for (i = 0; i < weatherBlocks.length; i++) {
          weatherBlocks[i].style.left = (parseInt(weatherBlocks[i].style.left) + 200 + space) + "px";
        }
    }

}





























