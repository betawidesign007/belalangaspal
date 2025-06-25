// Inisialisasi user saat pertama kali
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify({
    admin: "admin123",
    user1: "pass123"
  }));
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const users = JSON.parse(localStorage.getItem("users"));

    if (users[username] && users[username] === password) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Username atau password salah!";
    }
  });
}

// REGISTER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const registerError = document.getElementById("registerError");

    let users = JSON.parse(localStorage.getItem("users"));
    if (users[newUsername]) {
      registerError.textContent = "Username sudah terdaftar!";
    } else {
      users[newUsername] = newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "index.html";
    }
  });
}

// SLIDESHOW
const slides = [
  "https://via.placeholder.com/600x300?text=Gambar+1",
  "https://via.placeholder.com/600x300?text=Gambar+2",
  "https://via.placeholder.com/600x300?text=Gambar+3"
];

let current = 0;
const slideImg = document.getElementById("slideImage");

function showNextSlide() {
  current = (current + 1) % slides.length;
  slideImg.src = slides[current];
}

setInterval(showNextSlide, 3000); // Ganti gambar tiap 3 detik
