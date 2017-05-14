var namespace = "http://www.w3.org/2000/svg"

function mkImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("tucansamvas")
  canvas.appendChild(image)
  return image
}

function mkText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("tucansamvas")
  canvas.appendChild(text)
  return text
}

function mkRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("tucansamvas")
  canvas.appendChild(rect)
  return rect
}

function makeImg(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasaline")
  canvas.appendChild(image)
  return image
}

function mkImg(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("tucanvas")
  canvas.appendChild(image)
  return image
}

function mkTxt(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("tucanvas")
  canvas.appendChild(text)
  return text
}

function mkRct(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("tucanvas")
  canvas.appendChild(rect)
  return rect
}

function makeImg(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasaline")
  canvas.appendChild(image)
  return image
}

function makeTxt(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasaline")
  canvas.appendChild(text)
  return text
}

function makeRct(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasaline")
  canvas.appendChild(rect)
  return rect
}

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



function makeCrust(){
  for(var i = 0; i < 19; i++){
    mkImage("images/cobblestoned.jpg", -50 + i*45, 0, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/cobblestoned.jpg", -50 + i*45, 45, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/cobblestoned.jpg", -50 + i*45, 90, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/pixelground.jpg", -50 + i*45, 135, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/pixelground.jpg", -50 + i*45, 180, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/pixelground.jpg", -50 + i*45, 225, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/pixelground.jpg", -50 + i*45, 270, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/pixelground.jpg", -50 + i*45, 315, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImage("images/pixelground.jpg", -50 + i*45, 360, 50, 50, 1)
  }
}

function makeFloor(){
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, -15, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 25, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 65, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 105, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/cobblestoned.jpg", -50 + i*25, 135, 30, 30, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 145, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 185, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 225, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 265, 50, 65, 1)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 305, 50, 65, 0.5)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 345, 50, 65, 0.5)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/brick.jpg", -50 + i*45, 385, 50, 65, 0.5)
  }
  for(var i = 0; i < 19; i++){
    mkImg("images/cobblestoned.jpg", 355,  415 - i*15, 120, 30, 1)
  }
}


function makeGround(){
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 0, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 45, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 90, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 135, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 180, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 225, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 270, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 315, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    makeImg("images/cobblestoned.jpg", -50 + i*45, 360, 50, 50, 1)
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
makeGround()
makeFloor()
makeCrust()

var convas = false
var kahnvas = false
var walk = true
var fortress = makeImage("images/fortress.png", 325, 0, 150, 150, 1)
var medieval = makeImage("images/medieval.png", 175, 0, 150, 150, 1)
var Medieval = makeImage("images/medieval.png", 500, 0, 150, 150, 1)
var Medieval = makeImg("images/medieval.png", 75, 0, 150, 150, 1)
var Cottage = makeImg("images/hausecottage.PNG", 500, 0, 150, 150, 1)
var Cottage = makeImg("images/hausecottage.PNG", 75, 200, 150, 150, 1)
var rect = mkRct(0, 0, 900, 900, "black", .5)
var barn = mkImage("images/Barn.png", 500, 200, 200, 200, 1)
var Hero = makeImage("images/Fourth.gif", 375, 200, 55, 50, 1)
var Disgrace = makeImage("images/DISGRACE (2).gif", 100, 200, 60, 50, 1)
var Corrupt = makeImage("images/Corrupt (2).gif", 600, 200, 50, 50, 1)
var Fallen = makeImage("images/Fallen (1).gif", 400, 300, 60, 60, 1)
//var Fallen = makeImage("images/Fallen.gif", 400, 300, 50, 50, 1)
var Jackswine1 = mkImage("images/Jackswine (2).gif", 600, 100, 50, 50, 1)
//var speech = makeRect( 0, 350, 800, 50, "grey", 1)
//var monologue = makeText("", 0, 380, 30, "VT323", "red", 1)
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
  if(collide(Hero, fortress, 20, -80) == true && kahnvas == false && convas == false){
    //removeElement(monologue)
    //monologue = makeText("Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?", 0, 380, 30, "VT323", "red", 1)
    //monologue.innerHTML = "Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?"
    //document.getElementById("speech").innerHTML = "Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>?"
    //once = false
    makeLink("battle.html", "Would you like to learn how to battle?")
    console.log("whoa")
  }
  else if(collide(Hero, Disgrace, 20, -80) == true && kahnvas == false && convas == false){
     //  document.getElementById("speech").innerHTML = "Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>!"
     //aTag.setAttribute('href',"battle.html");
     //aTag.innerHTML = "Would you like how to learn how to battle?";
     //mydiv.appendChild(aTag);
     makeLink("disgrace.html", "I don't like the lots of you, let's battle!")
   }
     else if(collide(Hero, Corrupt, 20, -80) == true && kahnvas == false && convas == false){
       makeLink("corrupt.html", "You won't make it out alive enough to report me accepting bribes!")
     }
     else if(collide(Hero, Jackswine1, 20, -80) == true && kahnvas == true && convas == true){
       makeLink("Jackswine.html", "Hey old friend, lets have a friendly duel!")
     }
  else{
  //  removeElement(monologue)
    //monologue = makeText("", 370, 380, 30, "VT323", "red", 1)
  //  monologue.innerHTML = ""
    document.getElementById("speech").innerHTML = ""
    linkAdded = false
     //makeLink("RPG.html", "")
    console.log("yo")
  }
}
function loadBattle(){
  console.log("!")
}

