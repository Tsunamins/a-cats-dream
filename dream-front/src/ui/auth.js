//import {AuthAdapter} from '../../adapters/AuthAdapter.js'
const userLoginForm = document.getElementById('user-info-form');

const userSignUpForm = document.getElementById('user-signup')
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')
const userName = document.getElementById('name')
//const logoutLink = document.getElementById('reload');
userLoginForm.addEventListener('submit', handleLogin);
userSignUpForm.addEventListener('submit', handleSignup)

console.log(userEmail.value)
console.log(userPassword.value)


function handleSignup(e){
    e.preventDefault();
    console.log('trigger signup')
    const checkUser = new CurrentUser();
    console.log(checkUser)

}

function handleLogin(e){
    e.preventDefault();
    console.log('trigger login')
    AuthAdapter.login(userEmail.value, userPassword.value).then(resp => {
        console.log(resp)
        sessionStorage.setItem('current_user', resp.id)
        
        
    })
    

}





