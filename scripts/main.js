/* html selector */
let htmlElement = document.getElementById("html");

/* random color scheme out of 9 */
function randomColorScheme() {
  let randomColorScheme = Math.floor(Math.random() * 10);
  htmlElement.classList.add("colorscheme" + randomColorScheme);
}

/* random colour scheme on launch */
window.addEventListener("load", () => {
  randomColorScheme();
  randomStartingImage();
});

/* random number within level 1 */
let imageElement = document.querySelector("img");
function randomStartingImage() {
  let randomNumber = Math.floor(Math.random() * 7);
  imageElement.setAttribute(
    "src",
    "images/level1/" + randomNumber + ".jpeg"
  );
  console.log(hello);
}

/* x y points in image - if click within set x y for particular image (1 of 20) then win. 
/* when click Cooper Black (within set x y): 
- highlight where Cooper Black is / the set x y coordinates. 
- display : inline the right answer text (#right-answer)
- add 5 to score */

/* when click wrong place/font: 
- highlight where cooper black is
- display : inline the wrong answer text (#wrong-answer)
- take 5 off score */

/* display:none rules after first photo */

/* change photo by changing src attribute, change buttons when this changes too. */

/* start score at 300 and take 1 point off score per second using time intervals */

/*[] [ ] Use querySelector() and querySelectorAll() to gather HTML elements */
