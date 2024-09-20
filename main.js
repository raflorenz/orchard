// capture all anchor clicks and console.log() the element which has been clicked
document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');

    if (anchor) {
        event.preventDefault();
        console.log(anchor);
    }
});

// get modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close');
const gallery = document.getElementById('gallery');

// event delegation: listen to clicks on the image gallery
gallery.addEventListener('click', event => {
  if (event.target.classList.contains('gallery-img')) {
    const largeImageSrc = event.target.getAttribute('data-large-image');

    // preload image
    const img = new Image();
    img.src = largeImageSrc;
    img.onload = () => openModal(largeImageSrc);
  }
});

// function to open modal with animations
function openModal(largeImageSrc) {
    modalImage.src = largeImageSrc;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// function to close modal with animations
function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

// close the modal when close button is clicked
closeButton.addEventListener('click', closeModal);

// close the modal when user clicks outside the image
window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

// close the modal when pressing the Escape key
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
