var submitButton = document.querySelector(".submit-button");

submitButton.addEventListener('click', changeCard);

function changeCard() {
    var ratingCard = document.querySelector(".rating-container").style.display = "none";
    var thanksCard = document.querySelector(".thanks-container").style.display = "flex";
}