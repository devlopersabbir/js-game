class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
}

function run() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = 720;
  canvas.height = 720;
  console.log(ctx);
}
window.addEventListener("load", run);
