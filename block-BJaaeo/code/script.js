
let field = document.querySelector(".area");
let buttons = document.querySelectorAll(".buttons");
let initialValue = 0;

field.innerText = initialValue;
function handleClick(event) {
    if (event.target.innerText == "="){
        field.innerText = eval(field.innerText);
        return;
    }
     if (event.target.innerText == "C"){
        field.innerText = 0;
        return;
    }
    if (field.innerText == initialValue){
        field.innerText = event.target.innerText;
    } else
    field.innerText += event.target.innerText;
}
buttons.forEach((button) => {
    button.addEventListener("click" , handleClick)
}
)