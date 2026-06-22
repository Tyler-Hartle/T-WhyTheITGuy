:root {
  --ink: #11243f;
  --muted: #5d6f84;
  --paper: #fffdf7;
  --card: rgba(255, 255, 255, 0.92);
  --blue: #1677ff;
  --sky: #34d5ff;
  --purple: #8358ff;
  --pink: #ff5bd6;
  --yellow: #ffe45c;
  --orange: #ff9838;
  --green: #5be878;
  --red: #ff5d5d;
  --line: rgba(17, 36, 63, 0.12);
  --shadow: 0 20px 60px rgba(28, 82, 180, 0.18);
  --round: 28px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Trebuchet MS", "Arial Rounded MT Bold", system-ui, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 12% 12%, rgba(255, 91, 214, .20), transparent 28%),
    radial-gradient(circle at 85% 10%, rgba(52, 213, 255, .28), transparent 32%),
    radial-gradient(circle at 50% 92%, rgba(255, 228, 92, .32), transparent 38%),
    linear-gradient(180deg, #f6fbff 0%, #fff8ee 52%, #f5f4ff 100%);
}

a { color: inherit; }
img, video { max-width: 100%; display: block; }
.skip-link {
  position: absolute;
  left: -999px;
  top: 12px;
  background: var(--ink);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  z-index: 99;
}
.skip-link:focus { left: 12px; }

.topbar {
  position: sticky;
  top: 14px;
  z-index: 20;
  width: min(1180px, calc(100% - 28px));
  margin: 14px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 12px 16px;
  border: 2px solid rgba(255,255,255,.92);
  border-radius: 999px;
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(14px);
  box-shadow: 0 14px 40px rgba(28, 82, 180, .12);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  min-width: 160px;
}
.brand-mark {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  color: white;
  font-weight: 1000;
  font-size: 20px;
  background: linear-gradient(135deg, var(--blue), var(--purple), var(--pink));
  box-shadow: 0 10px 24px rgba(131,88,255,.25);
}
.brand strong { display: block; font-size: 21px; line-height: 1; }
.brand small { display: block; color: var(--muted); font-size: 12px; font-weight: 800; }
.nav-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; }
.nav-links a {
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 999px;
  color: #33485f;
  font-weight: 900;
  font-size: 14px;
}
.nav-links a:hover { background: #edf6ff; color: var(--blue); }
.top-cta, .button, .game-top button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  text-decoration: none;
  font-weight: 1000;
  cursor: pointer;
}
.top-cta, .button.primary {
  color: white;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  box-shadow: 0 14px 30px rgba(22,119,255,.25);
}
.button.secondary {
  color: var(--ink);
  background: white;
  border: 2px solid rgba(17,36,63,.1);
}

main { width: min(1180px, calc(100% - 28px)); margin: 0 auto; }
.hero {
  min-height: 680px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 48px;
  padding: 86px 0 54px;
}
.pill {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  padding: 9px 13px;
  margin: 0 0 16px;
  background: white;
  color: var(--blue);
  border: 2px solid rgba(22,119,255,.13);
  font-weight: 1000;
  font-size: 13px;
  letter-spacing: .02em;
}
h1, h2, h3 { margin: 0; line-height: .98; }
h1 {
  max-width: 720px;
  font-size: clamp(56px, 8vw, 104px);
  letter-spacing: -0.06em;
}
h2 { font-size: clamp(38px, 5.4vw, 72px); letter-spacing: -0.045em; }
h3 { font-size: 28px; letter-spacing: -0.03em; }
.hero-lead, .section-header p, .quest-intro p, .grownups-card p {
  color: var(--muted);
  font-size: 20px;
  line-height: 1.55;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 28px 0; }
