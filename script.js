function addTask() {
  let task = document.getElementById('newTask').value;
  if (task.length === 0) return;

  let managerStatus = document.getElementById('taskManager');
  managerStatus.innerHTML = 'Task List Manager - <b>ACTIVE</b>';

  let addButton = document.getElementById('addButton');
  addButton.classList.toggle('success');

  let taskList = document.getElementById('taskList');
  var li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
  alert('New task added: ' + task);

  let tasks = document.getElementsByTagName("li").length;
  if (tasks > 0) {
    let taskCount = document.getElementById('taskCount');
    taskCount.textContent = `Total Tasks: ${tasks}`;
  }
}

function removeAllTasks() {
  let managerStatus = document.getElementById('taskManager');
  managerStatus.classList.remove('active');

  let addButton = document.getElementById('addButton');
  addButton.classList.remove('success');

  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
}

