class Fireball extends ThrowableObject {
  offset = {
    top: 200,
    right: 150,
    bottom: 200,
    left: 230,
  };

  imagesLoadFireball = [
    "img/Fireballs/1.png",
    "img/Fireballs/2.png",
    "img/Fireballs/3.png",
    "img/Fireballs/4.png",
  ];

  imagesFireball = [
    "img/Fireballs/5.png",
    "img/Fireballs/6.png",
    "img/Fireballs/7.png",
    "img/Fireballs/8.png",
    "img/Fireballs/9.png",
    "img/Fireballs/10.png",
    "img/Fireballs/11.png",
    "img/Fireballs/12.png",
    "img/Fireballs/13.png",
    "img/Fireballs/14.png",
    "img/Fireballs/15.png",
    "img/Fireballs/16.png",
    "img/Fireballs/17.png",
    "img/Fireballs/18.png",
    "img/Fireballs/19.png",
    "img/Fireballs/20.png",
    "img/Fireballs/21.png",
    "img/Fireballs/22.png",
    "img/Fireballs/23.png",
    "img/Fireballs/24.png",
    "img/Fireballs/25.png",
    "img/Fireballs/26.png",
    "img/Fireballs/27.png",
    "img/Fireballs/28.png",
    "img/Fireballs/29.png",
    "img/Fireballs/30.png",
    "img/Fireballs/31.png",
    "img/Fireballs/32.png",
    "img/Fireballs/33.png",
    "img/Fireballs/34.png",
    "img/Fireballs/35.png",
    "img/Fireballs/36.png",
    "img/Fireballs/37.png",
    "img/Fireballs/38.png",
    "img/Fireballs/39.png",
  ];
  damage = 20;
  energy = 10;

  constructor(x, y) {
    super().loadImage(this.imagesFireball[0]);
    this.loadImages(this.imagesLoadFireball);
    this.loadImages(this.imagesFireball);
    this.x = x + 100;
    this.y = y - 70;
    this.width = 500;
    this.height = 500;
    // this.throw();
    this.speed = 20;
    this.specialAttack();
  }

  // throw(x, y) {
  //   this.speedX = 30;
  //   let fireballSpeed = setInterval(() => {
  //     this.x += 10;
  //   }, 50);
  //   setTimeout(() => {
  //     clearInterval(fireballSpeed);
  //     this.y = 500;
  //   }, 1333);
  // }

  specialAttack() {
    this.currentImage = 0;
    let loadFireball = setInterval(() => {
      this.playAnimation(this.imagesLoadFireball);
    }, 1000 / 20);

    setTimeout(() => {
      clearInterval(loadFireball);
      let moveFireball = setInterval(() => {
        this.moveRight();
      }, 1000 / 20);

      let attack = setInterval(() => {
        this.playAnimation(this.imagesFireball);

        if (this.isDead()) {
          // clearInterval(attack);
          // clearInterval(moveFireball);
          this.damage = 0;
        }
      }, 1000 / 30);

      setTimeout(() => {
        clearInterval(attack);
        clearInterval(moveFireball);
      }, 1150);
    }, 1000 / 20);
  }
}
