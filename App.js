// Helper
const $ = (id) => document.getElementById(id);

// Views
const navHome = $("navHome");
const navAbout = $("navAbout");
const navContact = $("navContact");
const aboutSection = $("aboutSection");
const contactSection = $("contactSection");
const mainFooter = $("mainFooter");
const landingView = $("landingView");
const startBtn = $("startBtn");
const authView = $("authView");
const homeView = $("homeView");
const resultsView = $("resultsView");

// Auth controls
const loginTab = $("loginTab");
const signupTab = $("signupTab");
const loginForm = $("loginForm");
const signupForm = $("signupForm");
const authMsg = $("authMsg");

// User bar
const userBar = $("userBar");
const userEmailEl = $("userEmail");
const logoutBtn = $("logoutBtn");

// Profile
const profileForm = $("profileForm");
const profileMsg = $("profileMsg");
const goResultsBtn = $("goResultsBtn");
const backHomeBtn = $("backHomeBtn");

// Results
const jobList = $("jobList");
const savedList = $("savedList");
const resultsMsg = $("resultsMsg");

const JOBS = [

  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Nepal",
    location: "Kathmandu",
    address: "Putalisadak, Kathmandu",
    map: "https://www.google.com/maps?q=Putalisadak,Kathmandu&output=embed",
    minQualification: "Bachelor",
    minExperience: 0,
    tags: ["html","css","javascript"],
    keywords: ["technology","design"]
  },

  {
    id: "2",
    title: "Marketing Officer",
    company: "Smart Marketing",
    location: "Lalitpur",
    address: "Jawalakhel, Lalitpur",
    map: "https://www.google.com/maps?q=Jawalakhel,Lalitpur&output=embed",
    minQualification: "Bachelor",
    minExperience: 0,
    tags: ["marketing","communication"],
    keywords: ["creative"]
  },

  {
    id: "3",
    title: "IT Support Officer",
    company: "Digital World",
    location: "Bhaktapur",
    address: "Suryabinayak, Bhaktapur",
    map: "https://www.google.com/maps?q=Suryabinayak,Bhaktapur&output=embed",
    minQualification: "Diploma",
    minExperience: 0,
    tags: ["networking","communication"],
    keywords: ["technology","helping"]
  },


/* ================= KATHMANDU VALLEY ================= */

