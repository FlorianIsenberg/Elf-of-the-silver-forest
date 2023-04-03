class Level {
  enemies;
  endboss;
  backgroundObjects;
  tank;
  levelEndX = 2100;

  constructor(enemies, endboss, backgroundObjects, tank) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.backgroundObjects = backgroundObjects;
    this.tank = tank;
  }
}
