const name = document.getElementById('name');
const scores = document.getElementById('score');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GUjrQJIaA6uCHpsxgcul/scores/';
let playerData = {
  user: '',
  score: '',
};

name.addEventListener('input', (e) => {
  const name = e.target.value.trim();
  playerData = {
    ...playerData,
    user: name,
  };
});

scores.addEventListener('input', (e) => {
  const score = e.target.value.trim();
  playerData = {
    ...playerData,
    score,
  };
});

const setScores = async () => {
  const prost = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playerData),
  };
  await fetch(url, prost)
    .then((response) => response.json())
    .then(() => {
      window.location.reload();
    });
};

export { setScores as default };