.safety-rule {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.safety-rule span {
  padding: 12px 16px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 12px 24px rgba(28,82,180,.10);
  font-weight: 1000;
}
.safety-rule span:nth-child(1) { color: var(--purple); }
.safety-rule span:nth-child(2) { color: var(--orange); }
.safety-rule span:nth-child(3) { color: var(--blue); }

.hero-mascot {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
}
.hero-mascot img {
  width: min(450px, 92%);
  border: 8px solid white;
  border-radius: 44px;
  transform: rotate(-2deg);
  box-shadow: 0 28px 80px rgba(28,82,180,.28);
  z-index: 2;
  animation: floatBot 4s ease-in-out infinite;
}
.speech-bubble {
  position: absolute;
  right: 4%;
  bottom: 12%;
  z-index: 3;
  max-width: 260px;
  padding: 16px 18px;
  border-radius: 24px 24px 24px 6px;
  background: white;
  border: 3px solid var(--yellow);
  box-shadow: var(--shadow);
  font-weight: 1000;
}
.orbit {
  position: absolute;
  border-radius: 999px;
  filter: blur(.2px);
  z-index: 1;
}
.orbit-one {
  width: 420px;
  height: 420px;
  background: linear-gradient(135deg, rgba(255,91,214,.35), rgba(52,213,255,.28));
  animation: pulse 5s ease-in-out infinite;
}
.orbit-two {
  width: 260px;
  height: 260px;
  background: linear-gradient(135deg, rgba(255,228,92,.46), rgba(91,232,120,.28));
  transform: translate(100px, -120px);
}
@keyframes floatBot { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-14px) rotate(1deg); } }
@keyframes pulse { 0%,100% { transform: scale(1); opacity: .9; } 50% { transform: scale(1.08); opacity: .65; } }

.engagement-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 0 56px;
}
.engagement-strip article, .video-card, .mission-card, .game-card, .quest-intro, .grownups-card, .episode-card {
  background: var(--card);
  border: 2px solid rgba(255,255,255,.86);
  border-radius: var(--round);
  box-shadow: var(--shadow);
}
.engagement-strip article { padding: 20px; }
.engagement-strip span { font-size: 34px; display: block; margin-bottom: 8px; }
.engagement-strip strong { display: block; font-size: 18px; }
.engagement-strip p { color: var(--muted); margin: 6px 0 0; line-height: 1.4; }

