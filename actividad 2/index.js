function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.getElementsByClassName('carousel-item');
    const firstItem = items[0];
    carousel.appendChild(firstItem.cloneNode(true));
    carousel.removeChild(firstItem);
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.getElementsByClassName('carousel-item');
    const lastItem = items[items.length - 1];
    carousel.insertBefore(lastItem.cloneNode(true), items[0]);
    carousel.removeChild(lastItem);
}