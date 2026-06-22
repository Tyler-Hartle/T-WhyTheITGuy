const missions = [
  { icon: '🔐', title: 'Password Power', color: '#1667ff', text: 'Build a strong password like a secret recipe: long, mixed, and not easy to guess.' },
  { icon: '🕵️', title: 'Scam Spotter', color: '#ff4eb8', text: 'Look for pressure, weird links, prizes, and messages that make you rush.' },
  { icon: '📶', title: 'Wi-Fi Check', color: '#20d4ff', text: 'Public Wi-Fi is not the place for passwords, payments, or private info.' },
  { icon: '🤖', title: 'AI Awareness', color: '#8b35ff', text: 'AI can help, but it can also be wrong. Ask a grown-up before trusting big answers.' },
  { icon: '📲', title: 'Download Detective', color: '#20d47b', text: 'Before downloading games, mods, or apps, check the source and ask permission.' },
  { icon: '💬', title: 'Kindness Keyboard', color: '#ff8a2a', text: 'If it would hurt out loud, pause before typing it online.' }
];

const questions = [
  {
    q: 'A game pop-up says: “Click now to win free coins!” What should you do first?',
    answers: ['Click fast before it disappears', 'Pause and ask why it wants a click', 'Send it to every friend'],
    correct: 1,
    badge: 'Smart Click Badge'
  },
  {
    q: 'Which password is safer?',
    answers: ['dog123', 'myname2024', 'PurpleRocket!River77'],
    correct: 2,
    badge: 'Password Power Badge'
  },
  {
    q: 'A stranger in chat asks for your school name. What is the T-Why move?',
    answers: ['Tell them if they seem nice', 'Ignore the safety rule', 'Stop and ask a grown-up'],
    correct: 2,
    badge: 'Privacy Shield Badge'
  },
  {
    q: 'AI gives you an answer that sounds confident. What should you remember?',
    answers: ['AI is always right', 'AI can be helpful but needs checking', 'Never ask questions again'],
    correct: 1,
    badge: 'AI Checker Badge'
  }
];

const missionGrid = document.getElementById('missionGrid');
missions.forEach((mission) => {
  const card = document.createElement('article');
  card.className = 'mission-card';
  card.style.setProperty('--card-color', mission.color);
  card.innerHTML = `<div class="mission-icon">${mission.icon}</div><h3>${mission.title}</h3><p>${mission.text}</p>`;
  missionGrid.appendChild(card);
});

let index = 0;
let xp = 0;
const badges = new Set();

const questionText = document.getElementById('questionText');
const answerButtons = document.getElementById('answerButtons');
const feedbackText = document.getElementById('feedbackText');
const nextQuestion = document.getElementById('nextQuestion');
const xpScore = document.getElementById('xpScore');
const badgeCount = document.getElementById('badgeCount');
const progressBar = document.getElementById('progressBar');

function renderQuestion() {
  const item = questions[index];
  questionText.textContent = item.q;
  answerButtons.innerHTML = '';
  feedbackText.textContent = '';
  nextQuestion.style.display = 'none';
  progressBar.style.width = `${((index) / questions.length) * 100}%`;

  item.answers.forEach((answer, i) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => checkAnswer(button, i));
    answerButtons.appendChild(button);
  });
}

function checkAnswer(button, choice) {
  const item = questions[index];
  const buttons = [...answerButtons.querySelectorAll('button')];
  buttons.forEach((btn) => (btn.disabled = true));

  if (choice === item.correct) {
    button.classList.add('correct');
    xp += 25;
    badges.add(item.badge);
    feedbackText.textContent = `Nice tech check! You earned the ${item.badge}.`;
  } else {
    button.classList.add('wrong');
    buttons[item.correct].classList.add('correct');
    feedbackText.textContent = 'Good try. T-Why says: Pause, ask why, then choose the safest option.';
  }

  xpScore.textContent = xp;
  badgeCount.textContent = badges.size;
  progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;
  nextQuestion.style.display = 'inline-flex';
}

nextQuestion.addEventListener('click', () => {
  index = (index + 1) % questions.length;
  renderQuestion();
});

renderQuestion();