{ id:"1", title:"Frontend Developer", company:"Tech Nepal", location:"Kathmandu", address:"New Baneshwor, Kathmandu", map:"https://www.google.com/maps?q=New+Baneshwor+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["html","css","javascript"], keywords:["technology"] },

{ id:"2", title:"Backend Developer", company:"CodeHub", location:"Kathmandu", address:"Putalisadak, Kathmandu", map:"https://www.google.com/maps?q=Putalisadak+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:1, tags:["javascript"], keywords:["technology"] },

{ id:"3", title:"Data Analyst", company:"Data Nepal", location:"Kathmandu", address:"Thamel, Kathmandu", map:"https://www.google.com/maps?q=Thamel+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["data","excel"], keywords:["research"] },

{ id:"4", title:"IT Support Officer", company:"Digital World", location:"Kathmandu", address:"Koteshwor, Kathmandu", map:"https://www.google.com/maps?q=Koteshwor+Kathmandu&output=embed", minQualification:"Diploma", minExperience:0, tags:["networking"], keywords:["technology"] },

{ id:"5", title:"Marketing Officer", company:"Smart Marketing", location:"Kathmandu", address:"Kalanki, Kathmandu", map:"https://www.google.com/maps?q=Kalanki+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["marketing"], keywords:["creative"] },

{ id:"6", title:"Graphic Designer", company:"Creative Studio", location:"Kathmandu", address:"Balaju, Kathmandu", map:"https://www.google.com/maps?q=Balaju+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["design"], keywords:["creative"] },

{ id:"7", title:"HR Assistant", company:"Global HR", location:"Kathmandu", address:"Anamnagar, Kathmandu", map:"https://www.google.com/maps?q=Anamnagar+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["communication"], keywords:["helping"] },

{ id:"8", title:"Bank Teller", company:"Nepal Bank", location:"Kathmandu", address:"New Road, Kathmandu", map:"https://www.google.com/maps?q=New+Road+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["communication"], keywords:["analysis"] },

{ id:"9", title:"Legal Assistant", company:"Law Firm", location:"Kathmandu", address:"Babarmahal, Kathmandu", map:"https://www.google.com/maps?q=Babarmahal+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["research"], keywords:["analysis"] },

{ id:"10", title:"Office Assistant", company:"Corporate Nepal", location:"Kathmandu", address:"Gongabu, Kathmandu", map:"https://www.google.com/maps?q=Gongabu+Kathmandu&output=embed", minQualification:"High School", minExperience:0, tags:["communication"], keywords:["helping"] },

/* ================= LALITPUR ================= */

{ id:"11", title:"Civil Engineer", company:"BuildCo", location:"Lalitpur", address:"Pulchowk, Lalitpur", map:"https://www.google.com/maps?q=Pulchowk+Lalitpur&output=embed", minQualification:"Bachelor", minExperience:0, tags:["problem solving"], keywords:["engineering"] },

{ id:"12", title:"Software Tester", company:"SoftLab", location:"Lalitpur", address:"Jawalakhel, Lalitpur", map:"https://www.google.com/maps?q=Jawalakhel+Lalitpur&output=embed", minQualification:"Bachelor", minExperience:0, tags:["technology"], keywords:["technology"] },

{ id:"13", title:"Hotel Manager", company:"Grand Hotel", location:"Lalitpur", address:"Satdobato, Lalitpur", map:"https://www.google.com/maps?q=Satdobato+Lalitpur&output=embed", minQualification:"Bachelor", minExperience:1, tags:["management"], keywords:["communication"] },

/* ================= BHAKTAPUR ================= */

{ id:"14", title:"Account Assistant", company:"Finance Corp", location:"Bhaktapur", address:"Suryabinayak, Bhaktapur", map:"https://www.google.com/maps?q=Suryabinayak+Bhaktapur&output=embed", minQualification:"Bachelor", minExperience:0, tags:["excel"], keywords:["analysis"] },

{ id:"15", title:"School Teacher", company:"Bright School", location:"Bhaktapur", address:"Thimi, Bhaktapur", map:"https://www.google.com/maps?q=Thimi+Bhaktapur&output=embed", minQualification:"Bachelor", minExperience:0, tags:["teaching"], keywords:["helping"] },

/* ================= POKHARA ================= */

{ id:"16", title:"Tour Guide", company:"Travel Nepal", location:"Kaski", address:"Lakeside, Pokhara", map:"https://www.google.com/maps?q=Lakeside+Pokhara&output=embed", minQualification:"High School", minExperience:0, tags:["communication"], keywords:["travel"] },

{ id:"17", title:"Nurse", company:"City Hospital", location:"Kaski", address:"Prithvi Chowk, Pokhara", map:"https://www.google.com/maps?q=Prithvi+Chowk+Pokhara&output=embed", minQualification:"Diploma", minExperience:0, tags:["communication"], keywords:["helping"] },

/* ================= CHITWAN ================= */

{ id:"18", title:"Agriculture Officer", company:"Agro Farm", location:"Chitwan", address:"Bharatpur-10, Chitwan", map:"https://www.google.com/maps?q=Bharatpur+Chitwan&output=embed", minQualification:"Bachelor", minExperience:0, tags:["research"], keywords:["science"] },

/* ================= BIRATNAGAR ================= */

{ id:"19", title:"Loan Officer", company:"Finance Nepal", location:"Morang", address:"Traffic Chowk, Biratnagar", map:"https://www.google.com/maps?q=Biratnagar+Traffic+Chowk&output=embed", minQualification:"Bachelor", minExperience:1, tags:["communication"], keywords:["analysis"] },

/* ================= BUTWAL ================= */

{ id:"20", title:"Electrical Technician", company:"Power Nepal", location:"Rupandehi", address:"Butwal-8, Rupandehi", map:"https://www.google.com/maps?q=Butwal+Rupandehi&output=embed", minQualification:"Diploma", minExperience:0, tags:["problem solving"], keywords:["engineering"] },

/* Add similar structured jobs */

{ id:"21", title:"Pharmacy Assistant", company:"HealthCare", location:"Kathmandu", address:"Boudha, Kathmandu", map:"https://www.google.com/maps?q=Boudha+Kathmandu&output=embed", minQualification:"Diploma", minExperience:0, tags:["communication"], keywords:["helping"] },

{ id:"22", title:"Video Editor", company:"Media Nepal", location:"Kathmandu", address:"Pepsicola, Kathmandu", map:"https://www.google.com/maps?q=Pepsicola+Kathmandu&output=embed", minQualification:"Diploma", minExperience:0, tags:["design"], keywords:["creative"] },

{ id:"23", title:"Store Manager", company:"Mega Mart", location:"Kathmandu", address:"Kirtipur, Kathmandu", map:"https://www.google.com/maps?q=Kirtipur+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["management"], keywords:["communication"] },

{ id:"24", title:"Research Assistant", company:"Innovation Lab", location:"Kathmandu", address:"Balkhu, Kathmandu", map:"https://www.google.com/maps?q=Balkhu+Kathmandu&output=embed", minQualification:"Bachelor", minExperience:0, tags:["research"], keywords:["research"] },

{ id:"25", title:"Content Writer", company:"Media House", location:"Kathmandu", address:"Chabahil, Kathmandu", map:"https://www.google.com/maps?q=Chabahil+Kathmandu&output=embed", minQualification:"High School", minExperience:0, tags:["writing"], keywords:["creative"] }

];
function showLanding() {
  show(landingView);
  hide(authView);
  hide(homeView);
  hide(resultsView);
  hide(userBar);
  show(mainFooter); // show footer
}

function showAuth() {
  show(authView);
  hide(homeView);
  hide(resultsView);
  hide(landingView);
  hide(userBar);
  hide(mainFooter); // hide footer on login page
}

function showHome() {
  hide(authView);
  show(homeView);
  hide(resultsView);
  hide(landingView);
  show(userBar);
  show(mainFooter); // show footer
}

function showResults() {
  hide(authView);
  hide(homeView);
  show(resultsView);
  hide(landingView);
  show(userBar);
  show(mainFooter); // show footer
}

startBtn.addEventListener("click", () => {
  hide(landingView);
  showAuth();
});

function boot() {
  clearMsg(authMsg);
  clearMsg(profileMsg);
  clearMsg(resultsMsg);

  const email = getSession();

  if (!email) {
    showLanding();  // Show landing first
    return;
  }

  setUserBar(email);
  loadProfileToForm(email);
  showHome();
}
/* ---------- Storage Helpers ---------- */
function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* ---------- Auth Helpers ---------- */
function getUsers() {
  return loadJSON("pf_users", []); // [{email, password}]
}
function setUsers(users) {
  saveJSON("pf_users", users);
}
function setSession(email) {
  localStorage.setItem("pf_session", email);
}
function getSession() {
  return localStorage.getItem("pf_session"); // email or null
}
function clearSession() {
  localStorage.removeItem("pf_session");
}

function profileKey(email) {
  return `pf_profile_${email}`;
}
function savedKey(email) {
  return `pf_saved_${email}`;
}

/* ---------- UI Helpers ---------- */
function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

function setMsg(el, text, type) {
  el.textContent = text;
  el.classList.remove("hidden", "ok", "err");
  el.classList.add(type === "ok" ? "ok" : "err");
}
function clearMsg(el) {
  el.textContent = "";
  el.classList.add("hidden");
  el.classList.remove("ok", "err");
}

function showAuth() {
  show(authView); hide(homeView); hide(resultsView);
  hide(userBar);
}
function showHome() {
  hide(authView); show(homeView); hide(resultsView);
  show(userBar);
}
function showResults() {
  hide(authView); hide(homeView); show(resultsView);
  show(userBar);
}

function setUserBar(email) {
  userEmailEl.textContent = email;
}

/* ---------- Qualification Ranking ---------- */
const QUAL_RANK = {
  "High School": 1,
  "Diploma": 2,
  "Bachelor": 3,
  "Master": 4
};

/* ---------- Matching Logic ----------
   Beginner scoring:
   - Qualification meets requirement => +30
   - Each skill/tag match => +8 (max ~40)
   - Each interest/keyword match => +8
   - Location match => +10
   - Experience meets requirement => +10
*/
function getCheckedValues(groupId) {
  const container = document.getElementById(groupId);
  const checkboxes = container.querySelectorAll("input[type='checkbox']:checked");
  return Array.from(checkboxes).map(cb => cb.value);
}

/* ---------- Matching Logic ---------- */

function normalizeList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(v => v.toLowerCase());
  return [value.toLowerCase()];
}

function scoreJob(profile, job) {
  let score = 0;

  // qualification
  const userQ = QUAL_RANK[profile.qualification] ?? 0;
  const jobQ = QUAL_RANK[job.minQualification] ?? 0;
  if (userQ >= jobQ) score += 30;

  // experience
  const exp = Number(profile.experience ?? 0);
  if (exp >= job.minExperience) score += 10;

  // location
  if ((profile.location || "").trim().toLowerCase() === job.location.toLowerCase()) {
    score += 10;
  }

  // skills match
  const skills = normalizeList(profile.skills);
  const tags = (job.tags || []).map(t => t.toLowerCase());
  let skillHits = 0;
  for (const s of skills) {
    if (tags.includes(s)) skillHits++;
  }
  score += Math.min(skillHits * 8, 40);

  // interests match
  const interests = normalizeList(profile.interests);
  const keywords = (job.keywords || []).map(k => k.toLowerCase());
  let interestHits = 0;
  for (const i of interests) {
    if (keywords.includes(i)) interestHits++;
  }
  score += Math.min(interestHits * 8, 24);

  return score;
}

function getRecommendations(profile) {
  const scored = JOBS.map(job => ({
    ...job,
    score: scoreJob(profile, job)
  }));

  scored.sort((a, b) => b.score - a.score);

  // At least show 3 (even if scores low)
  return scored.slice(0, 3);
}

/* ---------- Rendering ---------- */
function jobCard(job, showSaveBtn, email) {
  const div = document.createElement("div");
  div.className = "job";

  div.innerHTML = `
    <h3>${job.title}</h3>
    <div class="meta">🏢 ${job.company}</div>
    <div class="meta">📍 ${job.address}</div>
    <div class="meta">📌 Location: ${job.location}</div>
    <div class="meta">🎓 Qualification: ${job.minQualification}</div>
    <div class="meta">💼 Experience: ${job.minExperience} year(s)</div>

    <iframe 
      src="${job.map}" 
      width="100%" 
      height="180" 
      style="border:0; border-radius:10px; margin-top:8px;"
      loading="lazy">
    </iframe>
  `;

  if (showSaveBtn) {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Save Job";
    btn.onclick = () => {
      saveJob(email, job.id);
      renderSaved(email);
      setMsg(resultsMsg, "Job saved!", "ok");
      setTimeout(() => clearMsg(resultsMsg), 1200);
    };
    div.appendChild(btn);
  } else {
    const btn = document.createElement("button");
    btn.className = "btn btn-ghost";
    btn.textContent = "Remove";
    btn.onclick = () => {
      removeJob(email, job.id);
      renderSaved(email);
    };
    div.appendChild(btn);
  }

  return div;
}

function renderJobs(email) {
  jobList.innerHTML = "";
  const profile = loadJSON(profileKey(email), null);

  if (!profile) {
    setMsg(resultsMsg, "No profile found. Please fill your profile first.", "err");
    return;
  }
  clearMsg(resultsMsg);

  const recs = getRecommendations(profile);
  recs.forEach(job => jobList.appendChild(jobCard(job, true, email)));

  setMsg(resultsMsg, "Here are your top matches .", "ok");
}

function getSaved(email) {
  return loadJSON(savedKey(email), []); // array of job ids
}
function saveJob(email, jobId) {
  const saved = new Set(getSaved(email));
  saved.add(jobId);
  saveJSON(savedKey(email), [...saved]);
}
function removeJob(email, jobId) {
  const saved = getSaved(email).filter(id => id !== jobId);
  saveJSON(savedKey(email), saved);
}

function renderSaved(email) {
  savedList.innerHTML = "";
  const savedIds = getSaved(email);

  if (savedIds.length === 0) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "No saved jobs yet.";
    savedList.appendChild(p);
    return;
  }

  const savedJobs = savedIds
    .map(id => JOBS.find(j => j.id === id))
    .filter(Boolean)
    .map(j => ({ ...j, score: "-" }));

  savedJobs.forEach(job => savedList.appendChild(jobCard(job, false, email)));
}

/* ---------- Profile fill/load ---------- */
function loadProfileToForm(email) {
  const profile = loadJSON(profileKey(email), null);
  if (!profile) return;

  $("fullName").value = profile.fullName ?? "";
  $("location").value = profile.location ?? "";
  $("qualification").value = profile.qualification ?? "";
  $("experience").value = profile.experience ?? 0;
  $("skills").value = profile.skills ?? "";
  $("interests").value = profile.interests ?? "";
}

/* ---------- Event wiring ---------- */
// Tabs
navHome.addEventListener("click", () => {
  showLanding();
  hide(aboutSection);
  hide(contactSection);
});

navAbout.addEventListener("click", () => {
  hide(landingView);
  hide(authView);
  hide(homeView);
  hide(resultsView);
  show(aboutSection);
  hide(contactSection);
  show(mainFooter);
});

navContact.addEventListener("click", () => {
  hide(landingView);
  hide(authView);
  hide(homeView);
  hide(resultsView);
  hide(aboutSection);
  show(contactSection);
  show(mainFooter);
});
loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  show(loginForm); hide(signupForm);
  clearMsg(authMsg);
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  show(signupForm); hide(loginForm);
  clearMsg(authMsg);
});

// Signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("signupEmail").value.trim().toLowerCase();
  const pass = $("signupPassword").value;

  const users = getUsers();
  if (users.some(u => u.email === email)) {
    setMsg(authMsg, "Account already exists. Please login.", "err");
    return;
  }

  users.push({ email, password: pass });
  setUsers(users);
  setSession(email);

  setMsg(authMsg, "Account created! Redirecting…", "ok");
  boot();
});

// Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("loginEmail").value.trim().toLowerCase();
  const pass = $("loginPassword").value;

  const users = getUsers();
  const found = users.find(u => u.email === email && u.password === pass);

  if (!found) {
    setMsg(authMsg, "Invalid email or password.", "err");
    return;
  }

  setSession(email);
  setMsg(authMsg, "Login successful! Redirecting…", "ok");
  boot();
});

