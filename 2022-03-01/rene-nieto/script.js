let container = document.getElementById('thumbnailContainer')


container.addEventListener('click', function(e){
   changeImg(e.target.src)
    console.log(e);
})

function changeImg(url) {
    console.log(url);
    if (url?.length>0){ 
        const img = document.getElementById('mainImg')
        console.log(url);
        img.src=url
    } 
    
}

