const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 318);

const playerImage = new Image();
playerImage.src = "dog.jpg";

const spriteWidth = 1000 / 6;
const spriteHeight = 318 / 2;

let frameX = 4;
let frameY = 1;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   ctx.fillRect(100, 50, 100, 100);

  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    1000,
    318
  );
  requestAnimationFrame(animate);
}
animate();
