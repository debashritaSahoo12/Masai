import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import {
  auth,
  db
} from "../firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js"

let userMail = null;
let currentUserId = null;
let API = 'https://jsonplaceholder.typicode.com/posts';
onAuthStateChanged(auth, async (user) => {
  if (user) {
    userMail = user;
    currentUserId = 1;
    document.getElementById("userMail").innerText = userMail.email;
    fetchData()
  }
})
async function addTask() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("desc").value;

  if (!title || !body) return alert("Please fill all fields");

  const newTask = {
    title,
    body,
    userId: currentUserId
  };

  await fetch(API, {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Content-type": "application/json"
    }
  });
  alert("New Task Added");
  fetchData();
}
async function fetchData() {
  let res = await fetch(API);
  let data = await res.json();
  let filtered = data.filter(item => item.userId === currentUserId);
  console.log(filtered);
  displaydata(filtered);
}
function displaydata(user) {
  let userCrad = document.getElementById("taskList");
  userCrad.innerHTML = ""
  user.forEach((tasks) => {
    let taskcard = document.createElement("div");
    taskcard.className = "taskscard";
    taskcard.innerHTML = `
    <p><strong>${tasks.title}</strong></p>
      <p>${tasks.body}</p>
      <button onclick="markComplete(${tasks.id})" class="btns">✅Mark completed</button>
      <button onclick="editTask(${tasks.id}, '${tasks.title}', '${tasks.body}')" class="btns">📝 Edit</button>
      <button onclick="deleteTask(${tasks.id})" class="btns">❌ Delete</button>
    `;
    userCrad.appendChild(taskcard);
  })
}

// mark as complete
window.markComplete = async function (id) {
  const res = await fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed: true }),
    headers: {
      "Content-type": "application/json;"
    }
  });
  alert(`Task #${id} marked as complete ✅`);
}
// edit -->
window.editTask = async function (id, oldTitle, oldBody) {
  const newTitle = prompt("Edit title:", oldTitle);
  const newBody = prompt("Edit description:", oldBody);

  if (!newTitle || !newBody) return alert("All fields required");

  const res = await fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: newTitle,
      body: newBody
    }),
    headers: {
      "Content-type": "application/json"
    }
  });
  fetchData();
}
window.deleteTask = async function (id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
  alert(`Task #${id} deleted ❌`);
  fetchData();
}
document.getElementById("submit").addEventListener("click", addTask);
fetchData();