function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

async function fetchCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const char = await res.json();
  renderCharacter(char);
}

async function renderCharacter(char) {
  const container = document.getElementById("character-detail");
  const episodes = await Promise.all(char.episode.map(url => fetch(url).then(res => res.json())));

  container.innerHTML = `
    <img src="${char.image}" alt="${char.name}" />
    <h1>${char.name}</h1>
    <p>Status: ${char.status}</p>
    <p>Species: ${char.species}</p>
    <p>Type: ${char.type || 'N/A'}</p>
    <p>Gender: ${char.gender}</p>
    <p>Origin: ${char.origin.name}</p>
    <p>Location: ${char.location.name}</p>
    <h3>Episodes (${episodes.length}):</h3>
    <ul>
      ${episodes.map(ep => `<li>${ep.name}</li>`).join('')}
    </ul>
  `;
}

function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, options);
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = `${time} ${date}`;
}

setInterval(updateClock, 1000);
updateClock();

const charId = getQueryParam("id");
fetchCharacter(charId);
