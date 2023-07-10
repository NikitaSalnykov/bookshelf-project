window.addEventListener('scroll', function() {
    let scrollButton = document.getElementById('scroll-up');
    let scrollIcon = document.getElementById('scroll-svg');
    
    if (window.scrollY > 500 && window.innerWidth <= 767) {
        scrollButton.style.display = 'block';
        scrollIcon.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
        scrollIcon.style.display = 'none';
    }
});

const scrollToTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const scrollButton = document.getElementById('scroll-up');
scrollButton.addEventListener('click', scrollToTop);
