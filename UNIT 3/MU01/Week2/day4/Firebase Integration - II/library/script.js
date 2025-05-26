let baseUrl =
  "https://library-5217b-default-rtdb.asia-southeast1.firebasedatabase.app/";

//  fetching books --->
async function fetchBooks() {
  let genre = document.getElementById("filterGenre").value;
  let author = document.getElementById("filterAuthor").value;
  let available = document.getElementById("filterAvailable").value;
  let sortBy = document.getElementById("sortBooks").value;

  let res = await fetch(`${baseUrl}/books.json`);
  if (!res.ok) {
    throw new Error("unable to fetch books data");
  }
  let books = await res.json();
  let bookData = Object.values(books);

  if (genre) {
    books = books.filter(b => b.genre === genre);
  }
  if (author) {
    books = books.filter(b => b.author.toLowerCase().includes(author))
  }
  if (available) {
    books = books.filter(b => String(b.available) === available)
  }
  if (sortBy) {
    books.sort((a, b) => {
      if (sortBy === "title" || sortBy === "author") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else if (sortBy === "publishedYear") {
        return a.publishedYear - b.publishedYear;
      }
    });
  }
  displayBooks(books);
}

// Display Books-->
function displayBooks(books) {
  let displayDiv = document.getElementById("booksList");
  displayDiv.innerHTML = "";
  books.forEach(b => {
    let div = document.createElement("div");
    div.className = "booksList";
    div.innerHTML += `
    <h3><strong>Title :</strong> ${b.title}</h3>
        <p><strong>Author</strong> : ${b.author}</p>
        <p><Strong>Published Year</Strong> : ${b.publishedYear}</p>
        <p><Strong>Availablity</Strong> : ${b.available ? "Available" : "Unavailable"}</p>
    `;
    displayDiv.appendChild(div);
  })
}


// Fetching Members
async function fetchMembers() {
  let active = document.getElementById("filterActive").value;
  let memberdate = document.getElementById("filterMembershipDate").value;
  let sortBy = document.getElementById("sortMembers").value;


  let res = await fetch(`${baseUrl}/members.json`);
  if (!res.ok) {
    throw new Error("Unable to fetch members data");
  }
  let data = await res.json();
  let membersData = Object.values(data);

  if (active) {
    data = data.filter(m => String(m.active) === active);
  }
  if (memberdate) {
    data = data.filter((m => new Date(m.membershipDate) >= new Date(date)));
  }
   if (sortBy) {
    data.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "membershipDate") {
        return new Date(b.membershipDate) - new Date(a.membershipDate); // Descending
      }
    });
  }
  displayMember(data);
}

// Display Members--->

function displayMember(member) {
  let membersDiv = document.getElementById("membersList");
  membersDiv.innerHTML = "";
  member.forEach(m => {
    let memberList = document.createElement("div");
    memberList.className = "memberDiv";
    memberList.innerHTML += `
    <h3><strong>Name :</strong>${m.name}</h3>
        <p><strong>Membership date :</strong>${m.membershipDate}</p>
        <p><strong>Active Status :</strong> ${m.active ? "Active" : "Inactive"}</p>
    `;
    membersDiv.appendChild(memberList);
  })
}
