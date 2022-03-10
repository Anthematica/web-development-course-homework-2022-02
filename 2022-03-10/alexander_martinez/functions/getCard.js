import ky from "https://unpkg.com/ky/distribution/index.js";
const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function createCard(img, id) {
	// creamos la card
	const card = document.createElement("div");
	card.classList.add("card");

	const image = new Image();

	image.src = img;
	image.classList.add("img");
	image.dataset.id = id;

	// const cardBody = await getInfo(id);

	card.appendChild(image);
	// card.append(imageEl, cardBody);

	return card;
}

export async function getInfo(id) {
	const { name, gender, origin, location, species, status } = await ky(
		`${BASE_URL}/${id}`
	).json();

	const cardContainer = document.createElement("div");
	cardContainer.classList.add("card-content");

	cardContainer.innerHTML = `
		<h2 class="card-header">${name}</h2>
		<p class="card-text">
			<b>Species: </b> ${species} <br>
			<b>Gender: </b> ${gender} <br>
			<b>Planet: </b> ${origin.name} <br>
			<b>Status: </b> ${status} <br>
			<b>Location: </b> ${location.name}
		</p>`;

	return cardContainer;
}
