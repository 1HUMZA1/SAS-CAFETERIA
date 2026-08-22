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
    if (typedTextSpan) setTimeout(type, 500);

    // Typing Effect for Showcase Section
    const descToType = "Experience the perfect swirl of rich, creamy soft serve made with real dairy and premium ingredients.";
    const typedDescSpan = document.getElementById("typed-desc");
    const descCursor = document.querySelector(".desc-cursor");
    
    let descCharIndex = 0;
    
    function typeDesc() {
        if (descCharIndex < descToType.length) {
            if(descCursor && !descCursor.classList.contains("typing")) descCursor.classList.add("typing");
            if(typedDescSpan) typedDescSpan.textContent += descToType.charAt(descCharIndex);
            descCharIndex++;
            setTimeout(typeDesc, 30); // Faster typing speed for description
        } else {
            if(descCursor) descCursor.classList.remove("typing");
        }
    }
    
    // Start description typing effect after a longer delay (when user scrolls down ideally, or just delayed)
    if (typedDescSpan) setTimeout(typeDesc, 1500);

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

    // Showcase Slider Logic
    const slides = document.querySelectorAll('.showcase-slide');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));
            
            slides[index].classList.add('active');
            if(indicators.length > index) {
                indicators[index].classList.add('active');
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        indicators.forEach((ind, index) => {
            ind.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }
});
