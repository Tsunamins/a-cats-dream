class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'TitleScene'
        })
    }

    preload(){ this.image('background', '../assets/images/pinkscene.png');
    }

    create(){
        this.add.image(640, 380, 'background');//dimensions for now at least
    }
}

export default TitleScene