.watch-section, .missions-section, .episodes-section, .grownups-section, .quest-section { padding: 70px 0; }
.section-header { max-width: 760px; margin-bottom: 28px; }
.centered { text-align: center; margin-inline: auto; }
.video-stage {
  display: grid;
  grid-template-columns: 1.6fr .8fr;
  gap: 22px;
  align-items: stretch;
}
.video-frame {
  padding: 14px;
  border-radius: 36px;
  background: linear-gradient(135deg, var(--blue), var(--purple), var(--pink), var(--yellow));
  box-shadow: var(--shadow);
}
.video-frame video {
  width: 100%;
  min-height: 410px;
  object-fit: cover;
  border-radius: 24px;
  background: #000;
}
.video-card { padding: 30px; }
.video-card ul { padding-left: 22px; margin: 18px 0 0; color: var(--muted); line-height: 1.65; font-weight: 800; }

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.mission-card {
  position: relative;
  overflow: hidden;
  min-height: 240px;
  padding: 24px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.mission-card:hover { transform: translateY(-6px) rotate(-.5deg); box-shadow: 0 30px 80px rgba(28,82,180,.24); }
.mission-card .emoji { font-size: 42px; }
.mission-card h3 { margin: 14px 0 10px; }
.mission-card p { color: var(--muted); line-height: 1.55; }
.mission-card strong { color: var(--ink); }
.mission-card::after {
  content: "";
  position: absolute;
  inset: auto -40px -50px auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: .25;
  background: currentColor;
}

.quest-section {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 24px;
  align-items: stretch;
}
.quest-intro, .game-card { padding: 28px; }
.quest-intro img { margin-top: 24px; border-radius: 28px; border: 6px solid white; box-shadow: 0 18px 40px rgba(28,82,180,.16); }
.game-top {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  margin-bottom: 16px;
}
.game-top span {
  color: var(--blue);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 13px;
}
.game-top strong { display: block; font-size: 34px; }
.game-top button { background: var(--ink); color: white; }
.progress-track { height: 16px; background: #e7edf7; border-radius: 999px; overflow: hidden; margin-bottom: 18px; }
#progressBar { height: 100%; width: 0%; background: linear-gradient(90deg, var(--green), var(--sky), var(--purple), var(--pink)); transition: width .35s ease; }
.robot-line {
  padding: 16px 18px;
  margin-bottom: 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, #eaf6ff, #f5efff);
  color: var(--blue);
  font-weight: 1000;
}
#questionText { line-height: 1.1; margin-bottom: 18px; }
.answer-options { display: grid; gap: 12px; }
.answer-options button {
  min-height: 62px;
  text-align: left;
  padding: 16px 18px;
  border-radius: 20px;
  border: 3px solid rgba(17,36,63,.1);
  background: white;
  color: var(--ink);
  font-size: 17px;
  font-weight: 1000;
  cursor: pointer;
  transition: .18s ease;
}
.answer-options button:hover { transform: translateY(-3px); border-color: var(--sky); }
.answer-options button.correct { background: rgba(91,232,120,.23); border-color: var(--green); }
.answer-options button.wrong { background: rgba(255,93,93,.16); border-color: var(--red); }
.feedback { min-height: 30px; color: var(--blue); font-weight: 1000; line-height: 1.45; }
.badge-shelf { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; }
.badge {
  padding: 10px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--yellow), #fff5b0);
  box-shadow: 0 8px 18px rgba(255, 152, 56, .18);
  font-weight: 1000;
}

.episode-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.episode-card { padding: 22px; }
.episode-card span {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 18px;
  color: white;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  font-weight: 1000;
  margin-bottom: 14px;
}
.episode-card h3 { font-size: 22px; line-height: 1.05; margin-bottom: 10px; }
.episode-card p { color: var(--muted); line-height: 1.5; }

.grownups-card {
  display: grid;
  grid-template-columns: 1fr .9fr;
  gap: 34px;
  padding: 34px;
  background: linear-gradient(135deg, rgba(255,255,255,.96), rgba(236,248,255,.96));
}
.adult-notes { display: grid; gap: 14px; }
.adult-notes article {
  padding: 18px;
  border-radius: 22px;
  background: white;
  border: 2px solid rgba(17,36,63,.08);
}
.adult-notes strong { display: block; margin-bottom: 6px; }
.adult-notes span { color: var(--muted); line-height: 1.45; }

footer {
  width: min(1180px, calc(100% - 28px));
  margin: 30px auto 50px;
  padding: 26px 0 0;
  border-top: 2px solid rgba(17,36,63,.08);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
}
footer strong { color: var(--ink); }

@media (max-width: 980px) {
  .topbar { border-radius: 30px; align-items: flex-start; flex-direction: column; }
  .top-cta { display: none; }
  .hero, .video-stage, .quest-section, .grownups-card { grid-template-columns: 1fr; }
  .hero { min-height: auto; padding-top: 56px; }
  .hero-mascot { min-height: 440px; }
  .engagement-strip, .episode-grid { grid-template-columns: repeat(2, 1fr); }
  .mission-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .nav-links { justify-content: flex-start; }
  .nav-links a { padding: 8px 9px; font-size: 13px; }
  .engagement-strip, .mission-grid, .episode-grid { grid-template-columns: 1fr; }
  .watch-section, .missions-section, .episodes-section, .grownups-section, .quest-section { padding: 48px 0; }
  .video-frame video { min-height: 260px; }
  .hero-mascot { min-height: 340px; }
  .speech-bubble { position: static; margin-top: -40px; }
  footer { flex-direction: column; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
}
