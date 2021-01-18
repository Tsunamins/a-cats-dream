const gameUrl = 'http://localhost:3000/games';
const GamesAdapter = {

    getGames: () => {
        return fetch(gameUrl, {
            // credentials: "include"
        }) 
        .then(res => res.json()) 
        // .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    },

    createGame: (id, playerX, playerY, attack, collectff) => {
     
        return fetch(gameUrl, {
             
            // credentials: "include",
            method: 'POST', 
            headers: {                
                'content-type': 'application/json',
               
            },
            body: JSON.stringify({'playerX': playerX, 'playerY': playerY, 'enemies_defeated': attack, 'fireflies_collected': collectff})
        }) 
        .then(res => res.json())
        // .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    },

    updateGame: (id, playerX, playerY, attack, collectff) => {
        return fetch(`${gameUrl}/${id}`,{
            credentials: "include",
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

