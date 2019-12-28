class User {
    constructor(noteJSON){
        this.id = noteJSON.id
        this.email = noteJSON.email
    }

    renderCurrentUser(){
        return `<h3>${this.email}</h3>`
    }
}