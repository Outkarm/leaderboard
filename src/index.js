import './style.css';

const arr = [
  {
    name: 'john',
    score: 100,
  },
  {
    name: 'saba',
    score: 100,
  },
  {
    name: 'donald',
    score: 100,
  },
  {
    name: 'jake',
    score: 100,
  },
  {
    name: 'jude',
    score: 100,
  },
];
const scoreBoard = document.getElementById('container');

arr.forEach((e) => {
  const personScore = document.createElement('p');
  personScore.innerText = `${e.name}: ${e.score}`;
  scoreBoard.append(personScore);
});
