var item = document.getElementsByClassName('item');
var iframes = document.querySelectorAll(".iframe")

window.onload = itemgenerator()

function itemgenerator(){
    for (i = 0; i < item.length; i++) {   
        templink = 'https://d4wk0m.github.io/' + item[i].getAttribute("link");
        temptitle = item[i].getAttribute("title");
        tempdifficulty = item[i].getAttribute("difficulty");
        tempdesc = item[i].getAttribute("desc");

        var lang = item[i].getAttribute("lang");
        var r = lang[0];

        for (j = 1; j < lang.length; j++) {
            r = r + lang[j]
        }
        temparray = r.split(" ")
        console.log(temparray[0])

        if (tempdifficulty === "1"){
            tempdifficultyname = "newbie"
        }

        else if (tempdifficulty === "2"){
            tempdifficultyname = "junior"
        }

        else if (tempdifficulty === "3"){
            tempdifficultyname = "intermediate"
        }

        else{
            tempdifficultyname = "advanced"
        }

        var contentlang = `<li class="item-lang-` + temparray[0] + `">` + temparray[0] + `</li>`

        for (k = 1; k < temparray.length; k++){
            contentlang = contentlang + `<li class="item-lang-` + temparray[k] + `">` + temparray[k] + `</li>`
        }
        

        var content = 
         `
         <h2 class="item-heading"><a href="` + templink + `" target="_blank">` + temptitle + `</a></h2>
         <div class="item-content">
             <div class="iphone8-mockup">
                 <div class="px">
                     <div class="px__body">
                     <div class="px__body__cut"></div>
                     <div class="px__body__speaker"></div>
                     <div class="px__body__sensor"></div>
                 
                     <div class="px__body__mute"></div>
                     <div class="px__body__up"></div>
                     <div class="px__body__down"></div>
                     <div class="px__body__right"></div>
                     </div>
                 
                     <div class="px__screen">
                     <div class="px__screen__">
                         <div class="px__screen__frame">
                         <iframe src="` + templink + `" width="375px" height="820px" style="border: none;" seamless class="iphone-iframe iframe"></iframe>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="mbp-mockup-wrapper">
                 <div class="mbp-container">
                     <div class="mbp-display with-glare">
                         <div class="display-edge">
                             <div class="bezel">
                                 <div class="display-camera" ></div>
                                 <div class="display-frame">
                                     <iframe src="` + templink + `" allowfullscreen class="mb-iframe iframe" width="1280" height="800"></iframe>
                                 </div>
                                 <div class="below-display">
                                     <div class="macbookpro"></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="mbp-keyboard">
                         <div class="front">
                             <div class="opener-left"></div>
                             <div class="opener-right"></div>
                         </div>
                         <div class="bottom-left"></div>
                         <div class="bottom-right"></div>
                         <div class="mbp-shadow">			
                             <div class="shadow-left"></div>
                             <div class="shadow-right"></div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="item-desc">
            <div class="item-attributes">
                <div class="item-lang">
                    <ul class="item-lang-ul">` + contentlang + `</ul>
                </div>
                <div>
                    <span class="difficulty-wrapper difficulty-wrapper-` + tempdifficulty + `">
                        <span class="difficulty-number difficulty-` + tempdifficulty + `">` + tempdifficulty + `</span>
                        <span class="difficulty-name difficulty-` + tempdifficultyname + `">` + tempdifficultyname + `</span>
                    </span>
                </div>
            </div>
            <p>` + tempdesc + `</p>
         </div>
            `;

        item[i].innerHTML = content;

        iframes.forEach(iframe => {
            iframe.contentWindow.location.reload();
        })
    }
}