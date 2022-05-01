var randomNumber1 = Math.floor(Math.random()* 6)+1; //1-6

var randomDiceImg = "images/dice" + randomNumber1 + ".png";//dice1.png - dice 6 changing file name

document.querySelector(".img1").setAttribute("src", randomDiceImg); //changing images/dice.png
//2nd dice
var randomNumber2 = Math.floor(Math.random()*6) +1;// 2nd dice rand #
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";//
document.querySelector(".img2").setAttribute("src", randomDiceImg2); 

if (randomNumber1 < randomNumber2) { //player 2  won
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else if (randomNumber1 > randomNumber2) { //player 1  won
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

