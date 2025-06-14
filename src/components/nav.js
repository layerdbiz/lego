// src/components/nav.js

export default function nav() {
    const navLinks = document.querySelectorAll('nav .nav-links a'); // Selects only nav links within the <nav> element
    const footerNavLinks = document.querySelectorAll('footer .nav-links a'); // Selects nav links within the <footer>
    const sections = document.querySelectorAll('section'); // Get all sections

    // Function to set active nav link based on scroll position
    const setActiveNavLink = () => {
        const offset = document.querySelector('nav').offsetHeight + 50; // Height of nav + some buffer

        sections.forEach(section => {
            const top = section.offsetTop - offset;
            const bottom = section.offsetTop + section.offsetHeight - offset;
            const id = section.getAttribute('id');

            if (window.scrollY >= top && window.scrollY < bottom) {
                // Apply active-link to main navigation
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    }
                });
                // Ensure footer links are NOT highlighted
                footerNavLinks.forEach(link => {
                    link.classList.remove('active-link');
                });
            }
        });

        // Handle active link for the very top (hero-cover) if scrolled to top
        if (window.scrollY === 0) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === '#hero-cover') {
                    link.classList.add('active-link');
                }
            });
            // Ensure footer links are NOT highlighted when at the top
            footerNavLinks.forEach(link => {
                link.classList.remove('active-link');
            });
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', setActiveNavLink);
    // Call on load to set initial active link
    setActiveNavLink();
}