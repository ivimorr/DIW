document.addEventListener('DOMContentLoaded', function() {
    // Obtener la chincheta del primer artículo
    const chincheta1 = document.querySelector('article:first-child .chincheta');

    // Agregar la clase mueveChincheta1 para iniciar la animación
    chincheta1.classList.add('chincheta1');


    // Obtener el primer artículo de la página
    const article1 = document.querySelector('article:first-child');

    // Agregar la clase article1 para iniciar la animación
    article1.classList.add('article1');

    // Obtener la chincheta del segundo artículo
    const chincheta2 = document.querySelector('content article:nth-child(2) .chincheta');

    // Agregar la clase chincheta2 para iniciar la animación
    chincheta2.classList.add('chincheta2');

    // Obtener la chincheta del tercer artículo
    const chincheta3 = document.querySelector('content article:last-child .chincheta');

    // Agregar la clase chincheta3 para iniciar la animación
    chincheta3.classList.add('chincheta3');
});