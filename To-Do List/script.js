const taskInput = document.getElementById('taskInput'); 
const addButton = document.getElementById('addBtn');   
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function(){
    let taskText  = taskInput.value;

    if( taskText !== '' ){
       const newTask = document.createElement('li');
        newTask.taskContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = ''; 

    }
});
