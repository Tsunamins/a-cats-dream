const baseURL = "http://localhost:3000";

const adapter = {

  getStats: () => {
    return fetch(`${baseURL}/stats`)
    .then(res=>res.json())
  },

  createStat: (fireflies_collected, hit_by_enemy, enemies_defeated, strategy_score) => {
    return fetch(`${baseURL}/stats`, {
      method: 'POST',
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json"
     },
      body: JSON.stringify({'fireflies_collected': fireflies_collected, 'hit_by_enemy': hit_by_enemy, 'enemies_defeated': enemies_defeated, 'strategy_score': strategy_score})
      
   
})
.then(res => res.json())
},

}