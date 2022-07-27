//Variables----------------------------------------------------------------

//Var - User
let userFirstName;
let userLastName;
let userEmail;
let userPhone;
let userCardNumber;
let userCardExpDate;
let userCardCVC;

//Var - Recipient
let deliveryFirstName;
let deliveryLastName;
let deliveryPhone;
let deliveryAddress;
let deliveryCity;
let deliveryPostCode;
let deliveryMessage;

//Var - Contact
let contactFirstName;
let contactLastName;
let contactEmail;
let contactMessage;

// //Functions----------------------------------------------------------------

// //Fun - Contact Form

let buttonSubmitContactForm = document.getElementById(
  "buttonSubmitContactForm"
);
let buttonCloseMessagePopup = document.getElementById(
  "buttonCloseMessagePopup"
);

function submitMessage() {
  let contactFirstName = document.getElementById("fName").value;
  let contactLastName = document.getElementById("lName").value;
  let contactEmail = document.getElementById("email").value;
  let contactMessage = document.getElementById("message").value;
  if (
    contactFirstName.length > 0 &&
    contactLastName.length > 0 &&
    contactEmail.length > 0 &&
    contactMessage.length > 0
  ) {
    document.getElementById("messageSent").style.display = "flex";
    document.getElementById("messageSent").style.position = "fixed";
    document.getElementById("messageSent").style.zIndex = "2";
    body.style.overflow = "hidden";
    document.getElementById(
      "messageSentH2"
    ).innerHTML = `Thank you, ${contactFirstName}!`;
  }
}

function closeMessagePopup() {
  document.getElementById("messageSent").style.display = "none";
  body.style.overflow = "auto";
}

//Fun - Submit order
let buttonSubmitOrder = document.getElementById("buttonSubmitOrder");
let buttonCloseOrderPopup = document.getElementById("buttonCloseOrderPopup");

function submitOrder() {
  document.getElementById("orderSent").style.display = "flex";
  document.getElementById("orderSent").style.position = "fixed";
  document.getElementById("orderSent").style.zIndex = "2";
  body.style.overflow = "hidden";
}

function closeOrderPopup() {
  document.getElementById("orderSent").style.display = "none";
  body.style.overflow = "auto";
}
