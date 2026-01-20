
document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('bg-white', 'shadow-md', 'py-3');
            header.classList.remove('bg-transparent', 'py-5');

            // Logo text and desktop nav links color
            const logoText = header.querySelector('.logo-text');
            if (logoText) {
                logoText.classList.add('text-slate-900');
                logoText.classList.remove('text-white');
            }

            navLinks.forEach(link => {
                link.classList.add('text-slate-600');
                link.classList.remove('text-white/90');
            });

            // CTA Button
            const ctaBtn = header.querySelector('.cta-btn');
            if (ctaBtn) {
                ctaBtn.classList.add('bg-indigo-600', 'text-white', 'hover:bg-indigo-700');
                ctaBtn.classList.remove('bg-white', 'text-indigo-600', 'hover:bg-indigo-50');
            }
        } else {
            header.classList.remove('bg-white', 'shadow-md', 'py-3');
            header.classList.add('bg-transparent', 'py-5');

            const logoText = header.querySelector('.logo-text');
            if (logoText) {
                logoText.classList.remove('text-slate-900');
                logoText.classList.add('text-white');
            }

            const navLinks = header.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('text-slate-600');
                link.classList.add('text-white/90');
            });

            const ctaBtn = header.querySelector('.cta-btn');
            if (ctaBtn) {
                ctaBtn.classList.remove('bg-indigo-600', 'text-white', 'hover:bg-indigo-700');
                ctaBtn.classList.add('bg-white', 'text-indigo-600', 'hover:bg-indigo-50');
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });
    }

    // Lead Form Submission
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(leadForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            alert('Thank you! Your request has been received.');
            leadForm.reset();
        });
    }

    // Set Copyright Year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});
