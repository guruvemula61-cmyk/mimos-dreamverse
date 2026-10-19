
(() => {
  "use strict";

  // ==========================================
  // MIMO'S DREAMVERSE — INTERACTIVE EXPERIENCE
  // ==========================================

  const $ = (selector) => document.querySelector(selector);

  const nightToggle = $("#nightToggle");
  const helloBtn = $("#helloBtn");
  const helloMessage = $("#helloMessage");
  const mimoCard = $("#mimoCard");

  const wishInput = $("#wishInput");
  const wishBtn = $("#wishBtn");
  const wishMessage = $("#wishMessage");

  const surpriseBtn = $("#surpriseBtn");
  const surpriseMessage = $("#surpriseMessage");

  const starfield = $("#starfield");
  const toast = $("#toast");

  // Dream Garden elements
  const gardenArea = $("#gardenArea");
  const flowerCount = $("#flowerCount");
  const starCount = $("#starCount");
  const gardenMessage = $("#gardenMessage");
  const gardenReset = $("#gardenReset");
  const treasureBox = $("#treasureBox");
  const claimGift = $("#claimGift");
  const gardenGiftMessage = $("#gardenGiftMessage");

  let foundFlowers = 0;
  let foundStars = 0;
  let toastTimer;
  let toastTimeout;
  let gardenComplete = false;

  const totalFlowers = 5;
  const totalStars = 5;

  const helloMessages = [
    "Mimo is happy you are here! ✨",
    "You make this little universe brighter! 🌈",
    "A tiny sparkle of magic just found you! 💖",
    "Welcome to your own little dream world! ☁️",
    "Today is a perfect day to dream big! ⭐"
  ];

  const surpriseMessages = [
    "You are made of stardust and wonderful possibilities! ✨",
    "Somewhere in the universe, a little star is shining just for you! 🌟",
    "Your dreams deserve a sky full of stars! 🌌",
    "Never underestimate the magic of being yourself! 💗",
    "Sending you one million imaginary sparkles! 🪄"
  ];

  // ------------------------------------------
  // Utility functions
  // ------------------------------------------

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function makeSparkles(x, y, amount = 12) {
    for (let i = 0; i < amount; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle-particle";

      const angle = Math.random() * Math.PI * 2;
      const distance = 35 + Math.random() * 90;

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      sparkle.style.setProperty(
        "--sparkle-size",
        `${5 + Math.random() * 10}px`
      );

      sparkle.textContent = randomItem(["✦", "✧", "✨", "⋆", "♡"]);
      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 1100);
    }
  }

  function sparkleFromElement(element, amount = 14) {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    makeSparkles(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      amount
    );
  }

  function updateCounter(element, value, total) {
    if (element) {
      element.textContent = `${value}/${total}`;
    }
  }

  // ------------------------------------------
  // 1. Night mode toggle
  // ------------------------------------------

  if (nightToggle) {
    nightToggle.addEventListener("click", () => {
      const isNight = document.body.classList.toggle("night-mode");

      nightToggle.textContent = isNight
        ? "☀️ Day Mode"
        : "🌙 Night Mode";

      nightToggle.setAttribute("aria-pressed", String(isNight));

      showToast(
        isNight
          ? "The dream universe is glowing under the moon! 🌙"
          : "Good morning, little dreamer! ☀️"
      );
    });
  }

  // ------------------------------------------
  // 2. Say hello to Mimo
  // ------------------------------------------

  if (helloBtn) {
    helloBtn.addEventListener("click", () => {
      if (helloMessage) {
        helloMessage.textContent = randomItem(helloMessages);
        helloMessage.classList.remove("message-pop");
        void helloMessage.offsetWidth;
        helloMessage.classList.add("message-pop");
      }

      sparkleFromElement(helloBtn, 18);
      showToast("Mimo says hello! 💖");
    });
  }

  // ------------------------------------------
  // 3. Mimo character interaction
  // ------------------------------------------

  if (mimoCard) {
    mimoCard.addEventListener("click", () => {
      sparkleFromElement(mimoCard, 22);
      showToast("✨ You discovered a little Mimo magic!");

      mimoCard.classList.remove("mimo-bounce");
      void mimoCard.offsetWidth;
      mimoCard.classList.add("mimo-bounce");

      setTimeout(() => {
        mimoCard.classList.remove("mimo-bounce");
      }, 800);
    });
  }

  // ------------------------------------------
  // 4. Dream Garden game
  // ------------------------------------------

  function updateGarden() {
    updateCounter(flowerCount, foundFlowers, totalFlowers);
    updateCounter(starCount, foundStars, totalStars);

    if (gardenComplete) return;

    if (foundFlowers === totalFlowers && foundStars === totalStars) {
      gardenComplete = true;

      if (gardenMessage) {
        gardenMessage.textContent =
          "You found every flower and star! Your dream garden is complete! 🌈";
      }

      if (treasureBox) {
        treasureBox.hidden = false;
        treasureBox.classList.add("treasure-unlocked");
      }

      showToast("Dream Garden completed! Your surprise is unlocked! 🎁");
      sparkleFromElement(gardenArea, 35);
    } else if (gardenMessage) {
      gardenMessage.textContent =
        `Keep exploring! Find ${totalFlowers - foundFlowers} more flowers ` +
        `and ${totalStars - foundStars} more stars. ✨`;
    }
  }

  function createGardenItems() {
    if (!gardenArea) return;

    // Clear previous game items while preserving decorative hills.
    gardenArea
      .querySelectorAll(".garden-collectible")
      .forEach((item) => item.remove());

    foundFlowers = 0;
    foundStars = 0;
    gardenComplete = false;

    if (treasureBox) {
      treasureBox.hidden = true;
      treasureBox.classList.remove("treasure-unlocked");
    }

    if (gardenGiftMessage) {
      gardenGiftMessage.textContent = "";
    }

    const items = [
      ...Array(totalFlowers).fill("flower"),
      ...Array(totalStars).fill("star")
    ];

    // Shuffle the collectibles.
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((type, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = `garden-collectible ${type}-collectible`;
      item.dataset.type = type;

      const symbol = type === "flower" ? "🌸" : "⭐";
      const label = type === "flower" ? "flower" : "star";

      item.textContent = symbol;
      item.setAttribute("aria-label", `Collect a hidden ${label}`);
      item.title = `Find this ${label}!`;

      // Deterministic positions help keep items inside the garden.
      const left = 7 + ((index * 19 + 11) % 84);
      const top = 12 + ((index * 23 + 7) % 68);

      item.style.left = `${left}%`;
      item.style.top = `${top}%`;
      item.style.setProperty("--item-delay", `${index * 0.06}s`);

      item.addEventListener("click", () => {
        if (item.classList.contains("collected") || gardenComplete) {
          return;
        }

        item.classList.add("collected");
        item.disabled = true;

        if (type === "flower") {
          foundFlowers++;
          showToast("A magical flower collected! 🌸");
        } else {
          foundStars++;
          showToast("A sparkling star collected! ⭐");
        }

        sparkleFromElement(item, 8);
        updateGarden();
      });

      gardenArea.appendChild(item);
    });

    updateGarden();

    if (gardenMessage) {
      gardenMessage.textContent =
        "Explore the garden and collect all 5 flowers and 5 stars! 🌷";
    }
  }

  if (gardenArea) {
    createGardenItems();
  }

  if (gardenReset) {
    gardenReset.addEventListener("click", () => {
      createGardenItems();
      showToast("Your Dream Garden has been refreshed! 🌱");
    });
  }

  if (claimGift) {
    claimGift.addEventListener("click", () => {
      if (!gardenComplete) {
        showToast("Collect all flowers and stars first! 🌸");
        return;
      }

      if (gardenGiftMessage) {
        gardenGiftMessage.textContent =
          "🎁 Your gift is a little reminder: your imagination can create beautiful worlds. Keep dreaming, little star!";
      }

      sparkleFromElement(claimGift, 25);
      showToast("Your Dream Garden gift is ready! 💝");
    });
  }

  // ------------------------------------------
  // 5. Make a wish
  // ------------------------------------------

  function makeWish() {
    if (!wishInput || !wishMessage) return;

    const wish = wishInput.value.trim();

    if (!wish) {
      wishMessage.textContent =
        "Close your eyes, think of a dream, and write your wish here! 💫";
      wishInput.focus();
      return;
    }

    if (wish.length > 180) {
      wishMessage.textContent =
        "Your wish is beautiful! Please keep it under 180 characters. 💗";
      return;
    }

    wishMessage.textContent =
      `✨ Your wish has been planted in the Dreamverse: “${wish}” ` +
      "May you keep believing in your dreams! 🌱";

    sparkleFromElement(wishBtn, 20);
    showToast("Your wish is now part of the Dreamverse! 🌠");
  }

  if (wishBtn) {
    wishBtn.addEventListener("click", makeWish);
  }

  if (wishInput) {
    wishInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        makeWish();
      }
    });
  }

  // ------------------------------------------
  // 6. Surprise message
  // ------------------------------------------

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
      if (surpriseMessage) {
        surpriseMessage.textContent = randomItem(surpriseMessages);
        surpriseMessage.classList.remove("message-pop");
        void surpriseMessage.offsetWidth;
        surpriseMessage.classList.add("message-pop");
      }

      sparkleFromElement(surpriseBtn, 30);
      showToast("A little surprise just appeared! 🎉");
    });
  }

  // ------------------------------------------
  // 7. Floating background stars
  // ------------------------------------------

  function createBackgroundStars() {
    if (!starfield) return;

    const context = starfield.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let stars = [];
    let animationFrame = null;
    let lastFrameTime = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      starfield.width = Math.round(width * ratio);
      starfield.height = Math.round(height * ratio);
      starfield.style.width = `${width}px`;
      starfield.style.height = `${height}px`;

      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const starCount = Math.min(
        110,
        Math.max(35, Math.floor((width * height) / 13000))
      );

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.5 + Math.random() * 1.7,
        alpha: 0.25 + Math.random() * 0.65,
        speed: 0.08 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2
      }));

      drawStars(0);
    }

    function drawStars(time) {
      context.clearRect(0, 0, width, height);

      const nightMode = document.body.classList.contains("night-mode");

      stars.forEach((star) => {
        const twinkle = reducedMotion
          ? 1
          : 0.65 + Math.sin(time * 0.0015 + star.phase) * 0.3;

        context.beginPath();
        context.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle = nightMode
          ? `rgba(255,255,255,${star.alpha * twinkle})`
          : `rgba(173,125,220,${star.alpha * twinkle * 0.55})`;

        context.fill();

        if (!reducedMotion) {
          star.y -= star.speed * 0.15;

          if (star.y < -3) {
            star.y = height + 3;
            star.x = Math.random() * width;
          }
        }
      });
    }

    function animate(time) {
      if (document.hidden) {
        animationFrame = null;
        return;
      }

      // Limit animation work on slower devices.
      if (time - lastFrameTime >= 40) {
        drawStars(time);
        lastFrameTime = time;
      }

      animationFrame = requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (reducedMotion || animationFrame !== null) return;
      animationFrame = requestAnimationFrame(animate);
    }

    function stopAnimation() {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    });

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    startAnimation();
  }

  createBackgroundStars();

  // ------------------------------------------
  // 8. Small accessibility and startup details
  // ------------------------------------------

  if (toast) {
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
  }

  if (wishMessage) {
    wishMessage.setAttribute("aria-live", "polite");
  }

  if (gardenMessage) {
    gardenMessage.setAttribute("aria-live", "polite");
  }

  if (surpriseMessage) {
    surpriseMessage.setAttribute("aria-live", "polite");
  }

  // Remove animation classes after use.
  document.addEventListener("animationend", (event) => {
    const target = event.target;

    if (
      target instanceof HTMLElement &&
      target.classList.contains("message-pop")
    ) {
      target.classList.remove("message-pop");
    }
  });

  // Friendly welcome.
  window.addEventListener("load", () => {
    showToast("Welcome to Mimo’s Dreamverse! ✨");
  });

})();
