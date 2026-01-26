const hamburger = document.getElementById("hamburgerMenu");
const sidebar = document.getElementById("sideBar");

// ouverture et fermeture du menu burger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

// fermeture du menu burger quand on clique sur un lien
document.querySelectorAll("#sideBar a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  });
});

// fermeture du menu burger quand on clique en dehors
document.addEventListener("click", (e) => {
  if (
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  }
});

