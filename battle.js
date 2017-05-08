var namespace = "http://www.w3.org/2000/svg"

function makeRoct(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvos = document.getElementById("canvos")
  canvos.appendChild(rect)
  return rect
}

function makeImoge(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvos = document.getElementById("canvos")
  canvos.appendChild(image)
  return image
}

function makeToxt(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvos = document.getElementById("canvos")
  canvos.appendChild(text)
  return text
}

function removeElements(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerators(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

var fortress = makeImoge("images/fortress.png", 200, 0, 350, 350, 1)
var hero = makeImoge("images/hero.gif", 150, 300, 50, 50, 1)
var knight = makeImoge("images/Knight (2).gif", 550, 300, 50, 50, 1)
var speech = makeRoct( 0, 350, 800, 50, "grey", 1)
var monologues = makeToxt("Press the slash button to attack", 0, 380, 30, "VT323", "red", 1)
var used = false
var choosed = false
var squireHealth = 5
var squireHealthBarred = makeRoct(555.5, 277.5, squireHealth*5+5, 15, "grey", 1)
var squireHealthBar = makeRoct(558, 280, squireHealth*5, 10, "red", 1)
var heroHealth = 5
var heroHealthBarred = makeRoct(155.5, 277.5, heroHealth*5+5, 15, "grey", 1)
var heroHealthBar = makeRoct(158, 280, heroHealth*5, 10, "green", 1)
var time = 0

function timerIncrease(){

    time++


  setTimeout(timerIncrease, 1000)
}
setTimeout(timerIncrease, 1000)



function heroSlash(){
  if(used == false){
    squireHealth = squireHealth - 2
    squireHealthBar.setAttribute("width", squireHealth*5)
    removeElements(monologues)
    monologues = makeToxt("The squire took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used = true
    time = 0
  }
  else{
    removeElements(monologues)
    monologues = makeToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}

//function heroChoosed(){
  //if(choosed == 2 && time > 5){
    //removeElement(monologue)
    //monologue = makeToxt("The hero is dazed and cannot attack", 0, 380, 30, "VT323", "red", 1)
    //choosed = choosed - 1
    //time = 0
    //console.log("low")
  //}
//}

var juice = randomNumberGenerators(1,2)
function squireChoose(){
    if(randomNumberGenerators(1,2) == 1 && choosed == false && time > 5 && used == true){
  //  squireUppercut()
    heroHealth = heroHealth - 1
    heroHealthBar.setAttribute("width", heroHealth*5)
    removeElements(monologues)
    monologues = makeToxt("Fourthwind took 1 damage, and he is dazed", 0, 380, 30, "VT323", "red", 1)
    time = 0
    choosed = true
    console.log("whoa")
  }
  if(randomNumberGenerators(1,2) == 1 && choosed == true && time > 5 && used == true){
//  squireUppercut()
  heroHealth = heroHealth - 1
  heroHealthBar.setAttribute("width", heroHealth*5)
  removeElements(monologues)
  monologues = makeToxt("Fourthwind took more 1 damage, and he woke up", 0, 380, 30, "VT323", "red", 1)
  choosed = false
  used = false
  time = 0
  console.log("slow")
}
  if(randomNumberGenerators(1,2) == 2 && time > 5 && used == true){
    //squireCopy()
    heroHealth = heroHealth - 2
    heroHealthBar.setAttribute("width", heroHealth*5)
    removeElements(monologues)
    monologues = makeToxt("The squire stole Fourthwind's move Slash, and used it against him", 0, 380, 30, "VT323", "red", 1)
    used = false
    choosed = false
    time = 0
    console.log("yo")
  }
}

function squireUppercut(){
  if(used == true && choosed == 0 && time > 5){
    heroHealth = heroHealth - 1
    heroHealthBar.setAttribute("width", heroHealth*5)
    removeElements(monologues)
    monologues = makeToxt("Fourthwind took 1 damage, and he is dazed", 0, 380, 30, "VT323", "red", 1)
    choosed = choosed + 2
    time = 0
  }
}

function squireCopy(){
  if(used == true && choosed == 0 && time > 5){
    herohealth = heroHealth - 2
    heroHealthBar.setAttribute("width", heroHealth*5)
    removeElements(monologues)
    monologues = makeToxt("The squire stole Fourthwind's move Slash, and used it against him", 0, 380, 30, "VT323", "red", 1)
    used = false
    time = 0
  }
}

function makeLinks(html, text) {
  if (!linkAddeds) {
  var mydiv = document.getElementById("speak");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',html);
  aTag.innerHTML = text;
  mydiv.appendChild(aTag);
  linkAdded = true
  console.log(linkAdded)

}
}

var linkAddeds = false

function heroDead(){
  if(heroHealth <= 0){
    removeElements(monologues)
    monologues = makeToxt("The Hero is dead", 0, 380, 30, "VT323", "red", 1)
  }
}

function squireDead(){
  if(squireHealth <= 0){
    removeElements(monologues)
    monologues = makeToxt("The Squire has lost, you recieve the move Uppercut and 2 coins", 0, 380, 25, "VT323", "red", 1)
    makeLinks("RPG.html", "The Squire has lost, you recieve the move Uppercut and 2 coins")
    coins = coins + 2
  }
}

function makeEverything(){
//heroChoosed()
squireChoose()
//squireUppercut()
//squireCopy()
heroDead()
squireDead()
requestAnimationFrame(makeEverything)
console.log(time)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything()
