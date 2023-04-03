class Manabar extends DrawableObject {
  imagesManaBar = [
    "img/manaBar/Mana_bar_00.png",
    "img/manaBar/Mana_bar_10.png",
    "img/manaBar/Mana_bar_20.png",
    "img/manaBar/Mana_bar_30.png",
    "img/manaBar/Mana_bar_40.png",
    "img/manaBar/Mana_bar_50.png",
    "img/manaBar/Mana_bar_60.png",
    "img/manaBar/Mana_bar_70.png",
    "img/manaBar/Mana_bar_80.png",
    "img/manaBar/Mana_bar_90.png",
    "img/manaBar/Mana_bar_100.png",
  ];

  percentage = 20;
  constructor() {
    super();
    this.loadImages(this.imagesManaBar);
    this.setPercentage(this.percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.imagesManaBar[this.resolveImageIndex()];
    this.x = 5;
    this.y = 40;
    this.width = 300;
    this.height = 30;
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 10;
    } else if (this.percentage > 90) {
      return 9;
    } else if (this.percentage > 80) {
      return 8;
    } else if (this.percentage > 70) {
      return 7;
    } else if (this.percentage > 60) {
      return 6;
    } else if (this.percentage > 50) {
      return 5;
    } else if (this.percentage > 40) {
      return 4;
    } else if (this.percentage > 30) {
      return 3;
    } else if (this.percentage > 20) {
      return 2;
    } else if (this.percentage > 10) {
      return 1;
    } else {
      return 0;
    }
  }
}
