
const currentImage = document.querySelector(".currentImage");
const images = document.querySelectorAll(".list__image-url");
const loader = document.querySelector(".loader");


currentImage.src = "https://picsum.photos/id/664/1000/500";
images[0].classList.add("active");
images.forEach(element =>{
	element.addEventListener("click", e=>{
		e.preventDefault();
		
		const portaImage = document.querySelector(".list__image-items.active");
		loader.classList.remove("ocultar");
		portaImage ? portaImage.classList.remove("active") : null
		setTimeout( ()=>{
		currentImage.src = element.dataset.filter;
		element.classList.remove("url__active");
		loader.classList.add("ocultar");
		}, 500);
		
		element.parentElement.classList.add("active");
	})
});

