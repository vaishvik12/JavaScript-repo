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


  todoTask.forEach((task, index) => {
    tasksHtml += `<div>${task.name}</div>
    <div> ${task.date}</div>
     <button id = 'delete-button'
     onclick = "deleteTask(${index});">Delete</button>`
  }
)

 
  taskListEl.innerHTML = tasksHtml;
} 


function deleteTask(index){
todoTask.splice(index,1);
renderTask();
}