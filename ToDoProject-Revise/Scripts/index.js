const tasks = [];

function addTask(){
 let taskEl = document.querySelector("#task-input");

  let dateEl = document.querySelector("#date-input");

  let name = taskEl.value;
  let date = dateEl.value;
  
  let taskObject = {
    name,
    date
  }

  tasks.push(taskObject);
  console.log(tasks);
  renderTasks();
}


function renderTasks(){
    let taskList = document.querySelector("#todo-list");
    let taskHtml =  "";

    for(let i = 0; i < tasks.length; i++){
      let task = tasks[i];
      taskHtml += `<div>${task.name} </div>
      <div>${task.date}</div>
       <button onclick = "deleteTask(${i});"
       id = "delete-button"
       >Delete</button>`;
    }

    taskList.innerHTML = taskHtml;
}


function deleteTask(index){
  tasks.splice(index,1);
  renderTasks();
}
