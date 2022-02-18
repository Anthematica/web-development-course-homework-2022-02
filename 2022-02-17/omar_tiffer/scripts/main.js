let menuBtn = document.querySelector(".menu-ico");
let closeBtn = document.querySelector(".modal__ico");

const openOverlay = () => {
    let overlay = document.querySelector(".overlay");
    // overlay.style.display = "block";
    overlay.setAttribute("class","overlay overlay--show");
}

const closeOverlay = () => {
    let overlay = document.querySelector(".overlay");
    overlay.setAttribute("class","overlay overlay--hide");
    // overlay.style.display = "none";
}

menuBtn.addEventListener("click", openOverlay);
closeBtn.addEventListener("click", closeOverlay);