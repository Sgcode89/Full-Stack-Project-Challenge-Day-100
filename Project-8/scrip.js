let isLogin = true;

function toggleForm() {
  let title = document.getElementById("formTitle");
  let btn = document.getElementById("submitBtn");
  let toggle = document.getElementById("toggleText");
  let username = document.getElementById("username");

  if (isLogin) {
    title.innerText = "Signup";
    btn.innerText = "Signup";
    username.placeholder = "Enter Email";
    toggle.innerHTML = "Already have an account? <span onclick='toggleForm()'>Login</span>";
    isLogin = false;
  } else {
    title.innerText = "Login";
    btn.innerText = "Login";
    username.placeholder = "Enter Username";
    toggle.innerHTML = "Don't have an account? <span onclick='toggleForm()'>Signup</span>";
    isLogin = true;
  }
}
