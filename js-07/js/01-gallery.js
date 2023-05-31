import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
for (let item of galleryItems) {
    const itemEl = document.createElement("li");
    const linkEl = document.createElement("a");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("class", "gallery__image");
    imgEl.setAttribute("src", item.preview);
    imgEl.setAttribute("data-source", item.original);
    imgEl.setAttribute("alt", item.description);
    linkEl.appendChild(imgEl);
    itemEl.appendChild(linkEl);
    gallery.appendChild(itemEl);
}
gallery.addEventListener("click", onClickOpen);

function onClickOpen(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        window.addEventListener("keydown", onEscClick);
        const imageUrl = event.target.getAttribute("data-source");
        const fullImage = basicLightbox.create(`
        <div class="modal">
        <img src="${imageUrl}" alt="Image description">
        </div>
    `)


        fullImage.show()
       

        function onEscClick(event) {
            if (event.key === "Escape") {
                fullImage.close();
                
            }
    }

    
    }
     
    
}

