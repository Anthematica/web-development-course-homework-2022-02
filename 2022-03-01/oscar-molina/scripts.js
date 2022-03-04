const artGalleryMayor = document.querySelector('.art-galery-major img')
const imageSelectors = document.querySelectorAll('.img-container img')


imageSelectors.forEach(function(image) {
    image.addEventListener('click', function(){
        artGalleryMayor.src = image.dataset.url  

        const focused = document.querySelector('.img-container.focused')
        if (focused) {
            focused.classList.remove('focused')
            }
        
        image.parentElement.classList.add('focused')
    })
})
