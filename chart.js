function drawChart(logs) {
  const canvas = document.getElementById("chart");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 300, 200);

  const totals = {};
  logs.forEach(l => {
    totals[l.date] = (totals[l.date] || 0) + l.time;
  });

  let i = 0;
  Object.values(totals).forEach(v => {
    ctx.fillRect(i * 40 + 10, 200 - v, 30, v);
    i++;
  });
}
