export function createList(url, name, origin) {
	const listItem = document.createElement("li");
	listItem.classList.add("list-item");

	listItem.innerHTML = `
		<img class="list-image" src="${url}" alt="" />
		<span class="list-text">${name} - ${origin.name}</span>`;

	return listItem;
}
