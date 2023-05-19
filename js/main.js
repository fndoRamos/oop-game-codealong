class Player {
  constructor() {
    this.width = 6;
    this.height = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;

    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");

    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 1;
      this.domElement.style.left = this.positionX + "vw";
    }
    console.log(`new positionX.... ${this.positionX}`);
  }

  moveRigth() {
    if (this.positionX < 100 - this.width) {
      this.positionX += 1;
      this.domElement.style.left = this.positionX + "vw";
    }
    console.log(`new positionX.... ${this.positionX}`);
  }

  moveUp() {
    if (this.positionY < 90 - this.height) {
      this.positionY += 2;
      this.domElement.style.bottom = this.positionY + "vh";
    }
    console.log(`new positionY.... ${this.positionY}`);
  }

  moveDown() {
    if (this.positionY > 0) {
      this.positionY -= 2;
      this.domElement.style.bottom = this.positionY + "vh";
    }
    console.log(`new positionY.... ${this.positionY}`);
  }
}

class Obstacle {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = Math.floor(Math.random() * (100 - this.width));
    this.positionY = 85;

    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");

    this.domElement.className = "obstacle";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
    console.log(`new obstacle...`);
  }
}

const player = new Player();
const obstaclesArr = [];

//const obstacleOne = new Obstacle();

setInterval(() => {
  const newObstacle = new Obstacle();
  const score = document.querySelector("#points span");
  const scoreValue = Number(score.innerText);
  score.innerText = scoreValue + 100;
  obstaclesArr.push(newObstacle);
}, 1000);

setInterval(() => {
  obstaclesArr.forEach((obstacleInstance) => {
    obstacleInstance.moveDown();

    if (
      obstacleInstance.positionX < player.positionX + player.width &&
      obstacleInstance.positionX + obstacleInstance.width > player.positionX &&
      obstacleInstance.positionY < player.positionY + player.height &&
      obstacleInstance.height + obstacleInstance.positionY > player.positionY
    ) {
      console.log("game over my fren");
      //location.href = "./gameover.html";
    }
    if (  obstacleInstance.positionY < 0 - obstacleInstance.height) {
      obstacleInstance.domElement.remove()
      obstaclesArr.shift();
    }
  });
}, 60);

// attach event listeners...
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    player.moveLeft();
  } else if (e.code === "ArrowRight") {
    player.moveRigth();
  } else if (e.code === "ArrowUp") {
    player.moveUp();
  } else if (e.code === "ArrowDown") {
    player.moveDown();
  }
});
