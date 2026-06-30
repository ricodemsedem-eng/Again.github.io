document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = Array.from(document.querySelectorAll('main section'));
    const footer = document.querySelector('.footer');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 120;

        let currentSection = sections[0];
        for (const section of sections) {
            if (scrollPosition >= section.offsetTop) {
                currentSection = section;
            }
        }

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection.id}`);
        });
    }

    function addProjectAlerts() {
        const projectLinks = document.querySelectorAll('.card a');
        projectLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const projectTitle = link.closest('.card')?.querySelector('h3')?.textContent || 'project';
                alert(`Thanks for checking out ${projectTitle}! Replace this placeholder with a real project link or detail page.`);
            });
        });
    }

    function setFooterYear() {
        const year = new Date().getFullYear();
        footer.textContent = `Designed and built with care. © ${year}. Customize this page with your own projects, contact details, and personal branding.`;
    }

    updateActiveLink();
    addProjectAlerts();
    setFooterYear();
    window.addEventListener('scroll', updateActiveLink);
});
