class Character extends MovableObject {
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

  constructor() {
    super().loadImage("../img/elf/_PNG/3/Elf_03__WALK_000.png");
    this.loadImages(this.imagesWalkinElf);
    this.walkElf();
  }

  walkElf() {
    setInterval(() => {
      let e = this.currentImage % this.imagesWalkinElf.length;
      let path = this.imagesWalkinElf[e];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 30);
  }

  jump() {}
}
