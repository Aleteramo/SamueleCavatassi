// Gestione dello scroll tra le sezioni
let currentSectionIndex = 0;
const sections = document.querySelectorAll('.scroll-section');
let isScrolling = false;
const deltaYThreshold = 30; // Soglia per lo scroll

// Aggiunge l'evento di scroll
document.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    let deltaY = event.deltaY;
    // Determina la direzione dello scroll e aggiorna l'indice della sezione corrente
    if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        changeSection(currentSectionIndex);
    } else if (deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
        changeSection(currentSectionIndex);
    }
});

// Funzione per cambiare sezione
function changeSection(index) {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });

    // Impedisce nuovi scroll fino al completamento della transizione
    setTimeout(() => {
        isScrolling = false;
    }, 1000); // Assicurati che questo tempo corrisponda alla durata delle tue transizioni CSS
}
