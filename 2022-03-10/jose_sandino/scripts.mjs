import ky from 'https://cdn.skypack.dev/ky?dts';
const API = 'https://rickandmortyapi.com/api/character';

const imagesEl = document.querySelector('.container');

function createImage(character) {
   const avatarContainer = document.createElement('div');
   avatarContainer.classList.add('avatar-container');
   const avatar = document.createElement('img');
   avatar.classList.add('avatar');
   avatar.setAttribute('data-id', character.id);
   avatar.src = character.image;
   avatarContainer.appendChild(avatar);
   return avatarContainer;
}

async function init() {
   const { results } = await ky.get(API).json();
   results.forEach((character) => {
      const image = createImage(character);
      imagesEl.appendChild(image);
   });

   const avatares = await document.querySelectorAll('.avatar');
   avatares.forEach(function (item) {
      item.addEventListener('mouseenter', (e) => {
         const { target } = e;
         const idEl = item.dataset.id;
         fetch(`${API}/${idEl}`)
            .then(function (resp) {
               return resp.json();
            })
            .then(function (data) {
               console.log(data);

               const name = data.name;
               const origin = data.origin.name;
               const title = name + ' - ' + origin;
               const status = data.status;
               const specie = data.species;

               /* TOOLTIP */

               function createInfo() {
                  const avatarContainerEl = target.parentElement;
                  const toolTipEl = document.createElement('div');
                  toolTipEl.classList.add('tooltip');
                  const toolTipTitleEl = document.createElement('h1');
                  toolTipTitleEl.classList.add('tooltip-title');
                  toolTipTitleEl.innerText = title;
                  toolTipEl.appendChild(toolTipTitleEl);
                  const toolTipContent = document.createElement('div');
                  toolTipContent.classList.add('tooltip-content');
                  toolTipEl.appendChild(toolTipContent);

                  const line1 = document.createElement('p');
                  toolTipContent.appendChild(line1);
                  const b1 = document.createElement('b');
                  b1.innerText = 'Species: ';
                  line1.appendChild(b1);
                  const s1 = document.createElement('span');
                  s1.innerText = specie;
                  line1.appendChild(s1);

                  const line2 = document.createElement('p');
                  toolTipContent.appendChild(line2);
                  const b2 = document.createElement('b');
                  b2.innerText = 'Planet: ';
                  line2.appendChild(b2);
                  const s2 = document.createElement('span');
                  s2.innerText = origin;
                  line2.appendChild(s2);

                  const line3 = document.createElement('p');
                  toolTipContent.appendChild(line3);
                  const b3 = document.createElement('b');
                  b3.innerText = 'Status: ';
                  line3.appendChild(b3);
                  const s3 = document.createElement('span');
                  s3.innerText = status;
                  line3.appendChild(s3);

                  avatarContainerEl.appendChild(toolTipEl);

                  console.log(toolTipEl);
                  return avatarContainerEl;
               }
               console.log(createInfo());
            });
      });
      item.addEventListener('mouseleave', (e) => {
         const { target } = e;
         const avatarElement = target.parentElement;
         const tooltipElement = document.querySelector('.tooltip');
         avatarElement.removeChild(tooltipElement);
      });
   });

   const input = await document.querySelector('.search');
   input.addEventListener('input', (event) => {
      const string = event.target.value;
      fetch(`${API}/?name=${string}`)
         .then(function (resp) {
            return resp.json();
         })
         .then(function (filters) {
            const { results } = filters;
            results.forEach((dato) => {
               const name = dato.name;
               const image = dato.image;
               const planet = dato.origin.name;
               const info = `${name} - ${planet}`;

               const resultEl = document.querySelector('.info');
               resultEl.classList.add('result-data');

               const displayEl = document.createElement('div');
               displayEl.classList.add('result-display');

               const resultImageEl = document.createElement('img');
               resultImageEl.classList.add('result-image');
               resultImageEl.src = image;
               displayEl.appendChild(resultImageEl);

               const resultTextEl = document.createElement('p');
               resultTextEl.classList.add('result-text');
               resultTextEl.innerText = info;
               displayEl.appendChild(resultTextEl);

               resultEl.appendChild(displayEl);
               return resultEl;
            });
            const displayEl = document.querySelector('.result-data');
            if (string === '') {
               console.log('1', string);
               displayEl.style.display = 'none';
            }
         });
      const inputEl = document.querySelector('.info');
      function clearData() {
         inputEl.childNodes.forEach((el) => el.remove());
      }
      clearData();
   });
}

init();
