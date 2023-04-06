let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
}

function gameStart() {
  initLevel();
  world = new World(canvas, keyboard);
  setScreen();
}

function setScreen() {
  document.getElementById("gameStartBg").classList.add("dNone");
  document.getElementById("game").classList.remove("dNone");
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 68) {
    keyboard.right = true;
  }

  if (e.keyCode == 65) {
    keyboard.left = true;
  }

  if (e.keyCode == 87) {
    keyboard.up = true;
  }

  if (e.keyCode == 83) {
    keyboard.down = true;
  }

  if (e.keyCode == 32) {
    keyboard.specialAttack = true;
  }
  if (e.keyCode == 16) {
    keyboard.attack = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 68) {
    keyboard.right = false;
  }
  if (e.keyCode == 65) {
    keyboard.left = false;
  }
  if (e.keyCode == 87) {
    keyboard.up = false;
  }
  if (e.keyCode == 83) {
    keyboard.down = false;
  }

  if (e.keyCode == 32) {
    keyboard.specialAttack = false;
  }
  if (e.keyCode == 16) {
    keyboard.attack = false;
  }
});
