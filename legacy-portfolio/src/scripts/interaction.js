/* 
  Nishant's Portfolio - Professional Interaction Engine v3
  Stitch Digital Monolith Theme
*/

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const navbar = document.getElementById('navbar');

    // 1. Monolith Cursor Logic
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            
            cursorOutline.animate({
                transform: `translate3d(${posX}px, ${posY}px, 0)`
            }, { duration: 500, fill: "forwards", easing: "ease-out" });
        });

        // Hover Detection
        const interactive = document.querySelectorAll('a, button, .monolith-card, .theme-toggle');
        interactive.forEach(el => {
            el.addEventListener('mouseenter', () => body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => body.classList.remove('cursor-hover'));
        });
    }

    // 2. Magnetic Physics (Power Cell Buttons)
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate3d(0, 0, 0)`;
        });
    });

    // 3. 3D Tilt Parallax (Monolith Cards)
    const cards = document.querySelectorAll('.monolith-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (centerY - y) / 20;
            const rotateY = (x - centerX) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Set properties for the ::before pseudo-element
            card.style.setProperty('--glow-x', `${x}px`);
            card.style.setProperty('--glow-y', `${y}px`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 4. Staggered Entrance Reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Stagger children if needed
                const staggerItems = entry.target.querySelectorAll('.reveal-child');
                staggerItems.forEach((item, i) => {
                    setTimeout(() => item.classList.add('active'), i * 80);
                });
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 5. Smooth Section Transitions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar ? navbar.offsetHeight : 0;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Header Scroll Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar?.classList.add('glass-blur', 'bg-abyss/80', 'border-b', 'border-abyss-lower');
            navbar?.classList.add('py-4');
            navbar?.classList.remove('py-6');
        } else {
            navbar?.classList.remove('glass-blur', 'bg-abyss/80', 'border-b', 'border-abyss-lower');
            navbar?.classList.add('py-6');
            navbar?.classList.remove('py-4');
        }
    });

    // 7. Theme Management Controller
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    
    const updateThemeUI = (theme) => {
        if (!themeIcon) return;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); // Sun icon = Dark mode active (click for light)
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon'); // Moon icon = Light mode active (click for dark)
        }
    };

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateThemeUI(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        const newTheme = isCurrentlyDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme);
    });
});
