window.onload = function () {
  alert("📄 Welcome to the Haskell-Pandoc Page!");
  generateTOC();
  setupDarkModeToggle();
  setupScrollButton();
  setupSearch();
  updateTimestamp();
};

function generateTOC() {
  const content = document.getElementById("content");
  const tocDiv = document.getElementById("tocContent");
  if (!content || !tocDiv) return;

  const headings = content.querySelectorAll("h1, h2, h3");
  const list = document.createElement("ul");

  headings.forEach((heading, i) => {
    const id = "heading-" + i;
    heading.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + id;
    a.innerText = heading.innerText;

    li.appendChild(a);
    list.appendChild(li);
  });

  tocDiv.appendChild(list);
}

function setupDarkModeToggle() {
  const btn = document.getElementById("darkModeToggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btn.innerText = document.body.classList.contains("dark-mode")
      ? "🌞 Light Mode"
      : "🌙 Dark Mode";
  });
}

function setupScrollButton() {
  const topBtn = document.getElementById("topBtn");

  window.onscroll = function () {
    topBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
  };

  topBtn.onclick = function () {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function toggleTOC() {
  const toc = document.getElementById("tocContent");
  toc.style.display = toc.style.display === "none" ? "block" : "none";
}

function setupSearch() {
  const searchBox = document.getElementById("searchBox");
  searchBox.addEventListener("input", () => {
    const keyword = searchBox.value.toLowerCase();
    const paragraphs = document.querySelectorAll("#content p, #content li");
    paragraphs.forEach(p => {
      const text = p.textContent.toLowerCase();
      p.style.backgroundColor = text.includes(keyword) ? "#ffffcc" : "transparent";
    });
  });
}

function updateTimestamp() {
  const ts = document.getElementById("timestamp");
  const now = new Date().toLocaleString();
  ts.textContent = `🕐 Last generated: ${now}`;
}
