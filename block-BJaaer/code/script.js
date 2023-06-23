let form = document.querySelector('form');


let isModalVisible = false;

function hideOrShowModal() {
    if (!isModalVisible){
        const modal = document.querySelector('.modal');
        modal.style.display = "none";
    }else {
        const modal = document.querySelector('.modal');
        modal.style.display = "block";
    }
}
let userData = {} ;

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userData.name = elements.name.value;
   userData.email = elements.email.value;
   userData.choice = elements.choice.value;
   userData.color = elements.color.value;
   userData.drone = elements.drone.value;
   userData.terms = elements.terms.value;

   console.log(userData);
const submit = document.querySelector(".submit");
submit.addEventListener("submit" , () => {
    isModalVisible = true ;
    hideOrShowModal();
});

const close = document.querySelector(".modal__close");
submit.addEventListener("click" , () => {
    isModalVisible = false ;
    hideOrShowModal();
});
   

  
})