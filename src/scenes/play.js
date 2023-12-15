class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {

        // Calculate the middle of the game screen
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        // Background

        this.background = this.add.image(game.canvas.width / 2, game.canvas.height / 2, 'road');


        // Place the car sprite in the middle and scale it
        car = this.add.sprite(centerX - 50, centerY, 'car');
        car.setScale(5);

        // Define animation for the car
        this.anims.create({
            key: 'carAnimation',
            frames: this.anims.generateFrameNumbers('car', { start: 0, end: 3, first: 0 }),
            frameRate: 10,
            repeat: -1
        });

        // Play the car animation
        car.play('carAnimation');

        // Place the bus sprite in front of the car and scale it
        bus = this.add.sprite(centerX - 50, centerY - 75, 'bus');
        bus.setScale(5);

        // Set up world bounds
        this.physics.world.setBounds(450, 78, 585, 650);

        // Define minimum and maximum time intervals for playing the soundbite
        const minInterval = 2000; // 2 seconds
        const maxInterval = 5000; // 5 seconds

        const soundBite1Probability = 0.5; // 70% chance to play soundBite1
        const soundBite2Probability = 0.5; // 30% chance to play soundBite2

        // Create a timer that repeatedly triggers playback with random intervals
        let soundTimer = this.time.addEvent({
            delay: Phaser.Math.Between(minInterval, maxInterval),
            callback: () => {
                const randomChoice = Math.random();
                if (randomChoice < soundBite1Probability) {
                    this.sound.play('soundBite1');
                } else if (randomChoice < soundBite1Probability + soundBite2Probability) {
                    this.sound.play('soundBite2');
                }
                // Reset the timer with a new random interval
                soundTimer.delay = Phaser.Math.Between(minInterval, maxInterval);
            },
            loop: true,
        });

        // Create a text object for the level counter
        this.levelText = this.add.text(10, 10, 'Level: 1', {
            fontSize: 60,
            fontFamily: 'Arial',
            color: '#ffffff', // Adjust color as needed
        });

        // Start a timer to increment the level every 30 seconds
        this.levelTimer = this.time.addEvent({
            delay: 10000, // 30 seconds in milliseconds
            callback: () => {
                this.level++;
                this.levelText.setText(`Level: ${this.level}`);
            },
            loop: true,
        });

        // Initialize the level counter variable
        this.level = 1;

        // Calculate the screen dimensions
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Create a text object with the message
        const pauseText = this.add.text(width / 2, height - 20, 'Press P to Pause', {
            fontSize: 24,
            fontFamily: 'Arial',
            color: '#ffffff', // Adjust color as needed
            align: 'center', // Centers the text horizontally
        });

        // Set the text object to be fixed to the camera so it stays visible
        pauseText.setOrigin(0.5, 1); // Bottom-center anchor point

        // Set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();


        // Creating key "P" for pausing the game at anytime
        const pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        // Creating key "P" for pausing the game at anytime
        const peterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

        // Handle pause key press
        pauseKey.on('down', () => {
            this.scene.start('pauseScene');
        });

        peterKey.on('down', () => {
            this.sound.play('soundBite');
        });

    }

    update() {


        // Move the car based on arrow key input and prevent going outside bounds
        if (this.cursors.left.isDown) {
            car.x -= carSpeed;
            // Check if car hits left world bound
            if (car.x < this.physics.world.bounds.left) {
                car.x = this.physics.world.bounds.left; // Restrict to left boundary
            }
        } else if (this.cursors.right.isDown) {
            car.x += carSpeed;
            // Check if car hits right world bound
            if (car.x > this.physics.world.bounds.right - car.displayWidth) {
                car.x = this.physics.world.bounds.right - car.displayWidth; // Restrict to right boundary
            }
        }

        // Move the bus independently with similar checks
        if (this.cursors.left.isDown) {
            bus.x -= carSpeed;
            // Check if bus hits left world bound
            if (bus.x < this.physics.world.bounds.left) {
                bus.x = this.physics.world.bounds.left; // Restrict to left boundary
            }
        } else if (this.cursors.right.isDown) {
            bus.x += carSpeed;
            // Check if bus hits right world bound
            if (bus.x > this.physics.world.bounds.right - bus.displayWidth) {
                bus.x = this.physics.world.bounds.right - bus.displayWidth; // Restrict to right boundary
            }
        }



    }

}