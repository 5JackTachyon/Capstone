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

function removeElement(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

var hero = mokeImoge("images/hero.gif", 150, 250, 50, 50, 1)

var corrupt = mokeImoge("images/Corrupt (1).gif", 500, 250, 50, 50, 1)
var speech = mokeRoct( 0, 350, 800, 50, "grey", 1)
var monologue = mokeToxt("Press the slash/uppercut button to attack", 0, 380, 30, "VT323", "red", 1)
var used = false
//var choosed = 0
var corruptHealth = 5
var heroHealth = 5
var time = 0
var shadow = 5
var choosed = false
var dark = false
var bribed = false
var corrupt = false
var coins = 5

function timerIncrease(){

    time++


  setTimeout(timerIncrease, 1000)
}
setTimeout(timerIncrease, 1000)

function heroPay(){
 if(bribed == true && coins > 1){
   removeElement(monologue)
   monologue = mokeToxt("You bribed the Soldier(Corrupt) out of attacking you!", 0, 380, 30, "VT323", "red", 1)
   corrupt = true
   coins = coins - 2
   used = false
   time = 0
   bribed = false
 }
 else{
   removeElement(monologue)
   monologue = mokeToxt("You can't use this right now", 0, 380, 30, "VT323", "red", 1)
 }
}

function heroSlash(){
  if(dark == true && used == false){
    if(randomNumberGenerator(1,shadow) == 1){
      removeElement(monologue)
      monologue = mokeToxt("Fourthwind's attack missed", 0, 380, 30, "VT323", "red", 1)
      heroHealth = heroHealth - 1
      choosed = false
      time = 0
      used = true
    }
    if(randomNumberGenerator(1,shadow) != 1){
      corruptHealth = corruptHealth - 2
      removeElement(monologue)
      monologue = mokeToxt("Fourthwind's attack succeeded", 0, 380, 30, "VT323", "red", 1)
      used = true
      choosed = false
      time = 0
    }
  }
  else if(used == false){
    corruptHealth = corruptHealth - 2
    removeElement(monologue)
    monologue = mokeToxt("The Soldier(Corrupt) took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used = true
    choosed = false
    time = 0
  }
  else{
    removeElement(monologue)
    monologue = mokeToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut(){
  if(dark == true && used == false){
    if(randomNumberGenerator(1,shadow) == 1){
      removeElement(monologue)
      monologue = mokeToxt("Fourthwind's attack missed", 0, 380, 30, "VT323", "red", 1)
      heroHealth = heroHealth - 1
      time = 0
      used = true
    }
    if(choosed == false && randomNumberGenerator(1,shadow) != 1){
      corruptHealth = corruptHealth - 1
      removeElement(monologue)
      monologue = mokeToxt("The Soldier(Corrupt) took one damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      choosed = true
      time = 0
    }
    if(choosed == true && randomNumberGenerator(1,shadow) != 1){
      corruptHealth = corruptHealth - 1
      removeElement(monologue)
      monologue = mokeToxt("The Soldier(Corrupt) took one damage and woke up", 0, 380, 30, "VT323", "red", 1)
      choosed = false
      time = 0
      used = true
    }
  }
  else if(used == false && choosed == false){
    corruptHealth = corruptHealth - 1
    removeElement(monologue)
    monologue = mokeToxt("The Soldier(Corrupt) took 1 damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed = true
    time = 0
  }
  else if(used == false && choosed == true){
    corruptHealth = corruptHealth - 1
    removeElement(monologue)
    monologue = mokeToxt("The Soldier(Corrupt) took 1 damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed = false
    used = true
    time = 0
  }
  else{
    removeElement(monologue)
    monologue = mokeToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
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
function corruptChoose(){
  if(corrupt == false && used == true && time > 5){
    if(randomNumberGenerator(1,2) == 1 && bribed == false && time > 5 && used == true){
    removeElement(monologue)
    monologue = mokeToxt("Soldier(Corrupt) uses Bribed Slash, doing 3 damage, press the pay button to pay 2 coins to stop the attack", 0, 380, 25, "VT323", "red", 1)
    time = 0
    bribed = true
    console.log("whoa")
  }
  if(randomNumberGenerator(1,2) == 2 && bribed == false && time > 5 && used == true){
    //squireCopy()
    heroHealth = heroHealth - 1
    removeElement(monologue)
    monologue = mokeToxt("Soldier(Corrupt) uses Shadow and you  took 1 damage", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    shadow = shadow - 1
    dark = true
    //console.log("yo")
    time = 0
    used = false
    console.log("yo")
  }
  if(corrupt == false && bribed == true && used == true && time > 5){
    heroHealth = heroHealth - 3
    if(randomNumberGenerator(1,2) == 1 && time > 5 && used == true){
    removeElement(monologue)
    monologue = mokeToxt("Fourthwind took 3 damage", 0, 380, 25, "VT323", "red", 1)
    used = false
    time = 0
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

function heroDead(){
  if(heroHealth <= 0){
    removeElement(monologue)
    monologue = mokeToxt("The Hero is dead", 0, 380, 30, "VT323", "red", 1)
  }
}

function corruptDead(){
  if(corruptHealth <= 0){
    removeElement(monologue)
    monologue = mokeToxt("You beat the soldier!", 0, 380, 30, "VT323", "red", 1)
  }
}

function makeEverything(){
corruptChoose()
heroDead()
corruptDead()
requestAnimationFrame(makeEverything)
console.log(time)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything()
