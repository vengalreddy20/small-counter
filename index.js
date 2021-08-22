function increment(){
    let countel=document.getElementById("access")
    let currentval=countel.innerText;
    let updateval=parseInt(currentval)+1;
    countel.innerHTML=updateval;
}
function decrement(){
    let countel=document.getElementById("access")
    let currentval=countel.innerText;
    let updateval=parseInt(currentval)-1;
    countel.innerHTML=updateval;
}
function reset(){
    let countel=document.getElementById("access")
    countel.innerHTML=0;
}