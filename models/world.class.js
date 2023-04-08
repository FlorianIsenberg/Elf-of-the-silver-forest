class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  cameraX = -100;
  statusBar = new Statusbar();
  manaBar = new Manabar();
  throwableObject = [];
  lastAttack = 0;

  soundFlash = new Audio("");
  soundFireball = new Audio("");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 100);
  }

  checkThrowObjects() {
    if (
      this.keyboard.specialAttack &&
      this.character.mana > 30 &&
      !this.cooldown()
    ) {
      let attack = new Fireball(this.character.x, this.character.y);
      this.throwableObject.push(attack);
      this.character.mana -= 30;
      this.manaBar.setPercentage(this.character.mana);
      this.lastAttack = new Date().getTime();
      setTimeout(() => {
        this.throwableObject.splice(-1);
      }, 1500);
    }
    if (this.keyboard.attack && this.character.mana >= 5 && !this.cooldown()) {
      let attack = new Flash(this.character.x, this.character.y);
      this.throwableObject.push(attack);
      this.character.mana -= 5;
      this.manaBar.setPercentage(this.character.mana);
      this.lastAttack = new Date().getTime();
      setTimeout(() => {
        this.throwableObject.splice(-1);
      }, 1000);
    }
  }

  cooldown() {
    let timePassed = new Date().getTime() - this.lastAttack;
    timePassed = timePassed / 1000;
    return timePassed < 0.5;
  }

  checkCollisions() {
    this.collisionOrcs();
    this.collisionEndboss();
    this.collisionTank();
  }

  collisionOrcs() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(enemy);
        this.statusBar.setPercentage(this.character.energy);
      }
      this.throwableObject.forEach((attack) => {
        if (enemy.isColliding(attack)) {
          enemy.hit(attack);
          attack.hit(enemy);
        }
      });
    });
  }
  collisionEndboss() {
    this.level.endboss.forEach((endboss) => {
      if (this.character.isColliding(endboss)) {
        this.character.hit(endboss);
        this.statusBar.setPercentage(this.character.energy);
      }
      this.throwableObject.forEach((attack) => {
        if (endboss.isColliding(attack)) {
          endboss.hit(attack);
          attack.hit(endboss);
        }
      });
    });
  }

  collisionTank() {
    this.level.tank.forEach((tank) => {
      if (this.character.isColliding(tank)) {
        this.character.collect(tank.mana);
        tank.collect();
        this.level.tank.splice(this.level.tank.indexOf(tank), 1);
        this.manaBar.setPercentage(this.character.mana);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.cameraX, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.manaBar);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.level.tank);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.throwableObject);

    this.ctx.translate(-this.cameraX, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
