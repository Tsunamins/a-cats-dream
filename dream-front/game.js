import GameScene from './src/game/GameScene.js'
import TitleScene from './src/game/TitleScene.js'



let titleScene = new TitleScene();
let gameScene = new GameScene();

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
    GameScene,
    // extend:{
    //   bullets: null
    // }
  };

  let game = new Phaser.Game(config);
  game.scene.add('TitleScene', titleScene);
  game.scene.add('GameScene', gameScene);

  const ui = new UI();


 