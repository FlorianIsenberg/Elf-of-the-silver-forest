class Orc extends MovableObject {
  frameX = 210;
  frameY = 120;
  frameW = -370;
  frameH = -150;
  imagesWalkingOrc = [
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

  imagesDieOrc = [
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_000.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_001.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_002.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_003.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_004.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_005.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_006.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_007.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_008.png",
    "../img/orc/_PNG/3_ORK/ORK_03_DIE_009.png",
  ];

  constructor() {
    super().loadImage("../img/orc/_PNG/3_ORK/ORK_03_WALK_000.png");
    this.loadImages(this.imagesWalkingOrc);
    this.x = 200 + Math.random() * 400;
    this.speed = 0.15 + Math.random() * 0.25;

    this.walkOrc();
  }

  walkOrc() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.imagesWalkingOrc);
    }, 1000 / 20);
  }
}
