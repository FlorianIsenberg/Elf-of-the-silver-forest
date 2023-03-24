class MovableObject {
  x = -50;
  y = 80;
  img;
  height = 78.75;
  width = 150;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("moving right");
  }
}
