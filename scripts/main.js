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
});

/* start button and start screen */
let startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);
function startGame(event) {
  levelOneImage();
  playBackgroundSong();
  howToText.setAttribute("style", "display:none;");
  startButton.setAttribute("style", "display:none;");
}
/* random song selector */
function playBackgroundSong() {
  let songs = [
    "Black Unity",
    "If You Really Love Me",
    "Blues And Pants",
    "Keep Talkin",
    "Lost",
    "The Bizness",
    "Henrietta",
    "All Day And All Of The Night",
    "Uh Uh",
  ];
  let randomSongIndex = Math.floor(Math.random() * 9);
  let randomSong = songs[randomSongIndex];
  let songAtLocation = new Audio("music/" + randomSong + ".mp3");
  songAtLocation.volume = 0.5;
  songAtLocation.play();
}

let rightAnswerText = document.getElementById("right-answer");
let wrongAnswerText = document.getElementById("wrong-answer");
let restartButton = document.getElementById("restart");
let howToText = document.getElementById("how-to");

function win() {
  wrongAnswerText.setAttribute("style", "display:none;");
  rightAnswerText.setAttribute("style", "display:block;");
  restartButton.setAttribute("style", "display:block");
  scoreNumber += 5;
  scoreHTML.textContent = "Score: " + scoreNumber.toString();
  randomColorScheme();
}

function lose() {
  rightAnswerText.setAttribute("style", "display:none;");
  wrongAnswerText.setAttribute("style", "display:block;");
  restartButton.setAttribute("style", "display:block");
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
  scoreHTML.setAttribute("style", "display:block");
  imageElement.setAttribute("style", "display:block");
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
    imageElement.setAttribute("style", "display:block");
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
      if (x >= 16 && x <= 280 && y >= 109.5 && y <= 192) {
        win();
        levelOneImage();
      } else {
        lose();
      }
    } else if (randomOneImage === 2) {
      if (x >= 77.25 && x <= 287 && y >= 129.5 && y <= 179) {
        win();
        levelOneImage();
      } else {
        lose();
      }
    } else if (randomOneImage === 3) {
      if (x >= 41 && x <= 257 && y >= 167.75 && y <= 300) {
        win();
        levelOneImage();
      } else {
        lose();
      }
    } else if (randomOneImage === 4) {
      if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
        win();
        levelOneImage();
      } else {
        lose();
      }
    } else if (randomOneImage === 5) {
      if (x >= 0 && x <= 262 && y >= 0 && y <= 85.75) {
        win();
        levelOneImage();
      } else {
        lose();
      }
    } else if (randomOneImage === 6) {
      if (x >= 61.5 && x <= 192.25 && y >= 186.5 && y <= 300) {
        win();
        levelOneImage();
      } else {
        lose();
      }
    }
  } else if (level === 2) {
    if (randomTwoImage === 1) {
      if (
        (x >= 49 && x <= 217 && y >= 136.33 && y <= 182) ||
        (x >= 211.66 && x <= 242.33 && y >= 184.66 && y <= 194)
      ) {
        win();
        levelTwoImage();
      } else {
        lose();
      }
    } else if (randomTwoImage === 2) {
      if (x >= 36.25 && x <= 236.5 && y >= 100.75 && y <= 130) {
        win();
        levelTwoImage();
      } else {
        lose();
      }
    } else if (randomTwoImage === 3) {
      if (x >= 19.5 && x <= 174 && y >= 21.25 && y <= 142.5) {
        win();
        levelTwoImage();
      } else {
        lose();
      }
    } else if (randomTwoImage === 4) {
      if (
        (x >= 9.25 && x <= 159.25 && y >= 55 && y <= 201.5) ||
        (x >= 37.25 && x <= 142.5 && y >= 208.5 && y <= 233)
      ) {
        win();
        levelTwoImage();
      } else {
        lose();
      }
    } else if (randomTwoImage === 5) {
      if (
        (x >= 194.25 && x <= 287 && y >= 13.25 && y <= 40) ||
        (x >= 61.25 && x <= 178 && y >= 147 && y <= 168)
      ) {
        win();
        levelTwoImage();
      } else {
        lose();
      }
    } else if (randomTwoImage === 6) {
      if (x >= 15.75 && x <= 302 && y >= 63.25 && y <= 113) {
        win();
        levelTwoImage();
      } else {
        lose();
      }
    }
  } else if (level === 3) {
    if (randomThreeImage === 1) {
      if (x >= 24.5 && x <= 276 && y >= 114.25 && y <= 151) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 2) {
      if (x >= 86.75 && x <= 139 && y >= 200.5 && y <= 263) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 3) {
      if (x >= 45 && x <= 128 && y >= 206.5 && y <= 251) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 4) {
      if (
        (x >= 81.25 && x <= 134 && y >= 86.5 && y <= 161.5) ||
        (x >= 134 && x <= 240 && y >= 102 && y <= 145)
      ) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 5) {
      if (x >= 80 && x <= 219 && y >= 89 && y <= 109) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 6) {
      if (x >= 75 && x <= 95 && y >= 132 && y <= 150) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 7) {
      if (x >= 151 && x <= 177 && y >= 178 && y <= 188) {
        win();
        levelThreeImage();
      } else {
        lose();
      }
    } else if (randomThreeImage === 8) {
      if (x >= 137 && x <= 185 && y >= 154 && y <= 169) {
        win();
        levelThreeImage();
      } else {
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
