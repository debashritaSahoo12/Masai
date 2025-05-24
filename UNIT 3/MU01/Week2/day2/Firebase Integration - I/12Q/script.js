async function addBtn() {
  try {
    let lists = document.getElementById("lists");
    let name = document.getElementById("name").value;
    let message = document.getElementById("msg").value;
    let feedback = {
      name: document.getElementById("name").value,
      message: document.getElementById("msg").value,
    };
    if (!name && !message) {
      lists.innerHTML = `<p>Please fill the form</p>`;
      return;
    }
    let res = await fetch(
      "https://feedback-34aa9-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      }
    );
    document.getElementById("name").value = "";
    document.getElementById("msg").value = "";
    lists.innerHTML = `<h2>Successfully Added</h2>`;
  } catch (error) {
    console.log("Some thing went wrong", error);
  }
}
