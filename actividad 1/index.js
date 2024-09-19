peliculas.forEach((pelicula) => {
    pelicula.addEventListener("click", function () {
      const imgSrc = this.getAttribute("data-img");
      const title = this.getAttribute("data-title");
      const text = this.getAttribute("data-text");
      const link = this.getAttribute("data-link");

      mostrarCard(imgSrc, title, text, link);
    });
  });const movieCard = document.getElementById("movieCard");
  const cardImg = document.getElementById("cardImg");
  const cardTitle = document.getElementById("cardTitle");
  const cardText = document.getElementById("cardText");
  const cardLink = document.getElementById("cardLink");
  const closeCard = document.getElementById("closeCard");
  const peliculas = document.querySelectorAll(".pelicula")