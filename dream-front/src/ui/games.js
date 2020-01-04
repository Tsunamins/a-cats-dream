class Games {
    constructor(){
        this.gameUI();
        this.arrayFF = [];
        this.arrayEn = [];
        this.arrayAllStats = [];

    }

    gameUI(){
        const gameData = document.getElementById('game-functions')
        const gameList = document.getElementById('game-list')
        let id = localStorage.getItem('user_id')
        UsersAdapter.getUserStats(id).then(stats => {
            stats.forEach(stat => 
            this.arrayAllStats.push(stat))
            stats.forEach(stat =>{
                this.arrayFF.push(stat.fireflies_collected)
                this.arrayEn.push(stat.enemies_defeated)
                const li = document.createElement('li')
                li.innerText = `Fireflies collected: ${stat.fireflies_collected}` + ` Enemies Banished: ${stat.enemies_defeated}`
                gameList.appendChild(li)
            })
        const fireFlyH3 = document.createElement('h3')
        const enemyH3 = document.createElement('h3')
        let addFF = this.arrayFF.reduce(add)
        let addEn = this.arrayEn.reduce(add)
        fireFlyH3.innerText = `All Time Fireflies Collected: ${addFF}`
        enemyH3.innerText = `All Time Enemies Banished: ${addEn}`
        gameData.appendChild(fireFlyH3)
        gameData.appendChild(enemyH3)
        console.log(stats)
        console.log(this.arrayAllStats)
                             
        

        })

        function add(total, index){
            return total += index
        }
        
        
  

    }

   




}
