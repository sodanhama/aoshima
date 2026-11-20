const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
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
    pixelArt: true
}

const game = new Phaser.Game(config);

let neko
let score = 0

function preload() {
    this.load.image('neko', 'assets/neko.png');
}

function create() {
    const width = this.scale.width;
    const height = this.scale.height;
    neko = this.add.sprite(width / 2, height / 2, 'neko');

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        neko.x -= 5;
    }
    if (cursors.right.isDown) {
        neko.x += 5;
    }
    if (cursors.up.isDown) {
        neko.y -= 5;
    }
    if (cursors.down.isDown) {
        neko.y += 5;
    }

}