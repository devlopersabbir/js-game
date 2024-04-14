import { Background } from "./background.js";
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

    /** @type {Background} */
    this.background = new Background(this);
    /** @type {Player} */
    this.player = new Player(this);
    this.gravity;
    this.speed; // speed of the game background changing

    // initinal resize with currenct window height and width
    this.resize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
    // mouse controls
    this.canvas.addEventListener("mousedown", () => {
      this.player.flap();
    });
    // keyboard controls
    window.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") this.player.flap();
    });
    // touch controls
    this.canvas.addEventListener("touchstart", () => {
      this.player.flap();
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

    this.speed = 3;
    this.background.resize();
    this.player.resize();
  }
  render() {
    this.background.update();
    this.background.draw();

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
