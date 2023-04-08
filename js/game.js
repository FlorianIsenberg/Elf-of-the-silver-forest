let canvas;
let world;
let keyboard = new Keyboard();
let gameSound = new Audio("audio/main.mp3");
let soundMuted = false;

function init() {
  canvas = document.getElementById("canvas");
}

function gameStart() {
  initLevel();
  world = new World(canvas, keyboard);
  setScreen();
  gameSound.play();
  gameSound.loop = true;
  gameSound.volume = 0.025;
}

function setScreen() {
  document.getElementById("gameStartBg").classList.add("dNone");
  document.getElementById("game").classList.remove("dNone");
}

function soundMute() {
  let soundIngame = document.getElementById("soundIngame");
  if (soundMuted) {
    soundMuted = false;
    soundIngame.src = "img/volumeUp.png";
    gameSound.muted = false;
  } else {
    soundMuted = true;
    soundIngame.src = "img/mute.png";
    gameSound.muted = true;
  }
  if (world) {
    setWorldAudio();
  }
}

function setWorldAudio() {
  if (soundMuted) {
    world.soundMuted = true;
  } else {
    world.soundMuted = false;
  }
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
