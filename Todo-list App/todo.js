const Input = document.getElementById('input');
const list = document.getElementById('list');

function AddTask(){
    if(Input.value ===''){
        alert('Please enter a task');
    }else{
        const li = document.createElement('li');
        li.innerHTML = Input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
    }
    Input.value = '';
    save();

}
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed');
    }
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.style.display = 'none';
    }
},false);
function save(){
    localStorage.setItem('list', list.innerHTML);
}
function load(){
    list.innerHTML = localStorage.getItem('list');
}
load();