


const gridImg = document.querySelectorAll(".gridImg");
const mainImg = document.querySelector(".mainImg");
const menuItem = document.querySelectorAll(".filterMenuItem");

mainImg.src = gridImg[0].dataset.url;


gridImg.forEach(element => {
    
    element.addEventListener("click",  onClick)
    
});

menuItem.forEach(element => {
    
    element.addEventListener("click", onClickMenu)
    
});


function onClick (event) {
    // console.log(event); 
    mainImg.src = event.srcElement.dataset.url;
    
    gridImg.forEach(element =>{
        if (element.classList.contains("gridImgSelected")){
            element.classList.remove("gridImgSelected");
        }
        // else {
        //     // console.log(element.classList);
        // }
        
    });

    event.srcElement.classList.add("gridImgSelected");
    console.log(event.srcElement.classList);
}

function onClickMenu(event){
    console.log(event);
    event.preventDefault();
    menuItem.forEach(element =>{
        if (element.classList.contains("menuActive")){
            element.classList.remove("menuActive");
        };  
   
});
event.srcElement.classList.add("menuActive");
}
