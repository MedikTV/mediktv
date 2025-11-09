document.addEventListener("DOMContentLoaded", () => {
    const pyosImg = document.getElementById("pyos-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const prevodImg = document.getElementById("prevod-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    pyosImg.addEventListener("click", () => {
        lightboxImg.src = pyosImg.src; // použije stejný obrázek
        lightbox.style.display = "flex";

    prevodImg.addEventListener("click", () => {
        lightboxImg.src = prevodImg.src; // použije stejný obrázek
        lightbox.style.display = "flex";    
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none"; // zavření kliknutím kamkoliv
    });
});
