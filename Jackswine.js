var namespace = "http://www.w3.org/2000/svg"

function mkRoct(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var convos = document.getElementById("convos")
  convos.appendChild(rect)
  return rect
}

function mkImoge(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("convos")
  canvas.appendChild(image)
  return image
}

function mkToxt(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvos = document.getElementById("convos")
  canvos.appendChild(text)
  return text
}

function removeElement(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

var Barn = mkImoge("images/Barn.png", 175, 150, 400, 400, 1)
var hero = mkImoge("images/hero.gif", 150, 300, 50, 50, 1)
var Jackswine = mkImoge("images/Jackswine (1).gif", 550, 300, 50, 50, 1)
var speech = mkRoct( 0, 350, 800, 50, "grey", 1)
var monologue = mkToxt("Press the slash/uppercut button to attack", 0, 380, 30, "VT323", "red", 1)
var used = false
//var choosed = 0
var jackHealth = 5
var jackHealthBarred = mkRoct(555.5, 277.5, jackHealth*5+5, 15, "grey", 1)
var jackHealthBar = mkRoct(558, 280, jackHealth*5, 10, "red", 1)
var heroHealth = 5
var heroHealthBarred = mkRoct(155.5, 277.5, heroHealth*5+5, 15, "grey", 1)
var heroHealthBar = mkRoct(158, 280, heroHealth*5, 10, "green", 1)
var time = 0
var shadow = 5
var choosed = false
var chosed = false
var rally = 0
var Rally = false
var rallyTime = 0

function timerIncrease(){

    time++


  setTimeout(timerIncrease, 1000)
}
setTimeout(timerIncrease, 1000)



function heroSlash(){
   if(used == false){
    jackHealth = jackHealth - 2
    jackHealthBar.setAttribute("width", jackHealth*5)
    removeElement(monologue)
    monologue = mkToxt("Jackswine took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used = true
    choosed = false
    time = 0
  }
  else{
    removeElement(monologue)
    monologue = mkToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut(){
   if(used == false && choosed == false){
     jackHealth = jackHealth - 1
     jackHealthBar.setAttribute("width", jackHealth*5)
    removeElement(monologue)
    monologue = mkToxt("The Soldier(Corrupt) took 1 damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed = true
    time = 0
  }
  else if(used == false && choosed == true){
    jackHealth = jackHealth - 1
    jackHealthBar.setAttribute("width", jackHealth*5)
    removeElement(monologue)
    monologue = mkToxt("The Soldier(Corrupt) took 1 damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed = false
    used = true
    time = 0
  }
  else{
    removeElement(monologue)
    monologue = mkToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
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

var juice = randomNumberGenerator(1,3)
function jackChoose(){
    if(randomNumberGenerator(1,3) == 1 && time > 5 && used == true){
      heroHealth = heroHealth - 2
      heroHealth = heroHealth - rally
      heroHealthBar.setAttribute("width", heroHealth*5)
    removeElement(monologue)
    monologue = mkToxt("Jackswine uses Copy, stealing your move: Slash", 0, 380, 25, "VT323", "red", 1)
    time = 0
    once = false
    chosed = false
    used = false
    console.log("whoa")
  }
  if(randomNumberGenerator(1,3) == 2 && time > 5 && used == true){
    //squireCopy()
    heroHealth = heroHealth - 1
    heroHealth = heroHealth - rally
    heroHealthBar.setAttribute("width", heroHealth*5)
    removeElement(monologue)
    monologue = mkToxt("Jackswine uses Copy, stealing your move: Uppercut, you're out cold!", 0, 380, 25, "VT323", "red", 1)
    //time = 0
    //console.log("yo")
    time = 0
    once = false
    chosed = true
    console.log("yo")
  }
  if(randomNumberGenerator(1,3) == 2 && chosed == true && time > 5 && used == true){
    //squireCopy()
    heroHealth = heroHealth - 1
    heroHealth = heroHealth - rally
    heroHealthBar.setAttribute("width", heroHealth*5)
    removeElement(monologue)
    monologue = mkToxt("Jackswine uses Copy, stealing your move: Uppercut, you woke up!", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    //console.log("yo")
    time = 0
    chosed = false
    once = false
    used = false
    console.log("yo")
  }
  if(randomNumberGenerator(1,3) >= 3 && time > 5 && used == true){
  removeElement(monologue)
  monologue = mkToxt("Jackswine uses Rally, he gains +1 attack!", 0, 380, 25, "VT323", "red", 1)
  Rally = true
  once = false
  rally = rally + 1
  time = 0
  chosed = false
  used = false
  console.log("whoa")
}
if(Rally == true && once == false){
  rallyTime = rallyTime + 1
  once = true
}
if(rallyTime == 3){
  rally = rally - 1
  rallyTime = 0
}
if(rally == 0){
  Rally = false
}
}



//function disgracedAttack(){
  //if(randomNumberGenerator(1,drunk) == 1 && time > 5){
    //removeElement(monologue)
    //monologue = mokeText("Soldier(disgraced) uses Staggering Blow but the attack failed", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    //used = false
  //}
  //if(randomNumberGenerator(1,drunk) != 1 && time > 5){
    //heroHealth = heroHealth - 3
    //removeElement(monologue)
    //monologue = mokeText("Soldier(disgraced) uses Staggering Blow and it does 3 damage!!", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    //used = false
  //}
//}

function makeLink(html, text) {
  if (!linkAdded) {
  var mydiv = document.getElementById("speck");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',html);
  aTag.innerHTML = text;
  mydiv.appendChild(aTag);
  linkAdded = true
  console.log(linkAdded)

}
}

var linkAdded = false


function heroDead(){
  if(heroHealth <= 0){
    removeElement(monologue)
    monologue = mkToxt("Fourthwind lost!", 0, 380, 30, "VT323", "red", 1)
  }
}

function jackDead(){
  if(jackHealth <= 0){
    removeElement(monologue)
    monologue = mkToxt("You beat Jackswine!", 0, 380, 30, "VT323", "red", 1)
    makeLink("RPG.html", "Jackswine joins your team")
    coins = coins + 3
    Jackswine = true
  }
}

function makeEverything(){
jackChoose()
heroDead()
jackDead()
requestAnimationFrame(makeEverything)
console.log(time)
console.log(Jackswine)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything()
