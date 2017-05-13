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
var used2 = 0
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
var Jackswine3
var jackHealth2
var jackHealthBarred2
var jackHealthBar2
var once2 = false
var rally2 = 0
var Rally2 = false
var rallyTime2 = 0
var juan2 = true
var damage2
var reused2 = 0
var twice = 0
var fight = 0
var fight1 = 0
var bribed1 = false
var Twice = false
var twiceTime = 0

function timerIncrease2(){

    time2++


  setTimeout(timerIncrease2, 1000)
}
setTimeout(timerIncrease2, 1000)

function heroPay(){
 if(bribed == true || bribed1 == true && coins > 1){
   removeElement2(monologue2)
   monologue2 = mokeToxt("You bribed the Soldier(Corrupt) out of attacking you!", 0, 380, 30, "VT323", "red", 1)
   corrupt2 = true
   coins = coins - 2
   used2 = used2 - 1
   reused2 = reused2 - 1
   time2 = 0
   bribed = false
   bribed1 = false
 }
 else{
   removeElement2(monologue2)
   monologue2 = mokeToxt("You can't use this right now", 0, 380, 30, "VT323", "red", 1)
 }
}

function heroSlash2(){
  if(dark == true && used2 == 0){
    if(randomNumberGenerator2(1,shadow) == 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Fourthwind's attack missed", 0, 380, 30, "VT323", "red", 1)
      //heroHealth = heroHealth - 1
      choosed2 = false
      time2 = 0
      used2 = used2 + 1 + twice
    }
    if(randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 2
      corruptHealth = corruptHealth - rally2
      corruptHealth = corruptHealth - fight1
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("Fourthwind's attack succeeded", 0, 380, 30, "VT323", "red", 1)
      used2 = used2 + 1 + twice
      choosed2 = false
      time2 = 0
    }
  }
  else if(used2 == 0){
    corruptHealth = corruptHealth - 2
    corruptHealth = corruptHealth - rally2
    corruptHealth = corruptHealth - fight1
    damage2 = rally2 + 2 + fight1
    corruptHealthBar.setAttribute("width", corruptHealth*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Soldier(Corrupt) took "+damage2+" damage", 0, 380, 30, "VT323", "red", 1)
    used2 = used2 + 1 + twice
    choosed2 = false
    time2 = 0
  }
  else{
    removeElement2(monologue2)
    monologue2 = mokeToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut2(){
  if(dark == true && used2 == 0){
    if(randomNumberGenerator2(1,shadow) == 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Fourthwind's attack missed", 0, 380, 30, "VT323", "red", 1)
      //heroHealth = heroHealth - 1
      time2 = 0
      used2 = used2 + 1 + twice
    }
    if(choosed2 == false && randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 1
      corruptHealth = corruptHealth - rally2
      corruptHealth = corruptHealth - fight1
      damage2 = rally2 + 1 + fight1
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("The Soldier(Corrupt) took " +damage2+ " damage and is dazed", 0, 380, 30, "VT323", "red", 1)
      choosed2 = true
      time2 = 0
    }
    if(choosed2 == true && randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 1
      corruptHealth = corruptHealth - rally2
      corruptHealth = corruptHealth - fight1
      damage2 = rally2 + 1 + fight1
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("The Soldier(Corrupt) took "+damage2+" damage and woke up", 0, 380, 30, "VT323", "red", 1)
      choosed2 = false
      time2 = 0
      used2 = used2 + 1 + twice
    }
  }
  else if(used2 == 0 && choosed2 == false){
    corruptHealth = corruptHealth - 1
    corruptHealth = corruptHealth - rally2
    corruptHealth = corruptHealth - fight1
    damage2 = rally2 + 1 + fight1
    corruptHealthBar.setAttribute("width", corruptHealth*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Soldier(Corrupt) took "+damage2+" damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed2 = true
    time2 = 0
  }
  else if(used2 == 0 && choosed2 == true){
    corruptHealth = corruptHealth - 1
    corruptHealth = corruptHealth - rally2
    corruptHealth = corruptHealth - fight1
    damage2 = rally2 + 1 + fight1
    corruptHealthBar.setAttribute("width", corruptHealth*5)
    removeElement2(monologue2)
    monologue2 = mokeToxt("The Soldier(Corrupt) took "+damage2+" damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed2 = false
    used2 = used2 + 1 + twice
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
  if(corrupt2 == false && Jackswine == false && used2 != 0 && time2 > 5){
    if(randomNumberGenerator2(1,2) == 1 && bribed == false && time2 > 5 && used2 != 0){
    removeElement2(monologue2)
    monologue2 = mokeToxt("Soldier(Corrupt) uses Bribed Slash, doing 3 damage, press the pay button to pay 2 coins to stop the attack", 0, 380, 25, "VT323", "red", 1)
    time2 = 0
    bribed = true
    console.log("whoa")
  }
  if(randomNumberGenerator2(1,2) == 2 && bribed == false && time2 > 5 && used2 != 0){
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
    used2 = used2 - 1
    console.log("yo")
  }
  if(corrupt2 == false && bribed == true && used2 != 0 && time2 > 5){
    heroHealth2 = heroHealth2 - 3
    heroHealthBar2.setAttribute("width", heroHealth2*5)
    if(randomNumberGenerator2(1,2) == 1 && time2 > 5 && used2 == true){
    removeElement2(monologue2)
    monologue2 = mokeToxt("Fourthwind took 3 damage", 0, 380, 25, "VT323", "red", 1)
      bribed = false
    used2 = used2 -1
    time2 = 0
    console.log("whoa")
  }
}
}
if(corrupt2 == false && Jackswine == true && reused2 != 0 && used2 != 0 && time2 > 5){
  if(randomNumberGenerator2(1,6) == 1 && bribed == false && time2 > 5 && used2 != 0){
  removeElement2(monologue2)
  monologue2 = mokeToxt("Soldier(Corrupt) uses Bribed Slash, doing 3 damage, press the pay button to pay 2 coins to stop the attack", 0, 380, 25, "VT323", "red", 1)
  time2 = 0
  bribed = true
  console.log("whoa")
}
if(randomNumberGenerator2(1,6) == 2 && bribed1 == false && time2 > 5 && used2 != 0){
removeElement2(monologue2)
monologue2 = mokeToxt("Soldier(Corrupt) uses Bribed Slash, doing 3 damage, press the pay button to pay 2 coins to stop the attack", 0, 380, 25, "VT323", "red", 1)
time2 = 0
bribed1 = true
console.log("whoa")
}
if(randomNumberGenerator2(1,6) == 3 && bribed == false && bribed1 == false && time2 > 5 && used2 != 0){
  //squireCopy()
  heroHealth2 = heroHealth2 - 1
  heroHealthBar2.setAttribute("width", heroHealth2*5)
  removeElement2(monologue2)
  monologue2 = mokeToxt("Soldier(Corrupt) uses Shadow and Fourthwind took 1 damage", 0, 380, 30, "VT323", "red", 1)
  //time = 0
  shadow = shadow - 1
  dark = true
  //console.log("yo")
  time2 = 0
  used2 = used2 - 1
  reused2 = reused2 -1
  onceupon = false
  console.log("yo")
}
if(randomNumberGenerator2(1,6) == 4 && bribed == false && bribed1 == false && time2 > 5 && used2 != 0){
  //squireCopy()
  jackHealth2 = jackHealth2 - 1
  jackHealthBar2.setAttribute("width", jackHealth2*5)
  removeElement2(monologue2)
  monologue2 = mokeToxt("Soldier(Corrupt) uses Shadow and Jackswine took 1 damage", 0, 380, 30, "VT323", "red", 1)
  //time = 0
  shadow = shadow - 1
  dark = true
  //console.log("yo")
  time2 = 0
  used2 = used2 - 1
  reused2 = reused2 -1
  onceupon = false
  console.log("yo")
}
if(randomNumberGenerator2(1,6) == 5 && bribed == false && bribed1 == false && time2 > 5 && used2 != 0){
  //squireCopy()
  removeElement2(monologue2)
  monologue2 = mokeToxt("Soldier(Corrupt) uses Bring it on! giving him x2 attack and Jackswine gained +1 attack!", 0, 380, 23, "VT323", "red", 1)
  //time = 0
  //console.log("yo")
  twice = 1
  fight = 1
  Twice = true
  onceupon = false
  time2 = 0
  console.log("yo")
}
if(randomNumberGenerator2(1,6) == 6 && bribed == false && bribed1 == false && time2 > 5 && used2 != 0){
  //squireCopy()
  removeElement2(monologue2)
  monologue2 = mokeToxt("Soldier(Corrupt) uses Bring it on! giving him x2 attack and Fourthwind gained +1 attack!", 0, 380, 23, "VT323", "red", 1)
  //time = 0
  //console.log("yo")
  twice = 1
  fight1 = 1
  Twice = true
  onceupon = false
  time2 = 0
  console.log("yo")
}
if(corrupt2 == false && bribed == true && used2 != 0 && time2 > 5){
  heroHealth2 = heroHealth2 - 3
  heroHealthBar2.setAttribute("width", heroHealth2*5)
  if(randomNumberGenerator2(1,2) == 1 && time2 > 5 && used2 == true){
  removeElement2(monologue2)
  monologue2 = mokeToxt("Fourthwind took 3 damage", 0, 380, 25, "VT323", "red", 1)
    bribed = false
  used2 = used2 - 1
  reused2 = reused2 -1
  onceupon = false
  time2 = 0
  console.log("whoa")
}
}
if(corrupt2 == false && bribed1 == true && used2 != 0 && time2 > 5){
  jackHealth2 = jackHealth2 - 3
  jackHealthBar2.setAttribute("width", jackHealth2*5)
  if(randomNumberGenerator2(1,2) == 1 && time2 > 5 && used2 != 0){
  removeElement2(monologue2)
  monologue2 = mokeToxt("Jackswine took 3 damage", 0, 380, 25, "VT323", "red", 1)
    bribed = false
  used2 = used2 -1
  reused2 = reused2 -1
  onceupon = false
  time2 = 0
  console.log("whoa")
}
}
if(Twice == true && onceupon == false){
 twiceTime = twiceTime + 1
 onceupon = true
}
if(twiceTime == 6){
 twice = 0
 twiceTime = 0
}
if(twice == 0){
 Twice = false
 fight = 0
 fight1 = 0
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
    used2 = true
  }
}

function jackDead2(){
  if(jackHealth2 <= 0){
    removeElement1(monologue1)
    monologue1 = mokeToxt("Jackswine is dead", 0, 380, 30, "VT323", "red", 1)
    reused2 = true
  }
}

function corruptDead(){
  if(corruptHealth <= 0){
    removeElement2(monologue2)
    monologue2 = mokeToxt("You beat the soldier! You get the Hero power Bring it on!", 0, 380, 30, "VT323", "red", 1)
    makeLink2("RPG.html", "The Soldier has lost, you recieve 3 coins and a hero power")
    setHeroCookie("heropower", "true")
    coins = coins + 3
  }
  else{
    setHeroCookie("heropower", "false")
  }
}

function jackAttack2(){
  if(dark == true && reused2 == 0 && used2 == 0){
    if(randomNumberGenerator2(1,shadow) == 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Jackswine's attack missed", 0, 380, 30, "VT323", "red", 1)
      //heroHealth = heroHealth - 1
      once2 = false
      time2 = 0
      reused2 = reused2 + 1 + twice
    }
    if(randomNumberGenerator2(1,shadow) != 1){
      corruptHealth = corruptHealth - 5
      corruptHealth = corruptHealth - rally2
      corruptHealth = corruptHealth - fight
      corruptHealthBar.setAttribute("width", corruptHealth*5)
      removeElement2(monologue2)
      monologue2 = mokeToxt("Jackswine and Fourthwind's attack succeeded", 0, 380, 30, "VT323", "red", 1)
      used2 = used2 + 1 + twice
      reused2 = reused2 + 1 + twice
      once2 = false
      time2 = 0
    }
  }
  else if(reused2 == 0 && used2 == 0){
  corruptHealth = corruptHealth - 5
  corruptHealth = corruptHealth - rally2
  corruptHealth = corruptHealth - fight
    damage2 = 5 + rally2 + fight
  corruptHealthBar.setAttribute("width", corruptHealth*5)
  removeElement2(monologue2)
  monologue2 = mokeToxt("Fourthwind and Jackswine team up to do a whoping "+damage2+" damage!", 0, 380, 30, "VT323", "red", 1)
  time2 = 0
  once2 = false
  used2 = used2 + 1 + twice
  reused2 = reused2 + 1 + twice
  time2 = 0
}
 if(Rally2 == true && once2 == false){
  rallyTime2 = rallyTime2 + 1
  once2 = true
}
 if(rallyTime2 == 3){
  rally2 = rally2 - 1
  rallyTime2 = 0
}
 if(rally2 == 0){
  Rally2 = false
 }
}

function jackRally2(){
  if(dark == true && reused2 == 0){
    if(randomNumberGenerator2(1,shadow) == 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Jackswine's Rally failed", 0, 380, 30, "VT323", "red", 1)
      //heroHealth = heroHealth - 1
      once2 = false
      time2 = 0
      reused2 = reused2 + 1 + twice
    }
    if(randomNumberGenerator2(1,shadow) != 1){
      removeElement2(monologue2)
      monologue2 = mokeToxt("Jackswine's Rally succeeded", 0, 380, 30, "VT323", "red", 1)
      reused2 = reused2 + 1 + twice
      Rally2 = true
      once2 = false
      rally2 = rally2 + 1
      time2 = 0
    }
  }
else if(reused2 == 0 && dark == false){
  removeElement2(monologue2)
  monologue2 = mokeToxt("Jackswine Rallied him team increasing their attack by 1!", 0, 380, 25, "VT323", "red", 1)
  Rally2 = true
  once2 = false
  rally2 = rally2 + 1
  time2 = 0
  reused2 = reused2 + 1 + twice
  console.log("whoa")
}
 if(Rally2 == true && once2 == false){
  rallyTime2 = rallyTime2 + 1
  once2 = true
}
 if(rallyTime2 == 3){
  rally2 = rally2 - 1
  rallyTime2 = 0
}
 if(rally2 == 0){
  Rally2 = false
 }
}



function makeJack2(){
  if(Jackswine == true && juan2 == true){
  Jackswine3 = mokeImoge("images/Jackswine (1).gif", 90, 300, 50, 50, 1)
     jackHealth2 = 5
     jackHealthBarred2 = mokeRoct(95.5, 277.5, jackHealth2*5+5, 15, "grey", 1)
     jackHealthBar2 = mokeRoct(98, 280, jackHealth2*5, 10, "green", 1)
   //var button = document.createElement("button");
//button.innerHTML = "Dual Attack";
var element = document.createElement("input")
//Assign different attributes to the element.
element.setAttribute("type", "button")
 element.setAttribute("class", "btn-talk")
element.setAttribute("onclick", "jackAttack2()")
element.value = "Dual Attack";
 var body = document.getElementById("footer")
body.appendChild(element)
juan2 = false

var elements = document.createElement("input")
//Assign different attributes to the element.
elements.setAttribute("type", "button")
 elements.setAttribute("class", "btn-talk")
elements.setAttribute("onclick", "jackRally2()")
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


function makeEverything2(){
  checkCookie()
corruptChoose()
makeJack2()
heroDead2()
jackDead2()
corruptDead()
requestAnimationFrame(makeEverything2)
console.log(time2)
console.log(Jackswine)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything2()
