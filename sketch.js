// console.log("hello from skethch");

let bullets = [];
let enemies = [];
let score = 0;

function setup() {
  createCanvas(400, 400);

  //   spawn enemies
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(51);
  rectMode(CENTER);

  //   draw the  player
  circle(mouseX, height - 50, 25);

  //   update and draw the bullets
  for (let bullet of bullets) {
    bullet.y -= 10;
    circle(bullet.x, bullet.y, 10);
  }

  //   update and draw enemies
  for (let enemy of enemies) {
    enemy.y += 2;
    rect(enemy.x, enemy.y, 10);
    if (enemy.y > height) {
      text("You Died", width / 2, height / 2);
      noLoop();
    }
  }

  //   deal with collisions
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newEnemy = {
          x: random(0, width),
          y: random(-800, 0),
        };
        enemies.push(newEnemy);
        score++;
        console.log(score);
      }
    }
  }

  text(score, 15, 25);
}

function mousePressed() {
  //   spawn a bullet every clicked
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}

// what else?
// prettify?
// health?
// power up?
// multidirectional vampires survivors?
// boss battle?
// increase speed?
// increase enemy number?
// timer?
// reset button new game
// high score?
