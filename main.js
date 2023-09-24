const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);


taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-button')) {
       e.target.parentElement.remove(); 
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if( taskText !== '' ) {
        const li = document.createElement('li');
        li.innerHTML = `
        ${taskText}
        <button class = "delete-button">Удалить<button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    }
}



