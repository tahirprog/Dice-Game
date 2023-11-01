//  Selecting 1st random images
var randomNum1 = Math.floor( Math.random() * 6 ) + 1;   
var randomDiceImage = "dice" + randomNum1 + ".png";     
var randomImageSource = "./assets/images/" + randomDiceImage;    
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

//  Selecting 2nd random images
var randomNum2 = Math.floor( Math.random() * 6 ) + 1;   
var randomDiceImage = "dice" + randomNum2 + ".png";     
var randomImageSource = "./assets/images/" + randomDiceImage;    
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
