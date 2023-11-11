var randomNum1 = Math.floor( Math.random() * 6 ) + 1;     // Generate Random Number between (1 -6).

var randomDiceImage = "dice" + randomNum1 + ".png";     //  this line of code will select random images form  ( dice1.png - dice6.png ).

var randomImageSource = "./assets/images/" + randomDiceImage;    // images/dice1.png - images/dice6.png 

var img1 = document.querySelectorAll("img")[0];     //  Selecting 1st random images

img1.setAttribute("src", randomImageSource);



var randomNum2 = Math.floor( Math.random() * 6 ) + 1;   
// Generate Random Number between (1 -6).

var randomDiceImage = "dice" + randomNum2 + ".png";     
//  this line of code will select random images form  ( dice1.png - dice6.png ).

var randomImageSource = "./assets/images/" + randomDiceImage;    
// images/dice1.png - images/dice6.png 


//  Selecting 2nd random images
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource);



// Choosing the Winner!
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "📍 Player 1 win!";
} 
else if( randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 win! 📍";
} 
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
