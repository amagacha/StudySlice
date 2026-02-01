function getLogs() {
  return JSON.parse(localStorage.getItem("logs")) || [];
}

function saveLog(log) {
  const logs = getLogs();
  logs.push(log);
  localStorage.setItem("logs", JSON.stringify(logs));
}

function clearLogs() {
  localStorage.removeItem("logs");
}
