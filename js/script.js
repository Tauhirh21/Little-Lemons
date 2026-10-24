// ===== FRESH SQUEEZE LEMONADE =====
// Runs once the HTML is fully loaded

document.addEventListener('DOMContentLoaded', () => {
    console.log('🍋 Fresh Squeeze site loaded');

    // ===== 1. Auto-update copyright year =====
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.textContent = `© ${year} Handcrafted Lemonade | Made with 🍋`;
    }

    // ===== 2. Track Order button clicks =====
    const orderButtons = document.querySelectorAll('.btn');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('🛒 Order button clicked:', btn.textContent.trim());
        });
    });

    // ===== 3. Smooth scrolling for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== 4. Mobile menu toggle =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            menuToggle.textContent = isOpen ? '✕' : '☰';
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });
    }

    // ===== 5. Simple cart counter =====
    let cartCount = 0;
    const cartEl = document.getElementById('cart-count');
    const cartBox = document.getElementById('cart');

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            if (cartEl) cartEl.textContent = cartCount;

            if (cartBox) {
                cartBox.classList.add('bump');
                setTimeout(() => cartBox.classList.remove('bump'), 300);
            }
        });
    });
});
