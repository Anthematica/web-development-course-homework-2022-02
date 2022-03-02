const artGalleryMayor = document.querySelector('.art-galery-major img');
const imageSelectors = document.querySelectorAll('.img-container img');
const focusedImages = document.querySelectorAll('.img-container');
let focused = document.querySelector('.focused');


imageSelectors.forEach(function(image) {
    image.addEventListener('click', function(){
        artGalleryMayor.src = image.dataset.url;
    })
})


focusedImages.forEach(function(image) {
    image.addEventListener('click', function(){
        image.classList.add('focused');
    })
})
