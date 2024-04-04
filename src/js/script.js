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
