var namespace = "http://www.w3.org/2000/svg"

function mokeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var convas = document.getElementById("convas")
  convas.appendChild(rect)
  return rect
}

function mokeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("convas")
  canvas.appendChild(image)
  return image
}

function mokeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvos = document.getElementById("convas")
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

var hero = mokeImage("images/hero.gif", 150, 250, 50, 50, 1)

var disgrace = mokeImage("images/Disgraced.gif", 500, 250, 50, 50, 1)
var speech = mokeRect( 0, 350, 800, 50, "grey", 1)
var monologue = mokeText("Press the slash button to attack", 0, 380, 30, "VT323", "red", 1)
var used = false
//var choosed = 0
var disgraceHealth = 5
var heroHealth = 5
var time = 0
var drunk = 5
var choosed = false
var bottle = false

function timerIncrease(){

    time++


  setTimeout(timerIncrease, 1000)
}
setTimeout(timerIncrease, 1000)



function heroSlash(){
  if(bottle == true && used == false){
    if(randomNumberGenerator(1,2) == 2){
      removeElement(monologue)
      monologue = mokeText("Fourthwind is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      heroHealth = heroHealth - 1
    }
  }
  if(used == false){
    disgraceHealth = disgraceHealth - 2
    removeElement(monologue)
    monologue = mokeText("The Soldier(disgraced) took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used = true
    time = 0
  }
  else{
    removeElement(monologue)
    monologue = mokeText("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut(){
  if(bottle == true && used == false){
    if(randomNumberGenerator(1,2) == 2){
      removeElement(monologue)
      monologue = mokeText("Fourthwind is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      heroHealth = heroHealth - 1
    }
  }
  else if(used == false && choosed == false){
    disgraceHealth = disgraceHealth - 1
    removeElement(monologue)
    monologue = mokeText("The Soldier(disgraced) took 1 damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed = true
    time = 0
  }
  else if(used == false && choosed == true){
    disgraceHealth = disgraceHealth - 1
    removeElement(monologue)
    monologue = mokeText("The Soldier(disgraced) took 1 damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed = false
    used = true
    time = 0
  }
  else{
    removeElement(monologue)
    monologue = mokeText("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
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

var juice = randomNumberGenerator(1,2)
function disgraceChoose(){
  if(used == true && time > 5){
    if(randomNumberGenerator(1,2) == 1 && time > 5 && used == true){
    heroHealth = heroHealth - 1
    removeElement(monologue)
    monologue = mokeText("Soldier(disgraced) uses Bottle Throw, doing 1 damage, Fourthwind is confused", 0, 380, 25, "VT323", "red", 1)
    time = 0
    used = false
    bottle = true
    console.log("whoa")
  }
  if(randomNumberGenerator(1,2) == 2 && time > 5 && used == true){
    //squireCopy()
    removeElement(monologue)
    monologue = mokeText("Soldier(disgraced) uses Staggering Blow", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    drunk = drunk - 1
    //console.log("yo")
    disgracedAttack()
    time = 0
    console.log("yo")
  }
}
}



function disgracedAttack(){
  if(randomNumberGenerator(1,drunk) == 1 && time > 5){
    removeElement(monologue)
    monologue = mokeText("Soldier(disgraced) uses Staggering Blow but the attack failed", 0, 380, 30, "VT323", "red", 1)
    time = 0
    used = false
  }
  if(randomNumberGenerator(1,drunk) != 1 && time > 5){
    heroHealth = heroHealth - 3
    removeElement(monologue)
    monologue = mokeText("Soldier(disgraced) uses Staggering Blow and it does 3 damage!!", 0, 380, 30, "VT323", "red", 1)
    time = 0
    used = false
  }
}

function heroDead(){
  if(heroHealth <= 0){
    removeElement(monologue)
    monologue = mokeText("The Hero is dead", 0, 380, 30, "VT323", "red", 1)
  }
}

function disgraceDead(){
  if(disgraceHealth <= 0){
    removeElement(monologue)
    monologue = mokeText("You beat the soldier!", 0, 380, 30, "VT323", "red", 1)
  }
}

function makeEverything(){
disgraceChoose()
heroDead()
disgraceDead()
requestAnimationFrame(makeEverything)
console.log(time)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything()
