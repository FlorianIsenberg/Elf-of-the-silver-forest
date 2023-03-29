class Character extends MovableObject {
  speed = 10;
  imagesWalkingElf = [
    "../img/elf/_PNG/3/Elf_03__WALK_001.png",
    "../img/elf/_PNG/3/Elf_03__WALK_002.png",
    "../img/elf/_PNG/3/Elf_03__WALK_003.png",
    "../img/elf/_PNG/3/Elf_03__WALK_004.png",
    "../img/elf/_PNG/3/Elf_03__WALK_005.png",
    "../img/elf/_PNG/3/Elf_03__WALK_006.png",
    "../img/elf/_PNG/3/Elf_03__WALK_007.png",
    "../img/elf/_PNG/3/Elf_03__WALK_008.png",
    "../img/elf/_PNG/3/Elf_03__WALK_009.png",
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

  world;

  constructor() {
    super().loadImage("../img/elf/_PNG/3/Elf_03__WALK_000.png");
    this.loadImages(this.imagesWalkingElf);
    this.loadImages(this.imagesJumpingElf);
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
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.playAnimation(this.imagesJumpingElf);
      } else {
        if (this.world.keyboard.right || this.world.keyboard.left) {
          this.playAnimation(this.imagesWalkingElf);
        }
      }
    }, 1000 / 30);
  }

  jump() {
    this.speedY = 22;
  }
}
