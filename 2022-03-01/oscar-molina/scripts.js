const artGalleryMayor = document.querySelector('.art-galery-major img')
const imageSelectors = document.querySelectorAll('.img-container img')
const links = document.querySelectorAll('.art-categories-options a')


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

// Añade la clase con estilos a los elementos a
links.forEach(function(link) {
    link.addEventListener('click', function(){

        const active = document.querySelector('.active')
        if (active) {
            active.classList.remove('active')
            }
        
        link.classList.add('active')
    })
})
