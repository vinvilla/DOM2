// document.query

//check out output on google chrome >> developer tools >> java script console
alert("Hello again - External");

document.querySelector("h1").innerHTML = "Good Bye";

document.getElementsByTagName("li")[2].style.color = "purple";

document.getElementsByTagName("li")[2].innerHTML = "Angela";

console.log(document.getElementsByTagName("li").length);

console.log(document.getElementsByClassName("btn"));

document.getElementsByClassName("btn")[0].style.color = "red";

document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";

console.log(document.getElementById("list"));

alert("");
document.getElementById("title").innerHTML = "See Ya";

console.log(document.querySelector("title"));

console.log(document.querySelector(".btn"));

console.log(document.querySelector("li a"));

console.log(document.querySelector("li.item"));

console.log(document.querySelector("#list a"));

console.log(document.querySelector("#list item")); // only get first item

console.log(document.querySelectorAll("#list item"));

document.querySelectorAll("#list .item")[1].style.color = "green";

console.log(document.querySelector(".item a"));

document.querySelector("li a").style.color = "red";

console.log(document.querySelector("button").classList);

document.querySelector("button").classList.add("invisible");

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");



//document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angelas";
