"use strict"

let con = document.getElementById("container");

let cross_icon = document.getElementById("icon2");

let bar_icon = document.getElementById("icon1");

bar_icon.addEventListener("click",showBaricon)

function showBaricon()
{
    side_bar.classList.add("act");
}

cross_icon.addEventListener("click",hideBaricon)
function hideBaricon()
{
    side_bar.classList.remove("act");
}