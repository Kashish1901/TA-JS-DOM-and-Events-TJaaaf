let parentELm = document.querySelector('.container');
let tags = document.querySelector('.tags');
let search = document.querySelector('.search');

let allPeople = got.houses.reduce ((acc , cv) => {
acc= acc.concat(cv.people);
return acc;
} , []);

let allTags = got.houses.map((house) => house.name);

let activeHouse = "" ;

function createCard(data=allPeople){
    parentELm.innerHTML = "" ;
   data.forEach((people) => {
        let li = document.createElement("li");
        li.classList.add('flex-30');
        let div = document.createElement("div");
        div.classList.add("flex");
        let img = document.createElement("img");
        img.src = people.image;
        img.alt = people.name;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;
        let p = document.createElement("p");
        p.innerText = people.description;
        let a = document.createElement("a");
        a.innerText = "Learm More!"
        a.href= people.wikiLink;
           
        div.append(img , h2);
        li.append(div , p , a);

        parentELm.append(li);


    })
}

function createTagsUl(){
    tags.innerHTML= "" ;
    allTags.forEach((tag) => {
        let li = document.createElement('li');
        li.innerText = tag;

        if(activeHouse === tag){
            li.classList.add(active);
        }

        li.addEventListener("click" , () => {
            activeHouse = tag;
            let peopleOfHouse = got.houses.find((house) => house.name === tag).people || [];
            createCard(peopleOfHouse)
        })
        tags.append(li);
    })
}

function handleChange(event){
    let searchText = event.target.value;
    let filteredPeople = allPeople.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));
    createCard(filteredPeople)
}

search.addEventListener("input" , handleChange)
createCard(allPeople);
createTagsUl(allTags);

//let cardsHTML = allPeople.map((person) => {
//return `<li class="flex-30">
//<div class="flex">
//<img 
//src= ${person.image}
//alt = ${person.name}
//<h2>${person.name}</h2>
//</div>
//<p>${person.description}</p>
//<a href= ${person.wikiLink}>Learn More!</a>
//</li>`;
//});


