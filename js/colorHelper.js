const imageDiv = document.getElementById("imageDiv");
const image = document.getElementById("image");
const mainBody = document.getElementById("mainBody")

const imageFiles = ["img/image1.webp", "img/image2.webp", "img/image3.webp"];

const tokyoNightPurple = "#bb9af7";
const tokyoNightBackground = "#1a1b26"
const tokyoNightBlue = "#7aa2f7"
const tokyoNightForeground = "#CDD6F4"
const tokyoNightYellow = "#E0AF68"

const colors = [
  { color: tokyoNightYellow, background: tokyoNightBackground, hlcol: tokyoNightBlue, linkcol: "#A8B8CF", hovercol: tokyoNightPurple }, // colors for image 1
  { color: "#D2C7CB", background: "#15191d", hlcol: "#28725A", linkcol: "#9fadc6", hovercol: "#9B5856" }, // colors for image 2
  { color: tokyoNightPurple, background: tokyoNightBackground, hlcol: tokyoNightBlue, linkcol: tokyoNightForeground, hovercol: tokyoNightYellow },  // colors for image 3
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

