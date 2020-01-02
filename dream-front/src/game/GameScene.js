import Player from './Player.js';
import Magic from './Magic.js';
//import Enemy from './Enemy.js';


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
        this.load.image('magic', './assets/images/magicb.png')
        this.load.spritesheet('enemy', './assets/images/enemyspritesheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    create(){
        //create map
        this.map = this.make.tilemap({key: 'map'});
        this.tiles = this.map.addTilesetImage('pinktilesheet', 'tiles');
        this.layer_background = this.map.createStaticLayer('background', this.tiles, 0, 0);
        this.layer_roads = this.map.createStaticLayer('roads', this.tiles, 0, 0);
        this.layer_collision = this.map.createStaticLayer('buildings-trees', this.tiles, 0, 0);
        this.layer_collision.setCollisionByExclusion([-1], true, this);
        console.log(this.scene)
        console.log(this.game)
        
        

        
        
      

        //create player from Tiled definitions
        this.map.findObject('objects', (obj) => {
            if (obj.type === 'player'){
                this.player = new Player(this, obj.x, obj.y)
            //this.player = this.physics.add.sprite(obj.x, obj.y, 'player')
            }
            //if this ends up in a separate player/class file need new Player(,,)
        });

        //create enemy
       

        //player animations
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

          //create world collision, cat currently stopping at 600, will change all dimensions later with new map and config
        //   this.physics.add.existing(this.player);
        //   this.player.setCollideWorldBounds(true);




    //create cameras for tracking player movement
    //will want to adjust this, or maybe works well enough with line startFollow
    //this.cameras.main.setSize(400, 300);
    this.cameras.main.startFollow(this.player);




    /*******magic */

         /****working with original class */
       this.magics = this.physics.add.group({ classType: Magic, runChildUpdate: true });
       this.physics.world.enable(this.magics);

       /*****working with es6 class ********/
        //this seems to add the magic disc but does not propel it 
        //this.magic = new Magic(this, this.player.x, this.player.y);
        
        
        //create input
        this.pointer = this.input.activePointer;
        this.cursors = this.input.keyboard.createCursorKeys();

        this.saveFile();
        //let newGame = localStorage.getItem('game_save')
        //console.log(newGame)
        //GamesAdapter.createGame(newGame)
        // let id = localStorage.getItem('user_id')
        // GamesAdapter.createGame('A new game save', id)

          
        }

    update(){
        //keyboard movement called from Player class
        this.player.update(this.cursors);

        //mouse/touch event added in case mobile
        if(this.input.activePointer.isDown){
            this.player.x += (this.pointer.x - this.player.x) * 0.05;
            this.player.y += (this.pointer.y - this.player.y) * 0.05;   
        };
        
          //**************************************** */
          //firing section
          if (this.cursors.space.isDown){
            //firing animation for cat not working yet
            // player.setVelocity(0);
            // player.anims.play('fire', true);

            /***** working with original class */
               var magic = this.magics.get();
               magic.setActive(true);
               magic.setVisible(true);
               if (magic){   
                magic.fire(this.player);

                /*******working with es6 class */
             //
            //  this.magic.update(delta); //update needs to be called within update but cannot get delta value needed
            //   this.magic.setActive(true);
            //   this.magic.setVisible(true);
      
            //   if (this.magic){   
            //       this.magic.fire(this.player);
                  
                  //magic collisions not added yet
                  //this.physics.add.overlap(magic, enemies, hitAnEnemy, null, this);
                  
                  //this.physics.add.collider(magic, layer_collision);
              }
            }


    }

    saveFile(){
        let file = {
            playerX: this.player.x,
            playerY: this.player.y
            
        }
        localStorage.setItem('game_save', JSON.stringify(file))
        //GamesAdapter.createGame(file)
        let initialSave = localStorage.getItem('game_save')
        let id = localStorage.getItem('user_id')
        GamesAdapter.createGame(initialSave, id)
    }


}

export default GameScene