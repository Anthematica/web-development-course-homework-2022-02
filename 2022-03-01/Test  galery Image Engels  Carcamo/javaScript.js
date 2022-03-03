
	const smallImagen = document.querySelectorAll('.content-imagenSmall > img');
	const bigImagen = document.querySelector('.contentimagenBig');

	function changes (e){

		bigImagen.style.backgroundImage = `url(${e.target.src})`;
	}

	smallImagen.forEach(element => { element.addEventListener('click', changes)});
