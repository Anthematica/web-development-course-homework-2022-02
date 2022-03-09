/**----------------------------------------------------------------**/

let currentImage = -1;
const imagesArray = [];
const btnNextEl = document.querySelector(".btn-next");
const imageScrollerEl = document.querySelector(".image-scroller");
const authorTextEl = document.querySelector(".image-author");

const COLUMN_GAP = 80;
const IMAGE_WIDTH = 110;
const MAIN_IMAGE_WIDTH = 172;
const MAIN_IMAGE_SHADOW = 4;
const BASE_URL = "https://picsum.photos/v2/list?page=4&limit=20";

// Randomize Picsum URL page number

const randomizeURL = (url) => {
  let randomPageNum = Math.floor(Math.random() * 21);

  return url.replace(/page=1/i, `page=${randomPageNum}`);
};

// Set image URL size to 800

const normalizeImageURL = (url, width, height = width) => {
  let urlArr = url.split("/");

  urlArr.splice(-2, 2, width, height);
  return urlArr.join("/");
};

/**----------------------------------------------------------------**/

const createImage = (imageFromJson, index) => {
  const newImageEl = document.createElement("img");
  newImageEl.src = normalizeImageURL(imageFromJson.download_url, 400);
  newImageEl.classList.add("image");
  newImageEl.dataset.author = imageFromJson.author;
  newImageEl.dataset.index = index;

  return newImageEl;
};

const setImageActive = () => {
  authorTextEl.textContent = imagesArray[currentImage].dataset.author;

  const activeImageEl = imageScrollerEl.querySelector(".image.active");
  if (activeImageEl) {
    activeImageEl.classList.remove("active");
  }
  imagesArray[currentImage].classList.add("active");

  let sizeDifference = MAIN_IMAGE_WIDTH - IMAGE_WIDTH;
  imageScrollerEl.style.transform = `translateX(-${
    (IMAGE_WIDTH + COLUMN_GAP) *
    currentImage
  }px)`;
};

/**----------------------------------------------------------------**/

const fetchImages = (async () => {
  const remoteImages = await fetch(BASE_URL);
  const imageList = await remoteImages.json();

  imageList.forEach((image, index) => {
    const newImageEl = createImage(image, index);
    imagesArray.push(newImageEl);
    imageScrollerEl.appendChild(newImageEl);
  });

  currentImage = 0;
  console.log(currentImage);
  imagesArray[currentImage].classList.add("active");
  authorTextEl.textContent = imagesArray[currentImage].dataset.author;

  /**----------------------------------------------------------------**/

  const searchParam = Number.parseInt(
    new URL(document.location).searchParams.get("index")
  );

  console.log(searchParam);

  if (searchParam && searchParam > 0 && searchParam <= imagesArray.length) {
    currentImage = searchParam - 1;
    setImageActive(currentImage);
  }

  /**----------------------------------------------------------------**/

  btnNextEl.addEventListener("click", () => {
    if (currentImage === imagesArray.length - 1) {
      currentImage = -1;
    }

    currentImage += 1;
    console.log("currentImage", currentImage);
    authorTextEl.textContent = imagesArray[currentImage].dataset.author;

    setImageActive(currentImage);
  });
})();
