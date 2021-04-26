//What kind of colors will be used: colors, rgb, and hex
const colors = ["green", "red", "blue", "yellow", 
                "rgba(133,122,200)", "rgba(0,255,0)", 
                "#f15025", "#7f96d5", "#ef7bd7", "#ff8500",
                "#7400b8", "#beb7a4", "#ff4800", "#29f7ff"];

//https://developer.mozilla.org/en-US/docs/Web/API/Document

//get button id
const button = document.getElementById('btn');
//get color
const color = document.querySelector('.color');

//everytime that the button is clicked, the background changes
button.addEventListener('click', function(){

    //use background color property to change color

    //get random num between 0(green) and 3(f15025) in array
    const randomNumber = genRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];


});

function genRandomNum(){
    //multiply by length to get a number that is not just between 0 & 1 
     // then round down to closest integer
    return Math.floor(Math.random() * colors.length);

}
















