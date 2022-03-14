
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
	const url = await fetch("https://rickandmortyapi.com/api/character?page=4");

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

		let box = currentInfo.getBoundingClientRect();
		div.addEventListener("mouseenter", (e)=>{

			const target = e;
			currentTitle.textContent = `${element.name}`;
			currentSpecie.innerHTML = `<b class="nebol">Especie: </b><span class="nebol__info">${element.species}</span>`;
			currentPlanet.innerHTML = `<b class="nebol">Planet: </b><span class="nebol__info">${element.location.name}</span>`;
			currentStatus.innerHTML = `<b class="nebol">Especie: </b><span class="nebol__info">${element.status}</span>`;

			currentDetails.classList.add("current__details");
			currentTitle.classList.add("current__name");
			currentPlanet.classList.add("idented");
			if(box.left < 300){
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
			
		});
		
	});

	const searchEl = document.createElement("div");
	const component = document.createElement("div");
	component.classList.add("currentDetails");
	campoElement.appendChild(component);
	
	campoInput.addEventListener("keyup", async element => {
	  try {
	    const filterName = element.target.value.toLowerCase();
	    const urlName = await fetch(`https://rickandmortyapi.com/api/character/?name=${filterName}`);
	    const { results } = await urlName.json();

	    removeItems();

	    results.forEach( urlImage => {
	      const contentSearch = document.createElement("div");
	      const image = document.createElement("img");
	      const personName = document.createElement("span");
	      image.classList.add("image__search");
	      contentSearch.classList.add("content__search");
	      personName.classList.add("content__search-title")
	      contentSearch.append(image,personName);

	      image.src = urlImage.image;
	      personName.textContent = `${urlImage.name}`;
	      component.appendChild(contentSearch);
	      component.style.display = "block";
	    });
	    filterName === "" ? component.style.display = "none" : null;
	  } catch (err) {component.style.display = "none";}
	});

	const removeItems = () => {
	  const deleteElement = document.querySelectorAll(".content__search");
	  deleteElement.forEach((el) => {
	    component.removeChild(el);
		});
	}

	
}

loadImage();