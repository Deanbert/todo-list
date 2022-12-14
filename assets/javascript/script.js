//Selectors
const todoInput = document.querySelector(".input-box");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {

    //Used to create a li and add it to the todo-list container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Adds new todo item to todo container
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Adds tickbox for tasks that are complete
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.classList.add("complete-button");
    todoDiv.appendChild(completeButton);

    //Adds delete button for removing added tasks
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);

    //Append item to list
    todoList.appendChild(todoDiv);

    //
    todoInput.value="";
}
