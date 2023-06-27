/* html selector */
let htmlElement = document.getElementById("html");

/* random color scheme */
function randomColorScheme() {
  let randomColorScheme = Math.floor(Math.random() * 10);
  htmlElement.classList.add("colorscheme" + randomColorScheme);
  console.log("hello");
}

/* random colour scheme on launch */
window.addEventListener("load", () => {
  randomColorScheme();
});

/* decide whether want buttons or x y points in image, probably the latter */

/* display:none rules after first photo */

/* change photo by changing src attribute, change buttons when this changes too. */

/* start score at 300 and take 1 point off score per second using time intervals */

/* when click Cooper Black 
- highlight where cooper black is
- display : inline the right answer (#right-answer)
- add 5 to score */

/* when click wrong font 
- highlight where cooper black is
- display : inline the wrong answer text (#wrong-answer)
- take 5 off score */

/*[] [ ] Use querySelector() and querySelectorAll() to gather HTML elements */
