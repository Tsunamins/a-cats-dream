import Player from './Player.js';
import Magic from './Magic.js';
//import Enemies from './Enemies.js';
import Enemy from './Enemy.js';


class GameScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'GameScene'
        })

      this.player; 
      this.cursors;
      this.pointer;
      this.enemies;
      this.fireflies;
      
    }

    

    preload(){ 
        this.load.image('tiles', './assets/maps/pinktilesheet.png');
        this.load.tilemapTiledJSON('map', './assets/maps/1stworkingmap.json');
        this.load.spritesheet('player', './assets/images/catspritesheet.png', { frameWidth: 35, frameHeight: 32 });
        this.load.image('magic', './assets/images/magicb.png')
        this.load.spritesheet('enemy', './assets/images/enemyspritesheet.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('firefly', './assets/images/fireflyspritesheet.png', { frameWidth: 17, frameHeight: 17 });
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
                this.player = new Player(this, obj.x, obj.y)
            }  
        });
        
        this.physics.add.collider(this.player, this.layer_collision);     
          
          //firing key not working, frame error
          // this.anims.create({
          //   key: 'fire',
          //   frames: [ { key: 'player', frame: 4 } ],
          //   frames: 20
          // });


     
        //add enemies group for now
        this.enemies = this.physics.add.group({
            key: 'enemy',
            repeat: 4,
          
        });

        //add enemy functions here for now
        this.enemies.children.iterate(function (enemy){
        
            enemy.x = Phaser.Math.Between(100, 600);
            enemy.y = Phaser.Math.Between(100, 300)
            enemy.setCollideWorldBounds(true);
            enemy.setBounce(1);
            enemy.setVelocity(Phaser.Math.Between(20, 60), Phaser.Math.Between(20, 60));
           
            enemy.health = 3;
        });

        //add enemy animations here for now
        //+ remember actual animation occurs in update
        this.anims.create({
            //changed from left to walking to apply flipX
            key: 'enemy-walk',
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
          });

          this.physics.add.collider(this.enemies, this.layer_collision);



        //add fireflies group
        this.fireflies = this.physics.add.group({
            key :'firefly',
            repeat :6,  
          });
         

          this.anims.create({
            //changed from left to walking to apply flipX
            key: 'firefly-float',
            frames: this.anims.generateFrameNumbers('firefly', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
          });
        
          this.fireflies.children.iterate(function (firefly){
            //goal.setScale(0.6);
            //goal.body.immovable = true;
            firefly.x = Phaser.Math.Between(100, 600);
            firefly.y = Phaser.Math.Between(100, 300)
            firefly.setCollideWorldBounds(true);
            firefly.setBounce(1);
            firefly.setVelocity(Phaser.Math.Between(20, 60), Phaser.Math.Between(20, 60));
           
        });

        
      







 
    




    
          //create magic
       this.magics = this.physics.add.group({ classType: Magic, runChildUpdate: true });
       this.physics.world.enable(this.magics);

        //create cameras
        //will want to adjust this, or maybe works well enough with line startFollow
        //this.cameras.main.setSize(400, 300);
       this.cameras.main.startFollow(this.player);
        
        //create input
        this.pointer = this.input.activePointer;
        this.cursors = this.input.keyboard.createCursorKeys();

        this.saveFile();
     

          
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

           
               var magic = this.magics.get();
               magic.setActive(true);
               magic.setVisible(true);
               if (magic){   
                magic.fire(this.player);

         
                  //magic collisions not added yet
                  //this.physics.add.overlap(magic, enemies, hitAnEnemy, null, this);
                  
                  //this.physics.add.collider(magic, layer_collision);
              }
            }

            //update enemy animations
            this.enemies.children.iterate(function (child){
                child.setVelocity = 150;
                child.anims.play('enemy-walk', true);
          
                
              });

              this.fireflies.children.iterate(function(child){
                child.setVelocity = 75;
                child.anims.play('firefly-float', true);
          
                });

            
           
            
            

            
    }


    saveFile(){
        
        let playerX = this.player.x;
        let playerY = this.player.y;
      
        let id = localStorage.getItem('user_id')
        GamesAdapter.createGame(id, playerX, playerY).then(game => {
            localStorage.setItem('game_id', game.id)
        })

    }

    updateFile(){

        let playerX = this.player.x;
        let playerY = this.player.y;
        
        let game_id = localStorage.getItem('game_id')
        GamesAdapter.updateGame(game_id, playerX, playerY)
        console.log(playerX)
    }
    //need to add this to game over section
    //this.updateFile()


}

export default GameScene