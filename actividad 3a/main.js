document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("menu-mobile").classList.add("show");
});

document.getElementById("menu-close").addEventListener("click", function () {
  document.getElementById("menu-mobile").classList.remove("show");
});
