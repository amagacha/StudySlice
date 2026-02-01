let seconds = 0;
let timer = null;

function updateWatch() {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  document.getElementById("watch").textContent = `${m}:${s}`;
}

function startWatch() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    updateWatch();
  }, 1000);
}

function stopWatch() {
  clearInterval(timer);
  timer = null;
}

function resetWatch() {
  stopWatch();
  seconds = 0;
  updateWatch();
}
