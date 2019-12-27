class GameScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'GameScene'
        })

        this.map
    }

    

    preload(){ 
        this.load.image('tiles', './assets/maps/pinktilesheet.png');
        this.load.tilemapTiledJSON('map', './assets/maps/1stworkingmap.json');
    }

    create(){
        //add map
        this.map = this.make.tilemap({key: 'map'});
       
        this.tiles = this.map.addTilesetImage('pinktilesheet', 'tiles');

        this.layer_background = this.map.createStaticLayer('background', this.tiles, 0, 0);
        this.layer_roads = this.map.createStaticLayer('roads', this.tiles, 0, 0);
        this.layer_collision = this.map.createStaticLayer('buildings-trees', this.tiles, 0, 0);
        this.layer_collision.setCollisionByExclusion([-1], true, this);

    }


}

export default GameScene