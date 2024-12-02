class Win extends Phaser.Scene {
    constructor() {
        super('Win');
    }

    preload() {
        this.load.image('background', 'assets/images/background.gif'); // Animated background
        this.load.image('money', 'assets/images/money.png'); // Money image
        this.load.image('nextButton', 'assets/images/play.png'); // Button image
    }

    create() {
        // Animated background
        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background')
            .setOrigin(0, 0);

        // Money image in the center
        const moneyImage = this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'money')
            .setOrigin(0.5)
            .setScale(0.5);

        // Text above the money image
        const topText = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - moneyImage.displayHeight / 2 - 50,
            "You still win something!",
            {
                font: "40px 'Crafty Girls'",
                fill: "#ffffff",
                align: 'center'
            }
        ).setOrigin(0.5);

        // Text below the money image
        const bottomText = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + moneyImage.displayHeight / 2 + 20,
            "Congrats! You won 100 beauty bucks!",
            {
                font: "40px 'Crafty Girls'",
                fill: "#ffffff",
                align: 'center'
            }
        ).setOrigin(0.5);

        // "Collect" button
        const collectButton = this.add.sprite(
            this.scale.width / 2,
            this.scale.height / 2 + moneyImage.displayHeight / 2 + 80,
            'nextButton'
        ).setInteractive().setScale(0.09);

        // Text under the "Collect" button
        const buttonText = this.add.text(
            this.scale.width / 2,
            collectButton.y + 60,
            "Collect",
            {
                font: "20px 'Crafty Girls'",
                fill: "#ffffff",
                align: 'center'
            }
        ).setOrigin(0.5);

        // Collect button functionality
        collectButton.on('pointerdown', () => {
            console.log("Beauty bucks collected!");
            // Proceed to the next action or scene
            this.scene.start('Collect'); // Replace 'NextScene' with the actual next scene name
        });
    }

    update() {
        // Scrolling background effect
        this.background.tilePositionY -= 0.5;
        this.background.tilePositionX -= 0.5;
    }
}
