const mainContainer = document.querySelector(".mainContainer");
const fullImg = document.querySelector(".fullImg");
const mainPhotoContainer = document.querySelector(".mainPhoto");
const closeBtn = document.querySelector(".closeBtn");
const navFWD = document.querySelector(".forwardBtn");
const backwardBtn = document.querySelector(".backwardBtn");



async function loadImages (){
  const index = null;
  const data = await fetch(`https://picsum.photos/v2/list?limit=20&page=${Math.round(Math.random()*21)}`);
  const dataImg = await data.json()
  dataImg.forEach( function(image, index){
    
    createImage(image.download_url);
  });
        
  addMediumSize(); 
}

navFWD.addEventListener("click", navForward );
backwardBtn.addEventListener("click",navBack);



closeBtn.addEventListener("click", closePhoto );

function closePhoto(){
  if(mainPhotoContainer.classList.contains("imgHide")){
        
  
}else{
  mainPhotoContainer.classList.add("imgHide");
  const gridImages = document.querySelectorAll(".gridImg");

  gridImages.forEach(function (element){
    
    if(element.classList.contains("active")){
    
      
      element.classList.remove("active");
     }
  });

 
  
}

}

function navForward (){
  let counter = 0;
  let target = 0;
  
  const gridImages = document.querySelectorAll(".gridImg");
  
  gridImages.forEach( function (element){
    
    if(element.classList.contains("active")){
     target = counter;
     
     element.classList.remove("active");
    }
    counter +=1;
  });
  target += 1;
  
  fullImg.src = gridImages[target].dataset.url;
  gridImages[target].classList.add("active");
}

function navBack (){
  let counter = 0;
  let target = 0;
  
  const gridImages = document.querySelectorAll(".gridImg");
  
  gridImages.forEach( function (element){
    
    if(element.classList.contains("active")){
     target = counter;
     
     element.classList.remove("active");
    }
    counter +=1;
  });

  target -= 1;
  
  fullImg.src = gridImages[target].dataset.url;
  gridImages[target].classList.add("active");
}


function createImage(url) {
    const [smallImage, bigImage] = getImages(url);
    const imageElement = document.createElement("img");
    imageElement.classList.add("gridImg");
    imageElement.dataset.url = bigImage;
    imageElement.src = smallImage;
    
    mainContainer.appendChild(imageElement);
    imageElement.addEventListener("click", onClick);
  }
  
  function changeUrlImageSize(url, width, height = width) {
    const arr = url.split("/");
    
    arr.splice(
      -2,
      2,
      width,
      height
    );
    
    return arr.join("/");
  }
  
  function getImages(url) {
    return [changeUrlImageSize(url, 600), changeUrlImageSize(url, 700, 900)];
  }

 
  function onClick(event) {

    

    if(mainPhotoContainer.classList.contains("imgHide")){
      mainPhotoContainer.classList.remove("imgHide");
      mainPhotoContainer.classList.add("imgShow");
      
      event.target.classList.add("active");
      fullImg.src = event.srcElement.dataset.url;

      // history.pushState( null , null , `?id=${variable.id}` )
      
    }
    
     
  }
  
function addMediumSize(){
    const gridImages = document.querySelectorAll(".gridImg");
    let counter =0;
    gridImages.forEach(function(element) {

        if(counter == 0 || (counter%5 ===0)){
            element.classList.add("gridImgMedium");
        }
        counter += 1;
        
         
      })

}
  
loadImages();



