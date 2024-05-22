document.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    const mainContent = document.querySelector('section.event-details');

    if (window.scrollY > 50) {
        header.classList.add('shrink');
        mainContent.classList.add('pushed-down');
    } else {
        header.classList.remove('shrink');
        mainContent.classList.remove('pushed-down');
    }
});
