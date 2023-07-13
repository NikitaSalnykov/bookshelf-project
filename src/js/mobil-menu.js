var burgerButton = document.querySelector('.header-burger-menu');
var modalMobile = document.getElementById('modal-mobile');

burgerButton.addEventListener('click', function() {
  modalMobile.style.display = 'block';
});

var closeModalMobile = document.getElementById('close-modal-mobile');
var outsideModalMobile = document.querySelector('.mobile-burger-menu');

closeModalMobile.addEventListener('click', function() {
  modalMobile.style.display = 'none';
});

outsideModalMobile.addEventListener('click', function(event) {
  if (event.target === outsideModalMobile) {
    modalMobile.style.display = 'none';
  }
});
