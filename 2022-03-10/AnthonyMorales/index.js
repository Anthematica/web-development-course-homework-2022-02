const imagesContainer = document.querySelector(".images-container");
const searchInputCharacter = document.querySelector(".searchInputCharacter");
const searchContainer = document.querySelector(".search-input");


const BASE_URL_API = "https://rickandmortyapi.com/api/character";
const locationURL = "https://rickandmortyapi.com/api/location";


const createImage = (character) => {
    const containerItemImage = document.createElement("div");
    containerItemImage.classList.add("containerItemImage");

    const characterImage = document.createElement("img");
    characterImage.classList.add("characterImageStyles");
    
    characterImage.src = character.image;

    containerItemImage.appendChild(characterImage);
    return containerItemImage;
}

const rickAndMortyImages = async () => {
    const resp = await fetch(BASE_URL_API);
    const {results} = await resp.json();

    results.forEach((characterImage) => {
        const characterImg = createImage(characterImage);
        
        imagesContainer.appendChild(characterImg);
        
        characterImg.addEventListener("mouseenter", (e) => {

            const imgContainer = document.querySelector(".containerItemImage.active");

            if(imgContainer) {
                imgContainer.classList.remove("active");
            }
            e.target.classList.add("active");
            imagesContainer.classList.add("shadow");

            const tootltipInfo = document.createElement("div");
            tootltipInfo.classList.add("tooltip");
            characterImg.appendChild(tootltipInfo);
            rickAndMortyInfo(tootltipInfo, characterImage.id);
        });

        characterImg.addEventListener("mouseleave", (e) => {
            e.target.querySelector(".tooltip").remove();
            const imgContainer = document.querySelector(".images-container.shadow");

            if(imgContainer) {
                imgContainer.classList.remove("shadow");
            }

        });
    });
}


const rickAndMortyInfo = async (tooltip, i) => { 
    const resp = await fetch(`${BASE_URL_API}/${i}`);
    const results = await resp.json();

    const resp2 = await fetch(`${locationURL}/${i}`);
    const results2 = await resp2.json();

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    tooltip.appendChild(nameContainer);

    const nameInfo = document.createElement("p");
    nameInfo.classList.add("name");
    nameContainer.appendChild(nameInfo);
    nameInfo.textContent = results.name;

    const dimentionInfo = document.createElement("p");
    dimentionInfo.classList.add("dimention");
    nameContainer.appendChild(dimentionInfo);
    dimentionInfo.textContent = "- " + results2.dimension;

    const restInformationContainer = document.createElement("div");
    restInformationContainer.classList.add("characterInfo");
    tooltip.appendChild(restInformationContainer);

    const strongTitle = document.createElement("strong");
    strongTitle.textContent = "Species:";
    strongTitle.classList.add("strongStyles");
    restInformationContainer.appendChild(strongTitle);

    const spiciesInformation = document.createElement("p");
    spiciesInformation.classList.add("spicieInfo");
    restInformationContainer.appendChild(spiciesInformation);

    const planetContainer = document.createElement("div");
    tooltip.appendChild(planetContainer);
    planetContainer.classList.add("planet");

    const strongTitle2 = document.createElement("strong");
    strongTitle2.textContent = "Planet:";
    strongTitle2.classList.add("strongStyles");
    planetContainer.appendChild(strongTitle2);

    const planetInfo = document.createElement("p");
    planetInfo.classList.add("planetInfo");
    planetContainer.appendChild(planetInfo);

    const statusContainer = document.createElement("div");
    tooltip.appendChild(statusContainer);
    statusContainer.classList.add("status");

    const strongTitle3 = document.createElement("strong");
    strongTitle3.textContent = "Status:";
    strongTitle3.classList.add("strongStyles");
    statusContainer.appendChild(strongTitle3);

    const statusInfo = document.createElement("p");
    statusInfo.classList.add("statusInfo");
    statusContainer.appendChild(statusInfo);


    spiciesInformation.textContent = results.species;
    planetInfo.textContent = results.origin.name;
    statusInfo.textContent = results.status;
}

const clearInputSearch = () => {
    const containerInfo = document.querySelectorAll(".infoInputSearchContainer");

    containerInfo.forEach((item) => {
        item.remove();
    });
}

const searchInput = () => {
    const containerSearch = document.createElement("ul");
    containerSearch.classList.add("containerSearch");


    searchInputCharacter.addEventListener("input", async () => {
        const filterCharacterResult = await searchCharacter(searchInputCharacter.value);

        const bandera = containerSearch.hasChildNodes();

        if(bandera){
            console.log(bandera);
            clearInputSearch();
        }

        filterCharacterResult.forEach((item) => {
            const infoInputSearchContainer = document.createElement("div");
            infoInputSearchContainer.classList.add("infoInputSearchContainer");
            containerSearch.appendChild(infoInputSearchContainer);

            const imgCharacter = document.createElement("img");
            imgCharacter.classList.add("imgCharacterInputSearch");
            imgCharacter.src = item.image;
            infoInputSearchContainer.appendChild(imgCharacter);

            const nameCharacter = document.createElement("p");
            nameCharacter.classList.add("nameCharacter");
            infoInputSearchContainer.appendChild(nameCharacter);
            nameCharacter.textContent = `${item.name} - ${item.origin.name}`;
        });
        
        searchContainer.appendChild(containerSearch);

        if (searchInputCharacter.value === '') {
            containerSearch.remove();
        }
    });
}
searchInput();

const searchCharacter = async (name) => {
    const resp = await fetch(`${BASE_URL_API}/?name=${name}`);
    const {results} = await resp.json();
    
    return results;
}



rickAndMortyImages();

