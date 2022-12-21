function showHint(str) {
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("txtHint").innerHTML =
      this.responseText;
    }
   // xhttp.open("GET", "Names.php?q="+str);
    xhttp.open("GET", "http://localhost/Names.php?q="+str);
    xhttp.send();

    //Nece da posalje zahtev ka php jer nije na serveru.
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        document.getElementById("ready").innerHTML = "ReadyState OK. XMLHttpRequest.readyState: 4";
          if (xhttp.status === 200) {
             // OK
          } else {
             // not OK
             document.getElementById("not200").innerHTML = "Status is not 200. XMLHttpRequest.status: " + xhttp.status;
             // if 0
             //Make sure to place the files in your server (apache or tomcat whatever)
             // and then open it via http protocol in the browser.
            }
      }else{
        document.getElementById("ready").innerHTML = "It is not ready. Status is not 4";
      }
    };

    document.getElementById("js").innerHTML = "Copy from JS:   " +str;
}