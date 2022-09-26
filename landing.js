var iAmGlobal = "Dark";
function activate() {
    if ( document.getElementById("logo").classList.contains('Dark') ){
      document.documentElement.style.setProperty("--NavBarColour","#373b3e");
      document.documentElement.style.setProperty("--BackGroundColour","#47a3ff");
      document.documentElement.style.setProperty("--TextColour","#222222");
      document.documentElement.style.setProperty("--TextBoxColour","#31363a");
      document.documentElement.style.setProperty("--NavBarTextHoverColour","#000");
      

      document.getElementById("logo").classList.remove('Dark');
      document.getElementById("logo").classList.add('Light');
      console.log("Now Light")
      var iAmGlobal = "Light"

    }else if ( document.getElementById("logo").classList.contains('Light') ){
      var idk = document.documentElement.style.getPropertyValue("--BackGroundColour");
      document.documentElement.style.setProperty("--BackGroundColour","#23272a");
      document.getElementById("logo").classList.remove('Light');
      document.getElementById("logo").classList.add('Dark');
      console.log("Now Dark")
      var iAmGlobal = "Dark"

    }
  }
  for (let i=0; i<10; i++) {
    task(i);

 }
   
 function task(i) {
   setTimeout(function() {
       console.log(i);
       console.log(iAmGlobal)
   }, 2000 * i);
}


