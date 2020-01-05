import GameScene from './src/game/GameScene.js'
import TitleScene from './src/game/TitleScene.js'



let userInput;
const userInfoForm = document.getElementById('user-info-form');
userInfoForm.addEventListener('submit', establishUser);
const userEmailInput = document.getElementById('user-email')
const userUpdate = document.getElementById('update-form')
userUpdate.addEventListener('submit', updateUserEmail)
const logoutLink = document.getElementById('reload');
logoutLink.addEventListener('click', () => {
  localStorage.removeItem('user_id');
})




function establishUser(event){
  event.preventDefault(); 
  userInput = event.target[0].value
  const user = new Users(userEmailInput.value)
  //const gameUI = new Games();
 // UsersAdapter.createLocalStorage(userInput)
 
  const game = new Phaser.Game(config);
  
}

function updateUserEmail(event){
  event.preventDefault();
  let id = localStorage.getItem('user_id')
  let changeEmail = event.target[0].value
  UsersAdapter.updateUser(id, changeEmail)
  const updateDisplay = document.getElementById('user-display')
  updateDisplay.innerText = `${changeEmail}`

}











//let titleScene = new TitleScene();
//let gameScene = new GameScene();

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
    scene: [TitleScene, 
    GameScene,]
   
  };

  
  
  //game.scene.add('GameScene', gameScene);




 