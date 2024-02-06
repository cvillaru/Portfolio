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



const sections = document.querySelectorAll('section');

    let currentSectionIndex = 0;

    function updateCurrentSection() {
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + viewportHeight;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
          currentSectionIndex = index;
        }
      });
    }

    function scrollToSection(index) {
      const targetSection = sections[index];
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    document.addEventListener('wheel', (event) => {
      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scrolling down
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        // Scrolling up
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
      }
    });

    window.addEventListener('scroll', () => {
      updateCurrentSection();
    });

    updateCurrentSection(); // Initial check on page load