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
  randomLevelOneImage();
});

/* selecting image on page */
let imageElement = document.querySelector("img");

/* random image within level 1 */
let levelOneNumbers = [1, 2, 3, 4, 5, 6];
function randomLevelOneImage() {
  let randomOneIndex = Math.floor(
    Math.random() * levelOneNumbers.length
  );
  let randomOne = levelOneNumbers[randomOneIndex];
  levelOneNumbers.splice(randomOneIndex, 1);
  imageElement.setAttribute(
    "src",
    "images/level1/" + randomOne + ".jpeg"
  );
}

/* x y points in image - if click within set x y for particular image (1 of 6) then win. */

if ((randomNumber1 = 1)) {
  /* if click within set x y, win() */
  /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
  randomLevelOneImage();
}

if ((randomNumber1 = 2)) {
  /* if click within set x y, win() */
  /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
}

if ((randomNumber1 = 3)) {
  /* if click within set x y, win() */
  /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
}

if ((randomNumber1 = 4)) {
  /* if click within set x y, win() */
  /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
}

if ((randomNumber1 = 5)) {
  /* if click within set x y, win() */
  /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
}

if ((randomNumber1 = 6)) {
  /* if click within set x y, win() */
  /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
}

/* random image within level 2 */
let levelTwoNumbers = [1, 2, 3, 4, 5, 6];
function randomLevelTwoImage() {
  let randomTwoIndex = Math.floor(
    Math.random() * levelTwoNumbers.length
  );
  let randomTwo = levelTwoNumbers[randomTwoIndex];
  levelTwoNumbers.splice(randomTwoIndex, 1);
  imageElement.setAttribute(
    "src",
    "images/level1/" + randomTwo + ".jpeg"
  );
}

/* random image within level 3 */
function randomLevelThreeImage() {
  let randomNumber3 = Math.floor(Math.random() * 9);
  imageElement.setAttribute(
    "src",
    "images/level3/" + randomNumber3 + ".jpeg"
  );
}

/* select score and set starting score */
let scoreHTML = document.getElementById("score");
let scoreNumber = 300;

/* start score at 300 and take 1 point off score per second using time intervals */
function timeScoreDown() {
  scoreNumber -= 1;
  scoreHTML.textContent = "Score: " + scoreNumber.toString();
}
setInterval(timeScoreDown, 1000);

/* win function 
- display : inline the right answer text (#right-answer)
- add 5 to score */

/* lose function 
- display : inline the wrong answer text (#wrong-answer)
- take 5 off score */

/* display:none rules after first photo */

/*[] [ ] Use querySelector() and querySelectorAll() to gather HTML elements */
