class Orc extends MovableObject {
  imagesWalkinOrc = [
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_001.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_002.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_003.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_004.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_005.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_006.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_007.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_008.png",
    "../img/orc/_PNG/3_ORK/ORK_03_WALK_009.png",
  ];

  otherDirection = true;

  constructor() {
    super().loadImage("../img/orc/_PNG/3_ORK/ORK_03_WALK_000.png");
    this.loadImages(this.imagesWalkinOrc);
    this.x = 200 + Math.random() * 400;
    this.speed = 0.15 + Math.random() * 0.25;

    this.walkOrc();
  }

  walkOrc() {
    this.moveLeft();
    setInterval(() => {
      let o = this.currentImage % this.imagesWalkinOrc.length;
      let path = this.imagesWalkinOrc[o];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 600);
  }

  moveleft() {}
}
