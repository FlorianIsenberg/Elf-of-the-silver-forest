class Endboss extends MovableObject {
  offset = {
    top: 290,
    right: 455,
    bottom: 50,
    left: 365,
  };

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
  imagesAttackBoss = [
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_000.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_001.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_002.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_003.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_004.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_005.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_006.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_007.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_008.png",
    "../img/orc/_PNG/1_ORK/ORK_01_ATTAK_009.png",
  ];
  imagesDie = [
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_000.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_001.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_002.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_003.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_004.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_005.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_006.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_007.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_008.png",
    "../img/orc/_PNG/1_ORK/ORK_01_DIE_009.png",
  ];

  height = 196.875 * 3.5;
  width = 375 * 3.5;
  energy = 50;
  damage = 30;

  constructor() {
    super().loadImage(this.imagesWalkinBoss[0]);
    this.loadImages(this.imagesWalkinBoss);
    this.loadImages(this.imagesAttackBoss);
    this.loadImages(this.imagesDie);
    this.speed = 0.15 + Math.random() * 0.15;
    this.x = 1940;
    this.y = -270;
    // this.walkEndboss();
    this.animation();
  }

  animation() {
    const animationInterval = setInterval(() => {
      if (this.isDead()) {
        clearInterval(animationInterval);
        this.die();
      } else {
        let moveInterval = setInterval(() => {
          this.moveLeft();
        }, 1000 / 60);

        let animationWalkInterval = setInterval(() => {
          if (this.isDead()) {
            clearInterval(moveInterval);
            clearInterval(animationWalkInterval);
            clearInterval(animationInterval);
            this.die();
          } else {
            this.playAnimation(this.imagesWalkinBoss);
          }
        }, 1000 / 10);

        setTimeout(() => {
          clearInterval(moveInterval);
          clearInterval(animationWalkInterval);

          let animationAttackInterval = setInterval(() => {
            if (this.isDead()) {
              clearInterval(animationAttackInterval);
              clearInterval(animationInterval);
              this.die();
            } else {
              this.playAnimation(this.imagesAttackBoss);
            }
          }, 1000 / 20);

          setTimeout(() => {
            clearInterval(animationAttackInterval);

            console.log(this.damage);
          }, 2000);
        }, 4000);
      }
    }, 6000);
  }
}
