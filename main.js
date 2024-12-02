const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [
        MainScene,
        Room,
        Money
    ], // Include your MainScene here
};

const game = new Phaser.Game(config);
