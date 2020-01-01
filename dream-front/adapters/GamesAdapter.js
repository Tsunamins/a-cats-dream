const baseUrl = 'http://localhost:3000/games';
const GamesAdapter = {

    getGames: () => {
        return fetch(baseUrl) 
        .then(res => res.json()) 
        
    },

    getGame: (id) => {
        return fetch(`baseUrl/${id}`)
        .then(res => res.json())
    },

    createGame: (value) => {
     
        return fetch(baseUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'game_save': value})
        }) 
        .then(res => res.json())
        
    },

    createLocalStorage: (value) => {
        return fetch(baseUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'game_save': value})
        }) 
        .then(res => res.json())
         .then(data => localStorage.setItem('game_id', data.id))
        
    },

    updateGame: (id, value) => {
        return fetch(`baseUrl/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'game_save': value})
        })
        .then(res => res.json())

    },

    deleteGame: (id) => {
        return fetch(`baseUrl/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

