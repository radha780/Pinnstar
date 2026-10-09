// Mock dataset: ALL 41 local assets (12 named + 29 from zip, sanitized names)
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
  { id: 20, title: "Gallery Blue 20", image: "assets/5e19db8a9279fa90f8b2b0b341948e23.jpg", color: "blue", likes: 39, author: "user20", tags: ["blue", "photo"] },
  { id: 21, title: "Gallery Car 21", image: "assets/613351722c79d10eb2a55dbae6ba5a8b.jpg", color: "red", likes: 66, author: "user21", tags: ["car", "cars", "red"] },
  { id: 22, title: "Gallery Horse 22", image: "assets/6144f25d96209559df883d84c3a3c60b.jpg", color: "brown", likes: 58, author: "user22", tags: ["horse", "animals"] },
  { id: 23, title: "Gallery Photo 23", image: "assets/68046644366940680.jpg", color: "green", likes: 47, author: "user23", tags: ["photo", "nature"] },
  { id: 24, title: "Gallery Cat 24", image: "assets/703756187638805.jpg", color: "gray", likes: 83, author: "user24", tags: ["cat", "animals"] },
  { id: 25, title: "Gallery Photo 25", image: "assets/703756188985907.jpg", color: "gray", likes: 31, author: "user25", tags: ["photo"] },
  { id: 26, title: "Gallery Blue 26", image: "assets/720c5182f8e57542f6f90518be9e85f9.jpg", color: "blue", likes: 49, author: "user26", tags: ["blue", "photo"] },
  { id: 27, title: "Gallery Photo 27", image: "assets/76eb4652e2bd201c2ec077f83288049d.jpg", color: "green", likes: 55, author: "user27", tags: ["photo"] },
  { id: 28, title: "Gallery Horse 28", image: "assets/77053843621476702.jpg", color: "brown", likes: 72, author: "user28", tags: ["horse", "animals", "nature"] },
  { id: 29, title: "Gallery Photo 29", image: "assets/7810999347433555.jpg", color: "orange", likes: 38, author: "user29", tags: ["photo", "food"] },
  { id: 30, title: "Gallery Photo 30", image: "assets/787fec0ce87500f7ff8fb40468a6e337.jpg", color: "gray", likes: 41, author: "user30", tags: ["photo"] },
  { id: 31, title: "Gallery Photo 31", image: "assets/981151468820771045.jpg", color: "green", likes: 46, author: "user31", tags: ["photo"] },
  { id: 32, title: "Gallery Blue 32", image: "assets/b4d8b095dab0c46f07df4f65985038ca.jpg", color: "blue", likes: 53, author: "user32", tags: ["blue", "photo"] },
  { id: 33, title: "Gallery Photo 33", image: "assets/b8c3c68cba22d03bda679e49be243dc8.jpg", color: "gray", likes: 36, author: "user33", tags: ["photo"] },
  { id: 34, title: "Gallery Dog 34", image: "assets/ba3356e88d04065df1b3cff8009e2e92.jpg", color: "brown", likes: 69, author: "user34", tags: ["dog", "animals"] },
  { id: 35, title: "Gallery Cat 35", image: "assets/bb7e040888b69a0f322bb0eb357edfd7.jpg", color: "gray", likes: 91, author: "user35", tags: ["cat", "animals"] },
  { id: 36, title: "Gallery Photo 36", image: "assets/c07fd509ed6a0e23950d24360fb54daa.jpg", color: "red", likes: 43, author: "user36", tags: ["red", "photo"] },
  { id: 37, title: "Gallery Photo 37", image: "assets/d6345cc5f87956775c9cfa90004deee7.jpg", color: "green", likes: 33, author: "user37", tags: ["photo"] },
  { id: 38, title: "Gallery Photo 38", image: "assets/dd934e045217426f234b6c24e3d17b1f.jpg", color: "orange", likes: 40, author: "user38", tags: ["photo"] },
  { id: 39, title: "Gallery Photo 39", image: "assets/e7c925e08ed2adbe4e9eb7b3536fa65e.jpg", color: "gray", likes: 37, author: "user39", tags: ["photo"] },
  { id: 40, title: "Gallery Car 40", image: "assets/e9ca169c248e8c1f32baaa9851b63b13.jpg", color: "red", likes: 64, author: "user40", tags: ["car", "cars"] },
  { id: 41, title: "Gallery Horse 41", image: "assets/f5be536308a61f0f7fef1c19d78e80bf.jpg", color: "brown", likes: 59, author: "user41", tags: ["horse", "animals"] },
];

