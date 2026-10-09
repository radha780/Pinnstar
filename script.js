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
const searchButton = document.getElementById("search-btn");

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
      // Download now points at THAT image (per owner request); bugginess kept via swapped handlers below (BUG #3).
      "<a class='download-btn' href='" + pin.image + "' download='" + pin.image + "'>Download</a>" +
      "</div>";

    // BUG #8: Click makes pin fall instead of opening modal
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("save-btn") || e.target.classList.contains("like-btn") || e.target.classList.contains("download-btn")) return;
      card.classList.add("fall"); // should be: openModal(pin)
    });

    // BUG #7: Runaway Save button on hover (card Save only; modal Save stays clickable so BUG #12 is still reachable)
    const saveBtn = card.querySelector(".save-btn");
    saveBtn.addEventListener("mouseover", () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 100 - 50;
      saveBtn.style.transform = "translate(" + x + "px," + y + "px)";
    });
    saveBtn.addEventListener("click", (e) => { e.stopPropagation(); confettiOverdose(); });

    // BUG #3: Like vs Download handlers swapped (Like downloads that image, Download likes)
    card.querySelector(".like-btn").addEventListener("click", (e) => { e.stopPropagation(); handleDownload(pin); });
    card.querySelector(".download-btn").addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); handleLike(pin, card); });

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
// BUG #3 effect: Like button redirects to that image instead of liking
function handleDownload(pin) {
  window.location.href = "assets/billie-eilish-reaction.jpg";
}

// BUG #10 (new): search swap both ways — red<->blue, cat<->dog, car<->horse
function swapQuery(q) {
  const map = { red: "blue", blue: "red", cat: "dog", dog: "cat", car: "horse", horse: "car", cars: "horse", horses: "car" };
  const words = q.toLowerCase().trim().split(/\s+/).map((w) => map[w] || w);
  return words.join(" ");
}
function filterPins(query) {
  const q = swapQuery(query || ""); // BUG #10: red<->blue, cat<->dog, car<->horse
  if (!q) return pins;
  return pins.filter((p) => p.title.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q)) || p.color.includes(q));
}
function executeSearch() {
  renderPins(filterPins(searchInput.value));
}

// BUG #6: Listens to click only, no submit+preventDefault -> Enter redirects to error.html
searchButton.addEventListener("click", (e) => { e.preventDefault(); executeSearch(); });

// BUG #11: Passive-aggressive search overwrites user input on Enter/submit
searchForm.addEventListener("submit", () => {
  searchInput.value = "Did you guys just find another bug!?";
});

// Dark mode toggle (works, but BUG #1 colors are wrong in CSS)
document.getElementById("dark-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// BUG #4: Upload button intentionally dead (typo onclick uploadIng + NO working listener here).
// Separate Test Preview button drives the file picker so BUG #9 stays demoable.
document.getElementById("preview-test-btn").addEventListener("click", () => document.getElementById("file-input").click());
document.getElementById("file-input").addEventListener("change", previewFile);
function uploadImage() { document.getElementById("file-input").click(); }
function previewFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  // My Uploads preview shows the fixed twitter image (message removed per owner)
  const img = document.getElementById("preview-img");
  img.src = "assets/twitter.jpg";
  img.style.display = "block";
  document.getElementById("upload-preview").classList.remove("hidden");
  document.getElementById("preview-title").style.display = "none";
}

// Modal (never opens from cards because of BUG #8, but code is correct for the fix)
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
// Modal Save stays clickable (no runaway) so BUG #12 confetti is reachable despite BUG #7
document.getElementById("modal-save").addEventListener("click", (e) => { e.stopPropagation(); confettiOverdose(); });
document.getElementById("modal-like").addEventListener("click", () => {
  if (!currentPin) return;
  currentPin.likes++;
  document.getElementById("like-count").innerText = currentPin.likes;
});

// Reverse-scroll bug removed per owner request (no wheel override).

// BUG #12: Confetti overdose - setInterval with no clearInterval, freezes tab
function confettiOverdose() {
  const box = document.getElementById("confetti-container");
  const colors = ["red", "blue", "green", "yellow", "purple"];
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.top = (box.children.length * 2) + "px";
      box.appendChild(c);
    }
    // MISSING: if (box.offsetHeight >= window.innerHeight / 2) clearInterval(...)
  }, 50);
}

// Logo (PinVerse) click fires the confetti overdose (BUG #12 reachable from navbar)
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").addEventListener("click", confettiOverdose);
renderPins(pins);
