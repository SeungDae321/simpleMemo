window.onload=()=>{
    for(let i = 0; i < localStorage.length; i++){
        const li = document.createElement('li');
        const pre = document.createElement('pre');
        li.innerHTML = localStorage.getItem(localStorage.key(i));
        pre.appendChild(li)
        list.appendChild(pre);
    }
}

const textarea = document.querySelector('.textarea');
const title = document.querySelector('.title');
const createBtn = document.querySelector('.createBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const list = document.querySelector('.list');

const viewMemo = document.querySelector('#view-memo');
const writeMemo = document.querySelector('#write-memo');



createBtn.addEventListener('click', () => {
  let date = new Date();
    if (title.value || textarea.value) {
      const memo = `${date.toLocaleString()}<br><b>${title.value}</b><br><hr>${textarea.value}`;
      localStorage.setItem(memo, memo);
      const li = document.createElement('li');
      const pre = document.createElement('pre')
      li.innerHTML = memo;
      pre.appendChild(li)
      list.appendChild(pre);
      textarea.value = "";
      title.value = "";
      document.querySelector('.createText').classList.toggle('disable');
      document.querySelector('.viewList').classList.toggle('disable');
      viewMemo.innerText = '메모 작성'
    }
  });
  
deleteBtn.addEventListener('click',()=>{
  const delconfirm = confirm('모든 메모를 삭제하겠습니까?');
  if(delconfirm){
    localStorage.clear();
    list.innerHTML = "";
  }
})

//delete
list.addEventListener('dblclick',(evt)=>{
  const delconfirm = confirm('메모를 삭제 하겠습니까?');
  if(delconfirm){
    evt.target.remove();
    localStorage.removeItem(evt.target.innerHTML);
  }
})



viewMemo.addEventListener('click',()=>{
  if(viewMemo.innerText === '메모 작성'){
    viewMemo.innerText = '돌아가기'
  } else if(viewMemo.innerText === '돌아가기')
    {
      viewMemo.innerText = '메모 작성'
    }
  document.querySelector('.createText').classList.toggle('disable');
  document.querySelector('.viewList').classList.toggle('disable');
})


