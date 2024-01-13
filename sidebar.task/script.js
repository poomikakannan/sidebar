"use strict"

document.body.style.backgroundColor = "#776B5D";

let div = document.createElement("div");
div.setAttribute("id","main_div");

let h4 = document.createElement("h4");
h4.setAttribute("id","h4_text")
h4.innerText = "Page Not Found";

let p1 = document.createElement("p");
p1.setAttribute("id","p1_para")
p1.innerText = "Looks like you've followed a broken link or entered a URL that doesn't exist on this site."

let btn = document.createElement("a");
btn.setAttribute("href","index.html");
btn.innerHTML = `<i class="fa-solid fa-less-than" style="color: #362FD9;"></i> &nbsp; <span>Back to our site</span>`;

let hr = document.createElement("hr");

let p2 = document.createElement("p");
p2.innerText ="If this is your site, and you weren't expecting a 404 for this path, please visit Netlify's 'page not found' support guide for troubleshooting tips.";

div.append(h4,p1,btn,hr,p2);
document.body.append(div);