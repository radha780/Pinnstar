// Dataset
const pins = [
  { id: 1, title: "Frank Ocean Blond Poster", image: "assets/frank-ocean-blond.jpg", color: "beige", likes: 240, author: "musiclover", tags: ["music", "poster"] },
  { id: 2, title: "Spicy Panipuri Street Food", image: "assets/spicy-panipuri.jpg", color: "orange", likes: 189, author: "foodie", tags: ["food", "indian"] },
  { id: 3, title: "Coastal Villa and Tennis Court", image: "assets/coastal-villa-tennis.jpg", color: "green", likes: 320, author: "travelgram", tags: ["travel", "aesthetic"] },
  { id: 4, title: "Formula 1 Race Start", image: "assets/formula1-race.jpg", color: "red", likes: 410, author: "f1fan", tags: ["f1", "cars", "car", "red"] },
  { id: 5, title: "Yor Forger Red Anime Art", image: "assets/yor-forger-red.jpg", color: "red", likes: 275, author: "animeart", tags: ["anime", "red"] },
  { id: 6, title: "Heart Shaped Pasta Bowl", image: "assets/heart-pasta-bowl.jpg", color: "orange", likes: 150, author: "pastalover", tags: ["food", "pasta"] },
  { id: 7, title: "Elephant Holding Flowers", image: "assets/elephant-flowers.jpg", color: "blue", likes: 520, author: "wildlife", tags: ["animals", "cute", "blue"] },
  { id: 8, title: "F-15 Jet Dive", image: "assets/f15-jet-dive.jpg", color: "gray", likes: 198, author: "aviation", tags: ["planes", "wallpaper"] },
  { id: 9, title: "Blue Paisley Pattern", image: "assets/blue-paisley-pattern.jpg", color: "blue", likes: 88, author: "designer", tags: ["design", "blue", "pattern"] },
  { id: 10, title: "Horses at Sunset Farm", image: "assets/horses-sunset.jpg", color: "brown", likes: 230, author: "farmdiaries", tags: ["animals", "horse", "nature"] },
  { id: 11, title: "Black Cat Ramen Poster", image: "assets/cat-ramen-poster.jpg", color: "red", likes: 340, author: "animeart", tags: ["anime", "food", "cat"] },
  { id: 12, title: "Demon Slayer Tanjiro Poster", image: "assets/demon-slayer-tanjiro.jpg", color: "red", likes: 460, author: "otaku", tags: ["anime", "poster"] },
  { id: 13, title: "Gallery Photo 13", image: "assets/_-1.jpg", color: "blue", likes: 42, author: "user13", tags: ["blue", "photo"] },
  { id: 14, title: "Gallery Photo 14", image: "assets/2a76e02e7e3d9647b748dd8c5a32dae1.jpg", color: "gray", likes: 35, author: "user14", tags: ["photo"] },
  { id: 15, title: "Gallery Dog 15", image: "assets/352617845839037822.jpg", color: "brown", likes: 61, author: "user15", tags: ["dog", "animals"] },
  { id: 16, title: "Gallery Photo 16", image: "assets/365aac3d3f68484869611dc5db24e921.jpg", color: "green", likes: 28, author: "user16", tags: ["photo"] },
  { id: 17, title: "Gallery Dog 17", image: "assets/4f7ebb97716af0ccb5f2984fbea2c995.jpg", color: "brown", likes: 77, author: "user17", tags: ["dog", "animals", "cute"] },
  { id: 18, title: "Gallery Photo 18", image: "assets/5629568280800046.jpg", color: "gray", likes: 51, author: "user18", tags: ["photo"] },
  { id: 19, title: "Gallery Photo 19", image: "assets/5a570b45bf7ebb004bdbbad30ad11257.jpg", color: "red", likes: 44, author: "user19", tags: ["red", "photo"] },
  { id: 20, title: "Gallery Blue 20", image: "assets/5e19db8a9279fa90f8b2b0b341948e23.jpg", color: "blue", likes: 39, author: "user20", tags: ["blue", "photo"] }
];

const container = document.getElementById("pin-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// BUG 8: Typing reverses the input text automatically
searchInput.addEventListener("input", (e) => {
  searchInput.value = e.target.value.split("").reverse().join("");
});

// Render gallery
function renderPins(list) {
  container.innerHTML = "";
  list.forEach((pin) => {
    const card = document.createElement("div");
    card.className = "pin-card";
    card.innerHTML =
      "<img src='" + pin.image + "' alt='" + pin.title + "' />" +
      "<div class='pin-info'><h3>" + pin.title + "</h3><small>by " + pin.author + " • <span class='heart'>❤</span> " + pin.likes + " • " + pin.color + "</small></div>" +
      "<div class='card-actions'>" +
      "<button class='save-btn'>Save</button>" +
      "<button class='like-btn'>❤ Like</button>" +
      "<a class='download-btn' href='" + pin.image + "' download='" + pin.image + "'>Download</a>" +
      "</div>";

    // BUG 2: Show error screen on card click
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("save-btn") || e.target.classList.contains("like-btn") || e.target.classList.contains("download-btn")) return;
      showErrorScreen();
    });

    // BUG 3: Save button explodes overlay
    const saveBtn = card.querySelector(".save-btn");
    saveBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      expandSave();
    });

    // BUG 5: Solve math before liking
    card.querySelector(".like-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (!solveMath()) return;
      handleLike(pin, card);
    });

    // BUG 4: Download button triggers image upload picker
    card.querySelector(".download-btn").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadImage();
    });

    container.appendChild(card);
  });
}

