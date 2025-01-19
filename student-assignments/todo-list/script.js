function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    let todoItem = document.createElement("li");
    todoItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let todoText = document.createElement("span");
    todoText.textContent = todo.task;

    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
    }

    let badge = document.createElement("span");
    badge.classList.add("badge", "bg-primary", "rounded-pill");

    let checkButton = document.createElement("i");
    checkButton.classList.add("fa", "fa-check");
    checkButton.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    let deleteButton = document.createElement("i");
    deleteButton.classList.add("fa", "fa-trash");
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    badge.appendChild(checkButton);
    badge.appendChild(deleteButton);

    todoItem.appendChild(todoText);
    todoItem.appendChild(badge);

    list.appendChild(todoItem);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInput = document.getElementById("todoInput");
  let newTask = todoInput.value.trim();

  if (newTask !== "") {
    todos.push({ task: newTask, completed: false }); 
    populateTodoList(todos); 
    todoInput.value = ""; 
  }
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
