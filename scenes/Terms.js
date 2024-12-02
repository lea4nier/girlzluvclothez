class Terms extends Phaser.Scene {
    constructor() {
        super('Terms');
    }

    preload() {
        // Load the green image
        this.load.image('green', 'assets/images/green.png');
    }

    create() {
        // Display the green image
        this.add.image(this.scale.width / 2, this.scale.height / 4, 'green').setOrigin(0.5).setScale(0.5);

        // Create a long list of terms and conditions (just a big chunk of text)
        const termsText = `Welcome to our product! We are so glad you are interested in purchasing this magical item. Before proceeding, please review these terms and conditions:

1. This is a trial product. It will bring you all the money you want, but only for a limited time.
2. With great beauty comes great responsibility. This product will make you the most attractive person in the room, but it will also destroy your health.
3. Wearing this product will make you famous, but everyone will expect you to be perfect all the time. Are you ready for that?
4. You will achieve instant fame and fortune, but it comes at the cost of losing your anonymity. Say goodbye to privacy!
5. This product will change your life, but it might also change the lives of those around you. Be prepared for some awkward situations.
6. Be aware that wearing this product may cause uncontrollable laughter, extreme confidence, and occasional feelings of invincibility.
7. Side effects include: excessive confidence, unsolicited attention, the inability to stop smiling, and a sudden urge to become a social media influencer.
8. This product is so powerful that it may cause a spontaneous desire to purchase even more products, none of which you can afford. Use wisely.
9. If you start experiencing any weird side effects, please note that this is completely normal. Your life is about to change in ways you never thought possible.
10. By using this product, you agree to accept all risks, including but not limited to: fame, fortune, success, and potential existential crises.

And remember, once you start, there's no going back. This product is forever.

Proceed if you wish to continue and accept your fate as the most popular person alive.`;

        // Create the text object for the terms and conditions
        const termsDisplay = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, termsText, {
            font: "18px Arial",
            fill: "#ffffff",
            wordWrap: { width: this.scale.width - 40, useAdvancedWrap: true },
            align: 'center'
        }).setOrigin(0.5);

        // Add a "I Agree" button to continue
        const agreeButton = this.add.text(this.scale.width / 2, this.scale.height - 100, "I Agree", {
            font: "24px Arial",
            fill: "#ffffff",
            backgroundColor: "#00ff00",
            padding: { left: 10, right: 10, top: 5, bottom: 5 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        agreeButton.on('pointerdown', () => {
            // Change the location to webcam.html when the button is clicked
            window.location.href = 'webcam.html';  // Redirect to webcam.html
        });
    }
}
