class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  lastHit = 0;
  offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

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
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    );
  }

  hit(objDamage) {
    this.energy -= objDamage.damage;
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

  die() {
    this.damage = 0;
    this.currentImage = 0;
    let animationInterval = setInterval(() => {
      this.playAnimation(this.imagesDie);
    }, 100);
    setTimeout(() => {
      clearInterval(animationInterval);
    }, 950);
  }
}
