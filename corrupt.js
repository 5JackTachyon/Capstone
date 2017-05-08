var namespace = "http://www.w3.org/2000/svg"

function mokeRoct(x, y, width, height, fill, opacity) {
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

function mokeImoge(url, x, y, width, height, opacity) {
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

function mokeToxt(message, x, y, fontSize, fontFamily, fill, opacity) {
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

function removeElement2(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerator2(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

var goldcoins13 = mokeImoge("images/goldcoins.gif", 250, -368.8, 440, 1100, 1)
var goldcoins12 = mokeImoge("images/goldcoins.gif", 50, -328.8, 440, 1100, 1)
var goldcoins11 = mokeImoge("images/goldcoins.gif", 250, -208.8, 360, 900, 1)
var goldcoins10 = mokeImoge("images/goldcoins.gif", 150, -168.8, 360, 900, 1)
var goldcoins = mokeImoge("images/goldcoins.gif", 250, 8.8, 240, 600, 1)
var goldcoins2 = mokeImoge("images/goldcoins.gif", 0, 8.8, 240, 600, 1)
var goldcoins1 = mokeImoge("images/moneymoney.png", 0, -15, 240, 600, 1)
var goldcoins2 = mokeImoge("images/goldcoins.gif", 500, 8.8, 240, 600, 1)
var goldcoins1 = mokeImoge("images/moneymoney.png", 500, -15, 240, 600, 1)
var hero2 = mokeImoge("images/hero.gif", 150, 300, 50, 50, 1)

var corrupt1 = mokeImoge("images/Corrupt (1).gif", 550, 300, 50, 50, 1)
var speech2 = mokeRoct( 0, 350, 800, 50, "grey", 1)
var monologue2 = mokeToxt("Press the slash/uppercut button to attack", 0, 380, 30, "VT323", "red", 1)
var used2 = false
//var choosed = 0
var corruptHealth = 5
var corruptHealthBarred = mokeRoct(555.5, 277.5, corruptHealth*5+5, 15, "grey", 1)
var corruptHealthBar = mokeRoct(558, 280, corruptHealth*5, 10, "red", 1)
var heroHealth2 = 5
var heroHealthBarred2 = mokeRoct(155.5, 277.5, heroHealth2*5+5, 15, "grey", 1)
var heroHealthBar2 = mokeRoct(158, 280, heroHealth2*5, 10, "green", 1)
var time2 = 0
var shadow = 5
var choosed2 = false
var dark = false
var bribed = false
var corrupt2 = false
//var coins = 5

function timerIncrease2(){

    time2++


  setTimeout(timerIncrease2, 1000)
}
setTimeout(timerIncrease2, 1000)

function heroPay(){
 if(bribed == true && coins > 1){
   removeElement2(monologue2)
   monologue2 = mokeToxt("You bribed the Soldier(Corrupt) out of attacking you!", 0, 380, 30, "VT323", "red", 1)
   corrupt2 = true
   coins = coins - 2
   used2 = false
   time2 = 0
   bribed = false
 }
 else{
   removeElement2(monologue2)
   monologue2 = mokeToxt("You can't use this right now", 0, 380, 30, "VT323", "red", 1)
 }
}

function heroSlash2(){
  if(dark == true && used2 == false){
    if(randomNumberGenerator2(1,shadow) == 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Fourthwind's attack missed", 0, 380, 30, "VT323", "red", 1)
      //heroHealth = heroHealth - 1
      choosed2 = false
      time2 = 0
      used2 = true
    }
    if(randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 2
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("Fourthwind's attack succeeded", 0, 380, 30, "VT323", "red", 1)
      used2 = true
      choosed2 = false
      time2 = 0
    }
  }
  else if(used2 == false){
    corruptHealth = corruptHealth - 2
    corruptHealthBar.setAttribute("width", corruptHealth*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Soldier(Corrupt) took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used2 = true
    choosed2 = false
    time2 = 0
  }
  else{
    removeElement2(monologue2)
    monologue2 = mokeToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut2(){
  if(dark == true && used2 == false){
    if(randomNumberGenerator2(1,shadow) == 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Fourthwind's attack missed", 0, 380, 30, "VT323", "red", 1)
      //heroHealth = heroHealth - 1
      time2 = 0
      used2 = true
    }
    if(choosed2 == false && randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 1
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("The Soldier(Corrupt) took one damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      choosed2 = true
      time2 = 0
    }
    if(choosed2 == true && randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 1
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("The Soldier(Corrupt) took one damage and woke up", 0, 380, 30, "VT323", "red", 1)
      choosed2 = false
      time2 = 0
      used2 = true
    }
  }
  else if(used2 == false && choosed2 == false){
    corruptHealth = corruptHealth - 1
    corruptHealthBar.setAttribute("width", corruptHealth*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Soldier(Corrupt) took 1 damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed2 = true
    time2 = 0
  }
  else if(used2 == false && choosed2 == true){
    corruptHealth = corruptHealth - 1
    corruptHealthBar.setAttribute("width", corruptHealth*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Soldier(Corrupt) took 1 damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed2 = false
    used2 = true
    time2 = 0
  }
  else{
    removeElement2(monologue2)
    monologue2 = mokeToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
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

var juice2 = randomNumberGenerator2(1,2)
function corruptChoose(){
  if(corrupt2 == false && used2 == true && time2 > 5){
    if(randomNumberGenerator2(1,2) == 1 && bribed == false && time2 > 5 && used2 == true){
    removeElement2(monologue2)
    monologue2 = mokeToxt("Soldier(Corrupt) uses Bribed Slash, doing 3 damage, press the pay button to pay 2 coins to stop the attack", 0, 380, 25, "VT323", "red", 1)
    time2 = 0
    bribed = true
    console.log("whoa")
  }
  if(randomNumberGenerator2(1,2) == 2 && bribed == false && time2 > 5 && used2 == true){
    //squireCopy()
    heroHealth2 = heroHealth2 - 1
    heroHealthBar2.setAttribute("width", heroHealth2*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("Soldier(Corrupt) uses Shadow and you  took 1 damage", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    shadow = shadow - 1
    dark = true
    //console.log("yo")
    time2 = 0
    used2 = false
    console.log("yo")
  }
  if(corrupt2 == false && bribed == true && used2 == true && time2 > 5){
    heroHealth2 = heroHealth2 - 3
    heroHealthBar2.setAttribute("width", heroHealth2*5)
    if(randomNumberGenerator2(1,2) == 1 && time2 > 5 && used2 == true){
    removeElement2(monologue2)
    monologue2 = mokeToxt("Fourthwind took 3 damage", 0, 380, 25, "VT323", "red", 1)
    used2 = false
    time2 = 0
    bribed = false
    console.log("whoa")
  }
}
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

function makeLink2(html, text) {
  if (!linkAdded2) {
  var mydiv = document.getElementById("spokeo");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',html);
  aTag.innerHTML = text;
  mydiv.appendChild(aTag);
  linkAdded2 = true
  console.log(linkAdded2)

}
}

var linkAdded2 = false


function heroDead2(){
  if(heroHealth2 <= 0){
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Hero is dead", 0, 380, 30, "VT323", "red", 1)
  }
}

function corruptDead(){
  if(corruptHealth <= 0){
    removeElement2(monologue2)
    monologue2 = mokeToxt("You beat the soldier!", 0, 380, 30, "VT323", "red", 1)
    makeLink2("RPG.html", "The Soldier has lost, you recieve 3 coins")
    coins = coins + 3
  }
}

function makeEverything2(){
corruptChoose()
heroDead2()
corruptDead()
requestAnimationFrame(makeEverything2)
console.log(time2)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything2()
