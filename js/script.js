/* ----- Mobile Nav Overlay ----- */
nav_toggle = document.querySelector(".navbar-toggler");
nav_overlay = document.querySelector(".mobile-nav-overlay");
nav_logo = document.querySelector(".navbar-branding");
hambuger = document.querySelector(".navbar-toggler");

nav_toggle.addEventListener("click", function() {
    nav_overlay.classList.toggle("mobile-nav-overlay-active");
    nav_logo.classList.toggle("mobile-nav-hidden");
    hambuger.classList.toggle("mobile-nav-hidden");
})

nav_toggle_close = document.querySelector(".mobile-nav-overlay__closer")
nav_toggle_close.addEventListener("click", function() {
    nav_overlay.classList.toggle("mobile-nav-overlay-active");
    nav_logo.classList.toggle("mobile-nav-hidden");
    hambuger.classList.toggle("mobile-nav-hidden");
})



/* ----- Features List Toggler ----- */
var acc = document.getElementsByClassName("features__list__button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between hiding and showing the active panel */
    var panel = document.querySelectorAll(".feature_tab");
    for(let x = 0; x < acc.length; x++){
      if(x === i){
        if (panel[i].style.display === "block") {
          panel[i].style.display = "none";
        } else {
          panel[i].style.display = "block";
        }
      }else{
        panel[x].style.display = "none";
      }
    }
  });
}

/* ----- Faq Toggler ----- */
var toggler = document.getElementsByClassName("faq__list__item__heading__button");

for (let x = 0; x < toggler.length; x++) {
    toggler[x].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = document.querySelectorAll(".faq__list__item__answer");
        if (panel[x].style.display === "block") {
          panel[x].style.display = "none";
        } else {
          panel[x].style.display = "block";
        }
      });
    }
    

/*                   
.active{
    transform: rotate(180deg);
}

Add and remove this class to faq buttons when clicked
*/
