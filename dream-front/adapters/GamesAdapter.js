const gameUrl = 'http://localhost:3000/games';
const GamesAdapter = {

    getGames: () => {
        return fetch(gameUrl) 
        .then(res => res.json()) 
        
    },

    getGame: (id) => {
        return fetch(`gameUrl/${id}`)
        .then(res => res.json())
    },

    createGame: (value, id) => {
     
        return fetch(gameUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'game_save': value, 'user_id': id})
        }) 
        .then(res => res.json())
        
    },

    createLocalStorage: (value) => {
        return fetch(gameUrl, {
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
        return fetch(`gameUrl/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'game_save': value, 'user_id': id})
        })
        .then(res => res.json())

    },

    deleteGame: (id) => {
        return fetch(`gameUrl/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

