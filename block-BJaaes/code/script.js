let form = document.querySelector("form");

let usernameError = "";
let nameError = "";
let emailError = "";

function handleSubmit(event) {
    event.preventDefault();
  console.dir(event.target);

  let usernameElm = event.target.elements.username;
  
  if (usernameElm.value == ""){
    usernameError = "Can't be empty!";
  } else if (usernameElm.value.length < 4){
    usernameError = " Username can't be less then 4 characters";
  } else {
    usernameError = "" ;
  }

  usernameElm.nextElementSibling.innerText = usernameError;

  let nameElm = event.target.elements.name;

  if (nameElm.value == "") {
    nameError = "Can't be empty!";
  } else {
    nameError = "" ;
  }

  nameElm.nextElementSibling.innerText = nameError;

  let emailElm = event.target.elements.email;

  if (emailElm.value == "") {
    emailError = "Can't be empty!";
  }  else if (emailElm.value.length < 6){
    emailError = " email can't be less then 6 characters"; 
  }else {
    emailError = "" ;
  }

  emailElm.nextElementSibling.innerText = emailError;
 
   
  let numberElm = event.target.elements.number;

   if (numberElm.value.length < 7){
    numberError = " number can't be less then 7 characters"; 
  } else if (numberElm.value.split("").every(e => number(e))){
   numberError= "Phone numbers can only be a number"
  }
  else{
    numberError = "" ;
  }

  numberElm.nextElementSibling.innerText = numberError;
 
}

form.addEventListener("submit" , handleSubmit);