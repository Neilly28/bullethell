// console.log("hello from skethch");

let bullets = [];
let enemies = [];
let bosses = [];
let lasers = [];
let score = 0;

function setup() {
  createCanvas(400, 400);

  //   spawn enemies
  for (let i = 0; i < 20; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }

  // spawn boss
  for (let i = 0; i < 1; i++) {
    let boss = {
      x: width / 2,
      y: -1000,
    };
    bosses.push(boss);
    console.log("boss imminent", "boss spawn", boss.y);
  }

  // spawn boss laser
  for (let i = 0; i < 10; i++) {
    let laser = {
      x: random(190, 210),
      y: 100,
    };
    lasers.push(laser);
  }
}

function draw() {
  background(0);
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
    enemy.y += 1;
    rect(enemy.x, enemy.y, 10);
    // if (enemy.y > height) {
    //   text("You Died", width / 2, height / 2);
    //   noLoop();
    // }
  }

  // update and draw boss
  for (let boss of bosses) {
    if (boss.y < height / 4) {
      boss.y += 1;
      rect(boss.x, boss.y, 50);
    } else {
      boss.y = 100;
      boss.x += 0.2;
      rect(boss.x, boss.y, 50);
      //   update and draw lasers
      for (let laser of lasers) {
        laser.y += 5;
        circle(laser.x, laser.y, 10);
      }
    }
  }

  //   deal with collisions
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        // let newEnemy = {
        //   x: random(0, width),
        //   y: random(-800, 0),
        // };
        // enemies.push(newEnemy);
        score++;
        console.log(score);
      }
    }
  }

  text(score, 15, 25);
  fill("white");
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
