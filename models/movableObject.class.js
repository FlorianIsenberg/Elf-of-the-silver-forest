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

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 80;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(elf) {
    elf.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log("moving right");
  }
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
