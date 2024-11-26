class MainScene extends Phaser.Scene {


    constructor() {
        super('MainScene');
        this.username = ''
    }

    preload() {

        this.load.image('background', 'assets/images/background.gif');
        this.load.image('character', 'assets/images/barbie.png');
        this.load.image('phone', 'assets/images/phone.png');
        this.load.image('nextButton', 'assets/images/play.png'); // Load button image

        let self = this;
        let res = fetch("getUser.php")
            .then(function (res) {
                return res.json()

            })
            .then(function (data) {
                console.log(data)
                self.username = data.username

            })
        // let resJSON = await res.json();
        // console.log(resJSON);

    }

    create() {
        // Create the background
        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background')
            .setOrigin(0, 0);

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

        this.tweens.add({
            targets: phone,
            y: this.scale.height / 2,
            duration: 2000,
            ease: 'Bounce.easeOut'
        });

        // Make the phone interactive
        phone.setInteractive();
        phone.on('pointerdown', () => {
            showModal("Are you sure? Once you start, you can never stop.");
        });

        // Add speech bubble text centered on the phone
        const text = this.add.text(phone.x, phone.y, `Hey! ${this.username}`, {
            font: "24px 'Crafty Girls'",
            fill: "#ff00d4"
        }).setOrigin(0.5, 5);

        // Animate the text to follow the phone
        this.tweens.add({
            targets: text,
            y: this.scale.height / 2,
            duration: 2000,
            ease: 'Bounce.easeOut'
        });

        // Add a button at the bottom center to go to the next scene
        const nextButton = this.add.sprite(this.scale.width / 2, this.scale.height - 50, 'nextButton')
            .setInteractive()
            .setScale(0.09); // Adjust size if needed

        nextButton.on('pointerdown', () => {
            this.scene.start('Room'); // Transition to the next scene called 'Room'
        });
    }

    update() {
        this.background.tilePositionY -= 0.5;
        this.background.tilePositionX -= 0.5;
    }
}

// Ensure `MainScene` is available globally
window.MainScene = MainScene;
