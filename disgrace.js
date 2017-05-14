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
var hero1 = mokeImage("images/hero.gif", 150, 300, 50, 50, 1)
var disgrace = mokeImage("images/Disgraced.gif", 550, 300, 50, 50, 1)
var speech1 = mokeRect( 0, 350, 800, 50, "grey", 1)
var monologue1 = mokeText("Press the slash/uppercut button to attack", 0, 380, 30, "VT323", "red", 1)
var used1 = false
var reused1 = false
//var choosed = 0
var disgraceHealth = 5
var disgraceHealthBarred = mokeRect(555.5, 277.5, disgraceHealth*5+5, 15, "grey", 1)
var disgraceHealthBar = mokeRect(558, 280, disgraceHealth*5, 10, "red", 1)
var heroHealth1 = 5
var heroHealthBarred1 = mokeRect(155.5, 277.5, heroHealth1*5+5, 15, "grey", 1)
var heroHealthBar1 = mokeRect(158, 280, heroHealth1*5, 10, "green", 1)
var Jackswine2
var jackHealth1
var jackHealthBarred1
var jackHealthBar1
var once1 = false
var rally1 = 0
var Rally1 = false
var rallyTime1 = 0
var time1 = 0
var drunk = 5
var choosed1 = false
var bottle = false
var bottle1 = false
var block = false
var juan = true
var juan1 = true
var damage
var twice1 = 0
var fight2 = 0
var juan0 = true
var chosen = false

//var button
//var body

function timerIncrease1(){

    time1++

  setTimeout(timerIncrease1, 1000)
}
setTimeout(timerIncrease1, 1000)



