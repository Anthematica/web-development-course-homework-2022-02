export function createList(url, name, origin) {
	const listItem = document.createElement("li");
	listItem.classList.add("list-item");

	const listImage = new Image();

	listImage.classList.add("list-image");
	listImage.src = url;

	listItem.appendChild(listImage);

	const text = document.createElement("span");
	text.classList.add("list-text");
	text.innerText = `${name} - ${origin.name}`;

	listItem.appendChild(text);

	return listItem;
}
