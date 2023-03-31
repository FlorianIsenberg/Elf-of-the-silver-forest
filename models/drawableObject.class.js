class DrawableObject {
  img;
  x = -50;
  y = 80;
  height = 196.875 * 1.5;
  width = 375 * 1.5;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Orc ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "blue";
      let drawX;
      if (this.otherDirection) {
        drawX = this.x + this.offset.right;
      } else {
        drawX = this.x + this.offset.left;
      }
      ctx.rect(
        drawX,
        this.y + this.offset.top,
        this.width - this.offset.right - this.offset.left,
        this.height - this.offset.top - this.offset.bottom
      );

      ctx.stroke();
    }
  }

  loadImages(charr) {
    charr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
