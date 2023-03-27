class World {
  character = new Character();
  enemies = [new Orc(), new Orc(), new Orc()];
  backgroundObjects = [
    new BackgroundObject(
      "./img/bg/PNG/game_background_3/layers/battleground.png"
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

    this.addToMap(this.character);
    this.enemies.forEach((enemy) => {
      this.addToMap(enemy);
    });

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
