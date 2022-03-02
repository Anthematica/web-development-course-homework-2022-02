
const currentImage = document.querySelector(".currentImage");
const images = document.querySelectorAll(".list__image-url");
const loader = document.querySelector(".loader");


currentImage.src = "https://picsum.photos/id/664/1000/500";

images.forEach(element =>{
	element.addEventListener("click", e=>{
		e.preventDefault();
		loader.classList.remove("ocultar");
		element.classList.add("active");
		setTimeout( ()=>{
		currentImage.src = element.dataset.filter;
		element.classList.remove("url__active");
		loader.classList.add("ocultar");
		}, 500);
		
	})
});

