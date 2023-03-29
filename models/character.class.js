class Character extends MovableObject {
  speed = 10;
  imagesWalkinElf = [
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
  world;

  constructor() {
    super().loadImage("../img/elf/_PNG/3/Elf_03__WALK_000.png");
    this.loadImages(this.imagesWalkinElf);
    this.applyGravity();
    this.walkElf();
  }

  walkElf() {
    setInterval(() => {
      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.left && this.x > -720) {
        this.x -= this.speed;
        this.otherDirection = true;
      }

      this.world.cameraX = -this.x;
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.right || this.world.keyboard.left) {
        let e = this.currentImage % this.imagesWalkinElf.length;
        let path = this.imagesWalkinElf[e];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 1000 / 30);
  }

  jump() {}
}
