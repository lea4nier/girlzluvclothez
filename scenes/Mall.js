class Mall extends Phaser.Scene {
    constructor() {
        super('Mall');
    }

    preload() {
        // Load background and crack images
        this.load.image('mallBackground', 'assets/images/mall.jpg');
        this.load.image('crack', 'assets/images/crack.png');
        // Load the four images you want to add next to each other
        this.load.image('image1', 'assets/images/hat.png');
        this.load.image('image2', 'assets/images/hairclip.png');
        this.load.image('image3', 'assets/images/dress.png');
        this.load.image('green', 'assets/images/green.png');
    }

    create() {
        // Background
        this.background = this.add.image(0, 0, 'mallBackground')
            .setOrigin(0, 0)
            .setDisplaySize(this.scale.width, this.scale.height);

        // Add crack images to the scene (top-right and bottom-left corners)
        this.add.image(this.scale.width - 50, 50, 'crack').setOrigin(0.5).setScale(0.1);
        this.add.image(50, this.scale.height - 50, 'crack').setOrigin(0.5).setScale(0.1);

        // Add the four images next to each other, centered with spacing
        const imageSpacing = 300; // Adjust the spacing between the images
        const centerX = this.scale.width / 2;

        this.image1 = this.add.image(centerX - imageSpacing, this.scale.height / 2, 'image1').setOrigin(0.5).setScale(0.5);
        this.image2 = this.add.image(centerX, this.scale.height / 2, 'image2').setOrigin(0.5).setScale(0.5);
        this.image3 = this.add.image(centerX + imageSpacing, this.scale.height / 2, 'image3').setOrigin(0.5).setScale(0.5);
        this.greenImage = this.add.image(centerX + imageSpacing * 2, this.scale.height / 2, 'green').setOrigin(0.5).setScale(0.5);

        // Create hitboxes for images 1-3
        this.image1.setInteractive();
        this.image2.setInteractive();
        this.image3.setInteractive();

        this.image1.on('pointerdown', () => {
            this.showPopupText("Sorry, you can't afford this item!");
        });
        this.image2.on('pointerdown', () => {
            this.showPopupText("Sorry, you can't afford this item!");
        });
        this.image3.on('pointerdown', () => {
            this.showPopupText("Sorry, you can't afford this item!");
        });

        // Make the green image interactive
        this.greenImage.setInteractive();
        this.greenImage.on('pointerdown', () => {
            this.showPurchaseText();
        });
    }

    showPopupText(message) {
        const popupText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, message, {
            font: "24px Arial",
            fill: "#ff0000",
            align: 'center'
        }).setOrigin(0.5);

        this.time.delayedCall(2000, () => {
            popupText.destroy();
        });
    }

    showPurchaseText() {
        // Display the neon green text
        const purchaseText = this.add.text(this.scale.width / 2, this.scale.height / 2 - 50, "Yes Queen! You can buy this product!", {
            font: "30px 'Crafty Girls'",
            fill: "#00ff00",
            stroke: "#000000",
            strokeThickness: 2,
            align: 'center'
        }).setOrigin(0.5);

        // Create the purchase text button below
        const purchaseButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, "Purchase", {
            font: "24px Arial",
            fill: "#ffffff",
            backgroundColor: "#00ff00",
            padding: { left: 10, right: 10, top: 5, bottom: 5 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        purchaseButton.on('pointerdown', () => {
            // Go to the Terms scene
            this.scene.start('Terms');
        });
    }
}
