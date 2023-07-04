let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(`.movies-list`);

let allMovies = [
    {
        name : "Forest Gump" ,
        watched : false
    },
    {
        name : "Inception" ,
        watched : true
    }
]

input.addEventListener('keyup' , (event) => {
   if (event.keyCode === 13){
    
    allMovies.push({
        name : event.target.value,
        watched: false
    });
    event.target.value = "" ;
    createMoviesUI();
   }
});

function deleteMovie(event){
    let id = event.target.dataset.id;
    allMovies.splice(id , 1);
    createMoviesUI();
}

function handleChange(event){
    let id = event.target.id;
    
    allMovies[id].watched = !allMovies[id].watched;
}

   function createMoviesUI() {
    rootElm.innerHTML = "" ;
    allMovies.forEach((movie , i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add("styled-checkbox");
        input.id = i;
        input.type = "checkbox";
        input.checked = movie.watched;
        input.addEventListener("change" , handleChange);
        let label = document.createElement('label');
        label.for = "i"
        label.innerText = movie.name;
        let span = document.createElement('label');
        span.innerText = "❌";
span.addEventListener("click" , deleteMovie);

        li.append(input , label , span);
        rootElm.append(li)
    });
}

createMoviesUI();