var iphonemockup = document.getElementsByClassName("px__screen__frame")[0];
var macbookmockup = document.getElementsByClassName("display-frame")[0];
var macbookmockupfull = document.getElementsByClassName("mbp-mockup-wrapper")[0];

var iphoneiframes = document.querySelectorAll('.iphone-iframe');
var mbiframes = document.querySelectorAll(".mb-iframe");
var itemheights = document.querySelectorAll(".item-height");

var resizeTimer;
$(window).on('resize', function(e) {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(iframeresize

    // Run code here, resizing has "stopped"
            
  , 1000);

});

iframeresize();

window.addEventListener("click", iframeresize);
window.addEventListener("resize", iframeresize);

function consoletest(){
    console.log("działa");
}

function iframeresize(){
    //iphone part
    var iphonescale = iphonemockup.offsetWidth / 375;
    var mbscale = macbookmockup.offsetWidth / 1280;
    var mbheight = macbookmockupfull.offsetHeight;

    iphoneiframes.forEach(iphoneiframe => {
        console.log(iphonemockup.offsetWidth)
        iphoneiframe.style.transform = "scale(" + iphonescale + ")";
    })

    mbiframes.forEach(mbiframe => {
        mbiframe.style.transform = "scale(" + mbscale + ")";
    })

    itemheights.forEach(itemheight => {
        itemheight.style.height = mbheight + "px";
    })


    //macbook part
}