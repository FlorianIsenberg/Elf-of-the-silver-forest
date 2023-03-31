class Fireball extends MovableObject {
  imagesFireball = [
    "img/Fireballs/fire1.png",
    "img/Fireballs/fire2.png",
    "img/Fireballs/fire3.png",
    "img/Fireballs/fire4.png",
    "img/Fireballs/fire5.png",
    "img/Fireballs/fire6.png",
    "img/Fireballs/fire7.png",
    "img/Fireballs/fire8.png",
    "img/Fireballs/fire9.png",
    "img/Fireballs/fire10.png",
    "img/Fireballs/fire11.png",
    "img/Fireballs/fire12.png",
    "img/Fireballs/fire13.png",
    "img/Fireballs/fire14.png",
    "img/Fireballs/fire15.png",
    "img/Fireballs/fire16.png",
    "img/Fireballs/fire17.png",
    "img/Fireballs/fire18.png",
    "img/Fireballs/fire19.png",
    "img/Fireballs/fire20.png",
    "img/Fireballs/fire21.png",
    "img/Fireballs/fire22.png",
    "img/Fireballs/fire23.png",
    "img/Fireballs/fire24.png",
    "img/Fireballs/fire25.png",
    "img/Fireballs/fire26.png",
    "img/Fireballs/fire27.png",
    "img/Fireballs/fire28.png",
    "img/Fireballs/fire29.png",
    "img/Fireballs/fire30.png",
    "img/Fireballs/fire31.png",
    "img/Fireballs/fire32.png",
    "img/Fireballs/fire33.png",
    "img/Fireballs/fire34.png",
    "img/Fireballs/fire35.png",
    "img/Fireballs/fire36.png",
    "img/Fireballs/fire37.png",
    "img/Fireballs/fire38.png",
    "img/Fireballs/fire39.png",
  ];
  speedY = 30;
  speedX = 20;
  width = 100;
  height = 100;
  damage = 30;

  constructor() {
    super();
    this.loadImages(this.imagesFireball);
  }

  specialAttack() {
    setInterval(() => {
      this.playAnimation(this.imagesFireball);
    }, 1000 / 30);
  }
}
