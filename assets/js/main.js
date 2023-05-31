// GLOBAL SCOPE =====
const timeOutput = document.querySelector("#time");
let interval;
let secondsTotal;

// ===== FUNCTION START
const startMinCountdown = () => {
  const minutesInput = Number(document.querySelector("#minutes").value);

  // Min in Sek umrechnen
  secondsTotal = minutesInput * 60;

  interval = setInterval(countdown, 1000);
};

const countdown = () => {
  if (secondsTotal >= 0) {
    // Math.floor rundet auf ganze Zahl AB -> wenn minutes unter 2 gehen, wird es zu 1
    // denn: 120 Sekunden / 60 = 2 Minuten   aber: 119 Sekunden / 60 = 1,98 -> wird abgerundet auf 1
    let minutesLeft = Math.floor(secondsTotal / 60);

    // oder man bestimmt den Rest (restliche Sekunden, wenn man secondsTotal durch 60 teilt, um in Minuten umzurechnen):
    let secondsLeft = secondsTotal % 60;

    // pro Durchlauf 1 Sek abgezogen
    secondsTotal--;

    // 0 hinzufügen, wenn Minute oder Sekunde kleiner als 10 ist, damit es 2-stellig bleibt
    minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
    // Output
    timeOutput.innerHTML = `${minutesLeft}:${secondsLeft}`;
  } else {
    // wenn countdown bei 0 ankommt stoppen
    clearInterval(interval);
  }
};

// ===== PAUSE FUNCTION
const pauseMinCountdown = () => {
  clearInterval(interval);
};

// ===== RESTART FUNCTION
const restartMinCountdown = () => {
  interval = setInterval(countdown, 1000);
};

// ===== RESET FUNCTION
const resetMinCountdown = () => {
  clearInterval(interval);
  timeOutput.innerHTML = "00:00";
  document.querySelector("#minutes").value = "";
};
