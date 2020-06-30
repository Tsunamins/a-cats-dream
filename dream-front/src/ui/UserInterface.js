class UserInterface{
    constructor(current_user){
        this.current_user = current_user;

        this.UIElements();
        this.createUI();
       
    }

    UIElements(){
        // this.loggedIn = document.getElementById('if-logged-in')
        // this.authForms = document.getElementById('auth-forms')
        // this.currentGame = document.getElementById('current-game')
        // this.prevGames = document.getElementById('previous-games')
        this.nameDisplay = document.getElementById('name-display')
        
    }

    createUI(){
            //have to have this to initiate render
         this.render(this.current_user)

    }

    

    render(value){
        console.log(value)
        console.log(this.current_user)

        //adjust visibility based on logged in
        const loggedInSection = document.getElementById('if-logged-in')
        const authFormSection = document.getElementById("auth-forms")
        loggedInSection.style.visibility = 'visible';
        authFormSection.style.display = 'none';


        const h3 = document.createElement('h3');
        h3.innerHTML = `<h3 id="user-name">${this.current_user.name}</h1>`;
        this.nameDisplay.appendChild(h3);


        
        
        
    }

}