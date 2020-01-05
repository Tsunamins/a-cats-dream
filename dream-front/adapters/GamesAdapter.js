const gameUrl = 'http://localhost:3000/games';
const GamesAdapter = {

    getGames: () => {
        return fetch(gameUrl) 
        .then(res => res.json()) 
        
    },

    getGame: (id) => {
        return fetch(`${gameUrl}/${id}`)
        .then(res => res.json())
    },

    createGame: (id, playerX, playerY, attack, collectff) => {
     
        return fetch(gameUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'user_id': id, 'playerX': playerX, 'playerY': playerY, 'enemies_defeated': attack, 'fireflies_collected': collectff})
        }) 
        .then(res => res.json())
        
    },

    createLocalStorage: (id) => {
        return fetch(`${gameUrl}/${id}`) 
        .then(res => res.json())
         .then(data => localStorage.setItem('game_id', data.id))
        
    },

    updateGame: (id, playerX, playerY, attack, collectff) => {
        return fetch(`${gameUrl}/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'playerX': playerX, 'playerY': playerY, 'enemies_defeated': attack, 'fireflies_collected': collectff})
        })
        .then(res => res.json())

    },

    deleteGame: (id) => {
        return fetch(`${gameUrl}/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

