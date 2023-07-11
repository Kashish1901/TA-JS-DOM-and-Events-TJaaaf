let form = document.querySelector("form");

let errorMessage = {};

function displaySuccess(name){
  form.elements[name].nextElementSibling.innerText = "";
  errorMessage[name] = "" ;
  form.elements[name].classList.remove("error");
  form.elements[name].classList.add("success");
}
function displayError(name){
  form.elements[name].nextElementSibling.innerText = errorMessage[name];
  form.elements[name].classList.add("error");
}
function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  const username = elements.username.value;
  const name = elements.name.value;
  const email = elements.email.value;
  const phone = elements.phone.value;
  const password = elements.password.value;
  const passwordCheck = elements["password-check"].value;

//Username can't be less than 4 characters
if (username.length < 4){
  errorMessage.username = " username can't be less than 4 characters ";
  displayError("username");
} else {
  displaySuccess("username");
}
// Name can't be numbers
if (!isNaN(name)){
  errorMessage.name = " You can't use number in the name field ";
  displayError("name");
} else {
  displaySuccess("name");
}
// Email must contain the symbol `@`
// Email must be at least 6 characters
if (!email.includes("@")){
  errorMessage.email = " Email must contain the symbol `@`";
  displayError("email");
} else if (email.length < 6){
  errorMessage.email = " email can't be less than 4 characters ";
  displayError("email");
} else {
  displaySuccess("email");
}
// Phone numbers can only be a number
// Length of phone number can't be less than 7
if (isNaN(phone)){
  errorMessage.phone = " Length of phone number can't be less than 7 ";
  displayError("phone");
}  else if (phone.length < 7){
  errorMessage.email = " email can't be less than 4 characters ";
  displayError("phone");
} else {
  displaySuccess("phone");
}
// Password and confirm password must be same.
if (password !== passwordCheck){
  errorMessage.password = "Password and confirm password must be same";
  errorMessage["password-check"] = "Password and confirm password must be same";
  displayError("password");
  displayError("passwordCheck");
} else {
  displaySuccess("password");
  displaySuccess("passwordCheck");
}
}

form.addEventListener("submit" , handleSubmit);