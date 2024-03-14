(function(){
    "use strict"
    const root =document.documentElement;

    const navToggle=document.querySelector("#js-navToggle");
    navToggle.addEventListener("click",function(){
        root.classList.toggle("show-nav");
    });
    

    const eventPP=document.querySelector("#js-eventPP");
    const eventOpenBtn=document.querySelector("#js-eventOpenBtn");
    if(eventPP){
        eventOpenBtn.addEventListener("click",function(){
            root.classList.add("show-event-popup");
        });
        eventPP.addEventListener("click", function(event){
            if(event.target===this || event.target.classList.contains("js-ppCloseBtn")){
                root.classList.remove("show-event-popup");
            }
        });
        document.addEventListener("keyup",function(event){
            if(event.key==="Escape"){
                root.classList.remove("show-event-popup");
            }
        });
    }
})();
