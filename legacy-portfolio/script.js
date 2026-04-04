/* 
  Nishant's Portfolio - Premium SaaS Interaction Engine
*/

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const contactForm = document.getElementById('contact-form');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // 0. Custom Magnetic Cursor Logic
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline follower
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

        // Parallax background blobs
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.02;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            blob.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Cursor Hover Effects
    const interactiveElements = document.querySelectorAll('a, button, .glass, .theme-toggle');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => body.classList.add('cursor-hovering'));
        el.addEventListener('mouseleave', () => body.classList.remove('cursor-hovering'));
    });

    // 0.1 Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn, .logo, .theme-toggle');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0, 0)`;
        });
    });

    // 0.2 3D Tilt Parallax for Project Cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    // 1. Sticky Navbar & Active Link Tracking
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Tracking
        const sections = document.querySelectorAll('section, header');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 2. Premium Theme Toggle
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        
        // Brief white/dark flash for premium feel
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: ${theme === 'light' ? '#fff' : '#000'};
            z-index: 9999; opacity: 0; transition: opacity 0.3s; pointer-events: none;
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => overlay.style.opacity = '0.1', 10);
        
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
        
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }, 300);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // 3. Staggered Scroll Reveal
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a stagger container, animate children
                if (entry.target.classList.contains('stagger-items')) {
                    const children = entry.target.querySelectorAll('.reveal');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, index * 100);
                    });
                }
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal, .stagger-items').forEach(el => revealObserver.observe(el));

    // 4. Advanced Form Feedback
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing Request...';
            btn.style.opacity = '0.7';

            // Simulate enterprise-grade processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            btn.innerHTML = '<i class="fas fa-check-circle"></i> Proposal Dispatched';
            btn.style.backgroundColor = '#059669'; // Emerald 600
            btn.style.opacity = '1';
            
            contactForm.reset();

            // Revert Button
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 4000);
        });
    }

    // 5. Smooth Scroll Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (navHeight - 20);
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
