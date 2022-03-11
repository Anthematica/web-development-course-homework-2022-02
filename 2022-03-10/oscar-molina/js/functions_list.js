export { createElements, fillSearchBar }

function createElements (name, species, location, status, image, id) {
    const characterContainer = document.createElement('div')
    characterContainer.classList.add('character-container')

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('character-image-container')

    const characterImage = document.createElement('img')
    characterImage.src = image
    characterImage.dataset.id = id

    const infoContainer = document.createElement('div')
    infoContainer.classList.add('character-info-container')


    const title = document.createElement('h3')
    title.textContent = name + location

    const spanSpecies = document.createElement('span')
    const strongSpecies = document.createElement('strong')
    strongSpecies.textContent = 'Species: '
    spanSpecies.appendChild(strongSpecies)
    spanSpecies.textContent += species 

    const spanPlanet = document.createElement('span')
    const strongPlanet = document.createElement('strong')
    strongPlanet.textContent = 'Planet: '
    spanPlanet.appendChild(strongPlanet)
    spanPlanet.textContent += location

    const spanStatus = document.createElement('span')
    const strongStatus = document.createElement('strong')
    strongStatus.textContent = 'Status: '
    spanStatus.appendChild(strongStatus)
    spanStatus.textContent += status


    characterContainer.appendChild(imageContainer)
    characterContainer.appendChild(infoContainer)
    
    imageContainer.appendChild(characterImage)

    infoContainer.appendChild(title)
    infoContainer.appendChild(spanSpecies)
    infoContainer.appendChild(spanPlanet)
    infoContainer.appendChild(spanStatus)

    return characterContainer
}

function fillSearchBar(image, name, location){
    const listItem = document.createElement('li')

    const listItem_ImageContainer = document.createElement('div')
    const listItem_Image = document.createElement('img')
    listItem_Image.src = image
    listItem_ImageContainer.appendChild(listItem_Image)

    const listItem_InfoContainer = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = name + " - " + location
    listItem_InfoContainer.appendChild(title)

    
    listItem.appendChild(listItem_ImageContainer)
    listItem.appendChild(listItem_InfoContainer)

    return listItem
}