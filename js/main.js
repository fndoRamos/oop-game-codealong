class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 20;
    this.height = 20;

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
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
    console.log(`new positionX.... ${this.positionX}`);
  }

  moveRigth() {
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
    console.log(`new positionX.... ${this.positionX}`);
  }

  moveUp() {
    this.positionY++;
    console.log(`new positionY.... ${this.positionY}`);

  }

  moveDown() {
    this.positionY--;
    console.log(`new positionY.... ${this.positionY}`);
  }
}

const player = new Player();

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
