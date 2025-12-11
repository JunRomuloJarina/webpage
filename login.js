let users = [];

function showCreateAccount() {
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function showLoginForm() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

const regForm = document.getElementById("register-form");
const regCreateBtn = document.getElementById("reg-create");
const regBackBtn = document.getElementById("reg-back");

regCreateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const email = document.getElementById("reg-email").value.trim();

  if (!username || !password || !email) {
    alert("Please fill in all fields.");
    return;
  }

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    alert("Username already exists!");
    return;
  }

  users.push({ username, password, email });
  alert("Account created! You can now login.");
  regForm.reset();
  showLoginForm();
});

regBackBtn.addEventListener("click", function (e) {
  e.preventDefault();
  showLoginForm();
});

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Login successful! Welcome " + username);

    window.location.href = "/index.html";
  } else {
    alert("Invalid username or password!");
  }
});
