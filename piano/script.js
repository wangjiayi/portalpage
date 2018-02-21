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
    // 排列多组键盘元素
    // 以降序方式注册键盘元素的点击
    keyboards = Array.prototype.slice.call(document.getElementsByClassName('keyboards'));
    keyboards.reverse().map(function(keyboard, index){
        var i;
        var frequency;
        // 通过声音从参考声音中发出的声音来查找频率比率
        frequency = 1.2;
        for (i = 0; i < index; i++) {
            frequency /= 1.059463;
        }
        keyboard.addEventListener('click', function() {
            var bufferSource;
            bufferSource = audio_con.createBufferSource();
            bufferSource.buffer = musicdata;
            // 通过更改声源播放速度比来调整声源高度
            bufferSource.playbackRate.value = frequency;
            bufferSource.connect(audio_con.destination);           
            bufferSource.start(0);
        });
    });
})();