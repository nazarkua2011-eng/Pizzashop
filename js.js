const video = document.querySelector(".video-pizza");
const circle = document.querySelector(".play-button");
const triangle = document.querySelector(".play-button2");

function playVideo() {
    video.play();
    video.controls = true; // Show controls
    circle.style.display = "none";
    triangle.style.display = "none";
}

circle.addEventListener("click", playVideo);
triangle.addEventListener("click", playVideo);

video.addEventListener("ended", () => {
    circle.style.display = "block";
    triangle.style.display = "block";
    video.controls = false;
});

video.addEventListener("pause", () => {
    if (!video.ended) {
        circle.style.display = "block";
        triangle.style.display = "block";
    }
});

video.addEventListener("play", () => {
    circle.style.display = "none";
    triangle.style.display = "none";
});