import ky from "https://unpkg.com/ky/distribution/index.js";
import { createCard, getInfo } from "./functions/getCard.js";
import { createList } from "./functions/getSearchCharacter.js";

const BASE_URL = "https://rickandmortyapi.com/api/character";
// elementos
const containerEl = document.querySelector(".container");
const searchEl = document.querySelector(".search-input");
const listEl = document.querySelector(".list");
const body = document.querySelector("body");

// inicializo las imagenes
async function init() {
	// obtenemos la data de las imgs
	const { results } = await ky(BASE_URL).json();

	//por cada data mandamos a cargar el card
	results.forEach(async (character) => {
		// obtenemos cada img con su info (se pasa la img y el id)
		const card = await createCard(character.image, character.id);
		// agregamos la card al contenedor
		containerEl.appendChild(card);

		// calculamos la mitad de lo que tiene el viewport
		const screenLengh = body.clientWidth / 2;
		// calculamos la pocición del elemento en base al eje x
		const cardLengh = card.getBoundingClientRect().x;

		card.addEventListener("mouseenter", async (e) => {
			const id = card.firstChild.dataset.id;
			const content = await getInfo(id);
			card.appendChild(content);
			const cardContent = card.lastChild;

			card.addEventListener("mouseleave", () => {
				cardContent.style.display = "none";
			});

			// preguntamos que si la posicion del elemento es mayor que el de la pantalla
			if (cardLengh >= screenLengh) {
				// añadimos la clase rever que muestra los datos al lado izquierdo
				cardContent.classList.add("reverse");
			}
		});
	});
}

init();

searchEl.addEventListener("input", async () => {
	listEl.style.display = "block";
	if (!searchEl.value) {
		clearItems();
		containerEl.style.pointerEvents = "auto";
		return;
	}

	containerEl.style.pointerEvents = "none";

	const nameEl = searchEl.value;
	const url = `${BASE_URL}/?name=${nameEl}`;
	clearItems();

	try {
		const { results } = await ky(url).json();

		results.forEach(({ image, name, origin }) => {
			const item = createList(image, name, origin);
			listEl.appendChild(item);
		});
	} catch (error) {
		const li = document.createElement("li");
		li.classList.add("list-error");
		li.innerText = "No Results!";
		clearItems();
		listEl.appendChild(li);
	}
});

searchEl.addEventListener("blur", () => {
	listEl.style.display = "none";
	containerEl.style.pointerEvents = "auto";
});
searchEl.addEventListener("click", () => {
	listEl.style.display = "block";
	containerEl.style.pointerEvents = "none";
});

function clearItems() {
	while (listEl.firstChild) {
		listEl.removeChild(listEl.firstChild);
	}
}
