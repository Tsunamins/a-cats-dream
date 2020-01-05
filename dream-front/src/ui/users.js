class Users {
    constructor(currentUser) {
        this.currentUser = currentUser;
        this.userElements();
        this.createUser();  
        this.users = [];
        //this.gameUI();
        this.arrayFF = [];
        this.arrayEn = [];
        this.arrayFF5 = [];
        this.arrayEn5 = [];
        this.arrayAllStats = [];
        this.arrayRecentStats = [];
        
    }

    userElements(){
        //find or create user elements
        this.setCurrentUser = document.getElementById('current-user')
        //this.userEmailInput = document.getElementById('user-email')

        this.gameData = document.getElementById('game-functions')
        this.gameList = document.getElementById('game-list')

        //update user elements and event
        this.updateUser = document.getElementById('update-form')
        this.updateEmail = document.getElementById('user-update')
        this.userEmailField = document.getElementById('user-email')
    }
    createUser(){     
        UsersAdapter.createUser(this.currentUser).then(user => { 
            console.log(user)
            localStorage.setItem('user_id', user.id)
       
            this.render(this.currentUser) 
            this.userEmailField.value = ""
            this.gameUI();
        })       
    }

    gameUI(){
        // const gameData = document.getElementById('game-functions')
        // const gameList = document.getElementById('game-list')
        let user_id = localStorage.getItem('user_id')
        console.log(localStorage.getItem('user_id'))
        console.log(user_id)
        UsersAdapter.getUserStats(user_id).then(stats => {
            console.log(stats)
         
            stats.forEach(stat => 
            this.arrayAllStats.push(stat))

            stats.forEach(stat =>
            this.arrayRecentStats.push(stat))
            
        
            this.arrayRecentStats.slice(1).slice(-5).forEach(stat =>{
                this.arrayFF5.push(stat.fireflies_collected)
                this.arrayEn5.push(stat.enemies_defeated)
                const li = document.createElement('li')
                li.innerText = `Fireflies collected: ${stat.fireflies_collected}` + ` Enemies Banished: ${stat.enemies_defeated}`
                this.gameList.appendChild(li)
            })

            this.arrayAllStats.forEach(stat => {
                this.arrayFF.push(stat.fireflies_collected)
                this.arrayEn.push(stat.enemies_defeated)
            })
        
        const fireFlyH3 = document.createElement('h3')
        const enemyH3 = document.createElement('h3')
        let addFF = this.arrayFF.reduce((total, add) => total + add, 0);
        
        let addEn = this.arrayEn.reduce((total, add) => total + add, 0);
        fireFlyH3.innerText = `All Time Fireflies Collected: ${addFF}`
        enemyH3.innerText = `All Time Enemies Banished: ${addEn}`
        this.gameData.appendChild(fireFlyH3)
        this.gameData.appendChild(enemyH3)
        console.log(stats)
        console.log(this.arrayAllStats)
                             
        
      
        })
    
      
    }


    render(value){    
        const h3 = document.createElement('h3');
        const userFunctions = document.getElementById('user-functions')
        const gameFunctions = document.getElementById('game-functions')
        const removeForm = document.getElementById("user-info-form")
        
        h3.innerHTML = `
            <h3 id="user-display">${value}</h3>`;
        
        this.setCurrentUser.appendChild(h3);
        removeForm.style.display = 'none';
        userFunctions.style.visibility = 'visible';
        gameFunctions.style.visibility = 'visible';
    }

    allUserStats(){

    }


   
}
