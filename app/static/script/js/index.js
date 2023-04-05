const trailerButton = document.querySelector(".trailer-button");  
const closeModalButton = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const videoLink = video.src;

trailerButton.addEventListener("click", () => {
    modal.classList.toggle("open");
    video.setAttribute("app", videoLink);
});

closeModalButton.addEventListener("click", () => {
    modal.classList.toggle("open");
    video.setAttribute("app", "");
});