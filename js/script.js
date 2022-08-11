
nav_toggle = document.querySelector(".navbar-toggler-icon")
nav_toggle.addEventListener("click", function() {
    
    document.body.classList.toggle("mobile_nav_active");
})

/* ----- Features List Toggler ----- */
var acc = document.getElementsByClassName("features__list__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
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