function makeLink(html, text) {
  if (!linkAdded) {
  var mydiv = document.getElementById("speech");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',html);
  aTag.innerHTML = text;
  mydiv.appendChild(aTag);
  linkAdded = true
  console.log(linkAdded)

}
}

var linkAdded = false

 function disgraceCollide(){
   //var mydiv = document.getElementById("speech");
  //var aTag = document.createElement('a');

   if(collide(Hero, Disgrace, 20, -80) == true && kahnvas == false && convas == false){
    // document.getElementById("speech").innerHTML = "I don't like the lots of you, press A to battle me!"
     //Hey you, why are you looking at me! Let's <a href='disgrace.html' id='loadBattle'>battle</a>!
  makeLink("disgrace.html", "I don't like the lots of you, let's battle!")
   }
   else if(collide(Hero, fortress, 20, -80) == true && kahnvas == false && convas == false){
      //  document.getElementById("speech").innerHTML = "Would you like to learn how to <a href='battle.html' id='loadBattle'>battle</a>!"
      //aTag.setAttribute('href',"battle.html");
      //aTag.innerHTML = "Would you like how to learn how to battle?";
      //mydiv.appendChild(aTag);
      makeLink("battle.html", "Would you like to learn how to battle?")
   }
   else{
     makeLink("RPG.html", "")
   }
 }



document.addEventListener("keydown", moveHero)




function Switch(){
  if(getY(Hero) > 350 && convas == false && kahnvas == false){
    var why = getY(Hero)
    var ex = getX(Hero)
    removeElement(Hero)
    Hero = makeImg("images/Fourth.gif", ex, 0, 50, 50, 1)
    convas = true
  }
  if(getY(Hero) < 0 && convas == true && kahnvas == false){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = makeImage("images/Fourth.gif", ex, 350, 50, 50, 1)
    convas = false
  }
  if(getX(Hero) > 750 && convas == false && kahnvas == false){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = mkImg("images/Fourth.gif", 0, why, 50, 50, 1)
    kahnvas = true
  }
  if(getX(Hero) < 0 && convas == false && kahnvas == true){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = makeImage("images/Fourth.gif", 750, why, 50, 50, 1)
    kahnvas = false
  }
  if(getX(Hero) > 750 && convas == true && kahnvas == false){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = mkImage("images/Fourth.gif", 0, why, 50, 50, 1)
    kahnvas = true
  }
  if(getX(Hero) < 0 && convas == true && kahnvas == true){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = makeImg("images/Fourth.gif", 750, why, 50, 50, 1)
    kahnvas = false
  }
  if(getY(Hero) < 0 && convas == true && kahnvas == true){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = mkImg("images/Fourth.gif", ex, 290, 50, 50, 1)
    convas = false
  }
  if(getY(Hero) > 300 && convas == false && kahnvas == true){
    why = getY(Hero)
    ex = getX(Hero)
    removeElement(Hero)
    Hero = mkImage("images/Fourth.gif", ex, 0, 50, 50, 1)
    convas = true
  }
}



function makeEverything(){
checkCookie()
checkHeroCookie()
//disgraceCollide()
Switch()
heroCollide()
//getCookie(Jackswine1)
requestAnimationFrame(makeEverything)
console.log(Jackswine)
console.log(coins)
}
makeEverything()
