
/* MIMO'S DREAMVERSE — INTERACTIONS */

document.addEventListener("DOMContentLoaded", () => {
  const mimo = document.querySelector("#mimo");
  const helloButton = document.querySelector("#hello-mimo");
  const message = document.querySelector("#mimo-message");
  const starButton = document.querySelector("#wish-star");

  if (helloButton && message) {
    helloButton.addEventListener("click", () => {
      message.textContent = "Yay! Mimo is happy you are here! ✨💖";

      if (mimo) {
        mimo.classList.remove("mimo-bounce");
        void mimo.offsetWidth;
        mimo.classList.add("mimo-bounce");
      }
    });
  }

  if (starButton && message) {
    starButton.addEventListener("click", () => {
      message.textContent = "Your wish is floating into the dream universe! 🌟";
      createStar();
    });
  }

  function createStar() {
    const star = document.createElement("span");
    star.textContent = "✦";
    star.setAttribute("aria-hidden", "true");
    star.className = "floating-star";

    star.style.left = Math.random() * 90 + 5 + "%";
    star.style.top = Math.random() * 70 + 10 + "vh";

    document.body.appendChild(star);

    window.setTimeout(() => {
      star.remove();
    }, 2500);
  }
});
