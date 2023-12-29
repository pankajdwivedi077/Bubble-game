var timer = 60;
var score = 0;
var hit;

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 75; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hit;
}

function runTimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector("#pbottom").innerHTML = `<h1>Game  over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (e) {
  var clickedNumber = Number(e.target.textContent);
  if (clickedNumber == hit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();

getNewHit();

makeBubble();
