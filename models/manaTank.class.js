class Tank extends CollectibleObject {
  width = 30;
  height = 36;

  mana = 40;

  constructor() {
    super().loadImage("img/tank/3.png");
  }
}
