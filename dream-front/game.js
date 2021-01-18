import GameScene from './src/game/GameScene.js'
import TitleScene from './src/game/TitleScene.js'

const sortButton = document.getElementById('sort');
const sorted = document.getElementById('sorted')
sortButton.addEventListener('click', () => {
  console.log("the sort button clicked")
  return fetch(`http://localhost:3000/users/3/games`)
  .then(res => res.json())
  .then(stats => {
    
    stats.sort(function (a, b) {
      return a.fireflies_collected - b.fireflies_collected;
    });

    stats.forEach(stat => {
      const li = document.createElement('li')
      li.innerText = stat.fireflies_collected
      sorted.appendChild(li)
      
    })
    console.log(stats)       
  })

  
});

const userInfoForm = document.getElementById('user-info-form');
const userEmailInput = document.getElementById('user-email')
//const userUpdate = document.getElementById('update-form')
const logoutLink = document.getElementById('reload');
userInfoForm.addEventListener('submit', establishUserWithNewGame);
//userUpdate.addEventListener('submit', updateUserEmail)
logoutLink.addEventListener('click', () => {
  localStorage.removeItem('user_id');
})




function establishUserWithNewGame(event){
  event.preventDefault(); 
  const user = new Users(userEmailInput.value)
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
 