class Room extends Phaser.Scene {
    constructor() {
        super('Room');
    }

    preload() {
        this.load.image('roomBackground', 'assets/images/room.jpg');
        this.load.image('character', 'assets/images/barbie.png');
        this.load.image('phone', 'assets/images/phone.png');
        this.load.image('nextButton', 'assets/images/play.png'); // Load button image
        // this.load.image('bug', 'assets/images/bug.png'); // Load the bug image
    }

    create() {
        // Create the static background
        this.background = this.add.image(0, 0, 'roomBackground')
            .setOrigin(0, 0)
            .setDisplaySize(this.scale.width, this.scale.height); // Resize to fit the screen

        // Add the character
        const character = this.add.sprite(this.scale.width / 1.5, this.scale.height + 100, 'character');
        character.setScale(0.7);

        this.tweens.add({
            targets: character,
            y: this.scale.height / 2,
            duration: 2000,
            ease: 'Bounce.easeOut'
        });

        // Add the phone
        const phone = this.add.sprite(this.scale.width / 3, this.scale.height + 100, 'phone');
        phone.setScale(0.5);

        // After the phone's animation is complete, add a "shake" effect
        this.tweens.add({
            targets: phone,
            y: this.scale.height / 2,
            duration: 2000,
            ease: 'Bounce.easeOut',
            onComplete: () => {
                // Start the shaking effect after the phone is in place
                this.tweens.add({
                    targets: phone,
                    angle: { from: -3, to: 3 }, // Rotate slightly back and forth
                    duration: 300, // Duration for one shake cycle
                    ease: 'Sine.easeInOut',
                    repeat: -1, // Infinite repeat
                    yoyo: true, // Reverse direction for a "back and forth" effect
                });
            }
        });

        // Make the phone interactive
        phone.setInteractive();
        phone.on('pointerdown', () => {
            showModal("is it still fun and casual? because this feels too serious now.");
        });

        // Set a maximum width for the text to fit within the phone
        const maxTextWidth = phone.displayWidth * 0.4;

        // Add speech bubble text centered on the phone and set word wrapping
        const text = this.add.text(phone.x, phone.y, "Welcome to your room! Let's get you ready for the fashion competition!", {
            font: "20px 'Crafty Girls'",
            fill: "#ff00d4",
            wordWrap: { width: maxTextWidth, useAdvancedWrap: true },
            align: 'center'
        }).setOrigin(0.5, 0.3); // Position text above the phone

        // Adjust text scaling if needed to ensure it fits
        if (text.width > maxTextWidth) {
            text.setScale(maxTextWidth / text.width);
        }

        // Animate the text to follow the phone
        this.tweens.add({
            targets: text,
            y: this.scale.height / 2 - phone.displayHeight * 0.2, // Adjust Y position to fit above the phone
            duration: 2000,
            ease: 'Bounce.easeOut'
        });

        // Add a button at the bottom center to go to the next scene
        // Add a button at the bottom center to go to the next webpage
        const nextButton = this.add.sprite(this.scale.width / 2, this.scale.height - 50, 'nextButton')
            .setInteractive()
            .setScale(0.09); // Adjust size if needed

        // Redirect to index.html on click
        nextButton.on('pointerdown', () => {
            window.location.href = 'index.html'; // Redirect to the webpage
        });



    }

    // // Trigger glitch effect after 10 seconds
    // this.time.addEvent({
    //     delay: 7000, // 10 seconds
    //     callback: this.startGlitchEffect,
    //     callbackScope: this
    // });


    // startGlitchEffect() {
    //     // Create a graphics object for glitches
    //     const glitchGraphics = this.add.graphics();
    //     glitchGraphics.setAlpha(0.8); // Set a slightly transparent alpha for glitches

    //     // Cover the screen with glitches
    //     const numGlitches = 50; // Number of glitches to create
    //     for (let i = 0; i < numGlitches; i++) {
    //         // Random size and position for each glitch rectangle
    //         const width = Phaser.Math.Between(10, 200); // Width of the glitch
    //         const height = Phaser.Math.Between(10, 100); // Height of the glitch
    //         const x = Phaser.Math.Between(0, this.scale.width - width);
    //         const y = Phaser.Math.Between(0, this.scale.height - height);

    //         // Set random color for the glitch
    //         const color = Phaser.Display.Color.RandomRGB();

    //         // Draw the glitch rectangle
    //         glitchGraphics.fillStyle(color.color, 1);
    //         glitchGraphics.fillRect(x, y, width, height);
    //     }

    //     // After glitches, start displaying bugs
    //     this.time.addEvent({
    //         delay: 1000, // Wait a second after the glitches
    //         callback: this.showBugs,
    //         callbackScope: this
    //     });
    // }

    // showBugs() {
    //     const totalBugs = 40; // Total number of bugs to display

    //     for (let i = 0; i < totalBugs; i++) {
    //         // Generate random positions for each bug
    //         const x = Phaser.Math.Between(0, this.scale.width - 316); // Random x position
    //         const y = Phaser.Math.Between(0, this.scale.height - 300); // Random y position

    //         // Create and position the bug image
    //         const bug = this.add.image(x + 158, y + 150, 'bug'); // Center the bug image
    //         bug.setOrigin(0.5, 0.5);
    //         bug.setScale(0.5); // Adjust scale if needed

    //         // Add a pop-up effect
    //         this.tweens.add({
    //             targets: bug,
    //             scaleX: 1,
    //             scaleY: 1,
    //             duration: 300,
    //             ease: 'Back.easeOut'
    //         });
    //     }

    // Set a timer to switch to index.html 5 seconds after the bugs appear
    //     this.time.delayedCall(5000, () => {
    //         window.location.href = 'index.html'; // Redirect to index.html
    //     });
    // }


    // update() {
    //     // No background animation needed for a static image
    // }
}


// Ensure `Room` is available globally
window.Room = Room;
