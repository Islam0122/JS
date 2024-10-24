// to do list

const concole_form = document.getElementById('console-form');
const concole_input = document.getElementById('console-input');

task =[]

concole_form.addEventListener('submit', (event) => {
    event.preventDefault(); // Останавливаем перезагрузку страницы
    // .trim() => используется для удаления пробелов и
    // невидимых символов (таких как переносы строки) в начале и конце строки.
    const taskText = concole_input.value.trim();

    if (taskText) {
        task.push(taskText);
        console.log(`added Task: ${taskText}`);
        console.log('list task:', task);
        concole_input.value = '';
    }
});

const taskForm = document.getElementById('to-do-list-form');
const taskInput = document.getElementById('to-do-list-input');
const taskDateInput = document.getElementById('task-date');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const taskDate = taskDateInput.value;

    if (taskText && taskDate) {
        const newTask = document.createElement('li');
        newTask.innerText = `${taskText} - ${taskDate}`;

        const finishButton = document.createElement('button');
        finishButton.innerText = 'Завершить';
        finishButton.onclick = () => {
            newTask.remove();
        };

        newTask.appendChild(finishButton);
        document.getElementById('task-list').appendChild(newTask); // Добавляем задачу в списо
    }
});