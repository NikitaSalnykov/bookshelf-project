const navItems = document.querySelectorAll('.header-nav-item');
const mobileNavItems = document.querySelectorAll('.mobile-menu-link')

const active = document.querySelector('.shopping-list__title');

const isActive = () => {
  if (active) {
  navItems[1].classList.add('active')
    mobileNavItems[1].classList.add('active')
} else {
  navItems[0].classList.add('active')
    mobileNavItems[0].classList.add('active')
}
}

isActive()