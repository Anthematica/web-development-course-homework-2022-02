function imageGallery() {
  const highlight = document.querySelector(".mainImg");
  const previews = document.querySelectorAll(".gallery__thumbs img");

  previews.forEach(function(preview) {
    preview.addEventListener("click", function() {
      const Src = this.src;
      previews.forEach(preview => preview.classList.remove("gallery__active"));
      highlight.src = Src;
      preview.classList.add("gallery__active");
    });
  });
}

imageGallery();