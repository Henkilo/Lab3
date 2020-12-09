$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});
let tabs = document.getElementsByClassName("nothing")
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click",(event)=>{
        //let tabs_ = document.getElementsByClassName("nothing")
        for(let j = 0; j < tabs.length; j++) {
            if (tabs[j].classList.contains("active_tab")){
                tabs[j].className = "nav-link text-light nothing"
            }
        }
        event.target.classList.add("active_tab")
        })
}

