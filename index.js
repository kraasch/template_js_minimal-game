
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const FPS = 7.5;
const REFRESH_MS = 1000 / FPS;
const BLACK = "#000";
const BLUE = "#00f";

let data = null;
let game = null;
let hold = false;
let x = 200;
let y = 0;

ctx.fillStyle = BLACK;
ctx.fillRect(0, 0, 500, 500);
data = ctx.getImageData(0, 0, 500, 500);

function updateGame() {
  y += 12;
  ctx.putImageData(data, 0, 0);
  ctx.fillStyle = BLUE;
  ctx.fillRect(x, y, 20, 20);
}

function handleKeyEvent(ev) {
  const keyCode = ev.which || ev.keyCode;
  if (keyCode == 80) { // keycode 80 == P key.
    if (hold) {
      hold = false;
      game = setInterval(updateGame, REFRESH_MS);
    } else {
      hold = true;
      clearInterval(game);
    }
  }
}

game = setInterval(updateGame, REFRESH_MS);

