// script.js

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(container => {
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

