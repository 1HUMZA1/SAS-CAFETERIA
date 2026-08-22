document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Typing Effect for Hero Section
    const textToType = "SAS CAFETERIA";
    const typedTextSpan = document.getElementById("typed-text");
    const cursorSpan = document.querySelector(".cursor");

    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here (ms)
        } else {
            cursorSpan.classList.remove("typing");
        }
    }

    // Start typing effect after a small delay
    setTimeout(type, 500);

    // Menu Carousel Logic
    const track = document.querySelector('.menu-track');
    const cards = Array.from(track.children);
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    // Check if carousel exists on the page
    if (track && nextBtn && prevBtn) {
        let currentIndex = 0;
        let autoPlayInterval;
        
        // Calculate the width to move (card width + gap)
        // Card is 350px, gap is 30px
        const getMoveDistance = () => {
            const cardWidth = cards[0].getBoundingClientRect().width;
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 30;
            return cardWidth + gap;
        };

        const updateCarousel = () => {
            const moveDistance = getMoveDistance();
            track.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
        };

        const moveToNext = () => {
            // Check if we reached the end (showing the last complete card)
            const trackWidth = track.getBoundingClientRect().width;
            const containerWidth = document.querySelector('.menu-carousel').getBoundingClientRect().width;
            const maxIndex = cards.length - Math.floor(containerWidth / getMoveDistance());
            
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateCarousel();
        };

        const moveToPrev = () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                const containerWidth = document.querySelector('.menu-carousel').getBoundingClientRect().width;
                currentIndex = cards.length - Math.floor(containerWidth / getMoveDistance());
            }
            updateCarousel();
        };

        // Event listeners for buttons
        nextBtn.addEventListener('click', () => {
            moveToNext();
        });

        prevBtn.addEventListener('click', () => {
            moveToPrev();
        });
        
        // Handle window resize
        window.addEventListener('resize', updateCarousel);
    }

    // Dashboard Tabs Logic
    const tabLinks = document.querySelectorAll('.tab-link');
    const dashboardPanels = document.querySelectorAll('.dashboard-panel');

    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove active class from all tabs and panels
                tabLinks.forEach(t => t.classList.remove('active'));
                dashboardPanels.forEach(p => p.classList.remove('active'));

                // Add active class to clicked tab
                link.classList.add('active');

                // Show corresponding panel
                const targetId = link.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }

    // Featured Slider Logic
    const featuredSlider = document.querySelector('.featured-slider');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (featuredSlider && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            featuredSlider.scrollBy({ left: -140, behavior: 'smooth' });
        });
        rightArrow.addEventListener('click', () => {
            featuredSlider.scrollBy({ left: 140, behavior: 'smooth' });
        });
    }

});
