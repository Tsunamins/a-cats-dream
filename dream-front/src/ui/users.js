class Users {
    constructor(currentUser) {
        this.currentUser = currentUser;
        this.userElements();
        this.createUser();  
        this.users = [];
       
        this.arrayFF = [];
        this.arrayEn = [];
        
        this.arrayAllStats = [];
       
        
    }

    userElements(){
        //get user elements
        this.setCurrentUser = document.getElementById('current-user')
        this.userEmailField = document.getElementById('user-email')
       

        //get user game elements
        this.gameData = document.getElementById('game-functions')
        this.gameList = document.getElementById('game-list')

        //update user elements and event
        this.updateUser = document.getElementById('update-form')
        this.updateEmail = document.getElementById('user-update')
        
    }

    createUser(){     
        UsersAdapter.createUser(this.currentUser).then(user => { 
            localStorage.setItem('user_id', user.id)
            this.render(this.currentUser) 
            this.userEmailField.value = ""
            this.getUserGames();
        })       
    }

    getUserGames(){
        const user_id = localStorage.getItem('user_id')        
        UsersAdapter.getUserStats(user_id).then(stats => {

            stats.forEach(stat => 
            this.arrayAllStats.push(stat))

        this.renderRecentGames()
        this.renderAllTimeStats()
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

    renderRecentGames(){

        this.arrayAllStats.slice(1).slice(-5).forEach(stat =>{
            //this.arrayFF5.push(stat.fireflies_collected)
            //this.arrayEn5.push(stat.enemies_defeated)
            const li = document.createElement('li')
            li.innerText = `Fireflies collected: ${stat.fireflies_collected}` + ` Enemies Banished: ${stat.enemies_defeated}`
            this.gameList.appendChild(li)
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
