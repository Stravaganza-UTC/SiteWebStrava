// Légende dans le alt
// Si déjà un paragraphe, le alt ne devient pas légende
let oldGalerieScroll = 0;

document.querySelectorAll(".grilleGalerie").forEach((grilleGalerie) => {
    const divs = Array.from(grilleGalerie.querySelectorAll('div'));

    divs.forEach((div) => {
        let alt = div.querySelector("img").alt;
        // Vérifier qu'il n'y a pas de p dans les enfants
        if (div.querySelector("p") == null) {
            // Ajouter un p avec la légende
            let p = document.createElement("p");
            p.innerText = alt;
            div.appendChild(p);
        }
        div.addEventListener('click', () => {
            const index = divs.indexOf(div);
            carousel(div, index);
        });
    });
});

function carousel(img, index) {
    let grille = img.parentNode
    if (grille.className !== "carouselGalerie") {
        grille.className = "carouselGalerie"
        grille.querySelectorAll('.btVisuImg').forEach(function (el) {
            el.classList.remove("hidden");
        });
        grille.scrollTo(window.innerWidth * index, 0);
        oldGalerieScroll = window.scrollY;
    }
}

function carouselClose(bt) {
    window.scrollTo(0, oldGalerieScroll);
    let grille = bt.parentNode;
    grille.className = "grilleGalerie";
    grille.querySelectorAll('.btVisuImg').forEach(function (el) {

        el.classList.add("hidden");
    });
}

function carouselScrollRight(bt) {
    let carousel = bt.parentNode;
    carousel.scrollTo(carousel.scrollLeft + window.innerWidth, 0);
}

function carouselScrollLeft(bt) {
    let carousel = bt.parentNode;
    carousel.scrollTo(carousel.scrollLeft - window.innerWidth, 0);
}