class Endboss extends MovableObject {
  imagesWalkinBoss = [
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_000.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_001.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_002.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_003.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_004.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_005.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_006.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_007.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_008.png",
    "../img/orc/_PNG/1_ORK/ORK_01_WALK_009.png",
  ];
  otherDirection = true;
  height = 196.875 * 3.5;
  width = 375 * 3.5;

  constructor() {
    super().loadImage(this.imagesWalkinBoss[0]);
    this.loadImages(this.imagesWalkinBoss);
    this.x = 2050;
    this.y = -270;
    this.walkEndboss();
  }

  walkEndboss() {
    this.moveLeft();
    setInterval(() => {
      let o = this.currentImage % this.imagesWalkinBoss.length;
      let path = this.imagesWalkinBoss[o];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 20);
  }
}