function handleLike(pin, card) {
  pin.likes++;
  renderPins(filterPins(searchInput.value));
}

function filterPins(query) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return pins;
  return pins.filter((p) => p.title.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q)) || p.color.includes(q));
}

// BUG 6: Search form triggers crack animation
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  crackWebsite();
});

// Dark mode toggle
document.getElementById("dark-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// BUG 9: "My Uploads" hides the pin container completely
document.getElementById("preview-test-btn").addEventListener("click", () => {
  document.getElementById("pin-container").style.display = "none";
});

document.getElementById("file-input").addEventListener("change", previewFile);
function uploadImage() { document.getElementById("file-input").click(); }
function previewFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = document.getElementById("preview-img");
    img.src = reader.result;
    img.style.display = "block";
    document.getElementById("upload-preview").classList.remove("hidden");
    document.getElementById("preview-title").innerText = file.name;
  };
  reader.readAsDataURL(file);
}

// Modal logic
let currentPin = null;
document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

// BUG 10: Infinite confetti explosion on modal save button
document.getElementById("modal-save").addEventListener("click", (e) => {
  e.stopPropagation();
  setInterval(() => {
    confettiOverdose();
  }, 100);
});

// Confetti logic
let confettiTimer = null;
function confettiOverdose() {
  const box = document.getElementById("confetti-container");
  const colors = ["red", "blue", "green", "yellow", "purple"];
  for (let i = 0; i < 5; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.top = (Math.random() * 100) + "vh";
    box.appendChild(c);
  }
}

// BUG 11: PinnStar Logo click causes text to move continuously
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").addEventListener("click", () => {
  const logo = document.querySelector(".logo");
  logo.style.position = "absolute";
  let pos = 0;
  setInterval(() => {
    pos += 5;
    logo.style.left = (pos % window.innerWidth) + "px";
  }, 30);
});

// BUG 2 Helper
function showErrorScreen() {
  document.body.innerHTML =
    "<div style='height:100vh;background:#fff;color:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Arial;text-align:center'>" +
    "<h1 style='font-size:48px'>ERROR!</h1><p style='font-size:24px'>This image can't be opened... yayyyyyyyy 🎉</p></div>";
}

// BUG 3 Helper
function expandSave() {
  if (document.getElementById("save-overlay")) return;
  const big = document.createElement("div");
  big.id = "save-overlay";
  big.innerText = "SAVED!!! 📌";
  document.body.appendChild(big);
}

// BUG 4 Helper
function downloadImage() {
  const a = document.createElement("a");
  a.href = pins[0].image;
  a.download = "pin.jpg";
  a.click();
}

// BUG 5 Helper
const mathQuestions = [
  { q: "889 * 5576 * 45723", a: 889 * 5576 * 45723 },
  { q: "(1234 + 5678) * 91", a: (1234 + 5678) * 91 },
  { q: "98765 - 4321 * 12", a: 98765 - 4321 * 12 }
];
function solveMath() {
  const item = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
  const answer = prompt("Solve this to like the pin:\n" + item.q + " = ?");
  if (Number(answer) === item.a) return true;
  alert("Wrong answer! No like for you 😈");
  return false;
}

// BUG 6 Helper
function crackWebsite() {
  document.querySelector(".navbar").classList.add("shake");
  container.classList.add("shake");

  document.querySelectorAll(".pin-card").forEach((card, i) => {
    card.style.animationDelay = (i % 10) * 0.08 + "s";
    card.classList.add("fall");
  });

  document.querySelectorAll("button, input").forEach((el) => (el.disabled = true));

  const crackPaths = [
    "50,50 42,38 47,25 38,12 41,0",
    "50,50 62,40 58,28 70,15 66,0",
    "50,50 64,56 78,52 88,62 100,58",
    "50,50 58,66 54,80 66,90 62,100"
  ];
  const lines = crackPaths
    .map((p, i) => "<polyline class='crack-line' style='animation-delay:" + i * 0.12 + "s' points='" + p + "' />")
    .join("");

  setTimeout(() => {
    const overlay = document.createElement("div");
    overlay.id = "crack-overlay";
    overlay.innerHTML =
      "<svg viewBox='0 0 100 100' preserveAspectRatio='none'>" + lines + "</svg>" +
      "<h1>💥 CRACK!!! 💥</h1><p>PinnStar has shattered. Reload the page to try again.</p>";
    document.body.appendChild(overlay);
  }, 1200);
}

renderPins(pins);