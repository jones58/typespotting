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
  levelOneImage();
});

/* selecting image on page */
let imageElement = document.querySelector("img");

/* random image within level 1 */
let levelOneNumbers = [1, 2, 3, 4, 5, 6];
function levelOneImage() {
  let randomOneIndex = Math.floor(
    Math.random() * levelOneNumbers.length
  );
  let randomOne = levelOneNumbers[randomOneIndex];
  levelOneNumbers.splice(randomOneIndex, 1);
  imageElement.setAttribute(
    "src",
    "images/level1/" + randomOne + ".jpeg"
  );

  if ((randomOne === 1)) {
    /* adding click event listener to image */
    imageElement.addEventListener("click", getClickPositionImageOne); 

    function getClickPositionimageOne(event) {
      const x = event.offsetX;
      const y = event.offsetY;
        if ((x >= 0 && x <= 300 && y >= 0 && y <= 300)) {console.log("hello")};
        else {
          console.log("goodbye");
          /*- highlight where Cooper Black is / the set x y coordinates. */
        }
      randomLevelOneImage();
    }
    } 
  else if ((randomOne === 2)) {
    /* if click within set x y, win() */
    /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
  } else if ((randomOne === 3)) {
    /* if click within set x y, win() */
    /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
  } else if ((randomOne === 4)) {
    /* if click within set x y, win() */
    /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
  } else if ((randomOne === 5)) {
    /* if click within set x y, win() */
    /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
  } else if ((randomOne === 6)) {
    /* if click within set x y, win() */
    /* if click outside set x y, lose() , - highlight where Cooper Black is / the set x y coordinates. */
  } else {
    /* if randomOne is undefined, ie. no numbers left to randomly generate, it's time for level 2 */
    levelTwoImage();
  }
}

/* random image within level 2 */
let levelTwoNumbers = [1, 2, 3, 4, 5, 6];
function levelTwoImage() {
  let randomTwoIndex = Math.floor(
    Math.random() * levelTwoNumbers.length
  );
  let randomTwo = levelTwoNumbers[randomTwoIndex];
  levelTwoNumbers.splice(randomTwoIndex, 1);
  imageElement.setAttribute(
    "src",
    "images/level2/" + randomTwo + ".jpeg"
  );
}

/* random image within level 3 */
let levelThreeNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
function levelThreeImage() {
  let randomThreeIndex = Math.floor(
    Math.random() * levelThreeNumbers.length
  );
  let randomThree = levelThreeNumbers[randomThreeIndex];
  levelThreeNumbers.splice(randomThreeIndex, 1);
  imageElement.setAttribute(
    "src",
    "images/level3/" + randomThree + ".jpeg"
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

/* win function for level 1 
- display : inline the right answer text (#right-answer)
- add 5 to score 
- change image in level, or if played all six numbers, go to next level */

function win() {}

/* lose function  for level 1
- display : inline the wrong answer text (#wrong-answer)
- take 5 off score 
- change image in level, or if played all six numbers, go to next level */

function lose() {}
