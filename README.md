<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>T-Why the IT Guy | Tech Safety Lab</title>
  <meta name="description" content="T-Why the IT Guy is a colorful kid-friendly tech safety webpage with videos, mini lessons, and an interactive Safety Quest game." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" id="top">
    <a class="brand" href="#top" aria-label="T-Why the IT Guy home">
      <span class="brand-mark" aria-hidden="true">T?</span>
      <span>
        <strong>T-Why</strong>
        <small>The IT Guy</small>
      </span>
    </a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#watch">Watch</a>
      <a href="#missions">Missions</a>
      <a href="#quest">Quest</a>
      <a href="#episodes">Episodes</a>
      <a href="#grownups">Grown-ups</a>
    </nav>
    <a class="top-cta" href="#quest">Start Quest</a>
  </header>

  <main id="main">
    <section class="hero">
      <div class="hero-copy">
        <p class="pill">Kid Tech Safety • AI Awareness • Scam Spotting • Smart Clicks</p>
        <h1>Pause. Ask why. Stay safe online.</h1>
        <p class="hero-lead">
          Meet <strong>T-Why the IT Guy</strong>, a friendly robot guide who turns online safety into quick videos, colorful missions, and playable practice for kids.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#watch">▶ Watch T-Why</a>
          <a class="button secondary" href="#missions">Pick a Mission</a>
        </div>
        <div class="safety-rule" aria-label="T-Why safety rule">
          <span>1. Pause</span>
          <span>2. Ask why</span>
          <span>3. Ask a grown-up</span>
        </div>
      </div>

      <div class="hero-mascot" aria-label="T-Why mascot">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <img src="assets/twhy-avatar.jpg" alt="T-Why the IT Guy robot mascot smiling in a tech lab" />
        <div class="speech-bubble">Hi! I’m T-Why. Ready for a tech check?</div>
      </div>
    </section>

    <section class="engagement-strip" aria-label="Engagement design choices">
      <article>
        <span>⚡</span>
        <strong>Fast hook</strong>
        <p>One clear safety idea at a time.</p>
      </article>
      <article>
        <span>🎮</span>
        <strong>Play loop</strong>
        <p>Answer, feedback, XP, badge.</p>
      </article>
      <article>
        <span>🌈</span>
        <strong>Color blocks</strong>
        <p>Bright sections guide attention.</p>
      </article>
      <article>
        <span>🤖</span>
        <strong>Character led</strong>
        <p>T-Why teaches without lecturing.</p>
      </article>
    </section>

    <section class="watch-section" id="watch">
      <div class="section-header centered">
        <p class="pill">Launch Video</p>
        <h2>Start with the character. Then teach the lesson.</h2>
        <p>
          The first video should introduce T-Why, set the safety rule, and make kids curious enough to play the quest.
        </p>
      </div>
      <div class="video-stage">
        <div class="video-frame">
          <video controls preload="metadata" poster="assets/twhy-avatar.jpg">
            <source src="assets/twhy-tech-lab-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <aside class="video-card">
          <h3>What this video should do</h3>
          <ul>
            <li>Introduce T-Why in the first few seconds.</li>
            <li>Teach one topic, not five at once.</li>
            <li>End with a repeatable rule kids can say back.</li>
            <li>Push kids into a quick mission or parent conversation.</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="missions-section" id="missions">
      <div class="section-header">
        <p class="pill">Choose a Mission</p>
        <h2>Short lessons built for attention.</h2>
        <p>
          Each mission uses a bright card, one safety problem, one kid-friendly rule, and one action step.
        </p>
      </div>
      <div class="mission-grid" id="missionGrid"></div>
    </section>

    <section class="quest-section" id="quest">
      <div class="quest-intro">
        <p class="pill">Playable Safety Quest</p>
        <h2>Can you pass T-Why’s tech check?</h2>
        <p>
          A browser-only game with immediate feedback, XP, badges, and no personal data collection.
        </p>
        <img src="assets/twhy-classroom.jpg" alt="T-Why teaching a colorful classroom tech safety lesson" />
      </div>

      <div class="game-card" aria-live="polite">
        <div class="game-top">
          <div>
            <span id="levelLabel">Level 1</span>
            <strong id="xpText">0 XP</strong>
          </div>
          <button id="restartBtn" type="button">Restart</button>
        </div>
        <div class="progress-track" aria-hidden="true"><div id="progressBar"></div></div>
        <div class="robot-line" id="robotBubble">T-Why is booting up...</div>
        <h3 id="questionText">Loading question...</h3>
        <div class="answer-options" id="answerOptions"></div>
        <p class="feedback" id="feedbackText"></p>
        <div class="badge-shelf" id="badgeShelf" aria-label="Earned badges"></div>
      </div>
    </section>

    <section class="episodes-section" id="episodes">
      <div class="section-header centered">
        <p class="pill">Intentional Video Series</p>
        <h2>The first season should feel planned, not random.</h2>
        <p>
          Each episode follows a repeatable structure: silly hook, real tech danger, T-Why rule, practice moment, closing catchphrase.
        </p>
      </div>
      <div class="episode-grid" id="episodeGrid"></div>
    </section>

    <section class="grownups-section" id="grownups">
      <div class="grownups-card">
        <div>
          <p class="pill">For Grown-ups</p>
          <h2>A safe, colorful launch point for digital literacy.</h2>
          <p>
            T-Why can support YouTube Shorts, classroom mini-lessons, parent safety talks, sponsorships, printable checklists, and future games. The design keeps the child experience fun while giving adults a clear trust message.
          </p>
        </div>
        <div class="adult-notes">
          <article><strong>No data collection</strong><span>The current game runs locally in the browser.</span></article>
          <article><strong>Simple safety language</strong><span>Kids remember the rule: Pause, ask why, ask a grown-up.</span></article>
          <article><strong>Series-ready</strong><span>Each mission can become a short video, printable, and game level.</span></article>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <strong>T-Why the IT Guy</strong>
    <span>Pause. Ask why. Ask a grown-up.</span>
  </footer>

  <script src="script.js"></script>
</body>
</html>
