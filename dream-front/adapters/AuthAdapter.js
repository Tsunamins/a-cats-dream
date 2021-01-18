const baseURL = 'http://localhost:3000';
const AuthAdapter = {



        signup: (email, name, pw) => {
           
        
            return fetch(`${baseURL}/signup`, {
                method: 'POST', 
                headers: {                
                    'content-type': 'application/json'
                },
                body: JSON.stringify({user: {'email': email, 'name': name, 'password': pw}})
            }) 
            .then(res => res.json())
            //this interferes with userclass construction
            //.then(data => localStorage.setItem('user_id', data.id))
        },

        login: (email, pw) => {
          
            return fetch(`${baseURL}/login`, {
                // credentials: "include",
                method: 'POST', 
                headers: {                
                    'content-type': 'application/json'
                },
                body: JSON.stringify({'email': email, 'password': pw})
            }) 
            .then(res => res.json())

        },

        getCurrentUser: () => {
            return fetch(`${baseURL}/get_current_user`, {
                // credentials: "include",
                method: "GET",
                headers: {
                "Content-Type": "application/json"
                },
            })
            .then(res => res.json())
        }

}

