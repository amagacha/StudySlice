function generateAdvice() {
  const logs = getLogs();
  const total = logs.reduce((s, l) => s + l.time, 0);

  let msg = "少しずつでOK";
  if (total > 300) msg = "いいペース！";
  if (total > 600) msg = "努力量が異常、天才";

  document.getElementById("advice").textContent = msg;
}
