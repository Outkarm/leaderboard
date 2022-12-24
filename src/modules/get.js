const getScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GUjrQJIaA6uCHpsxgcul/scores/',
  );

  const data = await response.json();

  const scoreBoard = document.getElementById('container');
  const createIScores = (data) => {
    data.result.forEach((e) => {
      const personScore = document.createElement('p');
      personScore.innerText = `${e.user}: ${e.score}`;
      scoreBoard.append(personScore);
    });
  };
  createIScores(data);
};
export { getScores as default };
