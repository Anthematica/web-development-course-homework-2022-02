
const contentImage = document.querySelector(".info__content");
const campoInput = document.querySelector(".navegation__search");
const campoElement = document.querySelector(".navegation");

function createImage(url){
	const imageEl = document.createElement("img");
	imageEl.classList.add("image");
	imageEl.src = url.image;

	return imageEl;
}

async function loadImage(){
	const url = await fetch("https://rickandmortyapi.com/api/character");

	const result = await url.json();
	result.results.forEach(element=>{
		// console.log(element)
		const div = document.createElement("div");
		const currentInfo = document.createElement("div");
		const currentDetails = document.createElement("div");
		const currentTitle = document.createElement("h2");
		const currentSpecie = document.createElement("div");
		const currentPlanet = document.createElement("div");	
		const currentStatus = document.createElement("div");
		const currentParagraph = document.createElement("p");
		const image = createImage(element);


		div.classList.add("current");
		
		div.append(currentInfo,image);
		contentImage.appendChild(div);
		currentInfo.append(currentTitle,currentDetails);
		currentDetails.append(currentSpecie,currentPlanet,currentStatus);

		div.addEventListener("mouseenter", (e)=>{
			const box = currentInfo.getBoundingClientRect();
			console.log(box);

			const target = e;
			// console.log(target);
			currentTitle.textContent = `${element.name}`;
			currentSpecie.innerHTML = `<b class="nebol">Especie: </b><span class="nebol__info">${element.species}</span>`;
			currentPlanet.innerHTML = `<b class="nebol">Planet: </b><span class="nebol__info">${element.location.name}</span>`;
			currentStatus.innerHTML = `<b class="nebol">Especie: </b><span class="nebol__info">${element.status}</span>`;

			currentDetails.classList.add("current__details");
			currentInfo.classList.remove("invert");
			currentTitle.classList.add("current__name");
			currentPlanet.classList.add("idented");
			if(box.left < 300){
				console.log("lo puedo cambiar");
				currentInfo.classList.add("invert");
				currentInfo.classList.remove("active");
			}else{
				currentInfo.classList.add("active");
				currentInfo.classList.remove("invert");
			}
		});
		div.addEventListener("mouseleave",()=>{
			currentInfo.classList.remove("active");
			currentTitle.textContent = "";
			currentTitle.classList.remove("current__name");

			currentDetails.classList.remove("current__details");
			currentPlanet.classList.remove("idented");
			currentInfo.classList.remove("invert");
			currentSpecie.innerHTML = "";
			currentPlanet.innerHTML = "";
			currentStatus.innerHTML = "";
			if(box.left > 220){
				console.log("lo puedo cambiar");
				currentInfo.classList.remove("invert");
				currentInfo.classList.add("active");
			}
			
		});
		
	});

	const urlName = await fetch("https://rickandmortyapi.com/api/character");
	const filterName = await urlName.json();
	const searchEl = document.createElement("div");

	filterName.results.forEach(filter=>{
		campoInput.addEventListener("keyup", (e)=>{
			const elementInput = campoInput.value;
			const image = createImage(filter);
			const divEl = document.createElement("div");
			const personName = document.createElement("span");


			searchEl.classList.add("search__element");
			image.classList.add("image__search");
			divEl.classList.add("content__search");
			personName.classList.add("content__search-title")
			
			const datos = JSON.stringify(filter.name.split(""));
			if(datos.indexOf(elementInput)){
				personName.textContent = `${filter.name}`;
				divEl.append(image,personName);
				searchEl.append(divEl);
				campoElement.append(searchEl);
				console.log("si tiene");
				
			}else{
				personName.textContent = "";
				searchEl.remove();
				console.log("no la tiene");

			}
			
		});

		campoInput.addEventListener("keypress", ()=>{
			const elementInput = campoInput.value;
			console.log("esta en keypress");
			if(elementInput == ""){
				span.textContent = "";

			} 
		})
	})

	
}
loadImage();