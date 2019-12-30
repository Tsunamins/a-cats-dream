const baseUrl = 'http://localhost:3000/users';
const UsersAdapter = {

    getUsers: () => {
        return fetch(baseUrl) 
        .then(res => res.json()) 
        
    },

    createUser: (value) => {
     
        return fetch(baseUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'email': value})
        }) 
        .then(res => res.json()) 
    },

    updateUser: (value) => {
        return fetch(baseUrl,{ //prob baseUrl plus id in ``
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'email': value})
        })
        .then(res => res.json())

    },

    deleteUser: (id) => {
        return fetch(`this.baseUrl/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

