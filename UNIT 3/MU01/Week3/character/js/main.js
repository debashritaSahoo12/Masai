let currentPage = 1;

async function fetchCharacters(page = 1) {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await res.json();
  displayCharacters(data.results);
  document.getElementById("page-indicator").textContent = `Page ${page}`;
}

function displayCharacters(characters) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  characters.forEach(char => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}" />
      <h3>${char.name}</h3>
      <p>${char.species} - ${char.status}</p>
      <a href="character.html?id=${char.id}" target="_blank">View Details</a>
    `;
    gallery.appendChild(card);
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentPage++;
  fetchCharacters(currentPage);
});
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
});

function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, options);
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = `${time} ${date}`;
}

setInterval(updateClock, 1000);
fetchCharacters(currentPage);
