window.onload=()=>{
    for(let i = 1; i <= localStorage.length; i++){
        const li = document.createElement('li');
        li.innerText = localStorage.getItem(i);
        list.appendChild(li);
    }   
}

const textarea = document.querySelector('.textarea');
const title = document.querySelector('.title');
const createBtn = document.querySelector('.createBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const list = document.querySelector('.list');


let date = new Date();

createBtn.addEventListener('click', () => {
    if (title.value || textarea.value) {
      const memo = `${date.toLocaleString()} | ${title.value} - ${textarea.value}`;
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



