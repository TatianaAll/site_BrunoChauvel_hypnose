const hamburger = document.getElementById("hamburgerMenu");
const sidebar = document.getElementById("sideBar");

// ouverture et fermeture du menu burger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

// fermeture du menu burger quand on clique sur un lien
document.querySelectorAll("#sideBar a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  });
});

// fermeture du menu burger quand on clique en dehors
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  }
});

// Envoi mail
(function () {
  emailjs.init("2l1o8GgE6UDC_RGJ_"); // ta clé publique
})();

document
  .querySelector("form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const inputTrapped = document.getElementById("troll");
    if (!inputTrapped.value) {
      emailjs.sendForm("service_iuo8fi9", "template_fa7eraa", this).then(
        () => {
          alert("Message envoyé ✅");
          this.reset();
        },
        (error) => {
          alert("Erreur ❌");
          console.log(error);
        },
      );
    }
  });
