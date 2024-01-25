const initSlider = () => {
    const image = document.querySelector(".images");
    const slideButtons = document.querySelectorAll(".container .fab");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
           const direction = button.id === "prev" ? -1 : 1;
           const scrollAmount = image.clientWidth * direction;
           image.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
}


window.addEventListener("load", initSlider);