const getScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GUjrQJIaA6uCHpsxgcul/scores/',
  );

  const data = await response.json();

  const scoreBoard = document.getElementById('container');
  const createIScores = (data) => {
    data.result.forEach((e) => {
      const personScore = document.createElement('div');
      personScore.classList.add('score-cont');
      scoreBoard.append(personScore);
      const personImage = document.createElement('img');
      personImage.src = 'https://img.icons8.com/bubbles/512/star.png';
      personImage.classList.add('person-image');
      personScore.append(personImage);
      const playerName = document.createElement('p');
      playerName.innerText = `${e.user}`;
      playerName.classList.add('player-name');
      personScore.append(playerName);
      const playerScore = document.createElement('p');
      playerScore.innerText = `${e.score}`;
      personScore.classList.add('player-score');
      personScore.append(playerScore);
    });
  };
  createIScores(data);
};
export { getScores as default };
