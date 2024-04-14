import { Player } from "./player.js";

export class Game {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} context
   */
  constructor(canvas, context) {
    this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */
    this.ctx = context;

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    /** @type {Player} */
    this.player = new Player(this);
  }
  render() {
    this.ctx.fillStyle = "red";
    this.player.update();
    this.player.draw();
  }
}

function run() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = 720;
  canvas.height = 720;

  const game = new Game(canvas, ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
window.addEventListener("load", run);
