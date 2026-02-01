function login() {
  const name = document.getElementById("username").value;
  localStorage.setItem("user", name);
  document.getElementById("userLabel").textContent = "👤 " + name;
}

window.onload = () => {
  const user = localStorage.getItem("user");
  if (user) {
    document.getElementById("userLabel").textContent = "👤 " + user;
  }
};