// Logout
logoutBtn.addEventListener("click", () => {
  clearSession();
  showAuth();
});

// Save profile
profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = getSession();
  if (!email) return showAuth();

  const profile = {
    fullName: $("fullName").value.trim(),
    location: $("location").value.trim(),
    qualification: $("qualification").value,
    experience: Number($("experience").value || 0),
    skills: $("skills").value,
    interests: $("interests").value 

  };

  saveJSON(profileKey(email), profile);
  setMsg(profileMsg, "Profile saved! Showing recommendations…", "ok");

  renderJobs(email);
  renderSaved(email);
  showResults();
});

// Go results without saving
goResultsBtn.addEventListener("click", () => {
  const email = getSession();
  if (!email) return showAuth();
  renderJobs(email);
  renderSaved(email);
  showResults();
});

// Back home
backHomeBtn.addEventListener("click", () => {
  const email = getSession();
  if (!email) return showAuth();
  loadProfileToForm(email);
  showHome();
});

/* ---------- Boot ---------- */
function boot() {
  clearMsg(authMsg);
  clearMsg(profileMsg);
  clearMsg(resultsMsg);

  const email = getSession();
  if (!email) {
    showAuth();
    return;
  }

  setUserBar(email);
  loadProfileToForm(email);
  showHome();
}

boot();
