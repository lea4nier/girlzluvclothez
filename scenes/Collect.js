class Collect extends Phaser.Scene {
    constructor() {
        super('Collect');
    }

    preload() {
        this.load.image('background', 'assets/images/background.gif'); // Animated background
        this.load.image('falling', 'assets/images/bills_falling.png'); // Money image
        this.load.image('nextButton', 'assets/images/play.png'); // Button image
    }

    create() {
        // Animated background
        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background')
            .setOrigin(0, 0);

        // Money image in the center
        const moneyImage = this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'falling')
            .setOrigin(0.5)
            .setScale(0.5);

        // Overlay text on top of the money image
        const overlayText = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - moneyImage.displayHeight / 2,
            "But first a quick commercial break",
            {
                font: "28px Arial",
                fill: "#ffffff",
                align: 'center',
                backgroundColor: "#00000088", // Semi-transparent background
                padding: { left: 10, right: 10, top: 5, bottom: 5 }
            }
        ).setOrigin(0.5);

        // Button at the bottom to go to the Ad scene
        const adButton = this.add.sprite(
            this.scale.width / 2,
            this.scale.height - 50,
            'nextButton'
        ).setInteractive().setScale(0.09);

        // Button text
        const buttonText = this.add.text(
            adButton.x,
            adButton.y + 40,
            "Watch Ad",
            {
                font: "20px Arial",
                fill: "#ffffff",
                align: 'center'
            }
        ).setOrigin(0.5);

        // Ad button functionality
        adButton.on('pointerdown', () => {
            this.scene.start('Ad'); // Transition to the 'Ad' scene
        });
    }

    update() {
        // Scrolling background effect
        this.background.tilePositionY -= 0.5;
        this.background.tilePositionX -= 0.5;
    }
}
