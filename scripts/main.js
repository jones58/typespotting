/* html selector */
let htmlElement = document.getElementById("html");

/* random color scheme */
function randomColorScheme() {
  let randomColorScheme = Math.floor(Math.random() * 11);
  htmlElement.classList.add("colorscheme" + randomColorScheme);
  console.log("hello");
}

/* random colour scheme on launch */
window.addEventListener("load", () => {
  randomColorScheme();
});
