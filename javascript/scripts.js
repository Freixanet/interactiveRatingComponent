var submitButton = document.querySelector(".submit-button");
var buttons = document.querySelectorAll(".button");
var activeClassName = 'active';


submitButton.addEventListener('click', changeCard);

function changeCard() {
    var ratingCard = document.querySelector(".rating-container").style.display = "none";
    var thanksCard = document.querySelector(".thanks-container").style.display = "flex";
}


function activeState(items, activeName) {
    for(var i = 0; i < items.length; i++) {
        if(items[i].classList.contains(activeName)) {
            items[i].classList.remove(activeName); 
        }
    }  
}

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){
      activeState(buttons, activeClassName);
      e.target.classList.add(activeClassName);
    });
  }




