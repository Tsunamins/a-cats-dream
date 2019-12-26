//import GameScene from './game.js'
import TitleScene from 'src/game/TitleScene.js'


let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 360,
    parent: 'canvas',
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false
      }
  },
    scene: TitleScene, 
    //GameScene,
    // extend:{
    //   bullets: null
    // }
  };