var stringTemp;
var arrayTemp;
var bigImage;
bigImage = document.querySelector(".img");
const divContainerEl = document.querySelector(".img__options");
divContainerEl.addEventListener("click", function(e) {
    const image = e.target;

    if (image.tagName == "IMG") {
        console.log(image.src)
        const parentEl = document.querySelector(".img__options .active");

        if (parentEl) {
            parentEl.classList.remove("active");
        }

        stringTemp = image.src;
        arrayTemp = stringTemp.split("/");
        arrayTemp[5] = "1000";
        arrayTemp[6] = "1000";
        stringTemp = arrayTemp.join("/");
        console.log(stringTemp)
        bigImage.src = stringTemp;
        image.classList.add("active");
    }
});