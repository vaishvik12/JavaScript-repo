const todoTask = [];


function addTodoList(){
  let taskEl = document.querySelector("#task-input");
  let dateEl = document.querySelector("#date-input");

  let task = taskEl.value;
  let date = dateEl.value;

  todoTask.push({
    name : task,
    date : date
  })
 taskEl.value = '';
 dateEl.value = '';
  renderTask();
}


function renderTask(){
  let taskListEl = document.querySelector("#todo-list");

  let tasksHtml = ''; // accumlator variable

  for(let i = 0; i < todoTask.length; i++){
    let task = todoTask[i]; // object
    tasksHtml += `<div>${task.name}</div>
    <div> ${task.date}</div>
     <button id = 'delete-button'
     onclick = "deleteTask(${i});">Delete</button>`
  }

  taskListEl.innerHTML = tasksHtml;
} 


function deleteTask(index){
todoTask.splice(index,1);
renderTask();
}