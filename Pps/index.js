
let index = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.children.length;
const tags = document.querySelectorAll('.tags');

setInterval(() => {
    index = (index + 1) % totalImages;
    images.style.transform = `translateX(-${index * 300}px)`;
}, 3000);

tags.forEach(tags => {
    tags.addEventListener('click', () => {
        // Cambiar el color de la etiqueta seleccionada
        tags.forEach(t => t.style.backgroundColor = '#fff'); // Resetear colores
        tags.style.backgroundColor = '#a0d3e8';
        tags.style.color = '#fff';

        // Aquí puedes agregar el código para registrar el evento en la base de datos
        console.log(`Etiqueta seleccionada: ${tags.textContent}`);
        // Ejemplo de llamada a una función para enviar a la base de datos
        // registrarEnBaseDeDatos(tag.textContent);
    });
});




