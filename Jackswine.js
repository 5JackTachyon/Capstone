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

function removeElement3(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerator3(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

var chicken1 = mkImoge("images/morechicken.gif", 0, 100, 300, 300, 1)
var chkn = mkImoge("images/chkn.gif", 0, 250, 100, 100, 1)
var chicken12 = mkImoge("images/morechicken.gif", 0, -100, 300, 300, 1)
var chicken2 = mkImoge("images/morechicken.gif", 300, 100, 300, 300, 1)
var chicken22 = mkImoge("images/morechicken.gif", 300, -100, 300, 300, 1)
var chicken3 = mkImoge("images/morechicken.gif", 600, 100, 300, 300, 1)
var chicken32 = mkImoge("images/morechicken.gif", 600, -100, 300, 300, 1)
var Barn3 = mkImoge("images/Barn.png", 175, 150, 400, 400, 1)
var hero3 = mkImoge("images/hero.gif", 150, 300, 50, 50, 1)
var Jackswine3 = mkImoge("images/Jackswine (1).gif", 550, 300, 50, 50, 1)
var speech3 = mkRoct( 0, 350, 800, 50, "grey", 1)
var monologue3 = mkToxt("Press the slash/uppercut button to attack", 0, 380, 30, "VT323", "red", 1)
var used3 = false
//var choosed = 0
var jackHealth = 5
var jackHealthBarred = mkRoct(555.5, 277.5, jackHealth*5+5, 15, "grey", 1)
var jackHealthBar = mkRoct(558, 280, jackHealth*5, 10, "red", 1)
var heroHealth3 = 5
var heroHealthBarred3 = mkRoct(155.5, 277.5, heroHealth3*5+5, 15, "grey", 1)
var heroHealthBar3 = mkRoct(158, 280, heroHealth3*5, 10, "green", 1)
var time3 = 0
//var Jackswine2
var shadow = 5
var choosed3 = false
var chosed3 = false
var rally = 0
var Rally = false
var rallyTime = 0

function timerIncrease3(){

    time3++


  setTimeout(timerIncrease3, 1000)
}
setTimeout(timerIncrease3, 1000)



function heroSlash3(){
   if(used3 == false){
    jackHealth = jackHealth - 2
    jackHealthBar.setAttribute("width", jackHealth*5)
    removeElement3(monologue3)
    monologue3 = mkToxt("Jackswine took 2 damage", 0, 380, 30, "VT323", "red", 1)
    used3 = true
    choosed3 = false
    time3 = 0
  }
  else{
    removeElement3(monologue3)
    monologue3 = mkToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
  }
}


function heroUppercut3(){
   if(used3 == false && choosed3 == false){
     jackHealth = jackHealth - 1
     jackHealthBar.setAttribute("width", jackHealth*5)
    removeElement3(monologue3)
    monologue3 = mkToxt("The Soldier(Corrupt) took 1 damage and is dazed and cannot attack!", 0, 380, 30, "VT323", "red", 1)
    choosed3 = true
    time3 = 0
  }
  else if(used3 == false && choosed3 == true){
    jackHealth = jackHealth - 1
    jackHealthBar.setAttribute("width", jackHealth*5)
    removeElement3(monologue3)
    monologue3 = mkToxt("The Soldier(Corrupt) took 1 damage and woke up!", 0, 380, 30, "VT323", "red", 1)
    choosed3 = false
    used3 = true
    time3 = 0
  }
  else{
    removeElement3(monologue3)
    monologue3 = mkToxt("It isn't your turn to attack", 0, 380, 30, "VT323", "red", 1)
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

var juice3 = randomNumberGenerator3(1,3)
function jackChoose(){
    if(randomNumberGenerator3(1,3) == 1 && time3 > 5 && used3 == true){
      heroHealth3 = heroHealth3 - 2
      heroHealth3 = heroHealth3 - rally
      heroHealthBar3.setAttribute("width", heroHealth3*5)
    removeElement3(monologue3)
    monologue3 = mkToxt("Jackswine uses Copy, stealing your move: Slash", 0, 380, 25, "VT323", "red", 1)
    time3 = 0
    once3 = false
    chosed3 = false
    used3 = false
    console.log("whoa")
  }
  if(randomNumberGenerator3(1,3) == 2 && time3 > 5 && used3 == true){
    //squireCopy()
    heroHealth3 = heroHealth3 - 1
    heroHealth3 = heroHealth3 - rally
    heroHealthBar3.setAttribute("width", heroHealth3*5)
    removeElement3(monologue3)
    monologue3 = mkToxt("Jackswine uses Copy, stealing your move: Uppercut, you're out cold!", 0, 380, 25, "VT323", "red", 1)
    //time = 0
    //console.log("yo")
    time3 = 0
    once3 = false
    chosed3 = true
    console.log("yo")
  }
  if(randomNumberGenerator3(1,3) == 2 && chosed3 == true && time3 > 5 && used3 == true){
    //squireCopy()
    heroHealth3 = heroHealth3 - 1
    heroHealth3 = heroHealth3 - rally
    heroHealthBar3.setAttribute("width", heroHealth3*5)
    removeElement3(monologue3)
    monologue3 = mkToxt("Jackswine uses Copy, stealing your move: Uppercut, you woke up!", 0, 380, 30, "VT323", "red", 1)
    //time = 0
    //console.log("yo")
    time3 = 0
    chosed3 = false
    once3 = false
    used3 = false
    console.log("yo")
  }
  if(randomNumberGenerator3(1,3) >= 3 && time3 > 5 && used3 == true){
  removeElement3(monologue3)
  monologue3 = mkToxt("Jackswine uses Rally, he gains +1 attack!", 0, 380, 25, "VT323", "red", 1)
  Rally = true
  once3 = false
  rally = rally + 1
  time3 = 0
  chosed3 = false
  used3 = false
  console.log("whoa")
}
if(Rally == true && once3 == false){
  rallyTime = rallyTime + 1
  once3 = true
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

function makeLink3(html, text) {
  if (!linkAdded3) {
  var mydiv = document.getElementById("speck");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',html);
  aTag.innerHTML = text;
  mydiv.appendChild(aTag);
  linkAdded3 = true
  console.log(linkAdded3)

}
}

var linkAdded3 = false


function heroDead3(){
  if(heroHealth3 <= 0){
    removeElement3(monologue3)
    monologue3 = mkToxt("Fourthwind lost!", 0, 380, 30, "VT323", "red", 1)
  }
}

function jackDead(){
  if(jackHealth <= 0){
    removeElement3(monologue3)
    monologue3 = mkToxt("You beat Jackswine!", 0, 380, 30, "VT323", "red", 1)
    makeLink3("RPG.html", "Jackswine joins your team")
    coins = coins + 3
    document.cookie = "Jackswine = true; path=/"
    //Jackswine2 = document.cookie
  }
}


function makeEverything3(){
jackChoose()
heroDead3()
jackDead()
requestAnimationFrame(makeEverything3)
console.log(time3)
console.log(Jackswine2)
//console.log(squireHealth)
//console.log(heroHealth)
}
makeEverything3()
