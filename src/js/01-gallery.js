// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainerEl = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> `;
    })
    .join('');
}

const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
});

