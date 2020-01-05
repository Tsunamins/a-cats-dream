const statUrl = 'http://localhost:3000/stats';
const StatsAdapter = {

    getStats: () => {
        return fetch(statUrl) 
        .then(res => res.json()) 
        
    },

    getStat: (id) => {
        return fetch(`${statUrl}/${id}`)
        .then(res => res.json())
    },

    createStat: (game_id, attack, collectff) => {
     
        return fetch(statUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'game_id': game_id, 'enemies_defeated': attack, 'fireflies_collected': collectff})
        }) 
        .then(res => res.json())
        
    },

    createLocalStorage: (value) => {
        return fetch(statUrl, {
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({'game_save': value})
        }) 
        .then(res => res.json())
         .then(data => localStorage.setItem('stat_id', data.id))
        
    },

    updateStat: (id, attack, collectff) => {
        return fetch(`${statUrl}/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({'enemies_defeated': attack, 'fireflies_collected': collectff})
        })
        .then(res => res.json())

    },

    deleteStat: (id) => {
        return fetch(`${statUrl}/${id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())

    }


}

