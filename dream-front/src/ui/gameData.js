class GameData {
    constructor(currentUser) {
        this.currentUser = currentUser;
        this.userElements();
        this.createGameDataDisplay();
        this.arrayFF = [];
        this.arrayEn = [];
        this.arrayAllStats = [];
       
        
    }

    userElements(){
        //get user game elements
        this.gameData = document.getElementById('game-data')
        this.gameLists = document.getElementById('game-lists')
        
    }

    createGameDataDisplay(){     
      
            this.getUserGames();      
    }

    getUserGames(){
        const user_id = localStorage.getItem('user_id')
        console.log(user_id)        
        UsersAdapter.getUserStats(user_id).then(stats => {

            stats.forEach(stat => 
            this.arrayAllStats.push(stat))

            
        this.renderRecentGames()
        this.renderAllTimeStats()
        })
    }


    render(value){    
        console.log(value)
        const h3 = document.createElement('h3');
        const gameData = document.getElementById('game-data')

        gameData.style.visibility = 'visible';
    }

    renderRecentGames(){

        this.arrayAllStats.slice(1).slice(-5).forEach(stat =>{
            //this.arrayFF5.push(stat.fireflies_collected)
            //this.arrayEn5.push(stat.enemies_defeated)
            const li = document.createElement('li')
            li.innerText = `Fireflies collected: ${stat.fireflies_collected}` + ` Enemies Banished: ${stat.enemies_defeated}`
            this.gameLists.appendChild(li)
        })

    }

    renderAllTimeStats(){
        this.arrayAllStats.forEach(stat => {
            this.arrayFF.push(stat.fireflies_collected)
            this.arrayEn.push(stat.enemies_defeated)
        })
    
        const fireFlyH3 = document.createElement('h3')
        const enemyH3 = document.createElement('h3')
        const addFF = this.arrayFF.reduce((total, add) => total + add, 0);        
        const addEn = this.arrayEn.reduce((total, add) => total + add, 0);
        fireFlyH3.innerText = `All Time Fireflies Collected: ${addFF}`
        enemyH3.innerText = `All Time Enemies Banished: ${addEn}`
        this.gameData.appendChild(fireFlyH3)
        this.gameData.appendChild(enemyH3)
 

    }


   
}