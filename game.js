var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87CEEB',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var player;

function preload() {
    this.load.image('player', 'assets/beaver.png');
}

function create() {
    player = this.add.sprite(400, 300, 'player').setScale(.10);

    this.input.on('pointerdown', function (pointer) {
        var distance = Phaser.Math.Distance.Between(player.x, player.y, pointer.x, pointer.y);

        var speed = 200;

        var duration = (distance / speed) * 1000; // Convert to milliseconds

        this.tweens.add({
            targets: player,
            x: pointer.x,
            y: pointer.y,
            duration: duration,
            ease: 'Linear'
        });
    }, this);
}

function update() {
}