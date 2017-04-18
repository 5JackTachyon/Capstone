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

function removeElement(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}


var hero = makeImoge("images/hero.gif", 150, 250, 50, 50, 1)

var knight = makeImoge("images/Knight (2).gif", 500, 250, 50, 50, 1)
var speech = makeRoct( 0, 350, 800, 50, "grey", 1)
var monologue = makeToxt("", 370, 380, 30, "VT323", "red", 1)
var used = false
var choosed  = false
var squireHealth = 5
var heroHealth = 5
time = 0

function timerIncrease(){

    time++


  setTimeout(timerIncrease, 50)
}
setTimeout(timerIncrease, 50)



function heroSlash(){
  if(used == false && time > 5){
    squireHealth = squireHealth - 2
    removeElement(monologue)
    monologue = makeToxt("The squire took 2 damage, he has 3 health left", 0, 380, 30, "VT323", "red", 1)
    used = true
    time = 0
  }

}

function heroChoosed(){
  if(choosed == true && time > 5){
    removeElement(monologue)
    monologue = makeToxt("The hero is dazed and cannot attack", 0, 380, 30, "VT323", "red", 1)
    choosed = false
    time = 0
  }
}

function squireChoose(){
  if(used == true && choosed == false && time > 5){
    if(randomNumberGenerator(1, 2) == 1)
    squireUppercut()
    time = 0
  }
  if(randomNumberGenerator(1, 2) == 2 && time > 5){
    squireCopy()
    time = 0
  }
}

function squireUppercut(){
  if(used == true && choosed == false && time > 5){
    heroHealth = heroHealth - 1
    removeElement(monologue)
    monologue = makeToxt("Fourthwind took 1 damage, and he is dazed", 0, 380, 30, "VT323", "red", 1)
    choosed == true
    time =  0
  }
}

function squireCopy(){
  if(used == true && choosed == false && time > 5){
    herohealth = heroHealth - 2
    removeElement(monologue)
    monologue = makeToxt("The squire stole Fourthwind's move Slash, and used it against him", 0, 380, 30, "VT323", "red", 1)
    used == false
    time  = 0
  }
}

function makeEverything(){
heroChoosed()
squireUppercut()
squireCopy()
requestAnimationFrame(makeEverything)
}
makeEverything()
