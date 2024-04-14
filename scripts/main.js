import { Player } from "./player.js";

export class Game {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} context
   */
  constructor(canvas, context) {
    /** @type {HTMLCanvasElement} */
    this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */
    this.ctx = context;

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.baseHeight = 720; /** which is default height of our game */
    this.ratio = this.height / this.baseHeight; /** for example (720/1000) */

    /** @type {Player} */
    this.player = new Player(this);
    this.gravity;

    // initinal resize with currenct window height and width
    this.resize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;

    this.ctx.fillStyle = "red";

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.ratio = this.height / this.baseHeight;
    this.gravity = 0.15 * this.ratio;
    this.player.resize();
  }
  render() {
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
