class Orc extends MovableObject {
  constructor() {
    super().loadImage("../img/orc/_PNG/3_ORK/ORK_03_WALK_000.png");

    this.x = 200 + Math.random() * 400;
  }
  moveleft() {}
}
