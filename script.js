const scenes = [
  {
    title: 'The Interview Begins (Present Day)',
    visual: 'Interview room. Candidate pauses and enters an internal highlight reel.',
    icon: '🪑🧠',
    speaker: 'Interviewer → Candidate (inner voice)',
    line: '“Tell me a bit about yourself.” … “Aw snap, six years in the game — play it cool, deliver the highlight reel.”'
  },
  {
    title: 'Realizing the Journey',
    visual: '2017→2023 timeline with client wins, late nights, and team celebrations.',
    icon: '📈🚀',
    speaker: 'Inner Voice',
    line: '“Six years of grind and growth: from newbie to trusted go-to for answers.”'
  },
  {
    title: 'Blending Customer Success and Sales',
    visual: 'Split-screen CSM + Sales Manager versions of the same leader.',
    icon: '🤝⚖️',
    speaker: 'Inner Voice',
    line: '“I can nurture accounts and close expansion — a rare CS + commercial combo.”'
  },
  {
    title: 'Owning Renewals and Expansion',
    visual: 'Renewal table + expansion chart soaring beyond target.',
    icon: '📄📊',
    speaker: 'Inner Voice',
    line: '“Owned renewals, drove expansions, and led teams that exceeded retention and growth targets quarter after quarter.”'
  },
  {
    title: 'Lessons Learned: Influence and Alignment',
    visual: 'Boardroom persuasion, Sherlock ROI, and tech-to-business translation.',
    icon: '🕵️‍♂️💼',
    speaker: 'Inner Voice',
    line: '“Influence execs, uncover business value, and map technical complexity to measurable outcomes.”'
  },
  {
    title: 'Big Realization',
    visual: 'Contract signing flips into a starting line race.',
    icon: '🏁✍️',
    speaker: 'Inner Voice',
    line: '“Customers don’t buy software — they buy outcomes. Signature is the starting gun.”'
  },
  {
    title: 'CSM Wins Montage',
    visual: 'Adoption workshop, ROI success plans, and fast cloud migration.',
    icon: '☁️🎯',
    speaker: 'Inner Voice',
    line: '“Adoption lifted 27–47%, ROI plans got specific, and onboarding time-to-value dropped by 40%+.”'
  },
  {
    title: 'Transition to Sales Manager',
    visual: 'Coaching reps, publishing playbooks, and cross-functional orchestration.',
    icon: '📘🎼',
    speaker: 'Inner Voice',
    line: '“Coached value-based conversations, scaled best practices, and aligned Product, Support, and Sales.”'
  },
  {
    title: 'What Drives Me',
    visual: 'Secure modernization, cloud adoption, and measurable business value.',
    icon: '🛡️🏢',
    speaker: 'Inner Voice',
    line: '“I’m energized by helping enterprises modernize securely and unlock real outcomes.”'
  },
  {
    title: 'The Differentiator',
    visual: 'Half CSM analyst, half sales leader — merged into one profile.',
    icon: '🧰💡',
    speaker: 'Inner Voice',
    line: '“Data-driven CS + sales discipline = full-lifecycle value delivery from day zero onward.”'
  },
  {
    title: 'Snap Back to Reality',
    visual: 'Flashback fades. Interview room returns. Breath in. Posture up.',
    icon: '⏱️✨',
    speaker: 'Inner Voice',
    line: '“Alright, showtime.”'
  },
  {
    title: 'Polished Answer Out Loud',
    visual: 'Confident, concise delivery with quantified business impact.',
    icon: '🎤✅',
    speaker: 'Candidate',
    line: '“I’m a strategic CS leader with 6+ years across CS and Sales, delivering adoption gains, renewals, expansion, and measurable outcomes aligned to Quest’s mission.”'
  }
];

let index = 0;
let running = true;
const msPerScene = 7000;
const sceneEl = document.getElementById('scene');
const sceneNumEl = document.getElementById('scene-number');
const titleEl = document.getElementById('scene-title');
const visualEl = document.getElementById('visual');
const speakerEl = document.getElementById('speaker');
const lineEl = document.getElementById('line');
const progress = document.getElementById('progress');
const toggleBtn = document.getElementById('toggle');
const restartBtn = document.getElementById('restart');

function renderScene(i) {
  const s = scenes[i];
  sceneEl.style.opacity = 0;
  sceneEl.style.transform = 'scale(0.95)';
  setTimeout(() => {
    sceneEl.textContent = s.icon;
    sceneNumEl.textContent = `Scene ${i + 1}`;
    titleEl.textContent = s.title;
    visualEl.textContent = s.visual;
    speakerEl.textContent = s.speaker;
    lineEl.textContent = s.line;
    sceneEl.style.opacity = 1;
    sceneEl.style.transform = 'scale(1)';
  }, 230);
}

function animateProgress(startTime) {
  function frame(now) {
    if (!running) return;
    const pct = Math.min(((now - startTime) / msPerScene) * 100, 100);
    progress.style.width = `${pct}%`;
    if (pct >= 100) {
      index = (index + 1) % scenes.length;
      renderScene(index);
      animateProgress(performance.now());
    } else {
      requestAnimationFrame(frame);
    }
  }
  requestAnimationFrame(frame);
}

toggleBtn.addEventListener('click', () => {
  running = !running;
  toggleBtn.textContent = running ? 'Pause' : 'Resume';
  if (running) animateProgress(performance.now() - (parseFloat(progress.style.width) || 0) * msPerScene / 100);
});

restartBtn.addEventListener('click', () => {
  index = 0;
  running = true;
  toggleBtn.textContent = 'Pause';
  progress.style.width = '0%';
  renderScene(index);
  animateProgress(performance.now());
});

renderScene(index);
animateProgress(performance.now());
