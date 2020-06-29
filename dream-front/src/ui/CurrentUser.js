class CurrentUser{
    constructor(){
        //this.cUser = resp
       
    }

    userElements(){
        this.displayUser = document.getElementById('user-from-new-method')
    }

    setCurrentUser(){
        AuthAdapter.getCurrentUser().then(user => {
            
            this.render(user)

        })
    }

    render(value){
        console.log(value)
        const h1 = document.createElement('h1')
        h1.innerHTML = `<h1 id="new-display">${value}</h1>`
        this.displayUser.appendChild(h1)
        
    }

}