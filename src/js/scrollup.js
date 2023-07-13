let scrollButton = document.getElementById('scroll-up');
let scrollIcon = document.getElementById('scroll-svg');
scrollButton.style.display = 'none';
scrollIcon.style.display = 'none';

window.addEventListener('scroll', function () {

    if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
        scrollIcon.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
        scrollIcon.style.display = 'none';
    }
});


scrollButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
})

