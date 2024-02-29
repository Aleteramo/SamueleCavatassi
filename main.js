// Gestione dello scroll tra le sezioni
let currentSectionIndex = 0;
const sections = document.querySelectorAll('.scroll-section');
let isScrolling = false;
const deltaYThreshold = 30; // Soglia per lo scroll

document.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    let deltaY = event.deltaY;
    if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        changeSection(currentSectionIndex);
    } else if (deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
        changeSection(currentSectionIndex);
    }
});

function changeSection(index) {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

// Animazioni delle lettere per ogni sezione
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        const textElements = section.querySelectorAll('.interactive-text');
        textElements.forEach(text => {
            let newText = '';
            text.textContent.split('').forEach(char => {
                newText += `<span>${char}</span>`;
            });
            text.innerHTML = newText;
        });

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateLetters(entry.target);
                    observer.disconnect();
                }
            });
        }, {threshold: 0.5});

        observer.observe(section);
    });
});

function animateLetters(element) {
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.transform = 'translateY(0px)';
            span.style.opacity = 1;
        }, 100 * index);
    });
}
