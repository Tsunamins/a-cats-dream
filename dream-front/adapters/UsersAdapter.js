const userUrl = 'http://localhost:3000/users';
const UsersAdapter = {

    getUsers: () => {
        return fetch(userUrl) 
        .then(res => res.json()) 
        
    },

    getUser: (id) => {
        return fetch(`${userUrl}/${id}`)
        .then(res => res.json())
    },

    createUser: (value) => {
        console.log(value)
     
        return fetch(userUrl, {
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

    updateUser: (id, value) => {
        return fetch(`${userUrl}/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'email': value})
        })
        .then(res => res.json())

    },

    getUserStats: (id) => {
        return fetch(`${userUrl}/${id}/games`)
        .then(res => res.json())
    },

    deleteUser: (id) => {
        return fetch(`${userUrl}/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

