
function add(){
    const info = document.getElementById("todo").value;
    const todo_date=document.getElementById("todo-date").value;
    const data = document.createElement("div");
    const del = document.createElement("button");
    const todo = document.createElement("p");
    const time = document.createElement("p");
    const tag = new Date().getTime();
    todo.innerText=info;
    time.innerText=todo_date;
    data.setAttribute("id","task"); 
    del.id=tag;
    del.innerText="delete";
    del.onclick=delete_todo;
    data.appendChild(todo);
    data.appendChild(time);
    data.appendChild(del);  
    document.getElementById("todo-list").appendChild(data);
    document.getElementById("todo").value="";
    document.getElementById("todo-date").value="";
}

function delete_todo(event){
    const delbutton = event.target;
    const idtodel= delbutton.id;
    const divtodel = document.getElementById(idtodel).parentElement;
    divtodel.remove();
}
