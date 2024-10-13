let score = 0;

function checkForMatches() {
  const cells = document.querySelectorAll(".cell img");

  // Check rows for matches
  for (let i = 0; i < 25; i += 5) {
    for (let j = i; j < i + 3; j++) {
      if (
        cells[j].src === cells[j + 1].src &&
        cells[j].src === cells[j + 2].src
      ) {
        // Match found, increase score
        score += 10;
        updateScore();
        removeCandies(j, j + 1, j + 2);
      }
    }
  }

  // Check columns for matches
  for (let i = 0; i < 15; i++) {
    if (
      cells[i].src === cells[i + 5].src &&
      cells[i].src === cells[i + 10].src
    ) {
      // Match found, increase score
      score += 10;
      updateScore();
      removeCandies(i, i + 5, i + 10);
    }
  }
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Score: " + score;
}

function removeCandies(...indices) {
  const cells = document.querySelectorAll(".cell img");
  indices.forEach(index => {
    cells[index].src = "./Images/" + randomCandy() + ".png";
  });
}

window.onload = () => {
  generateCandy();
  const scoreBoard = document.createElement("div");
  scoreBoard.id = "score";
  scoreBoard.textContent = "Score: 0";
  document.body.insertBefore(scoreBoard, document.getElementById("board"));
  setInterval(checkForMatches, 1000);
};
