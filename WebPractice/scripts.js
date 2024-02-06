const navbarContainer = document.querySelector('.navbar-container');
const navbarShader = document.querySelector('.navbar-shader');

// blur background
function triggerBlurEffect() {
    navbarShader.style.setProperty('--display-value', 'block');
    navbarShader.style.setProperty('--blur-value', '10px');
}

function triggerRemoveBlurEffect() {
    navbarShader.style.setProperty('--display-value', 'none');
    navbarShader.style.setProperty('--blur-value', '0px');
}
// end of blur background


// better scroll
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('ul a');

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

// end of better scroll
