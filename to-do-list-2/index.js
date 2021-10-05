document.getElementById("myForm").addEventListener("click", function(event) {
    event.preventDefault();
});

let error = document.getElementById('error');

document.getElementById('submit').addEventListener('click', () => {

    let addTask = document.getElementById('task');
    let list = document.getElementById('list')

    //validate

    if (addTask.value == "") {
        error.textContent = 'Task cannot be empty.'
    } else {

        document.getElementById('no-task').style.display = 'none';

        let task = document.createElement('li');

        task.className = 'list-container';

        task.textContent = addTask.value;

        list.appendChild(task);


        //create delete button

        let button = document.createElement('button')

        button.className = 'delete-button'

        button.innerHTML = 'delete'

        task.appendChild(button)

        //delete task

        button.addEventListener('click', () => {
            task.remove();
        })

    }

})