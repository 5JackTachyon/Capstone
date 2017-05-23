
var namespace = "http://www.w3.org/2000/svg"


function mokeRct(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var convos = document.getElementById("cnvs")
  convos.appendChild(rect)
  return rect
}

function mokeImge(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("cnvs")
  canvas.appendChild(image)
  return image
}

function mokeTxt(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvos = document.getElementById("cnvs")
  canvos.appendChild(text)
  return text
}

function removeElement0(element) {
  if (element.parentNode) {
      element.parentNode.removeChild(element);
  }
}

function randomNumberGenerator0(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}






function m0keCobble(){




  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 0, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 45, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 90, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 135, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 180, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 225, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 270, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 315, 50, 50, 1)
  }
  for(var i = 0; i < 19; i++){
    mokeImge("images/cobblestoned.jpg", -50 + i*45, 360, 50, 50, 1)
  }
}

m0keCobble()

var display = mokeImge("images/display.gif", 290, -25, 550, 550, 1)
var spear = mokeImge("images/Spear.gif", 300, 55, 100, 100, 1)
var sword = mokeImge("images/Sword (1).gif", 350, 50, 100, 100, 1)
var sheild = mokeImge("images/shield.gif", 400, 50, 100, 100, 1)
var armor = mokeImge("images/Armor.gif", 450, 50, 100, 100, 1)
var helmet = mokeImge("images/Helmet.gif", 500, 50, 100, 100, 1)
