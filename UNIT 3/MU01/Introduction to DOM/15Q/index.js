const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

function addTask(taskText) {
  const task = document.createElement("li");
  task.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

  taskList.appendChild(task);

  const completeBtn = task.querySelector(".complete-btn");
  completeBtn.addEventListener("click", () => {
    task.querySelector("span").style.textDecoration = "line-through";
  });

  const deleteBtn = task.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(task);
  });
}
