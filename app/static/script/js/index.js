const botaoTrailer = document.querySelector(".trailer-button");  
const botaoFecharModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.toggle("open");
    video.setAttribute("app", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.toggle("open");
    video.setAttribute("app", "");
});