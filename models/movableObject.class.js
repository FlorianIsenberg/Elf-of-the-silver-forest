class MovableObject {
  x = -50;
  y = 80;
  img;
  height = 196.875 * 1.5;
  width = 375 * 1.5;
  imageCache = [];
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 30);
  }

  isAboveGround() {
    return this.y < 100;
  }

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

  isColliding(obj) {
    return (
      this.x + this.frameX + (this.width + this.frameW) >= obj.x + obj.frameX &&
      this.y + this.frameY + (this.height + this.frameH) >=
        obj.y + obj.frameY &&
      this.x + this.frameX <= obj.x + obj.frameX &&
      this.y + this.frameY <= obj.y + obj.frameY + (obj.height + obj.frameH)
    );
  }

  hit() {
    this.energy -= 4;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  loadImages(charr) {
    charr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }
  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  playAnimation(play) {
    let e = this.currentImage % play.length;
    let path = play[e];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
