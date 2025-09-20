var textWrapper = document.querySelector(".titleAnimate");

// Remplacer chaque lettre par un <span>
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Lancer l’animation
anime
  .timeline({ loop: true })
  .add({
    targets: ".titleAnimate .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 150,
    delay: (el, i) => 50 * (i + 1),
  })
  .add({
    targets: ".titleAnimate",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 8200,
  });
