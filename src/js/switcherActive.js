const navItems = document.querySelectorAll('.header-nav-item');
const mobileNavItems = document.querySelectorAll('.mobile-menu-link')

const active = document.querySelector('.shopping-list__title');

const isActive = () => {
  if (active) {
  navItems[1].classList.add('activeItem')
    mobileNavItems[1].classList.add('activeItem')
} else {
  navItems[0].classList.add('activeItem')
    mobileNavItems[0].classList.add('activeItem')
}
}

isActive()