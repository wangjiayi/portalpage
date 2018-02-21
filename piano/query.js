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
























