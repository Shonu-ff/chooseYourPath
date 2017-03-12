alert("Welcome to the game");
//create variables for less typing and easier readability
var adventure2a = document.getElementById("adventure2a");
var button2a = document.getElementById("button2a");
var button2aI = document.getElementById("button2aI");
var adventure2b = document.getElementById("adventure2b");
var button2b = document.getElementById("button2b");
var button2bI = document.getElementById("button2bI");
var adventure2c = document.getElementById("adventure2c");
var button2c = document.getElementById("button2c");
var button2cI = document.getElementById("button2cI");
var adventure3Ladder = document.getElementById("adventure3Ladder");
var button3Ladder = document.getElementById("button3Ladder");
var adventure3Dolphin = document.getElementById("adventure3Dolphin");
var button3Dolphin = document.getElementById("button3Dolphin");
var adventure3Batrope = document.getElementById("adventure3Batrope");
var adventure3a = document.getElementById("adventure3a");
var button3a = document.getElementById("button3a");
var adventure3b = document.getElementById("adventure3b");
var button3b = document.getElementById("button3b");
var adventure3c = document.getElementById("adventure3c");
var button3c = document.getElementById("button3c");
var adventure4Ladder = document.getElementById("adventure4Ladder");
var adventure4Dolphin = document.getElementById("adventure4Dolphin");
var adventure4 = document.getElementById("adventure4");
var button4 = document.getElementById("button4");
var button4a = document.getElementById("button4a");
var or = document.getElementById("or");
var orb = document.getElementById("orb");
var orc = document.getElementById("orc");


//hides all items that I do not want to show upon loading the site
adventure2a.classList.add("hide");
button2a.classList.add("hide");
button2aI.classList.add("hide");
adventure2b.classList.add("hide");
button2b.classList.add("hide");
button2bI.classList.add("hide");
adventure2c.classList.add("hide");
button2c.classList.add("hide");
button2cI.classList.add("hide");
adventure3Ladder.classList.add("hide");
button3Ladder.classList.add("hide");
adventure3Dolphin.classList.add("hide");
button3Dolphin.classList.add("hide");
adventure3Batrope.classList.add("hide");
adventure3a.classList.add("hide");
button3a.classList.add("hide");
adventure3b.classList.add("hide");
button3b.classList.add("hide");
adventure3c.classList.add("hide");
button3c.classList.add("hide");
adventure4Ladder.classList.add("hide");
adventure4Dolphin.classList.add("hide");
adventure4.classList.add("hide");
button4.classList.add("hide");
button4a.classList.add("hide");
or.classList.add("hide");
orb.classList.add("hide");
orc.classList.add("hide");

// When user clicks first button, show second part, hide firs part that was not clicked
document.getElementById("button1a").addEventListener("click", function() {
  adventure2a.classList.add("show");
  button2a.classList.add("show");
  or.classList.add("show");
  button2aI.classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});
document.getElementById("button1b").addEventListener("click", function() {
  adventure2b.classList.add("show");
  button2b.classList.add("show");
  orb.classList.add("show");
  button2bI.classList.add("show");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});
document.getElementById("button1c").addEventListener("click", function() {
  adventure2c.classList.add("show");
  button2c.classList.add("show");
  orc.classList.add("show");
  button2cI.classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
});

// When user clicks second series of buttons, show third part, hide unclicked parts
button2a.addEventListener("click", function() {
  button2aI.classList.remove("show");
  adventure3Ladder.classList.add("show");
  button3Ladder.classList.add("show");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
  adventure2a.classList.remove("show");
  button2a.classList.remove("show");
  or.classList.remove("show");
});
button2aI.addEventListener("click", function() {
  button2a.classList.remove("show");
  adventure2a.classList.remove("show");
  button2aI.classList.remove("show");
  adventure3a.classList.add("show");
  button3a.classList.add("show");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
  or.classList.remove("show");

});
button2b.addEventListener("click", function() {
  button2bI.classList.remove("show");
  adventure2b.classList.remove("show");
  button2b.classList.remove("show");
  orb.classList.remove("show");
  adventure3Dolphin.classList.add("show");
  button3Dolphin.classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
});
button2bI.addEventListener("click", function() {
  button2b.classList.remove("show");
  adventure2b.classList.remove("show");
  button2bI.classList.remove("show");
  orb.classList.remove("show");
  adventure3b.classList.add("show");
  button3b.classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
});
button2c.addEventListener("click", function() {
  button2cI.classList.remove("show");
  adventure2c.classList.remove("show");
  button2c.classList.remove("show");
  orc.classList.remove("show");
  adventure3Batrope.classList.add("show");
  button4a.classList.remove("hide");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});
button2cI.addEventListener("click", function() {
  adventure2c.classList.remove("show");
  button2c.classList.remove("show");
  button2cI.classList.remove("show");
  adventure3c.classList.add("show");
  button3c.classList.add("show");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});

// Reveal final installment of adventure upon click of button
button3Ladder.addEventListener("click", function() {
  adventure2a.classList.remove("show");
  button2a.classList.remove("show");
  adventure3Ladder.classList.remove("show");
  button3Ladder.classList.remove("show");
  adventure4Ladder.classList.add("show");
  button4.classList.add("show");
});
button3a.addEventListener("click", function() {
  adventure2a.classList.remove("show");
  button2aI.classList.remove("show");
  adventure3a.classList.remove("show");
  button3a.classList.remove("show");
  adventure4.classList.add("show");
  button4.classList.add("show");
});
button3Dolphin.addEventListener("click", function() {
  adventure2b.classList.remove("show");
  button2b.classList.remove("show");
  adventure3Dolphin.classList.remove("show");
  button3Dolphin.classList.remove("show");
  adventure4Dolphin.classList.add("show");
  button4.classList.add("show");
});
button3b.addEventListener("click", function() {
  adventure2b.classList.remove("show");
  button2b.classList.remove("show");
  adventure3b.classList.remove("show");
  button3b.classList.remove("show");
  adventure4.classList.add("show");
  button4.classList.add("show");
});
button3c.addEventListener("click", function() {
  adventure2c.classList.remove("show");
  button2cI.classList.remove("show");
  adventure3c.classList.remove("show");
  button3c.classList.remove("show");
  adventure4.classList.add("show");
  button4.classList.add("show");
});

//restart the journey upon click of restart button4
button4.addEventListener("click", function() {
  alert("Again?");
  location.reload();
});
button4a.addEventListener("click", function() {
  alert("Again?");
  location.reload();
});
