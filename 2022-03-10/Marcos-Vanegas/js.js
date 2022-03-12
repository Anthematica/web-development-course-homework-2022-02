const imagesCont = document.querySelector (".images")
        const cont = document.querySelector(".container")
      
      async function singleCharacter(element) {
           // fetch de un solo caracter para llamar en la interpolacion
           const toolres = await fetch(`https://rickandmortyapi.com/api/character/${element.dataset.id}`)
           const character = await toolres.json()
           return character  
      }  

      async function filter(element) {
        const searchFilter = await fetch(`https://rickandmortyapi.com/api/character/?name=${element.value}`)
        const items = await searchFilter.json()
        return items  
   } 

        async function init() {
            const res = await fetch("https://rickandmortyapi.com/api/character")
            const {results} = await res.json()            
            results.forEach(p => {   
                         
                const img = document.createElement ('img')
                img.classList.add('character-img')
                img.src = p.image
                img.dataset.id=p.id // etamos asignando al dataset de cada img el id de cada caracter cargado del api


    
                cont.append(imagesCont)
                imagesCont.append(img)
                
            });
            // capturar la clase de tu imagen en una variable para despues crear una funcion que 
            // por cada elelemento hacer un addeventlistener, para primero capturar las coordenadas de las img
            const imgEl = document.querySelectorAll ('.character-img')
            imgEl.forEach(element => {
                element.addEventListener ('mouseenter'  ,(e) =>{
                    const positionx = e.target.offsetLeft
                    const positiony = e.target.offsetTop
                    const width = e.target.offsetWidth
                    // aqui llamamos al div con la clase info del dom  para asignarle la posicion deacuerdo a las cordenadas
                    const tooltip = document.querySelector('.info')
                    tooltip.style.insetBlockStart=`${positiony}px` 
                    tooltip.style.insetInlineStart= `${positionx + width}px`
                    tooltip.style.display = "block";

                   singleCharacter (element) .then ( (character)=>{
                    // cambiando dato del tooltip 
                    const h2 = document.querySelector ('.info-h2')
                    h2.textContent = `${character.name}`    
                    
                    const infoEspecie = document.querySelector('.info-specie')
                    infoEspecie.textContent = `${character.species}`

                    const infoPlanet = document.querySelector('.info-planet')
                    infoPlanet.textContent = `${character.origin.name}`

                    const infoStatus = document.querySelector('.info-status')
                    infoStatus.textContent = `${character.status}`

                   })
                    
                })

                element.addEventListener ('mouseleave', () =>{
                    
                    const tooltip = document.querySelector('.info')
                    tooltip.style.display = "none";
                })
               
            });

            

            
        } 
        
        init()



        const contInput = document.querySelector ('input')
        contInput.addEventListener ('input' ,(e) => {
            const positionx = contInput.offsetLeft


            

            // posicionando el search bar
            const contSearchBar = document.querySelector('.cont-search')
            contSearchBar.style.display = "block";
            

            filter (e.target)  .then ((items) => {
                const {results}=items
                results.forEach((item) => {
                    const contSearch = document.querySelector ('.cont-search' )
                
                    const contItemsSearch = document.createElement ('div')
                    contItemsSearch.classList.add ('.cont-items-search')

                    const imgSearch = document.createElement ('img')
                    imgSearch.classList.add('imagen-search')
                    imgSearch.src= item.image
                    const span = document.createElement ('span')
                    span.textContent = item.name
                    span.classList.add('info-span')

                    contSearch.append(contItemsSearch)
                    contItemsSearch.append(imgSearch , span)
                 })

                if (contInput.value === '') {
                contSearchBar.style.display= 'none'                
                }
                    
            });
                
            
            
        }) 
        