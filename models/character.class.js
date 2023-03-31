class Character extends MovableObject {
  offset = {
    top: 90,
    right: 220,
    bottom: 50,
    left: 210,
  };
  speed = 10;
  y = 0;
  damage = 10;

  imagesRunElf = [
    "../img/elf/_PNG/3/Elf_03__RUN_001.png",
    "../img/elf/_PNG/3/Elf_03__RUN_002.png",
    "../img/elf/_PNG/3/Elf_03__RUN_003.png",
    "../img/elf/_PNG/3/Elf_03__RUN_004.png",
    "../img/elf/_PNG/3/Elf_03__RUN_005.png",
    "../img/elf/_PNG/3/Elf_03__RUN_006.png",
    "../img/elf/_PNG/3/Elf_03__RUN_007.png",
    "../img/elf/_PNG/3/Elf_03__RUN_008.png",
    "../img/elf/_PNG/3/Elf_03__RUN_009.png",
  ];

  imagesJumpingElf = [
    "../img/elf/_PNG/3/Elf_03__JUMP_000.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_001.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_002.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_003.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_004.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_005.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_006.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_007.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_008.png",
    "../img/elf/_PNG/3/Elf_03__JUMP_009.png",
  ];

  imagesIdleElf = [
    "img/elf/_PNG/3/Elf_03__IDLE_000.png",
    "img/elf/_PNG/3/Elf_03__IDLE_001.png",
    "img/elf/_PNG/3/Elf_03__IDLE_002.png",
    "img/elf/_PNG/3/Elf_03__IDLE_003.png",
    "img/elf/_PNG/3/Elf_03__IDLE_004.png",
    "img/elf/_PNG/3/Elf_03__IDLE_005.png",
    "img/elf/_PNG/3/Elf_03__IDLE_006.png",
    "img/elf/_PNG/3/Elf_03__IDLE_007.png",
    "img/elf/_PNG/3/Elf_03__IDLE_008.png",
    "img/elf/_PNG/3/Elf_03__IDLE_009.png",
  ];
  imagesDie = [
    "img/elf/_PNG/3/Elf_03__DIE_000.png",
    "img/elf/_PNG/3/Elf_03__DIE_001.png",
    "img/elf/_PNG/3/Elf_03__DIE_002.png",
    "img/elf/_PNG/3/Elf_03__DIE_003.png",
    "img/elf/_PNG/3/Elf_03__DIE_004.png",
    "img/elf/_PNG/3/Elf_03__DIE_005.png",
    "img/elf/_PNG/3/Elf_03__DIE_006.png",
    "img/elf/_PNG/3/Elf_03__DIE_007.png",
    "img/elf/_PNG/3/Elf_03__DIE_008.png",
    "img/elf/_PNG/3/Elf_03__DIE_009.png",
  ];
  imagesHurtElf = [
    "img/elf/_PNG/3/Elf_03__HURT_000.png",
    "img/elf/_PNG/3/Elf_03__HURT_001.png",
    "img/elf/_PNG/3/Elf_03__HURT_002.png",
    "img/elf/_PNG/3/Elf_03__HURT_003.png",
    "img/elf/_PNG/3/Elf_03__HURT_004.png",
    "img/elf/_PNG/3/Elf_03__HURT_005.png",
    "img/elf/_PNG/3/Elf_03__HURT_006.png",
    "img/elf/_PNG/3/Elf_03__HURT_007.png",
    "img/elf/_PNG/3/Elf_03__HURT_008.png",
    "img/elf/_PNG/3/Elf_03__HURT_009.png",
  ];

  world;

  constructor() {
    super().loadImage("img/elf/_PNG/3/Elf_03__IDLE_000.png");
    this.loadImages(this.imagesRunElf);
    this.loadImages(this.imagesJumpingElf);
    this.loadImages(this.imagesIdleElf);
    this.loadImages(this.imagesDie);
    this.loadImages(this.imagesHurtElf);
    this.applyGravity();
    this.walkElf();
  }

  walkElf() {
    setInterval(() => {
      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
        this.moveRight();
      }
      if (this.world.keyboard.left && this.x > -720) {
        this.moveLeft();
      }

      if (this.world.keyboard.space && !this.isAboveGround()) {
        this.jump();
      }

      this.world.cameraX = -this.x;
    }, 1000 / 20);

    let animation = setInterval(() => {
      this.playAnimation(this.imagesIdleElf);

      if (this.isDead()) {
        clearInterval(animation);
        this.die();
      } else if (this.isHurt()) {
        this.playAnimation(this.imagesHurtElf);
      }

      if (this.isAboveGround() || this.speedY > 0) {
        this.playAnimation(this.imagesJumpingElf);
      } else {
        if (this.world.keyboard.right || this.world.keyboard.left) {
          this.playAnimation(this.imagesRunElf);
        }
      }
    }, 1000 / 15);
  }

  jump() {
    this.speedY = 25;
  }
}
