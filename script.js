// script.js

document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-text h1');
    heroText.style.opacity = '0';
    heroText.style.transition = 'opacity 2s ease-in-out';

    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 500);

    // Animation for scrolling into sections
    const sections = document.querySelectorAll('.section-container');
    const options = {
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });
});
