import ky from 'https://cdn.skypack.dev/ky?dts';

const imagesEl = document.querySelector('.images');
const search = document.querySelector('.search');
const inputEl = document.querySelector('input');
const button = document.querySelector('button');

function createImage(url){
    const images= url;
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("images_container");
    const imageElChild = document.createElement("img");
    imageElChild.classList.add("img");
    imageElChild.src = images;
    imgContainer.appendChild(imageElChild);
    return imgContainer;
}

function createText(text){
    
    const textContainer = document.createElement('div');

    textContainer.classList.add('text_container', 'hide');

    const textChildName = document.createElement('h2')
    textChildName.classList.add('text_name');
    textChildName.textContent = text.name;

    const textChild = document.createElement('h2')
    textChild.classList.add('text');
    textChild.textContent = `Species: `+ text.species;

    const textChild2 = document.createElement('h2')
    textChild2.classList.add('text');
    textChild2.textContent = `Planet: `+ text.origin.name;

    const textChild3 = document.createElement('h2')
    textChild3.classList.add('text');
    textChild3.textContent = `Status: `+ text.status;

    textContainer.appendChild(textChildName);
    textContainer.appendChild(textChild);
    textContainer.appendChild(textChild2);
    textContainer.appendChild(textChild3);

    return textContainer;
}

function createSearch(textH){
    
    const searchContainer = document.createElement('div');

    searchContainer.classList.add('search_container');

    const searchChild = document.createElement('img')
    searchChild.classList.add('text_img');
    searchChild.src = textH.image;

    const searchChildName = document.createElement('h2')
    searchChildName.classList.add('text_search');
    searchChildName.textContent = textH.name;


    const searchChild2 = document.createElement('h2')
    searchChild2.classList.add('text_search');
    searchChild2.textContent = `- `+ textH.origin.name;

    
    searchContainer.appendChild(searchChild);
    searchContainer.appendChild(searchChildName);
    searchContainer.appendChild(searchChild2);

    return searchContainer;
}

function foundN(found){

    const foundContainer = document.createElement('div');
    foundContainer.classList.add('search_container');

    const foundChildName = document.createElement('h2')
    foundChildName.classList.add('text_found');
    foundChildName.textContent = 'no results available';

    
    foundContainer.appendChild(foundChildName);

    return foundContainer;
}

let pag = 0;
button.addEventListener('click', function(e){
    pag++
    return pag;
});

function remove(){
    const remove = document.querySelectorAll('.search_container')
    remove.forEach(e =>{
        search.removeChild(e);
    }) 
}

function removeMain(){
    const remove = document.querySelectorAll('.image_container')
    remove.forEach(e =>{
        imagesEl.removeChild(e);
    }) 
}

(async () =>{
    const data = await ky.get(`https://rickandmortyapi.com/api/character/?page=${pag}`).json();
    data.results.forEach(image => {
        const imageEl = createImage(image.image);
        imagesEl.appendChild(imageEl);
        const textEl = createText(image);
        imageEl.appendChild(textEl);

        imageEl.addEventListener('mouseenter', function(e){
            textEl.style.display = 'block';
        });

        imageEl.addEventListener('mouseleave', function(e){
            textEl.style.display = 'none';
        });
    });
})();

inputEl.addEventListener('input', async function(e){
    try {
        const letter = e.target.value.toLowerCase();
        const data = await ky.get(`https://rickandmortyapi.com/api/character/?name=${letter}`).json();
        console.log(data);
        remove();
        data.results.forEach(text => {
            const result =  createSearch(text);
            search.appendChild(result);
            console.log('pro',result);
        }); 
        document.querySelector('.search').style.display = 'block';
        if(letter === ''){
            document.querySelector('.search').style.display = 'none';
        } 
    } catch (error) {
        remove();
        const found = foundN(error);
        search.appendChild(found)
    }
});