const container = document.getElementById("pin-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

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

    // Clicking a card opens the modal
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("save-btn") || e.target.classList.contains("like-btn") || e.target.classList.contains("download-btn")) return;
      showErrorScreen(); // BUG 2: blank error screen instead of the modal
      // CORRECT: openModal(pin);
    });

    const saveBtn = card.querySelector(".save-btn");
    saveBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      expandSave(); // BUG 3: Save takes over the whole page
      // CORRECT: confettiOverdose();
    });

    // Like likes the pin; Download is a normal download link
    // BUG 5: must solve a math question before liking
    card.querySelector(".like-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (!solveMath()) return;
      handleLike(pin, card);
    });
    // CORRECT: card.querySelector(".like-btn").addEventListener("click", (e) => { e.stopPropagation(); handleLike(pin, card); });

    // BUG 4: Download opens the file picker (upload) instead of downloading
    card.querySelector(".download-btn").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadImage();
    });
    // CORRECT: card.querySelector(".download-btn").addEventListener("click", (e) => { e.stopPropagation(); });

    container.appendChild(card);
  });
}

function handleLike(pin, card) {
  pin.likes++;
  renderPins(filterPins(searchInput.value));
  // Minimal animation on just the ❤ of the liked pin
  requestAnimationFrame(() => {
    const idx = pins.indexOf(pin);
    const el = container.querySelectorAll(".pin-info small .heart")[idx];
    if (el) { el.classList.remove("heart-pop"); void el.offsetWidth; el.classList.add("heart-pop"); }
  });
}

function filterPins(query) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return pins;
  return pins.filter((p) => p.title.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q)) || p.color.includes(q));
}
function executeSearch() {
  renderPins(filterPins(searchInput.value));
}

// Search runs on button click and on Enter, without leaving the page
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  crackWebsite(); // BUG 6: site cracks instead of searching
  // CORRECT: executeSearch();
});

// Dark mode toggle
document.getElementById("dark-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// Upload
document.getElementById("preview-test-btn").addEventListener("click", () => document.getElementById("file-input").click());
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

// Modal
let currentPin = null;
function openModal(pin) {
  currentPin = pin;
  document.getElementById("modal-img").src = pin.image;
  document.getElementById("modal-title").innerText = pin.title;
  document.getElementById("modal-author").innerText = "by " + pin.author;
  document.getElementById("like-count").innerText = pin.likes;
  document.getElementById("modal").classList.remove("hidden");
}
document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
document.getElementById("modal-save").addEventListener("click", (e) => { e.stopPropagation(); confettiOverdose(); });
document.getElementById("modal-like").addEventListener("click", () => {
  if (!currentPin) return;
  if (!solveMath()) return; // BUG 5 (CORRECT: delete this line)
  currentPin.likes++;
  document.getElementById("like-count").innerText = currentPin.likes;
});

// Confetti: runs until it fills half the screen height, then stops and clears
let confettiTimer = null;
function confettiOverdose() {
  if (confettiTimer) return; // don't stack multiple intervals
  const box = document.getElementById("confetti-container");
  const colors = ["red", "blue", "green", "yellow", "purple"];
  confettiTimer = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.top = (box.children.length * 2) + "px";
      box.appendChild(c);
    }
    if (box.children.length * 2 >= window.innerHeight / 2) {
      clearInterval(confettiTimer);
      confettiTimer = null;
      setTimeout(() => { box.innerHTML = ""; }, 1000);
    }
  }, 50);
}

// Logo click fires the confetti
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").addEventListener("click", confettiOverdose);

// BUG 2: blank error screen
function showErrorScreen() {
  document.body.innerHTML =
    "<div style='height:100vh;background:#fff;color:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Arial;text-align:center'>" +
    "<h1 style='font-size:48px'>ERROR!</h1><p style='font-size:24px'>This image can't be opened... yayyyyyyyy 🎉</p></div>";
}

// BUG 3: giant Save screen, never removed until the page is reloaded
function expandSave() {
  if (document.getElementById("save-overlay")) return;
  const big = document.createElement("div");
  big.id = "save-overlay";
  big.innerText = "SAVED!!! 📌";
  document.body.appendChild(big);
}

// BUG 4: Upload Pin downloads an image instead of opening the file picker
function downloadImage() {
  const a = document.createElement("a");
  a.href = pins[0].image;
  a.download = "pin.jpg";
  a.click();
}

// BUG 5: arithmetic questions before liking
const mathQuestions = [
  { q: "889 * 5576 * 45723", a: 889 * 5576 * 45723 },
  { q: "(1234 + 5678) * 91", a: (1234 + 5678) * 91 },
  { q: "98765 - 4321 * 12", a: 98765 - 4321 * 12 },
  { q: "(777 * 888) + (999 * 111)", a: 777 * 888 + 999 * 111 },
  { q: "12345 * 6789", a: 12345 * 6789 },
  { q: "(4096 / 64) * 125 + 17", a: (4096 / 64) * 125 + 17 },
  { q: "2 ** 20 - 1000 * 3", a: 2 ** 20 - 1000 * 3 },
];
function solveMath() {
  const item = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
  const answer = prompt("Solve this to like the pin:\n" + item.q + " = ?");
  if (Number(answer) === item.a) return true;
  alert("Wrong answer! No like for you 😈");
  return false;
}

// BUG 6: dramatic crack. Shakes, cards fall, glass cracks, everything freezes
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
    "50,50 58,66 54,80 66,90 62,100",
    "50,50 40,60 28,58 18,70 0,66",
    "50,50 36,44 22,40 10,28 0,30",
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