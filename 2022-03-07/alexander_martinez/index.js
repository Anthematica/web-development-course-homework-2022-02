const galeryEl = document.querySelector(".galery");
const previewEl = document.querySelector(".preview");
const btnBack = document.querySelector("#btnLeft");
const btnNext = document.querySelector("#btnRight");
const btnClose = document.querySelector("#btnClose");
const imgActive = document.querySelector(".img-active");

let index = 0,
	arrImgs = [];

const getImages = async () => {
	const url = "https://picsum.photos/v2/list?limit=12";

	const resp = await fetch(url);
	const data = await resp.json();

	data.forEach((img) => {
		createGalery(img);
	});
};

getImages();

function createGalery({ id, author, download_url }) {
	const [smallImg, bigImg] = getImagesSize(download_url);
	const image = new Image();

	image.src = smallImg;
	image.id = id;
	image.classList.add("galeryImg");
	arrImgs.push(image);

	galeryEl.appendChild(image);
}

function getImagesSize(url) {
	return [changeImgSize(url, 350), changeImgSize(url, 800, 800)];
}

function changeImgSize(url, width, height = width) {
	const splitUrl = url.split("/");

	splitUrl.splice(
		-2,
		2,
		width * window.devicePixelRatio ?? 1,
		height * window.devicePixelRatio ?? 1
	);
	return splitUrl.join("/");
}

const showImage = (img) => {
	const [smallImg, bigImg] = getImagesSize(img.src);
	imgActive.src = bigImg;
	previewEl.style.display = "flex";
	// console.log(arrImgs);
};

// evento de las imagenes
galeryEl.addEventListener("click", (e) => {
	const elm = e.target;
	if (elm.localName === "div") return;

	index = arrImgs.indexOf(elm);
	showImage(arrImgs[index]);
});

// close
btnClose.addEventListener("click", () => {
	previewEl.style.display = "none";
});

// next img
btnNext.addEventListener("click", () => {
	index++;
	if (index > arrImgs.length - 1) {
		index = 0;
	}
	showImage(arrImgs[index]);
});

// back img
btnBack.addEventListener("click", () => {
	index--;
	if (index < 0) {
		index = arrImgs.length - 1;
	}
	showImage(arrImgs[index]);
});
