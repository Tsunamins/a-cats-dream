const baseUrl = 'http://localhost:3000/users';
const UsersAdapter = {

    getUsers: () => {
        return fetch(baseUrl) 
        .then(res => res.json()) 
        
    },

    getUser: (id) => {
        return fetch(`baseUrl/${id}`)
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
        //this interferes with userclass construction
        //.then(data => localStorage.setItem('user_id', data.id))
    },

    createLocalStorage: (value) => {
        return fetch(baseUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'email': value})
        }) 
        .then(res => res.json())
         .then(data => localStorage.setItem('user_id', data.id))
        
    },

    updateUser: (id, value) => {
        return fetch(`baseUrl/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'email': value})
        })
        .then(res => res.json())

    },

    deleteUser: (id) => {
        return fetch(`baseUrl/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

