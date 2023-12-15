class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuConfig = {
            parent: 'game-screen',
            fontFamily: 'Courier',
            fontSize: '40px',
            // backgroundColor: '#FFFFFF',
            color: '#37B9FF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.background = this.add.image(game.canvas.width / 2, game.canvas.height / 2, 'start');

        //     Menu Text
        // this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding,
        //     'Stuck Behind a Bus', menuConfig).setOrigin(0.5)
        menuConfig.color = '#FFFFFF';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding,
            'Press Enter to start', menuConfig).setOrigin(0.5)

        menuConfig.align = 'center';
        menuConfig.fontSize = '28px';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 325,
            'Use left and right arrow keys to get past the bus', menuConfig).setOrigin(0.5)

        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        //     End bracket for Create function
    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
            // this.sound.play('background-music')
            this.scene.start('playScene')
        }
    }

//     End Bracket for Class Menu
}