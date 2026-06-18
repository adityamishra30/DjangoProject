document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher Logic ---
    const themeToggle = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    
    // Check local storage for preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
        }
    } else {
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            // Toggle icon
            if (themeIcon) {
                themeIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
            }
            
            showToast(isLight ? 'Switched to Light Theme' : 'Switched to Dark Theme', 'info');
        });
    }

    // --- Toast Notification System ---
    window.showToast = function(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = '<i class="fa-solid fa-check-circle"></i>';
        if (type === 'error') icon = '<i class="fa-solid fa-circle-xmark"></i>';
        if (type === 'info') icon = '<i class="fa-solid fa-circle-info"></i>';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
            <div class="toast-progress"></div>
        `;

        container.appendChild(toast);

        // Slide out and remove toast after 3.5 seconds
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 3500);
    };

    // --- Statistics Counter Logic ---
    const counterElements = document.querySelectorAll('.stat-number');
    if (counterElements.length > 0) {
        const countUp = (element) => {
            const target = parseInt(element.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const stepTime = Math.max(Math.floor(duration / target), 15);
            let current = 0;

            const timer = setInterval(() => {
                current += Math.ceil(target / (duration / stepTime));
                if (current >= target) {
                    element.textContent = target + (element.getAttribute('data-suffix') || '');
                    clearInterval(timer);
                } else {
                    element.textContent = current + (element.getAttribute('data-suffix') || '');
                }
            }, stepTime);
        };

        // Trigger animation when counters are in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(el => observer.observe(el));
    }

    // --- Testimonials Slider Logic ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot-indicator');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let currentSlide = 0;

    const showSlide = (index) => {
        if (slides.length === 0) return;
        
        // Wrap index bounds
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show selected slide
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => showSlide(idx));
        });

        // Autoplay every 7 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 7000);
    }

    // --- FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.faq-answer');
                content.style.maxHeight = null;
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                const content = faqItem.querySelector('.faq-answer');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // --- Skills Tab Filter Logic (About Us Page) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Set buttons state
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set panels state
            tabPanels.forEach(panel => {
                if (panel.id === `${targetTab}-panel`) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contact-main-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mock submit transition
            const submitBtn = document.getElementById('form-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            
            setTimeout(() => {
                showToast('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }
});
