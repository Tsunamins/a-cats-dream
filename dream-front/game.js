//import GameScene from './game.js'
//import TitleScene from './title.js'


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
    scene: gameScene, titleScene,
    // extend:{
    //   bullets: null
    // }
  };