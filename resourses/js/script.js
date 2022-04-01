// navbar scroll event
window.addEventListener("scroll", function(){
    var nav = document.getElementById("mainNavbar");
    nav.classList.add("scrolled");
  })

// responsive canvas
canvas = document.getElementById('renderCanvas');
 
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;