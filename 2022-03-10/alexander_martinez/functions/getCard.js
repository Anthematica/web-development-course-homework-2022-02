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

	card.appendChild(image);

	return card;
}

export async function getInfo(id) {
	const { name, gender, origin, location, species, status } = await ky(
		`${BASE_URL}/${id}`
	).json();

	const cardContainer = document.createElement("div");
	cardContainer.classList.add("card-content");

	const content = createCardContent(
		name,
		gender,
		origin.name,
		location.name,
		species,
		status
	);
	cardContainer.appendChild(content);

	return cardContainer;
}

function createCardContent(...card) {
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("card-content");

	const cardContent = document.createElement("pre");
	cardContent.classList.add("card-text");

	const title = document.createElement("h2");
	title.classList.add("card-header");

	const types = ["name", "Species", "Gender", "Planet", "Status", "Location"];

	card.forEach((e, index) => {
		if (index === 0) {
			title.innerText = e;
			cardContent.append(title);
		} else {
			const boldText = createBoldEl(types[index]);
			cardContent.append(boldText, `${e} \n`);
		}
	});
	console.log(cardContent);

	return cardContent;
}

function createBoldEl(element) {
	const bold = document.createElement("b");
	bold.classList.add("card-bold");
	bold.innerText = `${element}: `;

	return bold;
}
