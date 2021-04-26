const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//hex value = Hashtag (#) and then 6 values (A-F and 1-9)

//get button id
const button = document.getElementById('btn');
//get color
const color = document.querySelector('.color');


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
    document.body.style.backgroundColor = hexColor;

});


function genRandomNum(){
    //multiply by length to get a number that is not just between 0 & 1 
     // then round down to closest integer
    return Math.floor(Math.random() * hex.length);

}












