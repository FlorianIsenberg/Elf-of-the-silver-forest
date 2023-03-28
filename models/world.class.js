class World {
  character = new Character();
  enemies = [new Orc(), new Orc(), new Orc()];
  backgroundObjects = [
    new BackgroundObject(
      "./img/bg/PNG/game_background_3/layers/battleground.png",
      0,
      0
    ),
    new BackgroundObject(
      "./img/bg/PNG/game_background_3/layers/back_land.png",
      0,
      0
    ),
    new BackgroundObject(
      "./img/bg/PNG/game_background_3/layers/ground_decor.png",
      0,
      0
    ),
    new BackgroundObject(
      "./img/bg/PNG/game_background_3/layers/back_decor.png",
      0,
      0
    ),
    new BackgroundObject(
      "./img/bg/PNG/game_background_3/layers/front_decor.png",
      0,
      0
    ),
  ];
  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
ddd;
