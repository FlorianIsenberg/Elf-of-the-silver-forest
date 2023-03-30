class MovableObject extends DrawableObject {
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
