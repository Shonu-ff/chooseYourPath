alert("Welcome to the game");

//hides all items that I do not want to show upon loading the site
document.getElementById("adventure2a").classList.add("hide");
document.getElementById("button2a").classList.add("hide");
document.getElementById("button2aI").classList.add("hide");
document.getElementById("adventure2b").classList.add("hide");
document.getElementById("button2b").classList.add("hide");
document.getElementById("button2bI").classList.add("hide");
document.getElementById("adventure2c").classList.add("hide");
document.getElementById("button2c").classList.add("hide");
document.getElementById("button2cI").classList.add("hide");
document.getElementById("adventure3Ladder").classList.add("hide");
document.getElementById("button3Ladder").classList.add("hide");
document.getElementById("adventure3Dolphin").classList.add("hide");
document.getElementById("button3Dolphin").classList.add("hide");
document.getElementById("adventure3Batrope").classList.add("hide");
document.getElementById("button3Batrope").classList.add("hide");
document.getElementById("adventure3a").classList.add("hide");
document.getElementById("button3a").classList.add("hide");
document.getElementById("adventure3b").classList.add("hide");
document.getElementById("button3b").classList.add("hide");
document.getElementById("adventure3c").classList.add("hide");
document.getElementById("button3c").classList.add("hide");
document.getElementById("adventure4Ladder").classList.add("hide");
document.getElementById("adventure4Dolphin").classList.add("hide");
document.getElementById("adventure4").classList.add("hide");
document.getElementById("button4").classList.add("hide");
document.getElementById("or").classList.add("hide");
document.getElementById("orb").classList.add("hide");
document.getElementById("orc").classList.add("hide");

// When user clicks first button, show second part, hide firs part that was not clicked
document.getElementById("button1a").addEventListener("click", function() {
  document.getElementById("adventure2a").classList.add("show");
  document.getElementById("button2a").classList.add("show");
  document.getElementById("or").classList.add("show");
  document.getElementById("button2aI").classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});
document.getElementById("button1b").addEventListener("click", function() {
  document.getElementById("adventure2b").classList.add("show");
  document.getElementById("button2b").classList.add("show");
  document.getElementById("orb").classList.add("show");
  document.getElementById("button2bI").classList.add("show");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});
document.getElementById("button1c").addEventListener("click", function() {
  document.getElementById("adventure2c").classList.add("show");
  document.getElementById("button2c").classList.add("show");
  document.getElementById("orc").classList.add("show");
  document.getElementById("button2cI").classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
});

// When user clicks second series of buttons, show third part, hide unclicked parts
document.getElementById("button2a").addEventListener("click", function() {
  document.getElementById("button2aI").classList.remove("show");
  document.getElementById("adventure3Ladder").classList.add("show");
  document.getElementById("button3Ladder").classList.add("show");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
});
document.getElementById("button2aI").addEventListener("click", function() {
  document.getElementById("button2a").classList.remove("show");
  document.getElementById("adventure3a").classList.add("show");
  document.getElementById("button3a").classList.add("show");
  document.getElementById("adventure1a").classList.add("hide");
  document.getElementById("button1a").classList.add("hide");
});
document.getElementById("button2b").addEventListener("click", function() {
  document.getElementById("button2bI").classList.remove("show");
  document.getElementById("adventure3Dolphin").classList.add("show");
  document.getElementById("button3Dolphin").classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
});
document.getElementById("button2bI").addEventListener("click", function() {
  document.getElementById("button2b").classList.remove("show");
  document.getElementById("adventure3b").classList.add("show");
  document.getElementById("button3b").classList.add("show");
  document.getElementById("adventure1b").classList.add("hide");
  document.getElementById("button1b").classList.add("hide");
});
document.getElementById("button2c").addEventListener("click", function() {
  document.getElementById("button2cI").classList.remove("show");
  document.getElementById("adventure2c").classList.remove("show");
  document.getElementById("button2c").classList.remove("show");
  document.getElementById("adventure3Batrope").classList.add("show");
  document.getElementById("button3Batrope").classList.add("show");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});
document.getElementById("button2cI").addEventListener("click", function() {
  document.getElementById("button2c").classList.remove("show");
  document.getElementById("adventure3c").classList.add("show");
  document.getElementById("button3c").classList.add("show");
  document.getElementById("adventure1c").classList.add("hide");
  document.getElementById("button1c").classList.add("hide");
});

// Reveal final installment of adventure upon click of button
document.getElementById("button3Ladder").addEventListener("click", function() {
  document.getElementById("adventure2a").classList.remove("show");
  document.getElementById("button2a").classList.remove("show");
  document.getElementById("adventure3Ladder").classList.remove("show");
  document.getElementById("button3Ladder").classList.remove("show");
  document.getElementById("adventure4Ladder").classList.add("show");
  document.getElementById("button4").classList.add("show");
});
document.getElementById("button3a").addEventListener("click", function() {
  document.getElementById("adventure2a").classList.remove("show");
  document.getElementById("button2aI").classList.remove("show");
  document.getElementById("adventure3a").classList.remove("show");
  document.getElementById("button3a").classList.remove("show");
  document.getElementById("adventure4").classList.add("show");
  document.getElementById("button4").classList.add("show");
});
document.getElementById("button3Dolphin").addEventListener("click", function() {
  document.getElementById("adventure2b").classList.remove("show");
  document.getElementById("button2b").classList.remove("show");
  document.getElementById("adventure3Dolphin").classList.remove("show");
  document.getElementById("button3Dolphin").classList.remove("show");
  document.getElementById("adventure4Dolphin").classList.add("show");
  document.getElementById("button4").classList.add("show");
});
document.getElementById("button3b").addEventListener("click", function() {
  document.getElementById("adventure2b").classList.remove("show");
  document.getElementById("button2b").classList.remove("show");
  document.getElementById("adventure3b").classList.remove("show");
  document.getElementById("button3b").classList.remove("show");
  document.getElementById("adventure4").classList.add("show");
  document.getElementById("button4").classList.add("show");
});
document.getElementById("button3c").addEventListener("click", function() {
  document.getElementById("adventure2c").classList.remove("show");
  document.getElementById("button2cI").classList.remove("show");
  document.getElementById("adventure3c").classList.remove("show");
  document.getElementById("button3c").classList.remove("show");
  document.getElementById("adventure4").classList.add("show");
  document.getElementById("button4").classList.add("show");
});

//restart the journey upon click of restart button4
document.getElementById("button4").addEventListener("click", function() {
  alert("Again?");
  location.reload();
});
