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

function removeElement1(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerator1(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

function makeCobble1(){
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 0, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 45, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 90, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 135, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
  mokeImage("images/bubble.png", -50 + i*45, 180, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 225, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 270, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
  mokeImage("images/bubble.png", -50 + i*45, 315, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImage("images/bubble.png", -50 + i*45, 360, 50, 50, 1)
  }
}

makeCobble1()


//var bubble = mokeImage("images/bubble.png", 200, 200, 50, 50, 1)
var hero = mokeImage("images/hero.gif", 150, 300, 50, 50, 1)
var disgrace = mokeImage("images/Disgraced.gif", 550, 300, 50, 50, 1)
var speech = mokeRect( 0, 350, 800, 50, "grey", 1)
var monologue1 = mokeText("Press the slash/uppercut button to attack", 0, 380, 30, "VT323", "red", 1)
var used1 = false
//var choosed = 0
var disgraceHealth = 5
var disgraceHealthBarred = mokeRect(555.5, 277.5, disgraceHealth*5+5, 15, "grey", 1)
var disgraceHealthBar = mokeRect(558, 280, disgraceHealth*5, 10, "red", 1)
var heroHealth1 = 5
var heroHealthBarred1 = mokeRect(155.5, 277.5, heroHealth1*5+5, 15, "grey", 1)
var heroHealthBar1 = mokeRect(158, 280, heroHealth1*5, 10, "green", 1)
var time1 = 0
var drunk = 5
var choosed1 = false
var bottle = false
var block = false

function timerIncrease1(){

    time1++


  setTimeout(timerIncrease1, 1000)
}
setTimeout(timerIncrease1, 1000)



function heroSlash(){
  if(bottle == true && used1 == false){
    if(randomNumberGenerator1(1,2) == 2){
      removeElement1(monologue1)
      monologue1 = mokeText("Fourthwind is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      heroHealth1 = heroHealth1 - 1
      heroHealthBar1.setAttribute("width", heroHealth1*5)
      time1 = 0
      choosed1 = false
      used1 = true
    }
    if(randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 2
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("The Soldier(disgraced) took 2 damage", 0, 380, 30, "VT323", "red", 1)
      used1 = true
      choosed1 = false
      time1 = 0
    }
  }
  else if(block == true){
    removeElement1(monologue1)
    monologue1 = mokeText("The attack was blocked!", 0, 380, 30, "VT323", "red", 1)
    used1 = true
    chosed = false
    blocked = false
  }
  else if(used1 == false){
    disgraceHealth = disgraceHealth - 2
    disgraceHealthBar.setAttribute("width", disgraceHealth*5)
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier(disgraced) took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used1 = true
    choosed1 = false
    time1 = 0
  }
  else{
    removeElement1(monologue1)
    monologue1 = mokeText("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut(){
  if(bottle == true && used1 == false){
    if(randomNumberGenerator1(1,2) == 2){
      removeElement1(monologue1)
      monologue1 = mokeText("Fourthwind is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      heroHealth1 = heroHealth1 - 1
      heroHealthBar1.setAttribute("width", heroHealth1*5)
      time1 = 0
      used1 = true
    }
    if(choosed1 == false && randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 1
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("The Soldier(disgraced) took 1 damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      choosed1 = true
      time1 = 0
    }
    if(choosed1 == true && randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 1
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("The Soldier(disgraced) took 1 damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      choosed1 = false
      time1 = 0
      used1 = true
    }
  }
  else if(block == true){
    removeElement1(monologue1)
    monologue1 = mokeText("The attack was blocked!", 0, 380, 30, "VT323", "red", 1)
    used1 = true
    chosed = false
    blocked = false
  }
  else if(used1 == false && choosed1 == false){
    disgraceHealth = disgraceHealth - 1
    disgraceHealthBar.setAttribute("width", disgraceHealth*5)
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier(disgraced) took 1 damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed1 = true
    time1 = 0
  }
  else if(used1 == false && choosed1 == true){
    disgraceHealth = disgraceHealth - 1
    disgraceHealthBar.setAttribute("width", disgraceHealth*5)
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier(disgraced) took 1 damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed1 = false
    used1 = true
    time1 = 0
  }
  else{
    removeElement1(monologue1)
    monologue1 = mokeText("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
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
  if(used1 == true && Jackswine == false && time > 5){
    if(randomNumberGenerator1(1,2) == 1 && time > 5 && used == true){
    heroHealth1 = heroHealth1 - 1
      heroHealthBar1.setAttribute("width", heroHealth1*5)
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Bottle Throw, doing 1 damage, Fourthwind is confused", 0, 380, 25, "VT323", "red", 1)
    time1 = 0
    used1 = false
    bottle = true
    console.log("whoa")
  }
  if(randomNumberGenerator1(1,2) == 2 && time1 > 5 && used1 == true){
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
if(used == true && Jackswine == true && time > 5){
  if(randomNumberGenerator(1,3) == 1 && time > 5 && used == true){
  heroHealth = heroHealth - 1
    heroHealthBar.setAttribute("width", heroHealth*5)
  removeElement(monologue)
  monologue = mokeText("Soldier(disgraced) uses Bottle Throw, doing 1 damage, Fourthwind is confused", 0, 380, 25, "VT323", "red", 1)
  time = 0
  used = false
  bottle = true
  console.log("whoa")
}
if(randomNumberGenerator(1,3) == 2 && time > 5 && used == true){
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
if(randomNumberGenerator(1,3) == 3 && time > 5 && used == true){
removeElement(monologue)
monologue = mokeText("Soldier(disgraced) uses Block", 0, 380, 25, "VT323", "red", 1)
time = 0
used = false
block = true
console.log("whoa")
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
      heroHealthBar.setAttribute("width", heroHealth*5)
    removeElement(monologue)
    monologue = mokeText("Soldier(disgraced) uses Staggering Blow and it does 3 damage!!", 0, 380, 30, "VT323", "red", 1)
    time = 0
    used = false
  }
}

function makeLink(html, text) {
  if (!linkAdded) {
  var mydiv = document.getElementById("spoke");
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
    monologue = mokeText("The Hero is dead", 0, 380, 30, "VT323", "red", 1)
  }
}

function disgraceDead(){
  if(disgraceHealth <= 0){
    removeElement(monologue)
    monologue = mokeText("The Soldier has lost, you recieve 3 coins", 0, 380, 30, "VT323", "red", 1)
    makeLink("RPG.html", "The Soldier has lost, you recieve 3 coins")
    coins = coins + 3
  }
}

function makeEverything(){
disgraceChoose()
heroDead()
disgraceDead()
requestAnimationFrame(makeEverything)
console.log(time)
console.log(Jackswine)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything()
