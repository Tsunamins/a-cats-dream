const baseURL = 'http://localhost:3000';
const AuthAdapter = {

        signup: (email, name, pw) => {       
            return fetch(`${baseURL}/users`, {
                credentials: "include",
                method: 'POST', 
                headers: {                
                    'content-type': 'application/json'
                },
                body: JSON.stringify({user: {'email': email, 'name': name, 'password': pw}})
            }) 
            .then(res => res.json())

        },

        login: (email, pw) => {

            let request = {"auth":{"email": email, "password": pw}}

            return fetch(`${baseURL}/user_token`, {
                method: 'POST', 
                headers: {                
                    'content-type': 'application/json'
                },
                body: JSON.stringify(request)
            }) 
            .then(res => res.json())
            .then(response => {
                localStorage.setItem("jwt", response.data.jwt);

            })

            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));

            },

        getCurrentUser: () => {
            return fetch(`${baseURL}/logged_in`, {
                credentials: "include",
                method: "GET",
                headers: {
                "Content-Type": "application/json"
                },
            })
            .then(res => res.json())
        }, 

        logout: () => {
            return fetch(`${baseURL}/logout`, {
                credentials: "include",
                method: "DELETE"
            })

        }

}


