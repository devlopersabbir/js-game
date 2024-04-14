import { Game } from "./main.js";

export class Player {
  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;

    this.x = 50;
    this.y = 60;
    this.spriteWidth = 200;
    this.spriteHeight = 200;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    // this.x++;
  }
  resize() {
    this.width = this.spriteWidth * this.game.ratio;
    this.height = this.spriteHeight * this.game.ratio;
  }
}
