// class canvasExample {
//     constructor(props) {
//        x,  y, height, width
// const coords = [10, 10, 150, 100];
// const coords = [0, 0, 350, 350];
// const animationDir = 1;
// const fillColor = `yellow`;
// const canvas = document.getElementById("main-canvas");
// // canvas.width = window.innerWidth * 0.75;
// canvas.width = window.innerWidth;
// canvas.height = canvas.width / 2;
// const center = [canvas.width / 2, canvas.height / 2]
// const ctx = canvas.getContext("2d");
// const coords = [...center, 350, 350];

// ctx.beginPath();
// ctx.arc(...center, 50, 0, 2 * Math.PI);
// ctx.fillStyle = fillColor;
// ctx.fill();
// ctx.stroke();

const fillColor = `yellow`;
const canvas = document.getElementById("main-canvas");
// canvas.width = window.innerWidth * 0.75;
canvas.width = window.innerWidth;
canvas.height = canvas.width / 2;
const center = [canvas.width / 2, canvas.height / 2]
const ctx = canvas.getContext("2d");
const coords = [...center, 350, 350];

// ctx.fillStyle = fillColor;
// ctx.fillRect(...coords);
ctx.beginPath();
ctx.arc(...center, 50, 0, 2 * Math.PI);
ctx.fillStyle = fillColor;
ctx.fill();
ctx.stroke();

function rotateSun() {

  console.log("TICK");
  console.log(ctx);


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(...coords);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 180 * 20)
  ctx.fillStyle = fillColor;
  // ctx.fillRect(...coords);
  //rotates sqaure
  // ctx.fillRect(-175, -175, 350, 350);
  ctx.beginPath();
  ctx.arc(0, 0, 25, 0, 2 * Math.PI);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.stroke();

  //draw triangle 
  ctx.beginPath();
  canvas_arrow(ctx, 30, 200, 35, 0);
  ctx.stroke();


  //save canvas back to origin position
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  ctx.save();
  ctx.restore();
  // window.requestAnimationFrame(rotateSun);
}

function canvas_arrow(ctx, fromx, fromy, tox, toy) {
  var headlen = 10; // length of head in pixels
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  
  // context.moveTo(fromx, fromy);
  //tail of arrow change 35 based off radius of curcle
  ctx.arc(0, 0, 35, 0, Math.PI);
  ctx.moveTo(tox, toy);
  //arrows for arrow
  ctx.lineTo(tox, toy);
  ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}
// const rotateSun = () => {
//   console.log("TICK");
//   console.log(ctx);
//   ctx.clearRect(...coords);
//   // ctx.save();
//   ctx.rotate((Math.pi / 180) * 25)
//   ctx.fillRect(...coords);
//   // ctx.restore();
  // window.requestAnimationFrame(rotateSun);
// }

function init() 
{
  // window.requestAnimationFrame(rotateSun);
  setInterval(rotateSun, 500);
}

init();

// console.log(canvas);
// console.log(center);
//     }
// createCanvas() {
//   document.body.append(this.canvas);
// }
// drawSquare() {
//   this.ctx.fillStyle = this.fillColor;
//   this.ctx.fillRect(...this.coords);
// }
// updateSquare() {
//   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
// }

// clearSquare() {
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// }

// reverseAnimation() {
//   this.animationDir *= -1;
// }
// clearCanvas() {
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// }
// setColor(color) {
//   this.fillColor = color;
//   document.body.style.backgroundColor = color;
//   document.body.style.filter = `brightness(150%)`;
// }
  // }

  // export default canvasExample;
