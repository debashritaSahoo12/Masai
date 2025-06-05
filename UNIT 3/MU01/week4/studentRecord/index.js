let records = [],
  id = 1;
  function addStudent() {
    let studentId = document.getElementById("studentid").value;
    let name = document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let age = +document.getElementById("age").value;
    let score = +document.getElementById("score").value;
  
    if (!name || !batch || !age || !score) {
      alert("Please fill all the inputs");
      return;
    }
  
    if (studentId) {
      records = records.map((student) =>
        student.id == studentId
          ? { id: +studentId, name, batch, age, score }
          : student
      );
    } else {

      records.push({
        id: id++,
        name,
        batch,
        age,
        score,
      });
    }

    document.getElementById("studentid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("batch").value = "";
    document.getElementById("age").value = "";
    document.getElementById("score").value = "";
  
    display(records);
  }
  
 
function display(records) {
  let lists = document.getElementById("lists");
  lists.innerHTML = "";
  records.forEach((student) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>${student.name}</h3>
<p>batch:${student.batch}</p>
<p>age:${student.age}</p>
<p>score:${student.score}</p>
<button id="editBtn" onclick="editFn(${student.id},'${student.name}','${student.batch}',${student.age},${student.score})">Edit</button>
<button id="deleteBtn" onclick="deleteFn(${student.id})">Delete</button>
    `;
    lists.appendChild(div);
  });
  let total=document.getElementById("total")
  total.innerHTML=""
  let divTot = document.createElement("div")
  let tot = records.reduce((acc, curr) => acc + curr.score, 0);
  let avg=(+(tot)/records.length).toFixed(2)
  divTot.innerHTML=`
  <h3>Total number of students:${records.length}</h3>
    <h3>Average Score:${avg}</h3>
  `
  total.appendChild(divTot)
}

function editFn(id, name, batch, age, score) {
  document.getElementById("studentid").value = +id;
  document.getElementById("name").value = name;
  document.getElementById("batch").value = batch;
  document.getElementById("age").value = age;
  document.getElementById("score").value = +score;
}
function deleteFn(id) {
  console.log(id)
  records = records.filter((student) => student.id != id);
  display(records);
}
document.getElementById("search").addEventListener("input", () => {
  let query = document.getElementById("search").value;
  let filtered = records.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );
  display(filtered);
});

function sortAge() {
  records.sort((a, b) => a.age - b.age);
  display(records);
}

function sortScore() {
  records.sort((a, b) => b.score - a.score);
  display(records);
}
