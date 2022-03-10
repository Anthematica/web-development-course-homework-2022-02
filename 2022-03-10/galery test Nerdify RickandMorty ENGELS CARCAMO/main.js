import ky from 'https://cdn.skypack.dev/ky?dts';

const main = document.querySelector('main')


async function accessCharacter() {

    const data = await ky.get(`https://rickandmortyapi.com/api/character/`).json();

    data.results.forEach((character, index) => {
        const img = document.createElement('img')
        img.classList.add("imagen")

        const divContainer = document.createElement('div')
        divContainer.classList.add("divContainer")
        
        img.src= character.image

        main.appendChild(divContainer)
        divContainer.appendChild(img)

        img.addEventListener('mouseenter', (evt) => {

        const {target} = evt
        const mostrar = target.parentElement
        const tooltip = document.createElement('div')
        tooltip.classList.add("tooltip")

        const name = document.createElement('h1')
        name.style.backgroundColor= "black"

         const species = document.createElement('span')
        const planet  = document.createElement('span')
        const status = document.createElement('span')
        const description = document.createElement('span')

     


        tooltip.append(name,species,planet,status,description)
        mostrar.appendChild(tooltip)
        
        //inyectando texto al contenedor tooltip
        name.innerText = `${character.name } - ${ character.origin.name} `

       species.innerText = `Species: ${character.species}`
        planet.innerText = `Planet: ${character.origin.name}`
        status.innerText = `Status: ${character.status}`
        description.innerText =" Lorem ipsum dolor sit amet,consectetur adipisicing elit. Soluta maxime nulla mollitia, dolore ipsam voluptas laborum"
        
       
        })

        img.addEventListener('mouseleave', (evt) => {

            const {target} = evt
            const remover = target.parentElement
            divContainer.removeChild(document.querySelector('.tooltip'))

        })



    });
    //console.log(data.results[5].image)

    

}
accessCharacter()




const search = document.querySelector('input')

   search.addEventListener('input', (event) => {

    const typing = event.target.value

  fetch(`https://rickandmortyapi.com/api/character/?name=${typing}`)
  .then(response => response.json())
  .then(data => data.results.forEach((character) =>{

    console.log(data)

    const register = document.querySelector('.active')
    register.classList.add('showRegister')

    const itemImg = document.createElement('div')
    itemImg.classList.add('itemImg')

    const img = document.createElement('img')
    img.src = character.image
    const name = character.name
    const location = character.origin.name


    const catchinfo = document.createElement('p')

    catchinfo.innerText =  `${name} - ${location}`


    
    itemImg.append(img,catchinfo)
    register.appendChild(itemImg)

    if(typing ==""){

        register.style.display= "none";
  }else{
    register.style.display= "block";
  }
    
  }) );

})



 

