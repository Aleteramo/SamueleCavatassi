// Animazioni delle lettere per ogni sezione
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');

    sections.forEach(section => {
        // Prepara l'animazione delle lettere all'entrata della sezione
        const textElements = section.querySelectorAll('.interactive-text');
        
        textElements.forEach(text => {
            // Suddivide il testo in span per ogni lettera per permettere l'animazione
            let newText = '';
            text.textContent.split('').forEach(char => {
                newText += `<span>${char}</span>`;
            });
            text.innerHTML = newText;
        });

        // Aggiunge un listener per animare le lettere quando la sezione entra in viewport
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateLetters(entry.target);
                    // Disconnette l'observer una volta che l'animazione è stata eseguita
                    observer.disconnect();
                }
            });
        }, {threshold: 0.5}); // Triggera l'animazione quando la metà della sezione è visibile

        observer.observe(section);
    });
});

// Funzione per animare le lettere
function animateLetters(element) {
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.transform = 'translateY(0px)';
            span.style.opacity = 1;
        }, 100 * index); // Ritardo progressivo per ciascuna lettera
    });
}
