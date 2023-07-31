
var player1 = prompt("Enter Player One Name");
var player2 = prompt("Enter player Two Name");

document.getElementById("play1").innerHTML = player1;

document.getElementById("play2").innerHTML = player2;


function myFunction() {
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1 === randomNumber2)
{
    document.getElementById("res").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2)
{
    document.getElementById("res").innerHTML = ""+player1+"! Won 🚩";
}
else
{
    document.getElementById("res").innerHTML = ""+player2+"! Won 🚩";
}

}
