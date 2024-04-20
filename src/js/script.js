const header = document.querySelector('header');

// Make headline id element disappear when scrolling down
window.onscroll = function () {
    const scrollPosition = window.scrollY;

    // Determine desired scroll threshold (e.g., 50px):
    const threshold = 50;

    if (scrollPosition > threshold) {
        header.style.position = 'sticky'; // Adjust top position as needed
        header.style.top = '0';
        header.style.backgroundColor = '#212529';
    } else {
        header.style.position = 'static';
        header.style.backgroundColor = 'transparent';
    }
};

// Get all sections and links
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        // Check if the section is visible
        if (sectionTop >= 0 && sectionTop < window.innerHeight) {
            // Remove the active class from all links
            links.forEach(link => link.classList.remove('active-link'));

            // Add the active class to the current link
            links[index].classList.add('active-link');
        }
    });
});
