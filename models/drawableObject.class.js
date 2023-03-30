class DrawableObject {
  img;
  x = -50;
  y = 80;
  height = 196.875 * 1.5;
  width = 375 * 1.5;
  imageCache = [];

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImages(charr) {
    charr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Orc ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(
        this.x + this.frameX,
        this.y + this.frameY,
        this.width + this.frameW,
        this.height + this.frameH
      );
      ctx.stroke();
    }
  }
}
