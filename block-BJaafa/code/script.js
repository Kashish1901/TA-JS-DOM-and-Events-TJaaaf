let field = document.querySelector(".container");
let box = document.querySelector(".box")



function getRandomColor(){
    let hexCharacters = [
        "0" , "1" , "2" , "3" , "4" , "5",  "6" , "7 " ,  "8",  "9" ,  "a" , "b" , "c" , "d" , "e" , "f"  ]

        let color = "#" ;

for (let i = 0 ; i <6 ; i++ ){
   let randomNumber = Math.floor(Math.random() * 16);

    color = color + hexCharacters[randomNumber];
}
return color;

    };

    function handleClick(){
        let randomColor = getRandomColor();
        box.style.backgroundColor = randomColor
    }
box.addEventListener("click" , handleClick)
//field.addEventListener("click" , () => {
    //alert("What You Want To perform");
//})