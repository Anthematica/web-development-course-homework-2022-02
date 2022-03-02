
let imageList = document.querySelectorAll(".images_items")

let bigImage = document.querySelector(".big_image");


for (i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener("click", (e) => {
        bigImage.src = e.target.dataset.url;
    });
}




