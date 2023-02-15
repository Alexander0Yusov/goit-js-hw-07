import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join("");

galleryEl.innerHTML = markupGallery;

// const lightEl = basicLightbox.create(
//   `<img src="${galleryItems[1].original}" alt="${galleryItems[1].description}" width="800" height="600">`
// );
// document.body.insertAdjacentHTML("afterbegin", lightEl);
// lightEl.show();
// console.log(lightEl);
