//import Player from 'Player.js';

class GameScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'GameScene'
        })

      this.player; 
      this.cursors;
      this.pointer;
    }

    

    preload(){ 
        this.load.image('tiles', './assets/maps/pinktilesheet.png');
        this.load.tilemapTiledJSON('map', './assets/maps/1stworkingmap.json');
        this.load.spritesheet('player', './assets/images/catspritesheet.png', { frameWidth: 35, frameHeight: 32 });
    }

    create(){
        //create map
        this.map = this.make.tilemap({key: 'map'});
        this.tiles = this.map.addTilesetImage('pinktilesheet', 'tiles');
        this.layer_background = this.map.createStaticLayer('background', this.tiles, 0, 0);
        this.layer_roads = this.map.createStaticLayer('roads', this.tiles, 0, 0);
        this.layer_collision = this.map.createStaticLayer('buildings-trees', this.tiles, 0, 0);
        this.layer_collision.setCollisionByExclusion([-1], true, this);

        //create player from Tiled definitions
        this.map.findObject('objects', (obj) => {
            if (obj.type === 'player'){
            this.player = this.physics.add.sprite(obj.x, obj.y, 'player')
            }
            //if this ends up in a separate player/class file need new Player(,,)
        });

        //create input
        this.pointer = this.input.activePointer;
        this.cursors = this.input.keyboard.createCursorKeys();

        //create player specifics, listed first will prob go in Player class, second uncertain or need to stay out

            //create world collision, cat currently stopping at 600, will change all dimensions later with new map and config
            this.physics.add.existing(this.player);
            this.player.setCollideWorldBounds(true);

            //create player animations
            this.anims.create({
                //changed from left to walking to apply flipX instead
                key: 'walking',
                frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
                frameRate: 10,
                repeat: -1
              });
          
              this.anims.create({
                  key: 'turn',
                  frames: [ { key: 'player', frame: 3 } ],
                  frameRate: 20
              });
              
              //firing key not working, frame error
              // this.anims.create({
              //   key: 'fire',
              //   frames: [ { key: 'player', frame: 4 } ],
              //   frames: 20
              // });

        //create cameras for tracking player movement
        //will want to adjust this, or maybe works well enough with line startFollow
        //this.cameras.main.setSize(400, 300);
        this.cameras.main.startFollow(this.player);
    }

    update(){
        //create player movement based on touch/mouse events, want to keep for mobile possibilities
        if(this.input.activePointer.isDown){
            this.player.x += (this.pointer.x - this.player.x) * 0.05;
            this.player.y += (this.pointer.y - this.player.y) * 0.05;
            
            };

            if(this.cursors.left.isDown){
                this.player.flipX = true;
                this.player.setVelocityX(-160);
                this.player.anims.play('walking', true);
        
            } else if (this.cursors.right.isDown){
                this.player.flipX = false;
                this.player.setVelocityX(160);
                this.player.anims.play('walking', true);

            } else { 
                this.player.setVelocityX(0);
                this.player.anims.play('turn', true);
    
            };
    
            if(this.cursors.up.isDown){
                this.player.setVelocityY(-160);
                this.player.anims.play('walking', true);
      
             
          } else if (this.cursors.down.isDown){
                this.player.setVelocityY(160);
                this.player.anims.play('walking', true);
      
            
          } else {   
            this.player.setVelocityY(0); 
          };


    }


}

export default GameScene