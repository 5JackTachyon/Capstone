coins = 0
var Jackswine2

function jackCookie(Jackswine){
      var name = Jackswine + "=";
      var decodedCookie = decodeURIComponent(Jackswine2);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
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
