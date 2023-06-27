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

/* x y points in image - if click within set x y for particular image (1 of 20) then win. 
/* when click Cooper Black (within set x y): 
- highlight where cooper black is / the set x y coordinates. 
- display : inline the right answer (#right-answer)
- add 5 to score */

/* when click wrong place/font: 
- highlight where cooper black is
- display : inline the wrong answer text (#wrong-answer)
- take 5 off score */

/* display:none rules after first photo */

/* change photo by changing src attribute, change buttons when this changes too. */

/* start score at 300 and take 1 point off score per second using time intervals */

/*[] [ ] Use querySelector() and querySelectorAll() to gather HTML elements */
