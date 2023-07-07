function main(){
    let input = document.querySelector(`input[type="text"]`);
    let rootElm = document.querySelector('ul');
    
    let allTodos = [];
     
    function handleInput(event){
        if (event.keyCode === 13){
            let todo = {
                name : event.target.value ,
                isDone : false
            }
            allTodos.push(todo);
            event.target.value = "" ;
        createUI();
        }
        
    };
    
    function handleDelete(event){
    let id = event.target.dataset.id;
    allTodos.splice(id , 1);
    createUI();
    }
    
    function handleChange(event){
        let id = event.target.dataset.id;
        allTodos[id].isDone = !allTodos[id].isDone ;
        createUI();
    }
    function createUI(){
        rootElm.innerHTML = "" ;
    allTodos.forEach((todo , index) => {
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
    
    input.addEventListener("keyup" , handleInput);
}

main();
