class Users {
    constructor() {
        this.users = []; //set property called users to empty array
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
    }

    createUser(e){
        
        e.preventDefault()
       
        const value = this.userEmailInput.value

        this.adapter.createUser(value).then(user => {  
 
            this.render(value) 
        })
    }

   

    render(value){    
        const h3 = document.createElement('h3');
        h3.innerHTML = `<h3>${value}</h3>`;
        this.setCurrentUser.appendChild(h3);  
    }
}