function heroSlash1(){
  if(bottle == true && used1 == false){
    if(randomNumberGenerator1(1,2) == 2){
      removeElement1(monologue1)
      monologue1 = mokeText("Fourthwind is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      heroHealth1 = heroHealth1 - 1
      heroHealthBar1.setAttribute("width", heroHealth1*5)
      time1 = 0
      choosed1 = false
      if(chosen == true){
          used1 = true
          twice1++
          chosen = false
      }
      if(twice1 == 1){
        chosen = true
      }
      if(twice1 == 0){
        used1 = true
      }
    }
    if(randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 2
      disgraceHealth = disgraceHealth - rally1
      damage = rally1 + 2
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("The Soldier(disgraced) took " + damage + " damage", 0, 380, 30, "VT323", "red", 1)
      choosed1 = false
      time1 = 0
      if(chosen == true){
          used1 = true
          twice1++
          chosen = false
      }
      if(twice1 == 1){
        chosen = true
      }
      if(twice1 == 0){
        used1 = true
      }
    }
  }
  else if(block == true && used1 == false){
    removeElement1(monologue1)
    monologue1 = mokeText("The attack was blocked!", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    choosed1 = false
    block = false
    if(chosen == true){
        used1 = true
        twice1++
        chosen = false
    }
    if(twice1 == 1){
      chosen = true
    }
    if(twice1 == 0){
      used1 = true
    }
  }
  else if(used1 == false){
    disgraceHealth = disgraceHealth - 2
    disgraceHealth = disgraceHealth - rally1
    damage = rally1 + 2
    disgraceHealthBar.setAttribute("width", disgraceHealth*5)
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier(disgraced) took " + damage + " damage", 0, 380, 30, "VT323", "red", 1)
    choosed1 = false
    time1 = 0
    if(chosen == true){
        used1 = true
        twice1++
        chosen = false
    }
    if(twice1 == 1){
      chosen = true
    }
    if(twice1 == 0){
      used1 = true
    }
  }
  else{
    removeElement1(monologue1)
    monologue1 = mokeText("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut1(){
  if(bottle == true && used1 == false){
    if(randomNumberGenerator1(1,2) == 2){
      removeElement1(monologue1)
      monologue1 = mokeText("Fourthwind is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      heroHealth1 = heroHealth1 - 1
      heroHealthBar1.setAttribute("width", heroHealth1*5)
      time1 = 0
      if(chosen == true){
          used1 = true
          twice1++
          chosen = false
      }
      if(twice1 == 1){
        chosen = true
      }
      if(twice1 == 0){
        used1 = true
      }
    }
    if(choosed1 == false && randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 1
      disgraceHealth = disgraceHealth - rally1
      damage = rally1 + 1
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("The Soldier(disgraced) took " + damage + " damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      time1 = 0
      choosed1 = true

    }
    if(choosed1 == true && randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 1
      disgraceHealth = disgraceHealth - rally1
      damage = 1 + rally1
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("The Soldier(disgraced) took " + damage + " damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      choosed1 = false
      time1 = 0
      if(chosen == true){
          used1 = true
          twice1++
          chosen = false
      }
      if(twice1 == 1){
        chosen = true
      }
      if(twice1 == 0){
        used1 = true
      }
    }
  }
  else if(block == true && used1 == false){
    removeElement1(monologue1)
    monologue1 = mokeText("The attack was blocked!", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    if(chosen == true){
        used1 = true
        twice1++
        chosen = false
    }
    if(twice1 == 1){
      chosen = true
    }
    if(twice1 == 0){
      used1 = true
    }
  }
  else if(used1 == false && choosed1 == false){
    disgraceHealth = disgraceHealth - 1
    disgraceHealth = disgraceHealth - rally1
    damage = 1 + rally1
    disgraceHealthBar.setAttribute("width", disgraceHealth*5)
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier(disgraced) took " + damage + " damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed1 = true
    time1 = 0
  }
  else if(used1 == false && choosed1 == true){
    disgraceHealth = disgraceHealth - 1
    disgraceHealth = disgraceHealth - rally1
    damage = 1 + rally1
    disgraceHealthBar.setAttribute("width", disgraceHealth*5)
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier(disgraced) took " + damage + " damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed1 = false
    if(chosen == true){
        used1 = true
        twice1++
        chosen = false
    }
    if(twice1 == 1){
      chosen = true
    }
    if(twice1 == 0){
      used1 = true
    }
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

var juice1 = randomNumberGenerator1(1,2)
function disgraceChoose(){
  if(used1 == true && Jackswine == false && time1 > 5){
    if(randomNumberGenerator1(1,2) == 1 && time1 > 5 && used1 == true){
    heroHealth1 = heroHealth1 - 1
    heroHealth1 = heroHealth1 - fight2
    damage1 = 1 + fight2
      heroHealthBar1.setAttribute("width", heroHealth1*5)
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Bottle Throw, doing "+damage1+" damage, Fourthwind is confused", 0, 380, 25, "VT323", "red", 1)
    time1 = 0
    used1 = false
    bottle = true
    console.log("whoa")
    if(twice1 != 0){
      twice1--
    }
  }
  if(randomNumberGenerator1(1,2) == 2 && time1 > 5 && used1 == true){
    //squireCopy()
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    drunk = drunk - 1
    //console.log("yo")
    if(randomNumberGenerator1(1,drunk) == 1 && time1 > 5){
      removeElement1(monologue1)
      monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow but the attack failed", 0, 380, 30, "VT323", "red", 1)
      time1 = 0
      used1 = false
      if(twice1 != 0){
        twice1--
      }
    }
    if(randomNumberGenerator1(1,drunk) != 1 && time1 > 5){
      heroHealth1 = heroHealth1 - 3
      heroHealth1 = heroHealth1 - fight2
      damage1 = 3 + fight2
        heroHealthBar1.setAttribute("width", heroHealth1*5)
      removeElement1(monologue1)
      monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow and it does "+damage1+" damage!!", 0, 380, 30, "VT323", "red", 1)
      time1 = 0
      used1 = false
    }
    used1 = false
    time1 = 0
    console.log("yo")
    if(twice1 != 0){
      twice1--
    }
  }
}
if(used1 == true && Jackswine == true && time1 > 5){
  if(randomNumberGenerator1(1,5) == 1 && time1 > 5 && reused1 == true && used1 == true){
  heroHealth1 = heroHealth1 - 1
  heroHealth1 = heroHealth1 - fight2
  damage1 = 1 + fight2
    heroHealthBar1.setAttribute("width", heroHealth1*5)
  removeElement1(monologue1)
  monologue1 = mokeText("Soldier(disgraced) uses Bottle Throw, doing "+damage1+" damage, Fourthwind is confused", 0, 380, 25, "VT323", "red", 1)
  time1 = 0
  used1 = false
  reused1 = false
  bottle = true
  console.log("whoa")
  if(twice1 != 0){
    twice1--
  }
}
if(randomNumberGenerator1(1,5) == 2 && time1 > 5 && reused1 == true && used1 == true){
jackHealth1 = jackHealth1 - 1
jackHealth1 = jackHealth1 - fight2
damage1 = 1 + fight2
  jackHealthBar1.setAttribute("width", jackHealth1*5)
removeElement1(monologue1)
monologue1 = mokeText("Soldier(disgraced) uses Bottle Throw, doing "+damage1+" damage, Jackswine is confused", 0, 380, 25, "VT323", "red", 1)
time1 = 0
used1 = false
reused1 = false
bottle1 = true
console.log("whoa")
if(twice1 != 0){
  twice1--
}
}
if(randomNumberGenerator1(1,5) == 3 && time1 > 5 && reused1 == true && used1 == true){
  //squireCopy()
  removeElement1(monologue1)
  monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow", 0, 380, 30, "VT323", "red", 1)
  //time = 0
  drunk = drunk - 1
  //console.log("yo")
  if(randomNumberGenerator1(1,drunk) == 1 && time1 > 5){
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow but the attack failed", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    reused1 = false
    used1 = false

  }
  if(randomNumberGenerator1(1,drunk) != 1 && time1 > 5){
    heroHealth1 = heroHealth1 - 3
    heroHealth1 = heroHealth1 - fight2
    damage1 = 3 + fight2
      heroHealthBar1.setAttribute("width", heroHealth1*5)
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow and it does "+damage1+" damage to Fourthwind!!", 0, 380, 25, "VT323", "red", 1)
    time1 = 0
    reused1 = false
    used1 = false
  }
  reused1 = false
  used1 = false
  time1 = 0
  console.log("yo")
  if(twice1 != 0){
    twice1--
  }
}
if(randomNumberGenerator1(1,5) == 4 && time1 > 5 && reused1 == true && used1 == true){
  //squireCopy()
  removeElement1(monologue1)
  monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow", 0, 380, 30, "VT323", "red", 1)
  //time = 0
  drunk = drunk - 1
  //console.log("yo")
  if(randomNumberGenerator1(1,drunk) == 1 && time1 > 5){
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow but the attack failed", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    reused1 = false
    used = false
    if(twice1 != 0){
      twice1--
    }
  }
  if(randomNumberGenerator1(1,drunk) != 1 && time1 > 5){
    jackHealth1 = jackHealth1 - 3
    jackHealth1 = jackHealth1 - fight2
    damage1 = 1 + fight2
      heroHealthBar1.setAttribute("width", heroHealth1*5)
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow and it does "+damage1+" damage to Jackswine!!", 0, 380, 25, "VT323", "red", 1)
    time1 = 0
    reused1 = false
    used = false
  }
  reused1 = false
  used1 = false
  time1 = 0
  console.log("yo")
  if(twice1 != 0){
    twice1--
  }
}
if(randomNumberGenerator1(1,5) == 5 && time1 > 5 && reused1 == true && used1 == true){
removeElement1(monologue1)
monologue1 = mokeText("Soldier(disgraced) uses Block", 0, 380, 25, "VT323", "red", 1)
time1 = 0
used1 = false
reused1 = false
block = true
console.log("whoa")
if(twice1 != 0){
  twice1--
}
}
}
}



function disgracedAttack(){
  if(randomNumberGenerator1(1,drunk) == 1 && time1 > 5){
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow but the attack failed", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    used1 = false
    reused = false
  }
  if(randomNumberGenerator1(1,drunk) != 1 && time1 > 5){
    heroHealth1 = heroHealth1 - 3
      heroHealthBar1.setAttribute("width", heroHealth1*5)
    removeElement1(monologue1)
    monologue1 = mokeText("Soldier(disgraced) uses Staggering Blow and it does 3 damage!!", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    used1 = false
    reused = false
  }
}

function makeLink1(html, text) {
  if (!linkAdded1) {
  var mydiv = document.getElementById("spoke");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',html);
  aTag.innerHTML = text;
  mydiv.appendChild(aTag);
  linkAdded1 = true
  //console.log(linkAdded1)

}
}

var linkAdded1 = false

function heroDead1(){
  if(heroHealth1 <= 0){
    removeElement1(monologue1)
    monologue1 = mokeText("The Hero is dead", 0, 380, 30, "VT323", "red", 1)
    used1 = true
  }
}

function jackDead1(){
  if(jackHealth1 <= 0){
    removeElement1(monologue1)
    monologue1 = mokeText("Jackswine is dead", 0, 380, 30, "VT323", "red", 1)
    reused1 = true
  }
}

function disgraceDead(){
  if(disgraceHealth <= 0){
    removeElement1(monologue1)
    monologue1 = mokeText("The Soldier has lost, you recieve 3 coins", 0, 380, 30, "VT323", "red", 1)
    makeLink1("RPG.html", "The Soldier has lost, you recieve 3 coins")
    coins = coins + 3
  }
}

function jackAttack1(){
  if(bottle1 == true && reused1 == false && used1 == false){
    if(randomNumberGenerator1(1,2) == 2){
      removeElement1(monologue1)
      monologue1 = mokeText("Jackswine is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      jackHealth1 = jackHealth1 - 1
      jackHealthBar1.setAttribute("width", jackHealth1*5)
      time1 = 0
      reused1 = true
    }
    if(randomNumberGenerator1(1,2) == 1){
      disgraceHealth = disgraceHealth - 5
      disgraceHealth = disgraceHealth - rally1
        damage = 5 + rally1
      disgraceHealthBar.setAttribute("width", disgraceHealth*5)
      removeElement1(monologue1)
      monologue1 = mokeText("Fourthwind and Jackswine team up to do a whoping " + damage + " damage!", 0, 380, 30, "VT323", "red", 1)
      time1 = 0
      reused1 = true
      used1 = true
    }
  }
  else if(reused1 == false && used1 == false && block == true){
    removeElement1(monologue1)
    monologue1 = mokeText("The attack was blocked!", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    reused1 = true
    block = false
  }
  else if(reused1 == false && used1 == false){
  disgraceHealth = disgraceHealth - 5
  disgraceHealth = disgraceHealth - rally1
    damage = 5 + rally1
  disgraceHealthBar.setAttribute("width", disgraceHealth*5)
  removeElement1(monologue1)
  monologue1 = mokeText("Fourthwind and Jackswine team up to do a whoping "+damage+" damage!", 0, 380, 30, "VT323", "red", 1)
  time1 = 0
  reused1 = true
  used1 = true
  time1 = 0
}
 if(Rally1 == true && once1 == false){
  rallyTime1 = rallyTime1 + 1
  once1 = true
}
 if(rallyTime1 == 3){
  rally1 = rally1 - 1
  rallyTime1 = 0
}
 if(rally1 == 0){
  Rally1 = false
 }
}

function jackRally1(){
  if(bottle == true && reused1 == false){
    if(randomNumberGenerator1(1,2) == 2){
      removeElement1(monologue1)
      monologue1 = mokeText("Jackswine is confused and hurts himself", 0, 380, 30, "VT323", "red", 1)
      jackHealth1 = jackHealth1 - 1
      jackHealthBar1.setAttribute("width", jackHealth1*5)
      time1 = 0
      reused1 = true
    }
    if(randomNumberGenerator1(1,2) == 1){
      removeElement1(monologue1)
      monologue1 = mokeText("Jackswine Rallied him team increasing their attack by 1!", 0, 380, 25, "VT323", "red", 1)
      Rally1 = true
      once1 = false
      rally1 = rally1 + 1
      time1 = 0
      reused1 = true
      console.log("whoa")
  }
}
  else if(reused1 == false && block == true){
    removeElement1(monologue1)
    monologue1 = mokeText("The attack was blocked!", 0, 380, 30, "VT323", "red", 1)
    time1 = 0
    reused1 = true
    block = false
  }
  else if(reused1 == false){
  removeElement1(monologue1)
  monologue1 = mokeText("Jackswine Rallied him team increasing their attack by 1!", 0, 380, 25, "VT323", "red", 1)
  Rally1 = true
  once1 = false
  rally1 = rally1 + 1
  time1 = 0
  reused1 = true
  console.log("whoa")
}
 if(Rally1 == true && once1 == false){
  rallyTime1 = rallyTime1 + 1
  once1 = true
}
 if(rallyTime1 == 3){
  rally1 = rally1 - 1
  rallyTime1 = 0
}
 if(rally1 == 0){
  Rally1 = false
 }
}

function heroPower(){
  if(used1 == false && juan0 == true){
    //squireCopy()
    removeElement1(monologue1)
    monologue1 = mokeText("Fourthwind uses Bring it on! giving him x2 attack and the Soldier gained +1 attack!", 0, 380, 23, "VT323", "red", 1)
    //time = 0
    //console.log("yo")
    twice1 = 1
    fight2 = 1
    juan0 = false
    time1 = 0
    console.log("yo")
  }
}

function makeHeroPower(){
  if(heropower == true && juan1 == true){
    //var button = document.createElement("button");
 //button.innerHTML = "Dual Attack";
 var element = document.createElement("input")
 //Assign different attributes to the element.
 element.setAttribute("type", "button")
  element.setAttribute("class", "btn-talk")
 element.setAttribute("onclick", "heroPower()")
 element.value = "Bring In On!";
  var body = document.getElementById("footer")
 body.appendChild(element)
    juan1 = false
  }
}


function makeJack(){
  if(Jackswine == true && juan == true){
  Jackswine2 = mokeImage("images/Jackswine (1).gif", 90, 300, 50, 50, 1)
     jackHealth1 = 5
     jackHealthBarred1 = mokeRect(95.5, 277.5, jackHealth1*5+5, 15, "grey", 1)
     jackHealthBar1 = mokeRect(98, 280, jackHealth1*5, 10, "green", 1)
   //var button = document.createElement("button");
//button.innerHTML = "Dual Attack";
var element = document.createElement("input")
//Assign different attributes to the element.
element.setAttribute("type", "button")
 element.setAttribute("class", "btn-talk")
element.setAttribute("onclick", "jackAttack1()")
element.value = "Dual Attack";
 var body = document.getElementById("footer")
body.appendChild(element)
juan = false

var elements = document.createElement("input")
//Assign different attributes to the element.
elements.setAttribute("type", "button")
 elements.setAttribute("class", "btn-talk")
elements.setAttribute("onclick", "jackRally1()")
elements.value = "Rally";
 var bodys = document.getElementById("footer")
bodys.appendChild(elements)
//Create an input type dynamically.
       //var element = document.createElement("input");
       //Assign different attributes to the element.
       //element.setAttribute("type", "button");
      // element.setAttribute("class", "btn-talk");
       //element.setAttribute("onclick", "jackAttack1()");

      // var footer = document.getElementById("spoke");
       //Append the element in page (in span).
       //document.getElementById("testing").innerHTML = "<button class='btn-talk' onclick='jackAttack1()'>Dual Attack</button>";
 //document.getElementById("croakeo").innerHTML = "<button id='croak' class='btn-talk' onclick='jackRally1()'>Rally</button>";
}
}



function thatsTrue(){
  if(Jackswine == false){
    Jackswine = true
  }
}

//#talkybutton{
//  margin-bottom: -250px;
//  margin-left: -835px;
//}

//#talkbutton{
  //margin-left: 835px;
//}

//#talkybutton{
  //margin-left: -835;
  //margin-bottom: -250px;

//}

function makeEverything1(){
checkCookie()
checkHeroCookie()
//thatsTrue()
disgraceChoose()
makeJack()
makeHeroPower()
heroDead1()
jackDead1()
disgraceDead()
requestAnimationFrame(makeEverything1)
console.log(time1)
//console.log(juan)
console.log(heropower)
//console.log(button)
console.log(coins)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything1()
