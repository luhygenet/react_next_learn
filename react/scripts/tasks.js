taskList = document.getElementById('task-list')
addButton = document.getElementById('addButton')
taskInput = document.getElementById('taskInput')


function addTask(){
   taskText = taskInput.value.trim();

   if (taskText === ''){
    alert('please enter a task')
    return
   }
   
   const taskItem = document.createElement('li');
   taskItem.textContent = taskText;
   taskItem.classList.add('task-list')

   taskItem.addEventListener('click', function() {
    taskList.removeChild(taskItem);
   })

   taskList.appendChild(taskItem)

   taskInput.value = ''
}


addButton.onclick = addTask;