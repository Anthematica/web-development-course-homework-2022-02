import ky from 'https://cdn.skypack.dev/ky?dts'
import { createElements, fillSearchBar } from './functions_list.js'

const BASE_API_URL = 'https://rickandmortyapi.com/api'
const mainContainer = document.querySelector('.main')
const searchBarItemsContainer = document.querySelector('.autocomplete-box')
const searchBar = document.querySelector('#search-bar')

async function getCharaters() {
    const data = await ky.get(`${BASE_API_URL}/character`).json()
    const { results } = data

    console.log(results)
    results.forEach(element => {
        let Element = createElements(element.name, element.species, element.location.name, element.status, element.image, element.id)

        mainContainer.appendChild(Element)
        searchBar.addEventListener('keyup', filtrarElemento)
    })

    const Images = document.querySelectorAll('.character-image-container img')

    Images.forEach(image => {
        image.addEventListener('mouseenter', function(){
            const dataId = image.dataset.id
            let character = document.querySelectorAll('.character-info-container')
            character[dataId-1].style.display = 'flex'
            let rect = character[dataId-1].getBoundingClientRect()
            if (rect.x > 1199){
                character[dataId-1].style.transform = 'translateX(-480px)'
            }
    
        })
        image.addEventListener('mouseleave', function(){
            const dataId = image.dataset.id
            let character = document.querySelectorAll('.character-info-container')
            character[dataId-1].style.display = 'none'
        })
    })

     async function filtrarElemento(){
        const textValue = searchBar.value.split(" ").join("").toLowerCase()
        searchBarItemsContainer.innerHTML = ''

        const searchCharacter = await ky.get(`${BASE_API_URL}/character/?name=${textValue}`).json()
        const { results } = searchCharacter

        results.forEach(characterName=>{
            let charName = characterName.name.split(" ").join("").toLowerCase() + characterName.origin.name.split(" ").join("").toLowerCase()
            if(charName.indexOf(textValue) != -1 ){
                let item = fillSearchBar(characterName.image, characterName.name, characterName.origin.name)
                searchBarItemsContainer.appendChild(item)
                mainContainer.classList.add('overlay')
            } 
            if(textValue === ""){
                searchBarItemsContainer.innerHTML = ''
                mainContainer.classList.remove('overlay')
            }
        }) 
    }  
}

getCharaters()

