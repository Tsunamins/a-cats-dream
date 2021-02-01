class Users {
    constructor(currentUser) {
        this.currentUser = currentUser;
        this.userElements();
        this.createUser();  
        this.users = [];       
        
    }

    userElements(){
        //get user elements
        this.setCurrentUser = document.getElementById('current-user')
        this.userEmailField = document.getElementById('user-email')
       

        //update user elements and event
        this.updateUser = document.getElementById('update-form')
        this.updateEmail = document.getElementById('user-update')
        
    }

    createUser(){     
        UsersAdapter.createUser(this.currentUser).then(user => { 
            localStorage.setItem('user_id', user.id)
            this.render(this.currentUser) 
            this.userEmailField.value = ""

        })       
    }

      render(value){    
        console.log(value)
        const h3 = document.createElement('h3');
        const userFunctions = document.getElementById('user-functions')
        const removeForm = document.getElementById("user-info-form")
        
        h3.innerHTML = `
            <h3 id="user-display">${value}</h3>`;
        
        this.setCurrentUser.appendChild(h3);
        removeForm.style.display = 'none';
        userFunctions.style.visibility = 'visible';
    }

}
