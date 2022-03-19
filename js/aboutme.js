var aboutmecontent = document.getElementsByClassName("content-container")[0];
var mouse = document.getElementById("mouse");
var aboutme = document.getElementsByClassName('aboutme')[0];

// Get the offset position of the navbar
var offset = mouse.offsetTop;
aboutmeheight = aboutmecontent.offsetHeight + parseInt(aboutme.style.top , 10)

window.addEventListener("click", overflow)
function overflow(){
    aboutmeheight = aboutmecontent.offsetHeight + parseInt(aboutme.style.top , 10)

if (parseInt(aboutmeheight, 10) > window.innerHeight){
    window.addEventListener("scroll", mousehide);
}
else{
    mouse.style.opacity = "0";
}
}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mousehide() {
  if (window.pageYOffset > offset) {
    mouse.style.opacity = "0";
  } else {
    mouse.style.opacity = "1";
  }
}