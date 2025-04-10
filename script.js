const movieData = [
  { title: "Interstellar", url: "movieplayer/interstellar.html" },
  { title: "Smile", url: "#" },
  { title: "I, Robot", url: "#" },
  { title: "Overlord the Sacred Kingdom", url: "#" },
];

const searchInput = document.querySelector(".search-input");

const resultBox = document.createElement("div");
resultBox.style.position = "absolute";
resultBox.style.top = "100%";
resultBox.style.left = "0";
resultBox.style.width = "100%";
resultBox.style.backgroundColor = "#fff";
resultBox.style.color = "#000";
resultBox.style.border = "1px solid #ccc";
resultBox.style.zIndex = "999";
resultBox.style.display = "none";
resultBox.style.maxHeight = "200px";
resultBox.style.overflowY = "auto";
resultBox.style.borderRadius = "10px";
resultBox.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
resultBox.classList.add("search-results");

searchInput.parentNode.appendChild(resultBox);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultBox.innerHTML = "";

  if (!query) {
    resultBox.style.display = "none";
    return;
  }

  const matches = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultBox.style.display = "none";
    return;
  }

  matches.forEach((movie) => {
    const item = document.createElement("div");
    item.textContent = movie.title;
    item.style.padding = "10px";
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      window.location.href = movie.url;
    });
    resultBox.appendChild(item);
  });

  resultBox.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search")) {
    resultBox.style.display = "none";
  }
});
