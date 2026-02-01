const subject = document.getElementById("subject");
const time = document.getElementById("time");
const logList = document.getElementById("logList");
const totalTime = document.getElementById("totalTime");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

addBtn.onclick = () => {
  if (!subject.value || time.value <= 0) return;

  saveLog({
    subject: subject.value,
    time: Number(time.value),
    date: new Date().toLocaleDateString()
  });

  subject.value = "";
  time.value = "";

  render();
};

resetBtn.onclick = () => {
  clearLogs();
  render();
};

function render() {
  const logs = getLogs();
  logList.innerHTML = "";

  let total = 0;
  logs.forEach(l => {
    total += l.time;
    const li = document.createElement("li");
    li.textContent = `${l.date}｜${l.subject}：${l.time}分`;
    logList.appendChild(li);
  });

  totalTime.textContent = "合計：" + total + "分";
  drawChart(logs);
}

render();
