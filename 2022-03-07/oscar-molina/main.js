const containerImages = document.querySelector(".images")
const rightButton = document.querySelector('.rightButton')

const textElement = document.querySelector('.image-info')

const IMAGE_GAP = 20
const IMAGE_WIDTH = 200
const IMAGE_BIG_WIDTH = 300

async function fetchImages(){
    // asignamos la url 
    let url = 'https://picsum.photos/v2/list?page=2&limit=20'

    // obtenemos la informacion y retornamos los datos
    let response = await fetch(url)
    return await response.json();
}



function createImage(url) {
    // creamos al contenedor de la imagen y le asignamos su clase
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("image-container")

    // creamos el elemento imagen y le añadimos su clase
    const imageElement = document.createElement("img")
    imageElement.classList.add("image")
    imageElement.src = url;

    // añadimos la imagen al div
    imageContainer.appendChild(imageElement)

    // retornamos el contenerdor de la imagen
    return imageContainer;
}

 async function loadImages(){
    // llamamos a la funcion fetch
    let images = await fetchImages()
    console.log(images)
    // const  result  = images
    textElement.innerText = images[0].author
    console.log(images[0])


    // añadimos la imagen a cada elemento
    images.forEach(function (image) {
        let imageElement = createImage(image.download_url, image.author)
        containerImages.appendChild(imageElement)


    })

    // intentando mover las imagenes
    rightButton.addEventListener('click', function () {
        // const {target} = element
        const current = getComputedStyle(containerImages).getPropertyValue('--current-image').trim()
        
        let cont = Number(current) + 1
        containerImages.style.setProperty('--current-image',cont)
        console.log('currentImage', images[cont])
        textElement.innerText = images[cont].author
    })

//    
}

// cargando las imagenes
loadImages()



// autoscroll
// function autoscroll(){
//     const containerWidth = containerImages.scrollWidth;

//     window.addEventListener('load', function () {
//     self.setInterval(function scroll() {
//         if (containerImages.scrollLeft !== containerWidth) {
//                 containerImages.scrollTo(containerImages.scrollLeft + 3, 0);
//             }
//         }, 10);
//     });
// }

// autoscroll()

