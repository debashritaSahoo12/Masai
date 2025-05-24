async function fetchUsers() {
  let res = await fetch(
    "https://users-7467d-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
  );
  let data = await res.json();
  let userList = document.getElementById("lists");
  userList.innerHTML = `<tr>
            <th>name</th>
            <th>email</th>
        </tr>`;

  let userArray = Object.entries(data).map(([id, user]) => ({ id, ...user }));

  userArray.forEach((user) => {
    let userTable = document.createElement("tr");
    userTable.innerHTML = `

    <td>${user.name}</td>
    <td>${user.email}</td>

    `;
    userList.appendChild(userTable);
  });
}

