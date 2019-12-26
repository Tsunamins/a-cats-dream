class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'TitleScene'
        })
    }

    preload(){ this.load.image('background', './assets/images/pinkscene800600.png');
    }

    create(){
       let background = this.add.image(0, 0, 'background');//dimensions for now at least
       background.setOrigin(0,0);
       
    }

    update(){
        //console.log(this.sys.canvas.width)
        

    }
}

export default TitleScene