const list=document.querySelector("#lists")
let count=list.children.length
btn.addEventListener("click",()=>{
    const newItem=document.createElement("li")
    newItem.innerText=`item${++count}`
    if(count%2==1){
        newItem.style.fontStyle='bold'        
newItem.style.color='blue'
    }else{
newItem.style.fontStyle = "italic";
newItem.style.color = "red";
    }
    list.appendChild(newItem)
})