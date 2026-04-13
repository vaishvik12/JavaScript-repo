const tasks = [];

function addToList(){
  let inputEl = document.querySelector("#task-input");
  let task = inputEl.value;
  tasks.push(task);
  inputEl.value = '';
  renderTasks();
}

function renderTasks(){
  let taskList = document.querySelector("#todo-task-list");
  let htmlTask = "";
  for(let i = 0; i < tasks.length; i++){
    htmlTask += `<p>${tasks[i]}</p>`
  }
  taskList.innerHTML = htmlTask;
}