'use strict'
// whitekeybutton[0].addEventListener('onclick',function(){
//     whitekeybutton.style.backgroundColor = "green";
// });
$(document).ready(function(){
    // $("#fright").click(function(){
    //     alert("tryeyryyey");
    // });
    $(".whitekeybutton").on( "click", function(){
        $(this).css('background-color', 'gray');
        var time = 200;
        setTimeout(function() {
            $('.whitekeybutton').css("background-color", "white");
        }, time);
    });
    $(".blackbutton").on( "click", function(){
        $(this).css('background-color', 'gray');
        var time = 200;
        setTimeout(function() {
            $('.blackbutton').css("background-color", "black");
        }, time);
    });
    // $('#keyboard').click(function(){

    //     alert('afwe');
    // });
});
//get context 
(function() {
    'use strict'
    var audio_con;
    var ajax;
    var musicdata;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audio_con = new AudioContext();

    //get music file and change it to binary 
    ajax = new XMLHttpRequest();
    ajax.responseType = 'arraybuffer';
    ajax.open('GET','music/piano.wav',true);
    ajax.onload = function(){
        audio_con.decodeAudioData(ajax.response,function(temp){
            musicdata = temp;
        },
        function(error){
            alert(error.err);
        });
    };
    ajax.send();


    var keyboards;
    // Arrange multiple sets of keyboard elements
    // Register keyboard element clicks in descending order
    keyboards = Array.prototype.slice.call(document.getElementsByClassName('keyboards'));
    keyboards.reverse().map(function(keyboard, index){
        var i;
        var frequency;
        // Find the frequency ratio by the sound the sound makes from the reference sound
        frequency = 1;
        for (i = 0; i < index; i++) {
            frequency /= 1.059463;
        }
        keyboard.addEventListener('click', function() {
            var bufferSource;
            bufferSource = audio_con.createBufferSource();
            bufferSource.buffer = musicdata;
            // Adjust the sound source height by changing the sound source playback speed ratio
            bufferSource.playbackRate.value = frequency;
            bufferSource.connect(audio_con.destination);           
            bufferSource.start(1);
        });
    });
})();