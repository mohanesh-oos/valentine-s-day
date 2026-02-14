/* =======================
   CHANGE PASSWORD HERE
   ======================= */
const SECRET_PASSWORD = "love you sandhiya"; // <-- change password here

// PASSWORD CHECK
function checkPassword(){
  const input = document.getElementById("passInput").value;
  const error = document.getElementById("errorMsg");

  if(input === SECRET_PASSWORD){
    document.getElementById("lockScreen").style.display = "none";
  }else{
    error.style.display = "block";
  }
}

// ENTER KEY SUPPORT
document.getElementById("passInput").addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    checkPassword();
  }
});

// PAGE SWITCH
function openPage(pageId, el=null){
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  document.querySelectorAll(".bottom-menu .menu-box").forEach(btn => btn.classList.remove("active"));
  if(el) el.classList.add("active");

  window.scrollTo(0,0);
}

/* HEARTS BACKGROUND */
function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 26) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 350);

/* QUOTES AUTO CHANGE */
const quotes = [
  "“Every love story is beautiful, but ours is my favorite.”",
  "“You are my today and all of my tomorrows.”",
  "“I still get butterflies even after all this time.”",
  "“I love you not only for what you are, but for what I am when I am with you.”",
  "“You are the most precious part of my life.”",
  "“With you, I found peace, love, and home.”"
];

let qIndex = 0;
setInterval(() => {
  const box = document.getElementById("quoteBox");
  if(!box) return;

  qIndex = (qIndex + 1) % quotes.length;
  box.style.opacity = "0";

  setTimeout(() => {
    box.innerText = quotes[qIndex];
    box.style.opacity = "1";
  }, 300);

}, 3500);

/* =========================
   FULLSCREEN VIEWER (INSTA)
   ========================= */
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

function openViewer(src){
  viewerImg.src = src;
  viewer.classList.add("show");
}

function closeViewer(){
  viewer.classList.remove("show");
  viewerImg.src = "";
}

// Click outside image to close
viewer.addEventListener("click", (e) => {
  if(e.target.id === "viewer"){
    closeViewer();
  }
});

// ESC key close
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeViewer();
  }
});

/* Attach click to all images */
function enableInstaViewer(){
  document.querySelectorAll(".insta-photo img").forEach(img => {
    img.addEventListener("click", () => {
      openViewer(img.src);
    });
  });
}

enableInstaViewer();


/* =========================
   PROPOSAL YES / NO
   ========================= */
function sayYes(){
  const box = document.getElementById("proposalResult");
  box.innerHTML = "YAYYYYY 😭💖💍<br>Now you are my pondatii hee😁 hee😁 hee😁 ❤️🥰";
  burstHearts();
}

/* Hearts burst when YES */
function sayNo(){
  const box = document.getElementById("proposalResult");
  box.innerHTML = "😅 NO?? okay okay... No Problem Baby My darling is There for mee😁😁";
  moveNoButton();
}

{

  for(let i=0;i<30;i++){
    const b = document.createElement("div");
    b.className = "burst";
    b.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    b.style.position = "fixed";
    b.style.left = (Math.random() * 100) + "vw";
    b.style.top = (60 + Math.random() * 20) + "vh";
    b.style.fontSize = (18 + Math.random() * 22) + "px";
    b.style.zIndex = "99999";

    b.style.setProperty("--x", (Math.random() * 300 - 150) + "px");
    b.style.setProperty("--y", (Math.random() * -350 - 50) + "px");

    b.style.animation = "burstAnim 1.3s ease forwards";

    document.body.appendChild(b);
    setTimeout(() => b.remove(), 1400);
  }
}

function moveNoButton(){
  const noBtn = document.querySelector(".no-btn");
  if(!noBtn) return;

  const x = Math.random() * 260 - 130;  // -130 to +130
  const y = Math.random() * 160 - 80;   // -80 to +80

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
