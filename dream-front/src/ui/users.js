class Users {
    constructor(currentUser) {
        this.currentUser = currentUser;  
        this.userEvents();       
    }
    userEvents(){

        //get the div that will display the current user
        this.setCurrentUser = document.getElementById('current-user')
        this.userEmailInput = document.getElementById('user-email')
        UsersAdapter.createUser(this.currentUser).then(user => { 
            //setting this here will need to create a "logout button with localStorage.clear()"
        //    localStorage.setItem('user_id', user.id)
        //    localStorage.setItem('user_email', user.email)
          
            this.render(this.currentUser) 
            this.userEmailInput.value = ""
        })
    }


    render(value){    
        const h3 = document.createElement('h3');
        const updateButton = document.createElement('input')
        const removeForm = document.getElementById("user-info")
        //adds an update form but doesn't work well with eventlisteners since it doesn't exist yet
        h3.innerHTML = `
            <h3 id="user">${value}</h3>
            
        <form id="update-form">
            <input id="user-update" type="text" name="email">
            <input id="update-button" type="submit" value="Update">
        </form>
        <button class="delete">Delete</button>`;
        
        this.setCurrentUser.appendChild(h3);
        removeForm.style.display = 'none';
    }

   
}
