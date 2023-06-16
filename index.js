const textarea = document.querySelector('.textarea');
const title = document.querySelector('.title');
const createBtn = document.querySelector('.createBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const list = document.querySelector('.list');

let ids = 1;

createBtn.addEventListener('click',()=>{
    if(title.value || textarea.value == true){
    localStorage.setItem(ids, `${title.value} - ${textarea.value}`);
    const titleData = localStorage.getItem(ids);
    const li = document.createElement('li');
    li.innerText = titleData;
    list.appendChild(li);
    textarea.value = "";
    title.value = "";
    ids++;
    } else false;
    
})

deleteBtn.addEventListener('click',()=>{
    localStorage.clear();
    list.innerHTML = "";
})

const loadElementsBtn = document.querySelector('.loadElements');
loadElementsBtn.addEventListener('click',()=>{
    if(list.innerHTML == false){
        for(let i = 1; i <= localStorage.length; i++){
        const li = document.createElement('li');
        li.innerText = localStorage.getItem(i);
        list.appendChild(li);
    }
    }else{
        return;
    }    
})