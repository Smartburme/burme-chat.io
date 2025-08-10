// auth.js - placeholder login logic (PGS, Gmail, etc.)

async function loginUser(username, password) {
  try {
    // Fake async login simulation
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (username === "admin" && password === "password123") {
      alert("Login Successful!");
      window.location.href = "/pages/main.html";
    } else {
      alert("Login failed. Please check your credentials.");
    }
  } catch (err) {
    alert("Error during login: " + err.message);
  }
}

// Example usage from a login form
document.getElementById('loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  loginUser(username, password);
});
