var randomDice1=Math.floor(Math.random()*6)+1;
var randomDice2=Math.floor(Math.random()*6)+1;

var play1=document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice" +randomDice1 + ".png");
var play2=document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice" + randomDice2 +".png");

if(randomDice1>randomDice2)
{
     document.querySelector("h1").innerHTML="🚩Player 1 wins ";
}
else if(randomDice1<randomDice2)
{
    document.querySelector("h1").innerHTML="Player 2 wins  🚩 ";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!!!!!";
}




