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
            console.log(user)          this.render(this.currentUser) 
            this.userEmailInput.value = ""
        })
    } 
    //doesn't work yet
    handleUpdateUserForm(e){
        e.preventDefault();
           //get the form tag for user input
        this.userUpdate = document.getElementById('user-update')

        //use userForm from above with event listerner on submit bind this to the funtion createUser
        this.userUpdate.addEventListener('submit', this.updateUser.bind(this))
        
    }

    //doesn't work yet
    updateUser(e){
        e.preventDefault();
        console.log("user update handled")

    }

    deleteUser(e){
        e.preventDefault()
        
        let deleteEvent = event.target.className === "delete"

        if (deleteEvent){
            let id = this.currentUser.id
            this.adapter.deleteUser(id)
        }



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
            <input type="submit" value="Update">
        </form>
        <button class="delete">Delete</button>`;
        
        this.setCurrentUser.appendChild(h3);
        removeForm.style.display = 'none';
    }

   
}
