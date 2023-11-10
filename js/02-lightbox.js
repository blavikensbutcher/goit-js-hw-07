import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

function markup(arr) {
   return arr.map(({preview, original, description}) =>
    `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
    `
    ).join('')
}

gallery.insertAdjacentHTML('beforeend', markup(galleryItems))

let lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.8,
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250
});




console.log(galleryItems);

