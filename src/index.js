import './style.css';
import getScores from './modules/get.js';
import setScores from './modules/set.js';

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  setScores();
});

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', async () => {
  window.location.reload();
});

getScores();
