var r1 = Math.floor(Math.random()*6) + 1;
var ri1 = "dice" + r1 +".png";
var r1s = "images/" + ri1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", r1s);

var r2 = Math.floor(Math.random()*6) + 1;
var ri2 = "dice" + r2 +".png";
var r2s = "images/" + ri2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", r2s);

if(r1 > r2)
{
	document.querySelector("h1").innerHTML ="🚩 Player 1 wins!";
}
else if(r2 > r1)
{
	document.querySelector("h1").innerHTML ="Player 2 wins! 🚩";
}
else
{
	document.querySelector("h1").innerHTML ="Draw!";
}