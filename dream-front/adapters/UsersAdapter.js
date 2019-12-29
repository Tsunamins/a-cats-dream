const baseURL = "http://localhost:3000";

const UsersAdapter = {

  getUsers: () => {
    return fetch(`${baseURL}/users`)
    .then(res=>res.json())
  },

  createUser: (email) => {
    return fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json"
     },
      body: JSON.stringify({'email': email})   
    })
    .then(res => res.json())
    },

}

