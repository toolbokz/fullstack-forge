// Simple intersection observer to add 'visible' class to sections
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        const observer = new window.IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        sections.forEach(section => observer.observe(section));
    });
}
