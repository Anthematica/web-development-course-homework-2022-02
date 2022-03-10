const imagesEl = document.querySelector(".images");
const namesEl  = document.querySelector(".names");
const buttonEl = document.querySelector("button");
const imageContainer = document.querySelectorAll('.images_container');
let array  = []
let data = 0;


function createImage(url){
    const images = url;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("images_container");
    const imageElChild = document.createElement("img");
    imageElChild.classList.add("img");
    imageElChild.src = images;

    imgContainer.appendChild(imageElChild);

    return imgContainer;
}

index = 0;
fetch("https://picsum.photos/v2/list?limit=20")
.then(function  (resp){
    return resp.json();
})
.then(function(data){
    data.forEach(function (image){
        const imageEl = createImage(image.download_url);
        imagesEl.appendChild(imageEl);
        console.log(data)
        namesEl.textContent = image.author;
    });
})

buttonEl.addEventListener('click', function(e){
    const {target} = e;
    const current = getComputedStyle(imagesEl).getPropertyValue("--current").trim();
    const next = Number(current) + 1;
    namesEl.style.setProperty('--current', next)
    imagesEl.style.setProperty('--current', next);
});

