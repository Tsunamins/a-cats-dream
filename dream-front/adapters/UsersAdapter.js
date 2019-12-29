class UsersAdapter { 
    constructor() {
        this.baseUrl = 'http://localhost:3000/users'

    }

    getUsers() {
        return fetch(this.baseUrl) 
        .then(res => res.json()) 
        
    }

    createUser(value){
        // const user = {
        //     body: value
        // }
        // //debugger
        return fetch(this.baseUrl,{
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'email': email})
        }) 
        .then(res => res.json()) 
    }
}
