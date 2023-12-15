/* Anthony Angeles
//
// I wanted this game to feel useless like the joke in the episode where they are spending so much in time just stuck behind this bus
but quite frankly my life was turned upside down the past month of the quarter, and it led me to creating this subpar game, probably should have reached out,
but I am not sure why I didn't. the running joke of my game is that there is no point and that it will cause you to just play the game for as long as you let,
I wanted to communicate that spending so much time on this game playing won't give you anything but wasted time; at first this game was supposed to be a light-hearted joke, but with
events in my life it took a more depressing tone turning into what it is now.

Component 1: Physics Systems

Component 2: Cameras

Component 3: Sound Effects

Component 4: Text Objects

Component 5: Animation Manager

my game has took a dark turn and morbid turn, may other variations of this game bring you the joy it should


*/


let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 960,
    backgroundColor: '#000000',
    pixelArt: true,
    debug: true,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Loading, Menu, Play, Pause, GameOver, Credits ]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let cursors;

let car;
let bus;
const carSpeed = 20;