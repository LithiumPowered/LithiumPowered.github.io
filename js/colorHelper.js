const imageDiv = document.getElementById("imageDiv");
const image = document.getElementById("image");
const mainBody = document.getElementById("mainBody")

const imageFiles = ["img/image1.webp", "img/image2.webp", "img/image3.webp"];

const colors = [
  { color: "#ffffff", background: "#1D1D20", hlcol: "#dfdfdf", linkcol: "#a2a2a2", hovercol: "#ffffff" }, // colors for image 1
  { color: "#B7B7B9", background: "#222735", hlcol: "#C4C1BD", linkcol: "#9A9BA3", hovercol: "#999FB3" }, // colors for image 2
  { color: "#36691F", background: "#313630", hlcol: "#B77281", linkcol: "#85889F", hovercol: "#C89C5D" }, // colors for image 3
];

function preloadImages() {
  for (let i = 0; i < imageFiles.length; i++) {
    const img = new Image();
    img.src = imageFiles[i];
  }
}

function applyColors(counter, colors) {
  document.documentElement.style.setProperty('--primary-color', colors[counter].linkcol);
  document.documentElement.style.setProperty('--secondary-color', colors[counter].color);
  document.documentElement.style.setProperty('--accent-color', colors[counter].hlcol);
  document.documentElement.style.setProperty('--link-accent-color', colors[counter].hovercol);
  document.documentElement.style.setProperty('--bg-color', colors[counter].background);
}

image.src = imageFiles[counter];

applyColors(counter, colors);

imageDiv.addEventListener("click", function() {
  image.classList.add("fade-out");

  setTimeout(() => {
    image.classList.remove("fade-out");

    counter = (counter + 1) % imageFiles.length;
    localStorage.setItem("counter", counter);
    image.src = imageFiles[counter];

    applyColors(counter, colors);
  }, 200);
});

