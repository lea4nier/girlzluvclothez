class Ad extends Phaser.Scene {
    constructor() {
        super('Ad');
    }

    preload() {
        // Load .png images
        const pngImages = [
            'ad_botox', 'ad_eyelid', 'ad_ozempic', 'ad_popcorn', 'ad_summer', 'ad_tummy'
        ];
        pngImages.forEach(image => {
            this.load.image(image, `assets/images/${image}.png`);
        });

        // Load .jpg images
        const jpgImages = [
            'ad2', 'ad3', 'ad4', 'ad5', 'ad7', 'ad8', 'ad10', 'ad11',
            'ad13', 'ad14', 'ad15', 'ad17', 'ad20', 'ad21', 'ad23', 'ad24'
        ];
        jpgImages.forEach(image => {
            this.load.image(image, `assets/images/${image}.jpg`);
        });

        this.load.image('ad_button', 'assets/images/play.png');
    }

    create() {
        // Background
        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background')
            .setOrigin(0, 0);

        // Array of ad image keys
        const pngImages = [
            'ad_botox', 'ad_eyelid', 'ad_ozempic', 'ad_popcorn', 'ad_summer', 'ad_tummy'
        ];
        const jpgImages = [
            'ad2', 'ad3', 'ad4', 'ad5', 'ad7', 'ad8', 'ad10', 'ad11',
            'ad13', 'ad14', 'ad15', 'ad17', 'ad20', 'ad21', 'ad23', 'ad24'
        ];

        // Combine both .png and .jpg arrays
        const allAdImages = [...pngImages, ...jpgImages];

        // Shuffle the array for random display order
        Phaser.Utils.Array.Shuffle(allAdImages);

        // Pop up images over time
        allAdImages.forEach((image, index) => {
            const xPos = Phaser.Math.Between(100, this.scale.width - 100); // Random x position
            const yPos = Phaser.Math.Between(100, this.scale.height - 100); // Random y position
            const delay = index * 1000; // Incremental delay to show images over time

            // Display each image after a delay
            this.time.delayedCall(delay, () => {
                const adImage = this.add.sprite(xPos, yPos, image).setOrigin(0.5).setScale(0.5);
                adImage.alpha = 0; // Start invisible for fade-in effect

                // Fade in the image gradually
                this.tweens.add({
                    targets: adImage,
                    alpha: 1,
                    duration: 1500, // Duration of fade-in
                    ease: 'Sine.easeInOut'
                });
            });
        });

        // Delay adding the button until all animations are complete
        const buttonDelay = allAdImages.length * 1000 + 1500; // Delay after all ads and their fade-in animations
        this.time.delayedCall(buttonDelay, () => {
            const adButton = this.add.sprite(this.scale.width / 2, this.scale.height - 50, 'ad_button')
                .setInteractive()
                .setScale(0.09)
                .setDepth(1); // Ensure the button is above all images

            // Button functionality to go to the 'Break' scene
            adButton.on('pointerdown', () => {
                this.scene.start('Break'); // Transition to the 'Break' scene
            });
        });

    }

    update() {
        // Scrolling background effect
        this.background.tilePositionY -= 0.5;
        this.background.tilePositionX -= 0.5;
    }
}
