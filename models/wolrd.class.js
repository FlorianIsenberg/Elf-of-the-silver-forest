class World {
  character = new Character();
  enemies = [new Orc(), new Orc(), new Orc()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    this.enemies.forEach((orc) => {
      this.ctx.drawImage(
        this.orc.img,
        this.orc.x,
        this.orc.y,
        this.orc.width,
        this.orc.height
      );
    });

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
