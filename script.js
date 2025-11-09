document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // Vybereme všechny obrázky s data-lightbox="true"
    document.querySelectorAll('[data-lightbox="true"]').forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;       // zobrazíme obrázek ve lightboxu
            lightbox.style.display = "flex"; // zobrazíme lightbox
        });
    });

    // Kliknutím kamkoliv na lightbox ho zavřeme
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
