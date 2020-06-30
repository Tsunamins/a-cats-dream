import GameScene from './src/game/GameScene.js'
import TitleScene from './src/game/TitleScene.js'

const current_user = []

//get login form
const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')

//get signup form
const signUpForm = document.getElementById('signup-form')
const signUpEmail = document.getElementById('signup-email')
const signUpName = document.getElementById('signup-name')
const signUpPasword = document.getElementById('signup-password')


//const logoutLink = document.getElementById('reload');
loginForm.addEventListener('submit', handleLogin);
signUpForm.addEventListener('submit', handleSignup)

function handleSignup(e){
    e.preventDefault();
    console.log('trigger signup')
    // current_user = new CurrentUser();
    AuthAdapter.signup(signUpEmail.value, signUpName.value, signUpPasword.value).then(resp => {
      
        
        
        current_user.push(resp.data.attributes)
        console.log(current_user)
        if(current_user.length > 0){
            sessionStorage.setItem('current_user', resp.data.id)
            const ui = new UserInterface(current_user)
            const game = new Phaser.Game(config);
        }
    })

}

function handleLogin(e){
    e.preventDefault();
    console.log('trigger login')
    AuthAdapter.login(userEmail.value, userPassword.value).then(resp => {
     
        
        
        current_user.push(resp.data.attributes)
        console.log(current_user)
        if(current_user.length > 0){
           
            sessionStorage.setItem('current_user', resp.data.id)
            const ui = new UserInterface(current_user[0])
           
            const game = new Phaser.Game(config);
        }
    })
    

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