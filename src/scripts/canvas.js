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

// const fillColor = `yellow`;
// const canvas = document.getElementById("main-canvas");
// // canvas.width = window.innerWidth * 0.75;
// canvas.width = window.innerWidth;
// canvas.height = canvas.width / 2;
// const center = [canvas.width / 2, canvas.height / 2]
// const ctx = canvas.getContext("2d");
// const coords = [...center, 350, 350];

// // ctx.fillStyle = fillColor;
// // ctx.fillRect(...coords);
// ctx.beginPath();
// ctx.arc(...center, 25, 0, 2 * Math.PI);
// ctx.fillStyle = fillColor;
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// // ctx.arc(150, -150, 5, 0, 2 * Math.PI);
// ctx.arc(20, -20, 5, 0, 2 * Math.PI);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(...center, 90, 0, 2 * Math.PI);
// // ctx.fillStyle = fillColor;
// // ctx.fill();
// ctx.stroke();

// function rotateSun() {

//   console.log("TICK");
//   console.log(ctx);

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // ctx.fillRect(...coords);
//   ctx.save();
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   ctx.rotate(-Math.PI / 180 * 20)
//   ctx.fillStyle = fillColor;
//   // ctx.fillRect(...coords);
//   //rotates sqaure
//   // ctx.fillRect(-175, -175, 350, 350);
//   ctx.beginPath();
//   ctx.arc(0, 0, 25, 0, 2 * Math.PI);
//   ctx.fillStyle = fillColor;
//   ctx.fill();
//   ctx.stroke();

//   //draw triangle 
//   ctx.beginPath();
//   canvas_arrow(ctx, 30, 200, 35, 0);
//   ctx.stroke();
//   // save();
//   //save canvas back to origin position
//   ctx.translate(-canvas.width / 2, -canvas.height / 2);
//   // ctx.rotate(Math.PI / 180 * 20);
//   ctx.save();

//   // ctx.restore();
//   ctx.translate(1000, 1000);
//   ctx.rotate(-Math.PI / 180 * 4.1);
//   ctx.translate(50, 0);
//   // ctx.save();
//   // ctx.beginPath();
//   // ctx.lineTo(50,0);
//   // ctx.stroke();
//   // ctx.restore();
//   mercury();
//   ctx.save();
//   // rotateMercury();
//   ctx.restore();
//   ctx.restore();
//   // ctx.restore();
//   // window.requestAnimationFrame(rotateSun);
// }

// function canvas_arrow(ctx, fromx, fromy, tox, toy) {
//   var headlen = 10; // length of head in pixels
//   var dx = tox - fromx;
//   var dy = toy - fromy;
//   var angle = Math.atan2(dy, dx);

//   // context.moveTo(fromx, fromy);
//   //tail of arrow change 35 based off radius of curcle
//   ctx.arc(0, 0, 35, 0, Math.PI);
//   ctx.moveTo(tox, toy);
//   //arrows for arrow
//   ctx.lineTo(tox, toy);
//   ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
//   ctx.moveTo(tox, toy);
//   ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
// }

// function mercury() {
//   // ctx.save();

//   // ctx.translate(50, 0);
//   ctx.beginPath();
//   // ctx.arc(150, -150, 5, 0, 2 * Math.PI);
//   ctx.arc(20, -20, 25, 0, 2 * Math.PI);
//   ctx.fillStyle = "red";
//   ctx.fill();
//   ctx.stroke();

//   // save();
//   //save canvas back to origin position

//   // ctx.rotate(-Math.PI / 180 * 20);
// }

// function rotateMercury() {

//   ctx.rotate(-Math.PI / 180 * 90)
//   // ctx.translate(0, 28.5)`
//   ctx.beginPath();
//   canvas_arrow(ctx, 30, 200, 35, 0);
//   ctx.stroke();
//   ctx.translate(-canvas.width / 2, -canvas.height / 2);
//   // ctx.save();

// }

// function draw() {
//   mercuryOrbitPattern();
// }

// function init() {
//   // window.requestAnimationFrame(rotateSun);
//   // draw();
//   // setInterval(rotateMercury, 500);
//   setInterval(rotateSun, 1000);
// }

// init();

// function getJulianDate(Year, Month, Day) {
//   let inputDate = new Date(Year, Month, Math.floor(day));
//   let switchDate = new Date("1582", "10", "15");

//   let isGregorianDate = inputDate >= switchDate;

//   if (Year < 0) {
//     Year++;
//   }

