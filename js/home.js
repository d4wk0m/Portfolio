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

// document.querySelectorAll('.hidden').forEach((item) => {
//     item.style.left = "100vw";
//     })

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
