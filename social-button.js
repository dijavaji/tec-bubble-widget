// social-button.js

document.addEventListener('DOMContentLoaded', function() {
    const socialBtn = document.getElementById('social-btn');
    if (socialBtn) {
        socialBtn.addEventListener('click', function() {
            console.log("¡Botón presionado!");
        });
    }
});

