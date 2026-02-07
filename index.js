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
// this method allows the setup of Options for the application globally. The configuration should happen before any send email method is called
(function () {
  emailjs.init("2l1o8GgE6UDC_RGJ_");
})();

document
  .querySelector("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Dummy input to avoid robot
    const inputTrapped = document.getElementById("troll");
    // If all the field complete = robot so no mail
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
