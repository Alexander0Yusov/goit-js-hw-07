import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// const lightEl = basicLightbox.create(
//   `<img src="${galleryItems[0].original}" alt="${galleryItems[0].description}" width="800" height="600">`
// );
// document.body.innerHTML = lightEl;
// lightEl.show();
console.log(galleryEl);

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join("");

galleryEl.innerHTML = markupGallery;
