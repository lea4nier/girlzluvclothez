class Break extends Phaser.Scene {
    constructor() {
        super('Break');
    }

    preload() {
        // Load background image
        this.load.image('background', 'assets/images/background.png');

        // Load Barbie sprite
        this.load.image('barbie', 'assets/images/barbie.png');

        // Load glitch images (ig_2.PNG to ig_15.PNG)
        for (let i = 2; i <= 15; i++) {
            this.load.image(`ig_${i}`, `assets/images/ig_${i}.png`);
        }
    }

    create() {
        // Background
        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background')
            .setOrigin(0, 0);

        // Create Barbie sprite and apply glitch effect
        this.barbie = this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'barbie')
            .setOrigin(0.5)
            .setScale(0.5);

        // Apply a glitch effect to Barbie sprite using tweens
        this.time.addEvent({
            delay: 100,
            callback: this.createGlitchEffect.bind(this),
            loop: true
        });

        // Create glitchy images (ig_2 to ig_15) with an animation
        this.glitchImages = [];
        for (let i = 2; i <= 15; i++) {
            const xPos = Phaser.Math.Between(100, this.scale.width - 100); // Random x position
            const yPos = Phaser.Math.Between(100, this.scale.height - 100); // Random y position
            const igImage = this.add.sprite(xPos, yPos, `ig_${i}`).setOrigin(0.5).setScale(0.5);
            igImage.alpha = 0; // Start invisible for fade-in effect
            this.glitchImages.push(igImage);

            // Animate each image with glitch effect and fade-in
            this.tweens.add({
                targets: igImage,
                alpha: 1,
                duration: 1500,
                ease: 'Sine.easeInOut',
                onStart: () => this.applyGlitchEffect(igImage) // Apply glitch effect on start
            });
        }

        // Add glitchy background effect
        this.time.addEvent({
            delay: 50,
            callback: this.addGlitchBackgroundEffect.bind(this),
            loop: true
        });
        // Add a timer event to transition to the 'Shop' scene after 45 seconds (45000ms)
        this.time.delayedCall(25000, () => {
            this.scene.start('Shop');
        });
    }

    // Function to create a glitch effect on the Barbie sprite
    createGlitchEffect() {
        const randomOffsetX = Phaser.Math.Between(-5, 5);
        const randomOffsetY = Phaser.Math.Between(-5, 5);
        const randomAlpha = Phaser.Math.FloatBetween(0.8, 1);

        this.barbie.setX(this.scale.width / 2 + randomOffsetX);
        this.barbie.setY(this.scale.height / 2 + randomOffsetY);
        this.barbie.setAlpha(randomAlpha);
    }

    // Function to apply a glitch effect to a specific image
    applyGlitchEffect(image) {
        const randomOffsetX = Phaser.Math.Between(-5, 5);
        const randomOffsetY = Phaser.Math.Between(-5, 5);
        const randomAlpha = Phaser.Math.FloatBetween(0.8, 1);

        // Apply glitchy motion
        this.tweens.add({
            targets: image,
            x: image.x + randomOffsetX,
            y: image.y + randomOffsetY,
            alpha: randomAlpha,
            duration: Phaser.Math.Between(50, 200),
            repeat: -1,
            yoyo: true
        });

        // Occasionally center the image for visibility
        const centerChance = Phaser.Math.Between(1, 10);
        if (centerChance === 1) {
            this.tweens.add({
                targets: image,
                x: this.scale.width / 2,
                y: this.scale.height / 2,
                duration: 500,
                onComplete: () => {
                    // After it centers, apply a random glitch again
                    this.applyGlitchEffect(image);
                }
            });
        }
    }

    // Function to add a glitchy effect to the background
    addGlitchBackgroundEffect() {
        const randomOffsetX = Phaser.Math.Between(-2, 2);
        const randomOffsetY = Phaser.Math.Between(-2, 2);

        this.background.tilePositionX += randomOffsetX;
        this.background.tilePositionY += randomOffsetY;
    }



    update() {
        // Update logic here, if needed
    }
}
