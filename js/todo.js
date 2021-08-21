const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const todos_key = "todos";
function deleteToDo(event)
{
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    li.remove();
    saveToDos();
}

function saveToDos()
{
    localStorage.setItem(todos_key, JSON.stringify(toDos));
}

function creatList(newToDo)
{
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.className = "inputButton";
    li.append(button)
    li.appendChild(span);
    button.innerText = "❌";
    span.innerText = newToDo.text;
    button.addEventListener("click", deleteToDo)
    toDoList.appendChild(li);
}

function toDosubmit(event)
{
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    creatList(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDosubmit);

function sayhello(item)
{
    console.log(item);
}
const savedToDos = localStorage.getItem(todos_key);

if (savedToDos !== null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(creatList);
}