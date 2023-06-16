const textarea = document.querySelector('.textarea');
const title = document.querySelector('.title');
const createBtn = document.querySelector('.createBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const list = document.querySelector('.list');



createBtn.addEventListener('click', () => {
    if (title.value || textarea.value) {
      const memo = `${title.value} - ${textarea.value}`;
      const key = localStorage.length + 1; // 새로운 메모를 저장할 키 생성
      localStorage.setItem(key, memo);
      const li = document.createElement('li');
      li.innerText = memo;
      list.appendChild(li);
      textarea.value = "";
      title.value = "";
    }
  });
  

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