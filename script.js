
(() => {
  const $ = (selector) => document.querySelector(selector);

  const toast = $('#toast');
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

  function makeSparkles(count = 25) {
    const symbols = ['✨', '⭐', '💖', '✦', '🌸', '✧'];

    for (let i = 0; i < count; i++) {
      const item = document.createElement('span');

      item.className = 'confetti';
      item.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      item.style.left = `${Math.random() * 100}vw`;
      item.style.top = `${Math.random() * 30}vh`;
      item.style.fontSize = `${14 + Math.random() * 20}px`;
      item.style.setProperty(
        '--dx',
        `${(Math.random() - 0.5) * 200}px`
      );

      document.body.appendChild(item);
      setTimeout(() => item.remove(), 1600);
    }
  }

  // Day and night mode
  $('#nightToggle').addEventListener('click', () => {
    const night = document.body.classList.toggle('night');

    $('#nightToggle').textContent =
      night ? '☀️ Day' : '🌙 Night';

    showToast(
      night
        ? 'Welcome to Mimo’s magical night sky! 🌙'
        : 'Good morning, little star! ☀️'
    );
  });

  // Mimo says hello
  const helloMessages = [
    'Mimo says: You are a little pocket of sunshine! 💖',
    'Boop! A tiny star has chosen you! ⭐',
    'Hee-hee! Mimo is giggling in stardust! ✨',
    'Your kindness is real magic. Never forget that! 🌈'
  ];

  let helloIndex = 0;

  function sayHello() {
    $('#helloMessage').textContent =
      helloMessages[helloIndex % helloMessages.length];

    helloIndex++;
    makeSparkles(15);
  }

  $('#helloBtn').addEventListener('click', sayHello);

  $('#mimoCard').addEventListener('click', () => {
    sayHello();
    showToast('Mimo shared some stardust with you! ✨');
  });

  // Send a wish
  $('#wishBtn').addEventListener('click', () => {
    const input = $('#wishInput');
    const wish = input.value.trim();

    if (!wish) {
      $('#wishMessage').textContent =
        'Write a little wish first, and Mimo will send it with love. 💗';
      input.focus();
      return;
    }

    $('#wishMessage').textContent =
      `Your wish is flying into the stars: “${wish}” ✨`;

    input.value = '';
    makeSparkles(40);
    showToast('Wish sent into the Dreamverse! 💫');
  });

  $('#wishInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      $('#wishBtn').click();
    }
  });

  // Special surprise gift
  const gifts = [
    'Your gift: 3 invisible hugs, 7 lucky sparkles, and one proud Mimo! 💖',
    'Your secret gift: may kindness find its way back to you. 🌟',
    'Mimo found a star for you. Keep shining in your own way! ✨'
  ];

  let giftIndex = 0;

  $('#surpriseBtn').addEventListener('click', () => {
    $('#surpriseMessage').textContent =
      gifts[giftIndex % gifts.length];

    giftIndex++;
    makeSparkles(50);
    showToast('Surprise unlocked! 🎁');
  });

  // Animated star background
  const canvas = $('#starfield');
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let stars = [];

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    stars = Array.from(
      { length: Math.min(100, Math.floor(width / 12)) },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        phase: Math.random() * Math.PI * 2
      })
    );
  }

  function drawStars(time = 0) {
    ctx.clearRect(0, 0, width, height);

    for (const star of stars) {
      const opacity =
        0.2 + (Math.sin(time * 0.0015 + star.phase) + 1) * 0.3;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(drawStars);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  requestAnimationFrame(drawStars);
})();
