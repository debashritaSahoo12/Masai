const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const sortTasksButton = document.getElementById('sortTasks');
const taskList = document.getElementById('taskList');
const filterButtons = document.getElementById('filterButtons');
const totalTasksCount = document.getElementById('totalTasks');
const completedTaskCount = document.getElementById('completedTaskCount');
const incompleteTaskCount = document.getElementById('incompleteTaskCount');

// Initialize tasks array
let tasks = [];
let filteredTasks = [];

// Function to render tasks
function renderTasks(tasksToRender) {
    taskList.innerHTML = '';
    tasksToRender.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <input type="checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to update task count
function updateTaskCount() {
    totalTasksCount.textContent = tasks.length;
    completedTaskCount.textContent = tasks.filter(task => task.completed).length;
    incompleteTaskCount.textContent = tasks.filter(task => !task.completed).length;
}

// Add event listener to add task button
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        filteredTasks = tasks;
        renderTasks(filteredTasks);
        updateTaskCount();
        taskInput.value = '';
    }
});

// Add event listener to task list
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // Delete task
        const taskIndex = parseInt(e.target.dataset.index);
        tasks = tasks.filter((task, index) => index !== taskIndex);
        filteredTasks = tasks;
        renderTasks(filteredTasks);
        updateTaskCount();
    } else if (e.target.type === 'checkbox') {
        // Toggle task completion
        const taskIndex = parseInt(e.target.dataset.index);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        filteredTasks = tasks;
        renderTasks(filteredTasks);
        updateTaskCount();
    }
});

// Add event listener to filter buttons
filterButtons.addEventListener('click', (e) => {
    if (e.target.id === 'allTasks') {
        filteredTasks = tasks;
    } else if (e.target.id === 'completedTasks') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (e.target.id === 'incompleteTasks') {
        filteredTasks = tasks.filter(task => !task.completed);
    }
    renderTasks(filteredTasks);
});

// Add event listener to sort tasks button
sortTasksButton.addEventListener('click', () => {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    filteredTasks = tasks;
    renderTasks(filteredTasks);
});

// Initial render
renderTasks(filteredTasks);
updateTaskCount();