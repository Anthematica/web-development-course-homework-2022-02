const imagenActiva = document.querySelector(".galery__img");
const thumbnail = document.querySelectorAll(".thumbnail__link");

const reset = () => {
	thumbnail.forEach((img) =>
		img.classList.contains("item--active")
			? img.classList.remove("item--active")
			: ""
	);
};

thumbnail.forEach((img) => [
	img.addEventListener("click", (e) => {
		e.preventDefault();
		const imgUrl = e.target.firstElementChild.dataset.src;
		const items = e.target;
		reset();
		imagenActiva.src = imgUrl;
		items.classList.add("item--active");
	}),
]);
