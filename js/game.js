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
  runGame();
  hideScreens();
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

function runGame() {
  let gameInterval = setInterval(() => {
    checkGameOver(gameInterval);
  }, 1000 / 20);
}

function checkGameOver(gameInterval) {
  if (world.character.energy == 0) {
    clearInterval(gameInterval);
    setTimeout(() => {
      document.getElementById("endscreen").classList.remove("dNone");
      document.getElementById("endscreenHeadline").innerHTML = "GAME OVER";
    }, 1000);
  }

  if (world.level.endboss[0].energy == 0) {
    clearInterval(gameInterval);
    setTimeout(() => {
      document.getElementById("endscreen").classList.remove("dNone");
      document.getElementById("endscreenHeadline").innerHTML = "VICTORY";
    }, 1000);
  }
}

function hideScreens() {
  document.getElementById("endscreen").classList.add("dNone");
}

function howToPlay() {
  document.getElementById("description").innerHTML = createHowToPlay();
}

function createHowToPlay() {
  return `
  <div class="howToPlay">
      <div class="walkRight">
          Walk Right: <button class="playBtn" id="btnRight">D</button> or <button class="playBtn" id="btnRight"><img  class="arrowRight" src="img/icons/arrow-204-256.png" class="rotateRight imgSmall" alt=""></button>
      </div>
      <div class="walkLeft">
          Walk Left: <button class="playBtn" id="btnRight">A</button> or <button class="playBtn" id="btnLeft"><img class="arrowLeft" src="img/icons/arrow-204-256.png" class="rotateLeft imgSmall" alt=""></button>
      </div>
      <div class="jump">
          Jump: <button class="playBtnUp" id="btnRight">W</button> or <button class="playBtn" id="btnJump"><img class="arrowUp" src="img/icons/arrow-204-256.png" class="imgSmall" alt=""></button>
      </div>
  </div>
  <div class="howToPlay">
      <div class="flash">
          <img src="img/flash/flash06.png" alt="">Flash (Requires 5 Mana): <button class="playBtnAttack" id="btnRight">SHIFT</button>
      </div>
      <div class="fire">
          <img src="img/Fireballs/20.png" alt="">Fireball (Requires 30 Mana): <button class="playBtnAttack" id="btnRight">SPACE</button>
      </div>
  </div>`;
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
