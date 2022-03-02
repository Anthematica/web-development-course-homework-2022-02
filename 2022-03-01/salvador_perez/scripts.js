var imageList = document.querySelectorAll(".thumbnail");
var bigContainer = document.querySelector(".main__big-image");

console.log(imageList);

for (let i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener("click", function(e){
        bigContainer.src = e.target.src;
    })
}