document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const yOffset = window.innerHeight / 2 - targetSection.clientHeight / 2;
            const targetOffset = targetSection.offsetTop - yOffset;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    }
});