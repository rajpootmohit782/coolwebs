
var header = document.getElementById("header");
var na= document.getElementById("Nainital");
var dh = document.getElementById("Dharmsala");
var ma = document.getElementById("Manali");
var ke = document.getElementById("Kedarnath");
var pla = document.getElementById("place");
var na2 = document.getElementsByName("Nainital");

na.onclick = function(){
    header.style.backgroundImage = "url(pics/n1.jpg)";
    pla.innerHTML = "Nainital";
}
dh.onclick = function(){
    header.style.backgroundImage = "url(pics/n2.jpg)";
}
ma.onclick = function(){
    header.style.backgroundImage = "url(pics/n3.jpg)";
}
ke.onclick = function(){
    header.style.backgroundImage = "url(pics/n4.jpg)";
    }

