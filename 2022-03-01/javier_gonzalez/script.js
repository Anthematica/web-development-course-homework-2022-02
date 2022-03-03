
const photoSmall = document.querySelectorAll(".photo_list .image");
const image = document.querySelector(".img_big");
let numberImg = 0;

const change = (event) => {
    image.src = event.target.src;
    numberImg = Array.from(photoSmall).indexOf(event.target);
};

photoSmall.forEach(img => {
    img.addEventListener('click', change)
});