var circle = document.getElementById("circle");
var UpBtn = document.getElementById("UpBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue =circle.style.transform;
var rotateSum;

UpBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}