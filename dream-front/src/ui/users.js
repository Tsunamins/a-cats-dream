class Users {
    constructor() {
     
        
        this.initBindingsAndEventListeners() //to be created
        this.fetchAndLoadCurrentUser()
    }

    initBindingsAndEventListeners(){
        this.currentUser = document.getElementById('current-user')
        this.userEmail = document.getElementById('user-email')
        this.userInfo = document.getElementById('user-info')
        this.userInfo.addEventListener('submit', this.createUser.bind(this)) 
    }

    createUser(e){
        
        e.preventDefault()
       
        const value = this.userEmail.value

        this.adapter.createUser(value).then(user => {
            
            this.userEmail.value = "" //clear repeated values from the previous entry, otherwise stays in the bar on submit
            this.render() //call render again so it updates the dom on addition of new note, can see new note without refresh
        })
    }

    fetchAndLoadCurrentUser() {

        this.adapter
        .getUsers()
        .then(users => {
            
            users.forEach(user => this.users.push(new User(user))) //changes to Note objects to be able to take advantage of the note class
            
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        //consider from here have access to this.notes, try console.log(this.notes)
        
        

        
        this.currentUser.innerHTML = this.userEmail.value
        


        //my simple solution, not working with ul/li
        // this.notes.forEach(note => {
        //     const p = document.createElement('p')
        //     p.innerHTML = `<p>${note.body}</p>` //is this way simpler, however?
        //     notesContainer.appendChild(p)
        //})

        
        

    }
}