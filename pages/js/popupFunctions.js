let popup = document.getElementById("newsletterSuccessfulSignUp");

let btn = document.getElementById("newsletterSignUpButton");

let body = document.getElementById("body");

let btnClose = document.getElementById("buttonClosePopup");

let newsletterEmail;

// Newsletter Sign Up

btn.onclick = function () {
  let newsletterEmail = document.getElementById("newsletterEmail").value;
  if (newsletterEmail.length > 0) {
    popup.style.display = "flex";
    popup.style.position = "fixed";
    body.style.overflow = "hidden";
    popup.style.zIndex = "2";
    document.getElementById("userNewsletterEmail").innerHTML = newsletterEmail;
  }
};

btnClose.onclick = function () {
  popup.style.display = "none";
  body.style.overflow = "auto";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
    body.style.overflow = "auto";
  }
};
