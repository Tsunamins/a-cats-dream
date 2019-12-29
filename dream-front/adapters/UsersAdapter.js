class UsersAdapter { 
    constructor() {
        this.baseUrl = 'http://localhost:3000/users'

    }

    getUsers() {
        return fetch(this.baseUrl) 
        .then(res => res.json()) 
        
    }

    createUser(value){
     
        return fetch(this.baseUrl,{
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'email': value})
        }) 
        .then(res => res.json()) 
    }
}
