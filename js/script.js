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
    const words = ["Creative", "Innovative", "AI", "Cybersecurity", "Development", 
        "Solutions", "Design", "Tech", "Future"];

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

document.addEventListener('DOMContentLoaded', function() {
    // Other functionality...

    // Initialize Carousels
    document.querySelectorAll('.carousel-container').forEach(container => {
        const carousel = container.querySelector('.carousel');
        const images = carousel.querySelectorAll('img');
        const dotsContainer = container.querySelector('.carousel-dots');
        let currentIndex = 0;

        // Create dots based on number of images
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.dataset.index = index;
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('span');

        // Function to update carousel position
        function updateCarousel(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        // Swipe functionality
        let startX = 0;
        let isSwiping = false;

        container.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
            isSwiping = true;
        });

        container.addEventListener('touchmove', e => {
            if (!isSwiping) return;
            const currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
            
            if (diffX > 50) { // Swipe left
                if (currentIndex < images.length - 1) {
                    currentIndex++;
                    updateCarousel(currentIndex);
                }
                isSwiping = false;
            } else if (diffX < -50) { // Swipe right
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel(currentIndex);
                }
                isSwiping = false;
            }
        });

        container.addEventListener('touchend', () => {
            isSwiping = false;
        });

        // Dots functionality
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.index);
                updateCarousel(currentIndex);
            });
        });
    });
});
