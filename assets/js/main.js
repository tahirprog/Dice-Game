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
