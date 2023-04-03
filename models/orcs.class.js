class Orc extends MovableObject {
  offset = {
    top: 120,
    right: 210,
    left: 150,
    bottom: 30,
  };
  energy = 40;
  damage = 8;

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

  imagesDie = [
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
    this.loadImages(this.imagesDie);

    this.x = 250 + Math.random() * 2000;
    this.speed = 0.15 + Math.random() * 0.25;

    this.walkOrc();
  }

  walkOrc() {
    let movingInterval = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    let animationInterval = setInterval(() => {
      this.playAnimation(this.imagesWalkingOrc);
      if (this.isDead()) {
        clearInterval(movingInterval);
        clearInterval(animationInterval);
        this.die();
      }
    }, 1000 / 15);
  }
}
