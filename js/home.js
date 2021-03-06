window.addEventListener("load", screensize)
window.addEventListener("resize", reload)
window.addEventListener("orientationchange", reloadtrigger)

function screensize(){
    if (window.innerWidth >= 600){
        var navbarbutton = document.getElementsByClassName('navbar-button');
        var items = document.querySelectorAll(".item")
        
        for (i = 0; i < navbarbutton.length; i++) {   
            navbarbutton[i].addEventListener("click", function() {
                document.querySelectorAll('.navbar-active').forEach((item) => {
                    b = item.children[0].id;
                    item.classList.remove("navbar-active");
                    })
                this.parentElement.classList.add("navbar-active");
                show(this.id, b)
                
            })
        }
        
        function show(a, b){
            previousIndex = parseInt(document.getElementById(b).getAttribute( "order" ));
            currentIndex = parseInt(document.getElementById(a).getAttribute( "order" ));
        
            if (previousIndex > currentIndex){
                // items go to right
                document.getElementsByClassName(b)[0].style.left = "0";
                document.querySelectorAll('.hidden').forEach((item) => {
                    item.style.left = "-100vw";
                    })
                    
                document.getElementsByClassName(a)[0].classList.remove('hidden');
                window.setTimeout(() => {
                    document.getElementsByClassName(b)[0].style.left = "100vw";
                    document.getElementsByClassName(a)[0].style.left = "0";
                    }, 1);
                window.setTimeout(() => {
                    document.getElementsByClassName(b)[0].classList.remove('shown');
                    document.getElementsByClassName(a)[0].classList.add('shown');
                    },2);
                items.forEach(item => {
                    item.style.display = "none";
                })
                contentheight(a);
                
            }
            else{
                // items go to left
                document.getElementsByClassName(b)[0].style.left = "0";
                document.querySelectorAll('.hidden').forEach((item) => {
                    item.style.left = "100vw";
                    })
                    
                document.getElementsByClassName(a)[0].classList.remove('hidden');
                window.setTimeout(() => {
                    document.getElementsByClassName(a)[0].style.left = "0";
                    document.getElementsByClassName(b)[0].style.left = "-100vw";
                    }, 1);
                
                window.setTimeout(() => {
                    document.getElementsByClassName(b)[0].classList.remove('shown');
                    document.getElementsByClassName(a)[0].classList.add('shown');
                    },2);
                items.forEach(item => {
                    item.style.display = "none";
                })
                contentheight(a);
            }
        }
        
        function contentheight(a){
            if (a === "home"){
                document.body.style.overflow = "hidden";
            }
            else if (a === "projects"){
                window.setTimeout(() => {
                    items.forEach(item => {
                        item.style.display = "block";
                    })
                }, 600)
                var menuTop = document.getElementById('menu').offsetTop;
                var menuHeight = document.getElementById('menu').offsetHeight;
                gora = menuTop + menuHeight;
                document.getElementsByClassName(a)[0].style.top = gora + "px";
                document.body.style.overflow = "auto";
                document.body.style.overflowX = "hidden";
            }
            else{
                var menuTop = document.getElementById('menu').offsetTop;
                var menuHeight = document.getElementById('menu').offsetHeight;
                gora = menuTop + menuHeight;
                document.getElementsByClassName(a)[0].style.top = gora + "px";
                document.body.style.overflow = "auto";
                document.body.style.overflowX = "hidden";
            }
        } 
    }
    else{
        let mouse = document.getElementById('mouse');
        mouse.classList.add('hidden-m')
    
        var navbarbutton = document.getElementsByClassName('navbar-button');
        var items = document.querySelectorAll(".item")
        
        for (i = 0; i < navbarbutton.length; i++) {   
            navbarbutton[i].addEventListener("click", function() {
                document.querySelectorAll('.navbar-active').forEach((item) => {
                    b = item.children[0].id;
                    item.classList.remove("navbar-active");
                    })
                this.parentElement.classList.add("navbar-active");
                scrollm(this.id)
            })
        }
    
        function scrollm(c){
            let offset = document.getElementsByClassName(c)[0].offsetTop;
            let menu = document.getElementsByClassName('menu')[0].offsetHeight;
            let vw = window.innerWidth / 100;
            let offsetfinal = menu + (vw * 2)
            offsetfinal = offset - offsetfinal
            window.scroll(0, offsetfinal);
        }
        
        window.addEventListener("scroll", changeactive);
    
        function changeactive(){
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            currentScroll = currentScroll + (window.innerHeight * 0.5);
            if (currentScroll <= document.getElementsByClassName('home')[0].offsetTop + document.getElementsByClassName('home')[0].offsetHeight){
                document.querySelectorAll('.navbar-active').forEach((item) => {
                    item.classList.remove("navbar-active");
                    })
                document.getElementById('home').parentElement.classList.add("navbar-active");
            }
    
            else if (currentScroll <= document.getElementsByClassName('aboutme')[0].offsetTop + document.getElementsByClassName('aboutme')[0].offsetHeight){
                document.querySelectorAll('.navbar-active').forEach((item) => {
                    item.classList.remove("navbar-active");
                    })
                document.getElementById('aboutme').parentElement.classList.add("navbar-active");
            }
    
            else if (currentScroll <= document.getElementsByClassName('projects')[0].offsetTop + document.getElementsByClassName('projects')[0].offsetHeight){
                document.querySelectorAll('.navbar-active').forEach((item) => {
                    item.classList.remove("navbar-active");
                    })
                document.getElementById('projects').parentElement.classList.add("navbar-active");
            }
    
            else{
                document.querySelectorAll('.navbar-active').forEach((item) => {
                    item.classList.remove("navbar-active");
                    })
                document.getElementById('contact').parentElement.classList.add("navbar-active");
            }
        }
    }
}

function reloadtrigger(){
    screensize();
    setTimeout(function(){
        location.reload();
      },10);
}

var current = window.innerWidth;
var currentt
var currentt2

if (current < 600){
    currentt = "small";
}
else{
    currentt = "large";
}

function reload(){
    if (window.innerWidth < 600){
        currentt2 = "small";
    }
    else{
        currentt2 = "large";
    }
    
    if (currentt != currentt2){
        currentt = currentt2
        screensize();
        setTimeout(function(){
            location.reload();
          },10);
    }
}

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});
