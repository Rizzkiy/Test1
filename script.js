// Animasi tambahan untuk teks
document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('.content');

    textElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
            el.style.transition = 'all 0.5s ease';
        }, index * 300); // Mengatur jeda untuk animasi tiap paragraf
    });
});