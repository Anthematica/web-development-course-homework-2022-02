let firstThumbnail = document.querySelector(".thumbnail.first");
let mainImage = document.querySelector(".main-image");
let thumbnailLinks = document.querySelectorAll(".thumbnail__link");

// Load first thumbnail image on main canvas and make it visible
mainImage.src = firstThumbnail.dataset.bigImg;
mainImage.classList.add("show");

// Traverse thumbnail elements array and add click event listener to each
thumbnailLinks.forEach( function (thumbnailLink) {
  thumbnailLink.addEventListener("click", loadImage);
});

// Change main canvas src to URL extracted from clicked element data attribute
function loadImage(e) {
  e.preventDefault();
  mainImage.src = e.target.dataset.bigImg;

  for (let thumbnailLink of thumbnailLinks) {
    if (thumbnailLink.classList.contains("selected")) {
      thumbnailLink.classList.remove("selected");
    }
  }
  e.target.parentElement.classList.add("selected");
}

// Add pseudo element to clicked menu item
let menuItems = document.querySelectorAll(".menu__link");

menuItems.forEach(function (item) {
  item.addEventListener("click", setActive);
});

function setActive(e) {
  e.preventDefault();

  let linkItems = document.querySelectorAll(".menu__link");

  for (let linkItem of linkItems) {
    if (linkItem.classList.contains("active")) {
      linkItem.classList.remove("active");
    }
  }

  e.target.classList.add("active");

  let listItem = e.target.parentElement;
  listItem.parentElement.classList.add("paint-pseudo");
  listItem.parentElement.style.setProperty("--pos-y", (listItem.offsetTop - 10) + "px");
}