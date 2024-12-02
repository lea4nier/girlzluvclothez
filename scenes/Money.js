class Money extends Phaser.Scene {
    constructor() {
        super('Money');
    }

    preload() {
        this.load.image('roomBackground', 'assets/images/room.jpg');
        this.load.image('character', 'assets/images/barbie.png');
        this.load.image('phone', 'assets/images/phone.png');
        this.load.image('nextButton', 'assets/images/play.png');
    }

    create() {
        // Background
        this.background = this.add.image(0, 0, 'roomBackground')
            .setOrigin(0, 0)
            .setDisplaySize(this.scale.width, this.scale.height);

        // Character
        const character = this.add.sprite(this.scale.width / 1.5, this.scale.height + 100, 'character');
        character.setScale(0.7);

        this.tweens.add({
            targets: character,
            y: this.scale.height / 2,
            duration: 2000,
            ease: 'Bounce.easeOut'
        });

        // Phone
        const phone = this.add.sprite(this.scale.width / 3, this.scale.height + 100, 'phone');
        phone.setScale(0.5);

        this.tweens.add({
            targets: phone,
            y: this.scale.height / 2,
            duration: 2000,
            ease: 'Bounce.easeOut',
            onComplete: () => {
                this.tweens.add({
                    targets: phone,
                    angle: { from: -3, to: 3 },
                    duration: 300,
                    ease: 'Sine.easeInOut',
                    repeat: -1,
                    yoyo: true
                });
            }
        });

        // Add speech bubble text centered on the phone and set word wrapping
        const maxTextWidth = phone.displayWidth * 0.4;
        const text = this.add.text(phone.x, phone.y, "Your look could be more on trend! Try harder next time!", {
            font: "20px 'Crafty Girls'",
            fill: "#ff00d4",
            wordWrap: { width: maxTextWidth, useAdvancedWrap: true },
            align: 'center'
        }).setOrigin(0.5, 3); // Position text above the phone

        // Adjust text scaling if needed to ensure it fits
        if (text.width > maxTextWidth) {
            text.setScale(maxTextWidth / text.width);
        }

        // Ensure the text appears above other elements
        this.children.bringToTop(text);

        // Add a tween to ensure proper positioning with the phone animation
        this.tweens.add({
            targets: text,
            y: phone.y - phone.displayHeight * 0.6, // Position text above the phone
            duration: 2000,
            ease: 'Bounce.easeOut',
        });

        // Create a hidden pop-up text
        const popUpText = this.add.text(this.scale.width / 2, this.scale.height / 2,
            "No matter how hard you try, you will never be good enough.",
            {
                font: "20px 'Crafty Girls'",
                fill: "#ffffff",
                backgroundColor: "#00000088",
                padding: { left: 10, right: 10, top: 5, bottom: 5 },
                wordWrap: { width: this.scale.width * 0.6 },
                align: 'center'
            }
        ).setOrigin(0.5).setVisible(false);

        // Phone interaction for the pop-up
        phone.setInteractive();
        phone.on('pointerdown', () => {
            popUpText.setVisible(true);

            // Optional: Hide the pop-up after a delay
            this.time.delayedCall(3000, () => {
                popUpText.setVisible(false);
            });
        });

        // Add a "Next" button at the bottom center
        const nextButton = this.add.sprite(this.scale.width / 2, this.scale.height - 50, 'nextButton')
            .setInteractive()
            .setScale(0.09);

        nextButton.on('pointerdown', () => {
            this.scene.start('Win');
        });

    }
}
