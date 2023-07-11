/* html selector */
let htmlElement = document.getElementById("html");

/* random color scheme out of 9 */
function randomColorScheme() {
  let randomColorScheme = Math.floor(Math.random() * 10);
  for (let i = 0; i < 10; i++) {
    htmlElement.classList.remove("colorscheme" + i);
  }
  htmlElement.classList.add("colorscheme" + randomColorScheme);
}

/* setting level variable globally */
let level = 0;

/* random colour scheme, triggering level one on launch */
window.addEventListener("load", () => {
  randomColorScheme();
  levelOneImage();
});

let rightAnswerText = document.getElementById("right-answer");
let wrongAnswerText = document.getElementById("wrong-answer");
let howToText = document.getElementById("how-to");

function win() {
  wrongAnswerText.setAttribute("style", "display:none;");
  rightAnswerText.setAttribute("style", "display:block;");
  howToText.setAttribute("style", "display:none;");
  scoreNumber += 5;
  scoreHTML.textContent = "Score: " + scoreNumber.toString();
  randomColorScheme();
}

function lose() {
  rightAnswerText.setAttribute("style", "display:none;");
  wrongAnswerText.setAttribute("style", "display:block;");
  scoreNumber -= 5;
  scoreHTML.textContent = "Score: " + scoreNumber.toString();
}

/* selecting image on page */
let imageElement = document.querySelector("img");

/* adding click event listener to image */
imageElement.addEventListener("click", getClickPosition);

/* get click position */
function getClickPosition(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  checkClickPosition(x, y);
}

/* setting random image within level 1 */
let levelOneNumbers = [1, 2, 3, 4, 5, 6];
let randomOneImage = 0;
function levelOneImage() {
  level = 1;
  let randomOneIndex = Math.floor(
    Math.random() * levelOneNumbers.length
  );
  randomOneImage = levelOneNumbers[randomOneIndex];
  levelOneNumbers.splice(randomOneIndex, 1);
  if (randomOneImage > 0) {
    imageElement.setAttribute(
      "src",
      "images/level1/" + randomOneImage + ".jpeg"
    );
  } else {
    levelTwoImage();
  }
}

/* setting random image within level 2 */
let levelTwoNumbers = [1, 2, 3, 4, 5, 6];
let randomTwoImage = 0;
function levelTwoImage() {
  level = 2;
  let randomTwoIndex = Math.floor(
    Math.random() * levelTwoNumbers.length
  );
  randomTwoImage = levelTwoNumbers[randomTwoIndex];
  levelTwoNumbers.splice(randomTwoIndex, 1);
  if (randomTwoImage > 0) {
    imageElement.setAttribute(
      "src",
      "images/level2/" + randomTwoImage + ".jpeg"
    );
  } else {
    levelThreeImage();
  }
}

/* setting random image within level 3 */
let levelThreeNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let randomThreeImage = 0;
function levelThreeImage() {
  level = 3;
  let randomThreeIndex = Math.floor(
    Math.random() * levelThreeNumbers.length
  );
  randomThreeImage = levelThreeNumbers[randomThreeIndex];
  levelThreeNumbers.splice(randomThreeIndex, 1);
  if (randomThreeImage > 0) {
    imageElement.setAttribute(
      "src",
      "images/level3/" + randomThreeImage + ".jpeg"
    );
  } else {
    /* what happens when game ends */
    imageElement.setAttribute("style", "display:none;");
    rightAnswerText.setAttribute("style", "display:none;");
  }
}

/* check click position, passing in x and y from above */
function checkClickPosition(x, y) {
  if (level === 1) {
    if (randomOneImage === 1) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomOneImage === 2) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomOneImage === 3) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomOneImage === 4) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomOneImage === 5) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomOneImage === 6) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else if (x > 300) {
        lose();
      }
    }
  } else if (level === 2) {
    if (randomTwoImage === 1) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelTwoImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomTwoImage === 2) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelTwoImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomTwoImage === 3) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelTwoImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomTwoImage === 4) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelTwoImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomTwoImage === 5) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelTwoImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomTwoImage === 6) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelTwoImage();
      } else if (x > 300) {
        lose();
      }
    }
  } else if (level === 3) {
    if (randomThreeImage === 1) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 2) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 3) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 4) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 5) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 6) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 7) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    } else if (randomThreeImage === 8) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelThreeImage();
      } else if (x > 300) {
        lose();
      }
    }
  }
}

/* select score and set starting score */
let scoreHTML = document.getElementById("score");
let scoreNumber = 0;

/* start score at 300 and take 1 point off score per second using time intervals */
function timeScoreDown() {
  scoreNumber -= 1;
  scoreHTML.textContent = "Score: " + scoreNumber.toString();
}
setInterval(timeScoreDown, 10000);
