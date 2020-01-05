class Games {
    constructor(){
         //document.addEventListener('DOMContentLoaded', (event) => {
             //console.log('DOM fully loaded and parsed');
            this.gameUI();
        //});
       
        this.arrayFF = [];
        this.arrayEn = [];
        this.arrayAllStats = [];
        
  

    }
  
    gameUI(){
        const gameData = document.getElementById('game-functions')
        const gameList = document.getElementById('game-list')
        let user_id = localStorage.getItem('user_id')
        console.log(localStorage.getItem('user_id'))
        console.log(user_id)
        UsersAdapter.getUserStats(user_id).then(stats => {
            console.log(stats)
         
            stats.forEach(stat => 
            this.arrayAllStats.push(stat))
            
        
            this.arrayAllStats.slice(1).slice(-5).forEach(stat =>{
                this.arrayFF.push(stat.fireflies_collected)
                this.arrayEn.push(stat.enemies_defeated)
                const li = document.createElement('li')
                li.innerText = `Fireflies collected: ${stat.fireflies_collected}` + ` Enemies Banished: ${stat.enemies_defeated}`
                gameList.appendChild(li)
            })
        
        const fireFlyH3 = document.createElement('h3')
        const enemyH3 = document.createElement('h3')
        let addFF = this.arrayFF.reduce((total, add) => total + add, 0);
        
        let addEn = this.arrayEn.reduce((total, add) => total + add, 0);
        fireFlyH3.innerText = `All Time Fireflies Collected: ${addFF}`
        enemyH3.innerText = `All Time Enemies Banished: ${addEn}`
        gameData.appendChild(fireFlyH3)
        gameData.appendChild(enemyH3)
        console.log(stats)
        console.log(this.arrayAllStats)
                             
        
      
        })
    
      
    }

   
    



}
