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

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
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
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
