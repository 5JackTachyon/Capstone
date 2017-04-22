var namespace = "http://www.w3.org/2000/svg"



function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function removeElement(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function removeArrayElement(array, index) {
  var element = array[index]
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }

}


function collide(Hero, obstacle, offsetX, offsetY) {
  if (!offsetX) {
    offsetX = 0
  }
  if (!offsetY) {
    offsetY = 0
  }
  if (!(getX(obstacle) + offsetX > getX(Hero) + Number(Hero.getAttribute("width"))/2
      || getX(obstacle) + Number(obstacle.getAttribute("width")) - offsetX < getX(Hero)
      || getY(obstacle) + offsetY > getY(Hero) + Number(Hero.getAttribute("height"))/2
      || getY(obstacle) + Number(obstacle.getAttribute("height"))/2 - offsetY < getY(Hero))) {
        return true
      }
  else {
    return false
  }
}



function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  }
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  }
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}




function makeCobble(){
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 0, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 45, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 90, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 135, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 180, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 225, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 270, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 315, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImage("images/cobblestoned.jpg", -50 + i*45, 360, 50, 50, 1)
  }
}

makeCobble()

var walk = true
var fortress = makeImage("images/fortress.png", 325, 0, 150, 150, 1)
var medieval = makeImage("images/medieval.png", 175, 0, 150, 150, 1)
var Medieval = makeImage("images/medieval.png", 500, 0, 150, 150, 1)
var Hero = makeImage("images/hero.gif", 375, 200, 50, 50, 1)
var Disgrace = makeImage("images/Disgraced.gif", 100, 200, 50, 50, 1)
var Corrupt = makeImage("images/Corrupt (1).gif", 600, 200, 50, 50, 1)
var Fallen = makeImage("images/Fallen.gif", 400, 300, 50, 50, 1)
var speech = makeRect( 0, 350, 800, 50, "grey", 1)
var monologue = makeText("", 0, 380, 30, "VT323", "red", 1)
var once = true

function moveHero(event){
  if(walk == true){
  if(event.keyCode == 37){
    move(Hero, -20, 0)
  }
  else if(event.keyCode == 39){
    move(Hero, 20, 0)
  }
  else if(event.keyCode == 38){
    move(Hero, 0, -20)
  }
  else if(event.keyCode == 40){
    move(Hero, 0, 20)
  }
}
}
//document.getElementById("loadBattle").addEventListener("click",loadBattle);
function heroCollide(){
  if(collide(Hero, fortress, 20, -80) == true){
    //removeElement(monologue)
    //monologue = makeText("Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?", 0, 380, 30, "VT323", "red", 1)
    monologue.innerHTML = "Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?"
    //once = false
    console.log("whoa")
  }
// else if(collide(Hero, fortress, 20, -80) == true && once == false){
    //monologue = makeText("Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?", 0, 380, 30, "VT323", "red", 1)
  //  monologue.innerHTML = "Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?"
    //console.log("low")
  //}
  else{
  //  removeElement(monologue)
    //monologue = makeText("", 370, 380, 30, "VT323", "red", 1)
    monologue.innerHTML = ""
    console.log("yo")
  }
}
function loadBattle(){
  console.log("!")
}

 function disgraceCollide(){
   if(collide(Hero, Disgrace, 20, -80) == true){
     monologue.innerHTML = "Hey you, why are you looking at me! Let's <a href='disgrace.html' id='loadBattle'>battle</a>!"
   }
   else{
     monologue.innerHTML = ""
   }
 }

document.addEventListener("keydown", moveHero)

function makeEverything(){
heroCollide()
requestAnimationFrame(makeEverything)
}
makeEverything()
