const BASE_API_URL = 'https://rickandmortyapi.com/api/character/'
const mainContainer = document.querySelector('.mainContainer')
const inputSearch = document.querySelector('.searchInput');
const navSearchContainer = document.querySelector(".navMain");



async function loadImages() {

  const resp = await fetch(`${BASE_API_URL}`);
  const { results } = await resp.json();
  // console.log(results);

  results.forEach(function (character) {
    const imageContainer = createImage(character);
    imageContainer.dataset.name = character.name;
    imageContainer.dataset.origin = character.origin.name;
    imageContainer.dataset.species = character.species;
    imageContainer.dataset.status = character.status;
    mainContainer.appendChild(imageContainer);

    imageContainer.addEventListener('mouseenter', (event) => {
      let dataCharacter = event.target.dataset;
      // console.log(`event: top `, event.target.getBoundingClientRect() );
      const textContainer = createContainer(event.target.offsetTop, event.target.offsetLeft, dataCharacter, dataCharacter);
      event.target.appendChild(textContainer);
    });
    imageContainer.addEventListener('mouseleave', (event) => {
      // console.log(`event: `, event);
      const removeText = document.querySelector(".textDescription");
      // console.log(removeText);
      imageContainer.removeChild(removeText);
    });
  });
}

inputSearch.addEventListener('input', inputText);

inputSearch.addEventListener("blur", function(  ) {
  removeNavImageContainer(); 
});

// form.addEventListener("focus", function( event ) {
//   event.target.style.background = "pink";
// }, true);

function inputText(event) {

  let characterName = event.target.value;
  console.log(characterName);
  

  if(characterName === "") {
    removeNavImageContainer();
  }else {
    removeNavImageContainer();
    searchCharacter(characterName);
    
  }
  
}





async function searchCharacter(characterName) {
  const searchList = document.querySelector(".searchList");
  const searchAPICharacter = 'https://rickandmortyapi.com/api/character/?name='

  const resp = await fetch(`${searchAPICharacter}${characterName}`);
  const { results } = await resp.json();
  console.log(results);

  if(results){
    results.forEach(function (character) {
      const imageContainer = createImageNav(character);
      
      searchList.appendChild(imageContainer);
         imageContainer.addEventListener('click', () => {
        removeNavImageContainer()
          
      });
      
    });

  }else {
    console.log("no result");
    const imageMessage = createNavMessage();
    searchList.appendChild(imageMessage);
    imageMessage.addEventListener('click', () => {
      removeNavImageContainer()
        
    });
  }

  
}

function removeImageContainer() {
  const actualImages = document.querySelectorAll(".imageContainer");
  actualImages.forEach(element => {
    mainContainer.removeChild(element);
  });

}

function removeNavImageContainer() {
  const searchList = document.querySelector(".searchList");
  const actualImages = document.querySelectorAll(".navContainer");
  actualImages.forEach(element => {
    searchList.removeChild(element);
  });

}


function createImage(character) {
  const imageContainer = document.createElement("div")
  const imageEl = document.createElement('img');
  imageContainer.classList.add("imageContainer");
  imageEl.classList.add('gridImg');
  imageEl.src = character.image;
  imageContainer.appendChild(imageEl);
  return imageContainer;
}

function createImageNav(character) {
  const imageContainer = document.createElement("div")
  const imageEl = document.createElement('img');
  const imageText = document.createElement('span');
  let name = character.name;
  
  imageText.textContent = name ;
  imageContainer.classList.add("navContainer");
  imageEl.classList.add('navImg');
  imageText.classList.add("imageText");

  imageEl.src = character.image;
  imageContainer.appendChild(imageEl);
  imageContainer.appendChild(imageText);
  return imageContainer;
}

function createNavMessage() {
  const imageContainer = document.createElement("div")
  const imageText = document.createElement('span');
  imageText.textContent = "No results" ;
  imageContainer.classList.add("navContainer");
  imageText.classList.add("imageText");
  imageContainer.appendChild(imageText);
  return imageContainer;
}



function createContainer(locationY, locationX, dataCharacter) {
  // console.log(locationY,locationX);

  let imageSize = 300;

  let { name, origin, species, status } = dataCharacter;
  // console.log(status);
  const imageCont = document.createElement("div");
  const nameCont = document.createElement("span");
  const originCont = document.createElement("span");
  const speciesCont = document.createElement("span");
  const statusCont = document.createElement("span")
  nameCont.textContent = `${name} - ${origin} `;
  nameCont.classList.add("nameCont");
  originCont.classList.add("itemDescription");
  originCont.textContent = `Planet: ${origin}`;
  speciesCont.textContent = `Species: ${species}`;
  speciesCont.classList.add("itemDescription");
  statusCont.textContent = `Status: ${status}`;
  statusCont.classList.add("itemDescription");
  imageCont.classList.add('textDescription');

  imageCont.appendChild(nameCont);
  imageCont.appendChild(speciesCont);
  imageCont.appendChild(originCont);
  imageCont.appendChild(statusCont);

  if (locationX >= (window.screen.width / 2)) {
    imageCont.style.top = `${locationY}px`;
    imageCont.style.left = `${locationX - imageSize}px`;


  } else {
    imageCont.style.top = `${locationY}px`;
    imageCont.style.left = `${locationX + imageSize}px`;
  }



  return imageCont;
}



function removeSearch() {
  removeNavImageContainer();
}


loadImages()