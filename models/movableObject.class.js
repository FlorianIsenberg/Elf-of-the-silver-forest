class MovableObject {
  x = -50;
  y = 80;
  img;
  height = 196.875 * 1.5;
  width = 375 * 1.5;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("moving right");
  }
  moveLeft() {
    console.log("moving left");
  }
}
