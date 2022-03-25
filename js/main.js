const elList=document.querySelector(".list");
const newItem= document.createElement("li");
const elResult=document.querySelector(".result");


for(i=1; i<=20; i++){
    const a=[];
    const newButton= document.createElement("button");
    newButton.textContent=i;
    newButton.setAttribute("class", "button");
    newItem.setAttribute("class", "list__item");
    newItem.appendChild(newButton);
    elList.appendChild(newItem);

    newButton.addEventListener("click", evt=>{

        elResult.textContent = newButton.textContent;
        
    })
}



