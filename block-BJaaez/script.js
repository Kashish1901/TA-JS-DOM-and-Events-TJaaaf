function main(){
    let input = document.querySelector(`input[type="text"]`);
    let rootElm = document.querySelector('ul');

    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed = document.querySelector(".completed");
    let clear = document.querySelector(".clear-completed");
    
   let activeButton = "all";

    let allTodos = localStorage.getItem("allTodos") ? 
      JSON.parse(localStorage.getItem("allTodos")) :
      [];
     
    function handleInput(event){
        if (event.keyCode === 13){
            let todo = {
                name : event.target.value ,
                isDone : false
            }
            allTodos.push(todo);
            event.target.value = "" ;
        createUI();
        localStorage.setItem("allTodos" , JSON.stringify(allTodos));
        }
        
    };
    
    function handleDelete(event){
    let id = event.target.dataset.id;
    allTodos.splice(id , 1);
    createUI();
    localStorage.setItem("allTodos" , JSON.stringify(allTodos));
    }
    
    function handleChange(event){
        let id = event.target.dataset.id;
        allTodos[id].isDone = !allTodos[id].isDone ;
        createUI();
        localStorage.setItem("allTodos" , JSON.stringify(allTodos));
    }

    function createUI(data = allTodos){
        rootElm.innerHTML = "" ;
    data.forEach((todo , index) => {
        let li = document.createElement('li');
        let input= document.createElement('input');
        input.type = "checkbox";
        input.classList.add('checkbox');
    input.checked = todo.isDone;
    input.setAttribute("data-id" , index)
    input.addEventListener("input" , handleChange);
    
        let label= document.createElement('label');
        label.innerText = todo.name;
        let span= document.createElement('span');
        span.innerText = "❌" ;
        span.setAttribute("data-id" , index)
    span.addEventListener("click" , handleDelete);
        li.append(input , label , span);
        rootElm.append(li);
    });
    }
    
    createUI();

    all.classList.add('selected');

    clear.addEventListener("click" , () => {
        allTodos = allTodos.filter((todo) => !todo.isDone);
        createUI();
        activeButton = "clear" ;
        updateActiveBtn();
        localStorage.setItem("allTodos" , JSON.stringify(allTodos));
    })

    active.addEventListener("click" , () => {
       let notCompleted = allTodos.filter((todo) => !todo.isDone);
        createUI(notCompleted);
        activeButton = "active" ;
        updateActiveBtn();
    })

    completed.addEventListener("click" , () => {
        let completed = allTodos.filter((todo) => todo.isDone);
        createUI(completed);
        activeButton = "completed" ;
        updateActiveBtn();
    })

    all.addEventListener("click" , () => {
        createUI();
        activeButton = "all" ;
        updateActiveBtn();
    })

function updateActiveBtn(btn = activeButton){
    all.classList.remove('selected');
    active.classList.remove('selected');
    clear.classList.remove('selected');

    if (btn === "all"){
        all.classList.add('selected');
    }
    if (btn === "active"){
        active.classList.add('selected');
    }
    if (btn === "clear"){
        clear.classList.add('selected');
    }
}

    input.addEventListener("keyup" , handleInput);
}

main();