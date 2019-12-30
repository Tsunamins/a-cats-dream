class Users {
    constructor() {
        this.currentUser;
        this.adapter = new UsersAdapter() ;
        this.userEvents();
        
    }

    userEvents(){
        //get the div that will display the current user
        this.setCurrentUser = document.getElementById('current-user')
        //get the input field for email
        this.userEmailInput = document.getElementById('user-email')
        //get the form tag for user input
        this.userForm = document.getElementById('user-info')

        //use userForm from above with event listerner on submit bind this to the funtion createUser
        this.userForm.addEventListener('submit', this.createUser.bind(this))
        console.log(this) 

        this.setCurrentUser.addEventListener('click', this.deleteUser.bind(this))

        // this.setCurrentUser.addEventListener('click', function(event){
        //     let updateEvent = event.target.className === "update"
        //     let deleteEvent = event.target.className === "delete"

       // })

    }

    createUser(e){
        e.preventDefault()  
        const value = this.userEmailInput.value      
        this.adapter.createUser(value).then(user => {  
            this.currentUser = user;
            console.log(this.currentUser)
            this.render(value) 
            this.userEmailInput.value = ""
        })
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
        h3.innerHTML = `
            <h3 id="user">${value}</h3>
            <button class='update'>Update</button>
            <button class="delete">Delete</button>`;
        
        this.setCurrentUser.appendChild(h3);  
    }

   
}
