let imgSmall = document.querySelector(".imgSmall");
let imgbig = document.querySelector(".imgBig");

imgSmall.addEventListener("click", function a(e) {
  console.log(imgSmall.src);
  imgbig.src = imgSmall.src;
});
