// 🎈 Event Handling

// Button click - change color
document.getElementById("colorBtn").addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.getElementById("colorBtn").style.backgroundColor = randomColor;
});

// Hover effect
document.getElementById("hoverBox").addEventListener("mouseenter", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#aee";
});
document.getElementById("hoverBox").addEventListener("mouseleave", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#ddd";
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Double-click bonus
document.getElementById("doubleClickMsg").addEventListener("dblclick", () => {
  document.getElementById("doubleClickMsg").textContent = "🎉 Secret revealed!";
});

// 🖼️ Gallery Logic
const images = document.querySelectorAll(".gallery img");
const captionBox = document.getElementById("captionBox");
let currentIndex = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");

  const caption = images[index].getAttribute("data-caption");
  captionBox.textContent = caption;
}

// Next button
document.getElementById("nextImg").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Previous button
document.getElementById("prevImg").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
});

// Show first image
showImage(currentIndex);

// 📁 Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById("tab" + tabId).classList.add("active");
  });
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("feedback");

  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  // Password validation
  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";

  this.reset();
});