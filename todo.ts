let input:any=document.getElementById("input");

let task:string[]=["Code","Eat","Sleep"]

//let newCard = document.createElement('div');
//newCard.textContent = snip.title;
//container.appendChild(newCard);


const validateForm=():boolean=>{
   
task.push(input.value)
let newCard = document.createElement('div');
        newCard.classList.add("card-body")
        newCard.classList.add("card")
        newCard.textContent = task[task.length-1];
       document.getElementById("cont")?.appendChild(newCard);


input.value="";
return false;
}

console.log(task)
const renderItem=():void=>{
    task.map((item)=>{
        let newCard = document.createElement('div');
        newCard.classList.add("card-body")
        newCard.classList.add("card")
        newCard.textContent = item;
       document.getElementById("cont")?.appendChild(newCard);
    })
}

renderItem();





