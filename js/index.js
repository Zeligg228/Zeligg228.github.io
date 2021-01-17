const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const body = document.querySelector('body');

openModal.addEventListener('click', () => {
  modal.classList.add('modal-active');
  body.classList.add('body-overflow');
});
closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-active');
  body.classList.remove('body-overflow');

});
window.addEventListener('click', (event) => {
  if(event.target == modal) {
    modal.classList.remove('modal-active');
    body.classList.remove('body-overflow');
  }
});