//   if (Month === 1 || Month === 2) {
//     Year = Year - 1;
//     Month = Month + 12;
//   }

//   let a = Math.floor(Year / 100);
//   let b = 2 - A + Math.floor(A / 4);

//   if (!isGregorianDate) {
//     b = 0;
//   }

//   return ((Math.floor(362.25 * Year)) + (Math.floor(30.6001 * (Month + 1))) + Day + 1720994.5 + b);
// }

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


const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
// const something = document.getElementsByClassName('planet');
// console.log(something)
console.log(canvas);
// canvas.width = window.innerWidth;
canvas.width = 1050;
// canvas.height = innerHeight;
canvas.height = 850;

// addEventListener('resize', () => {
//   cavnas.width = innerWidth;
//   cavnas.height = innerHeight;
// });

function isIntersect(point, planet) {
  console.log(Math.sqrt((point.x-planet.x) ** 2 + (point.y - planet.y) ** 2))
  console.log(planet.radius);
  return Math.sqrt((point.x-planet.x) ** 2 - (point.y - planet.y) ** 2) < planet.radius;
}

function isClicked(pointer, planet) {
  return (pointer.y > planet.y && pointer.y < planet.y + planet.radius && pointer.x > planet.x && pointer.x < planet.x + planet.radius)
}


class Planet {
  constructor(planetId, x, y, radius, color, velocity, orbitRadius) {
    this.planetId = planetId
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.orbitRadius = orbitRadius;

    this.startPos = {
      x,
      y
    }
    this.radian = 0;
  }

  draw() {

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.startPos.x, this.startPos.y, this.orbitRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgb(255, 255, 255, 0.35)';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    // ctx.stroke();
  }

  update() {
    
    this.draw();
    
    this.radian += this.velocity;
    
    this.x = this.startPos.x + Math.cos(this.radian) * this.orbitRadius;
    this.y = this.startPos.y + Math.sin(this.radian) * this.orbitRadius;
    
    // console.log(this.x);
    // console.log(this.y);
    // this.x += this.velocity;
    // this.y += this.velocity;
  }
}

const getPlanets = (planetId, radius, velocity, orbitRadius, color) => 
  new Planet(planetId, canvas.width /2, canvas.height /2, radius, color, velocity / 1000, orbitRadius);


let planets;
function init() {
  planets = []

  // planets.push(new Planet(canvas.width / 2, canvas.height / 2, 25, 'yellow', 0, 0));
  // planets.push(new Planet(canvas.width / 2, canvas.height / 2, 10, 'red', 0.005, 65));
  // planets.push(new Planet(canvas.width / 2, canvas.height / 2, 15, 'red', 0.005, 65));
  planets.push(getPlanets(0, 15, 0, 0, 'yellow'));
  planets.push(getPlanets(1, 5, 8, 45, "red"));
  planets.push(getPlanets(2, 10, 5, 75, "orange"));
  planets.push(getPlanets(3, 15, 4, 110, "blue"));
  planets.push(getPlanets(4, 20, 3.5, 155, "red"));
  planets.push(getPlanets(5, 25, 3, 205, "orange"));
  planets.push(getPlanets(6, 20, 2.25, 255, "yellow"));
  planets.push(getPlanets(7, 15, 2, 305, "blue"));
  planets.push(getPlanets(8,25, 1.5, 355, "purple"));
  planets.push(getPlanets(9, 7, 1, 405, "gray"));

  // let planet1 = planets.filter(planet => {
  //   return planet.planetId === 1;
  // })
  
  // for (let i = 0; i < 3; i++) {
  // }

}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  planets.forEach(planet => {
    planet.update();
  })
}


// console.log(planets);

init();
animate();

canvas.addEventListener('click', (e) => {
  const mousePos = {
    // x: e.clientX,
    // y: e.clientY 
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop 
  };

  console.log("mouse x", mousePos.x);
  console.log("mouse y", mousePos.y);
 

  planets.forEach( planet => {
    console.log("planet x", planet.x);
    console.log("planet y", planet.y);
    console.log("isIntersect", isIntersect(mousePos, planet));
    if(isIntersect(mousePos, planet)) {
     
      console.log("PLANET CLICK", planet.planetId);
    }
  });
  // planets.forEach( planet => {
  //   console.log("planet x", planet.x);
  //   console.log("planet y", planet.y);
  //   console.log("isClicked", isClicked(mousePos, planet));
  //   if(isClicked(mousePos, planet)) {
     
  //     console.log("PLANET CLICK", planet.planetId);
  //   }
  // });
})
