// social-button.js

document.addEventListener('DOMContentLoaded', function() {
    // Crear el contenedor del botón flotante
    const socialBtn = document.createElement('a');
    socialBtn.href = "https://www.facebook.com";
    socialBtn.target = "_blank";
    socialBtn.id = "social-btn";
    socialBtn.classList.add("btn", "btn-primary", "rounded-circle", "shadow-lg", "d-flex", "justify-content-center", "align-items-center");

    // Crear la imagen del ícono de Facebook
    const img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";
    img.alt = "Facebook";
    img.width = 30;  // Tamaño de la imagen
    img.height = 30;

    // Agregar la imagen al contenedor del botón
    socialBtn.appendChild(img);

    // Agregar el botón al cuerpo del documento (al final de la página)
    document.body.appendChild(socialBtn);
});

