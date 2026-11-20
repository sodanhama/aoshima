const config = {
    type: Phaser.AUTO,
    width: 2400,
    height: 1350,
    backgroundColor: '#DA9F93',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
        gravity: { x: 0, y: 0 },
        debug: false
    }
}
}

const game = new Phaser.Game(config);

let score = 0
let shift = 0
let speed = 2

function preload() {
    this.load.image('neko', 'assets/neko.png');
}

function create() {
    const width = this.scale.width;
    const height = this.scale.height;

    ground = this.add.rectangle(width / 4, height / 4, width, height, 0x8e311e);
    neko = this.add.sprite(width / 2, height / 2, 'neko');

    this.wasd = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    shift: Phaser.Input.Keyboard.KeyCodes.SHIFT
  });
}

function update() {
    if (this.wasd.shift.isDown) {
        shift = 3;
    }
    if (this.wasd.up.isDown && this.wasd.left.isDown) {
        neko.x -= speed/2 + shift;
        neko.y -= speed/2 + shift;
    }
    else if (this.wasd.up.isDown && this.wasd.right.isDown) {
        neko.x += speed/2 + shift;
        neko.y -= speed/2 + shift;
    }
    else if (this.wasd.down.isDown && this.wasd.left.isDown) {
        neko.x -= speed/2 + shift;
        neko.y += speed/2 + shift;
    }
    else if (this.wasd.down.isDown && this.wasd.right.isDown) {
        neko.x += speed/2 + shift;
        neko.y += speed/2 + shift;
    }
    if (this.wasd.left.isDown) {
        neko.x -= speed + shift;
    }
    else if (this.wasd.right.isDown) {
        neko.x += speed + shift;
    }
    else if (this.wasd.up.isDown) {
        neko.y -= speed + shift;
    }
    else if (this.wasd.down.isDown) {
        neko.y += speed + shift;
    }
    shift = 0;
}