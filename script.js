const inpValue = document.querySelector(".inpValue");
const todoBtn = document.querySelector(".todoBtn");
const todoContainer = document.querySelector(".todo-container");
const todo = document.querySelector(".todo");
todoBtn.addEventListener("click", addTodo);
todo.addEventListener("click", deleteCheck);

//
function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const newLine = document.createElement("li");
  newLine.innerText = inpValue.value;
  newLine.classList.add("newLine");
  todoDiv.appendChild(newLine);
  const compleBtn = document.createElement("button");
  compleBtn.innerHTML = '<i class="fas fa-check"></i>';
  compleBtn.classList.add("compleBtn");
  todoDiv.appendChild(compleBtn);
  const cancelBtn = document.createElement("button");
  cancelBtn.innerHTML = '<i class="fas fa-trash"></i>';
  cancelBtn.classList.add("cancelBtn");
  todoDiv.appendChild(cancelBtn);
  todo.appendChild(todoDiv);
  inpValue.value = "";
}

///
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "cancelBtn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  if (item.classList[0] === "compleBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}
