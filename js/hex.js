const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//hex value = Hashtag (#) and then 6 values (A-F and 1-9)

//get button id
const button = document.getElementById('btn');
const button_2 = document.getElementById('btn-2');
//get color
const color = document.querySelector('.color');
const color_2 = document.querySelector('.color-2');

//everytime that the button is clicked, the background changes
button.addEventListener('click', function(){

    //hex starts with hash
    let hexColor = '#';
    //loop for 6 values of hex
    for (let i = 0; i <6; i++){
        //add value from array
        hexColor += hex[genRandomNum()];
        //hexColor = hexColor + hex[0]
    }

    //use background color property to change color
    color.textContent = hexColor;
    //document.body.style.backgroundColor = hexColor;
    document.querySelector(".left").style.backgroundColor = hexColor;
});

//function for second button color changer
button_2.addEventListener('click', function(){

    //hex starts with hash
    let hexColor_2 = '#';
    //loop for 6 values of hex
    for (let i = 0; i <6; i++){
        //add value from array
        hexColor_2 += hex[genRandomNum()];
        //hexColor = hexColor + hex[0]
    }

    //use background color property to change color
    color_2.textContent = hexColor_2;
    //document.body.style.backgroundColor = hexColor;
    document.querySelector(".right").style.backgroundColor = hexColor_2;
});

function genRandomNum(){
    //multiply by length to get a number that is not just between 0 & 1 
     // then round down to closest integer
    return Math.floor(Math.random() * hex.length);

}












