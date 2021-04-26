//get button id
const button = document.getElementById('btn');
//get color
const color = document.querySelector('.color');


//everytime that the button is clicked, the background changes
button.addEventListener('click', function(){

    const randomRgba = getRandomRgb();
    //use background color property to change color
    color.textContent = randomRgba;
    document.body.style.backgroundColor = randomRgba;

});


function getRandomRgb() {
    //generates a number between 0 and 0xfffff (or 2^24, the highest number you can get from 24 bits)
    var num = Math.round(0xffffff * Math.random());
    //red value (left-most 8 bits)
    var r = num >> 16;
    //green value (middle-8 bits)
    var g = num >> 8 & 255;
    //blue value (last 8 bits)
    var b = num & 255; 
    //return rbg and random values
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
















