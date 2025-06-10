const startDate = new Date("2023-11-20");
const weddingDate = new Date("2025-11-25");
const now = new Date();

// Sevgili olduğunuz süre
const timeDiff = now - startDate;
const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

const years = Math.floor(daysTogether / 365);
const months = Math.floor((daysTogether % 365) / 30.4375); // Ortalama ay uzunluğu
const days = Math.floor((daysTogether % 365) % 30.4375);

document.getElementById("together").innerText =
  `${years} yıl, ${months} ay, ${days} gün`;

// Evliliğe kalan süre
const timeLeft = weddingDate - now;
if (timeLeft > 0) {
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const yearsLeft = Math.floor(daysLeft / 365);
  const monthsLeft = Math.floor((daysLeft % 365) / 30.4375);
  const daysLeftFinal = Math.floor((daysLeft % 365) % 30.4375);

  document.getElementById("until-marriage").innerText =
    `${yearsLeft} yıl, ${monthsLeft} ay, ${daysLeftFinal} gün`;
} else {
  document.getElementById("until-marriage").innerText = "Evlenmişsiniz! 👰🤵💍";
}
