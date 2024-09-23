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

document.addEventListener('DOMContentLoaded', function() {
    // Array of words to display in the background
    const words = ["Creative", "Innovative", "AI", "Cybersecurity", "Development", "Solutions", "Design", "Tech", "Future"];

    // Container for the words
    const container = document.getElementById('moving-words-container');

    // Function to create a moving word element
    function createMovingWord(text) {
        const wordElement = document.createElement('span');
        wordElement.textContent = text;
        wordElement.classList.add('moving-word');

        // Set initial random position
        wordElement.style.top = Math.random() * window.innerHeight + 'px';
        wordElement.style.left = Math.random() * window.innerWidth + 'px';

        // Random animation duration
        wordElement.style.animationDuration = (10 + Math.random() * 10) + 's';

        // Append to the container
        container.appendChild(wordElement);

        // Remove word after animation ends
        wordElement.addEventListener('animationend', () => {
            container.removeChild(wordElement);
        });
    }

    // Create initial words with random intervals
    for (let i = 0; i < words.length; i++) {
        setTimeout(() => {
            createMovingWord(words[i]);
        }, i * 1000);
    }

    // Add more words on click
    container.addEventListener('click', () => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        createMovingWord(randomWord);
    });
});
