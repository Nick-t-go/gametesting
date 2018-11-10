import 'phaser';

import { SimpleScene } from './scenes/simple-scene';
import { firstGame } from './scenes/firstGame';
import { sideScroll } from './scenes/sideScroll'


const gameConfig = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
  type: Phaser.AUTO,
  scene: sideScroll
};

var side_scroll_config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    pixelArt: true,
    physics: {
        default: 'impact',
        impact: { gravity: 200 }
    },
    scene: sideScroll
};

new Phaser.Game(side_scroll_config);