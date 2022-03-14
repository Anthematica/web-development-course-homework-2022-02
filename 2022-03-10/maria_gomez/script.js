const BASE_API_URL = 'https://rickandmortyapi.com/api'
const textEl = document.querySelector('.text')
const search = document.querySelector('.search-field')
const searchResults = document.querySelector('.search-results');
const searchList = document.querySelector('.search-list')
const searchDiv = document.querySelector('.search')


const imagesEl = document.querySelector('.gallery')
const overlayEL = document.querySelector('.overlay')
const bigImageEl = document.querySelector('.big-image')
const descText = document.querySelectorAll('.text--bold')
const overlaySearch = document.querySelector('.overlay2')


async function init(){
    const index = null
    const resp = await fetch(`${BASE_API_URL}/character`)
    const {results} =  await resp.json()
    // textEl.textContent = results[0].name

    results.forEach((character,index) => {

        // const image = createImage(character, index)
        const imageDiv = createImage(character, index)
        // imageDiv.appendChild(image)
        imagesEl.appendChild(imageDiv)

    })
    
}

function clearList(){
    while(searchList.firstChild){
        searchList.removeChild(searchList.firstChild)
    }
}

var searchTerm = '';
var output = '';

search.addEventListener('keyup', debounce(() => {

    output = '';

    searchTerm = search.value.replace(' ', '+');
    clearList();

    fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`).then(res => res.json()).then(data => {

        let characters = data.results;

        const totalPages = data.info.pages;


        if (totalPages > 1) {

            for (i = 2; i <= totalPages; i++) {

                let page = i;
                fetch(`https://rickandmortyapi.com/api/character/?page=${i}&name=${searchTerm}`)
                .then(res => res.json())
                .then(data => {

                    characters = characters.concat(data.results);

                    if (page === totalPages) {
                        searchResults.style.display = 'flex'
                        overlaySearch.style.display = 'flex'
                        // searchList.style.display = 'flex'
                        characters.forEach((chara) => {
                            let liNode = document.createElement('li')
                            // liNode.textContent = `Name ${chara.name}`
                            liNode.textContent = `${chara.name}`
                            console.log(chara.name)
                            // let textNode = document.createTextNode(chara.name)
                            // console.log(chara.name)
                            liNode.classList.add("search-el");
                            searchList.appendChild(liNode)
                            searchDiv.style.position = 'relative'
                            searchResults.style.position = 'relative'
                            search.style.position = 'relative'

                                
                        })

                    }
                    document.addEventListener('mouseup', function(e) {
                        if (!search.contains(e.target)){
                            overlaySearch.style.display = 'none'
                            searchDiv.style.position = 'inherit'
                            searchResults.style.position = 'inherit'
                            search.style.position = 'inherit'
                            searchResults.style.display = 'none'
                        }
                    });
                })
            }

        } else {
                searchResults.style.display = 'flex'
                overlaySearch.style.display = 'flex'
                // searchList.style.display = 'flex'
                characters.forEach((chara) => {
                let liNode = document.createElement('li')
                liNode.textContent = `${chara.name}`
                console.log(chara.name)
                // let textNode = document.createTextNode(chara.name)
                // console.log(chara.name)
                liNode.classList.add("search-el");
                searchList.appendChild(liNode)
                
            })

        }
    })
    
    .catch(err => {

    })
}));

function debounce(func, wait = 400, immediate) {

    let timeout;

    return () => {

        const context = this,
            args = arguments;

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            timeout = null;
            if (!immediate) func.apply(context, args);

        }, wait);

        if (immediate && !timeout) func.apply(context, args);
    };
}



function createImage(character,index){
    const imageEl = document.createElement('img')
    const imageDiv = document.createElement('div')
    const descriptionDiv = document.querySelector('.description')
    imageDiv.appendChild(imageEl)



    imageEl.classList.add('image')
    imageEl.src = character.image


    imageEl.addEventListener('click', () =>{

        const dataName = document.querySelector('#nameChara')
        const dataPlace = document.querySelector('#placeChara')
        const dataSpecies = document.querySelector('#dataSpecies')
        const dataPlanet = document.querySelector('#dataPlanet')
        const dataStatus = document.querySelector('#dataStatus')
        dataName.textContent = character.name
        dataSpecies.textContent = character.species
        dataPlanet.textContent = character.origin.name
        dataStatus.textContent = character.status
        dataPlace.textContent = character.origin.name
        console.log(character.image)
        overlayEL.style.display = 'flex'
        window.history.pushState(null, null, `?id=${index}`)
        // imageEl.style.position = 'relative'
        imageDiv.appendChild(descriptionDiv)
        imageDiv.style.position = 'relative'
        descriptionDiv.style.position = 'absolute'



        
        
    })
    document.addEventListener('mouseup', function(e) {
        if (!textEl.contains(e.target)){
            overlayEL.style.display = 'none'
            imageDiv.style.position = 'inherit'
            descriptionDiv.style.position = 'inherit'
            overlayEL.appendChild(descriptionDiv)

            const url = new URL(window.location)

            url.searchParams.delete('id')

            window.history.pushState(null, null, url)
        }
    });

    return imageDiv
}
init()