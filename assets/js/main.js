var randomNum1 = Math.floor( Math.random() * 6 ) + 1;   
// Generate Random Number between (1 -6).

var randomDiceImage = "dice" + randomNum1 + ".png";     
//  this line of code will select random images form  ( dice1.png - dice6.png ).

var randomImageSource = "./assets/images/" + randomDiceImage;    
// images/dice1.png - images/dice6.png 


//  Selecting 1st random images
var img1 = document.querySelectorAll("img")[0];
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
