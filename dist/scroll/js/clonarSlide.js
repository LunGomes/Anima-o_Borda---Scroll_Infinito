const carousel = document.querySelector('#carousel');
const slides = document.querySelector('#slides');

// Clonando a div que tem as imagens

const slidesClone = slides.cloneNode(true);

carousel.appendChild(slidesClone);