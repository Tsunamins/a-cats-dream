class Users {
    constructor(currentUser) {
        this.currentUser = currentUser;
        this.userElements();
        this.createUser();       
    }

    userElements(){
        //find or create user elements
        this.setCurrentUser = document.getElementById('current-user')
        //this.userEmailInput = document.getElementById('user-email')

        //update user elements and event
        this.updateUser = document.getElementById('update-form')
        this.updateEmail = document.getElementById('user-update')
        this.userEmailField = document.getElementById('user-email')
    }
    createUser(){     
        UsersAdapter.createUser(this.currentUser).then(user => { 
            //setting this here will need to create a "logout button with localStorage.clear()"
        //    localStorage.setItem('user_id', user.id)
        //    localStorage.setItem('user_email', user.email)
        console.log(user)
          
            this.render(this.currentUser) 
            this.userEmailField.value = ""
        })       
    }
    render(value){    
        const h3 = document.createElement('h3');
        const userFunctions = document.getElementById('user-functions')
        const removeForm = document.getElementById("user-info-form")
        //adds an update form but doesn't work well with eventlisteners since it doesn't exist yet
        h3.innerHTML = `
            <h3 id="user">${value}</h3>`;
        
        this.setCurrentUser.appendChild(h3);
        removeForm.style.display = 'none';
        userFunctions.style.visibility = 'visible';
    }

   
}
