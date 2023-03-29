class Endboss extends MovableObject {
  frameX = 470;
  frameY = 290;
  frameW = -830;
  frameH = -360;

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

  height = 196.875 * 3.5;
  width = 375 * 3.5;

  constructor() {
    super().loadImage(this.imagesWalkinBoss[0]);
    this.loadImages(this.imagesWalkinBoss);
    this.speed = 0.15 + Math.random() * 0.15;
    this.x = 1940;
    this.y = -270;
    this.walkEndboss();
  }

  walkEndboss() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      this.playAnimation(this.imagesWalkinBoss);
    }, 1000 / 30);
  }
}
