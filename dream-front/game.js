//import GameScene from './game.js'
import TitleScene from './src/game/TitleScene.js'

let titleScene = new TitleScene();

let config = {
    type: Phaser.AUTO, 
    width: 800,
    height: 600,
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

  let game = new Phaser.Game(config);
  


 