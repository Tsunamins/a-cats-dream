export default class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'player');
        this.scene = scene;
        
       
        this.scene.physics.world.enable(this);

        this.scene.add.existing(this);
        
        this.setCollideWorldBounds(true);

        //these may or may not be needed
        //this.physics.add.existing(this.player);
       // scene.add.existing(this);
        // scene.physics.add.existing(this);
        this.scene.anims.create({
            //changed from left to walking to apply flipX instead
            key: 'walking',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
          });
      
          this.scene.anims.create({
              key: 'turn',
              frames: [ { key: 'player', frame: 3 } ],
              frameRate: 20
          });
      

        
    }

    create(){
       

    }

    update(cursors){
        if(cursors.left.isDown){
            this.flipX = true;
            this.setVelocityX(-160);
            this.anims.play('walking', true);
    
        } else if (cursors.right.isDown){
            this.flipX = false;
            this.setVelocityX(160);
            this.anims.play('walking', true);

        } else { 
            this.setVelocityX(0);
            this.anims.play('turn', true);

        };

        if(cursors.up.isDown){
            this.setVelocityY(-160);
            this.anims.play('walking', true);
  
         
      } else if (cursors.down.isDown){
            this.setVelocityY(160);
            this.anims.play('walking', true);
  
        
      } else {   
        this.setVelocityY(0); 
      };

    }


    
}