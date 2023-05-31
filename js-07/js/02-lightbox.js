import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
for (let item of galleryItems) {
    const itemEl = document.createElement("li");
    const linkEl = document.createElement("a");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("class", "gallery__image");
    imgEl.setAttribute("data-src", item.preview);
    
    imgEl.setAttribute("data-source", item.original);
    imgEl.setAttribute("alt", item.description);
    linkEl.setAttribute("href", item.original);
    itemEl.classList.add("gallery__item");
    linkEl.classList.add("gallery__link");
    imgEl.classList.add("gallery__image");
    imgEl.classList.add("lazyload");
    linkEl.appendChild(imgEl);
    itemEl.appendChild(linkEl);
    gallery.appendChild(itemEl);
}

document.addEventListener("DOMContentLoaded", () => {
    new SimpleLightbox(".gallery a", {
      captions: true,
      captionsData: "alt",
      captionDelay: 250,
    });
  });
// console.log(galleryItems);
