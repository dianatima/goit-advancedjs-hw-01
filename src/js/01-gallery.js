// Описаний в документації*
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів*
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGalleryElMarkup = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
};

const makeGallery = galleryItems.map(makeGalleryElMarkup).join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
