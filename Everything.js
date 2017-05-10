coins = 0
var Jackswine = false

function setCookie(cname, cvalue) {
    var d = new Date();
    //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var truefalse = getCookie("Jackswine");
  //  if (truefalse != "") {
        //alert("Welcome again " + user);
        if(truefalse == "true"){
        Jackswine = true
      }
    //}
    else {
        //user = prompt("Please enter your name:", "");
        //if (user != "" && user != null) {
        setCookie("Jackswine", "false");
        Jackswine = false
    }
    console.log(truefalse)
}

function setCoinCookie(cname, cvalue) {
    var d = new Date();
    //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCoinCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCoinCookie() {
    var truefalse = getCookie("Coins");
  //  if (truefalse != "") {
        //alert("Welcome again " + user);
        if(truefalse >= 0){
        coins = truefalse
      }
    //}
    else {
        //user = prompt("Please enter your name:", "");
        //if (user != "" && user != null) {
        setCookie("Coins", "0");
        coins = 0
    }
    console.log(truefalse)
}
