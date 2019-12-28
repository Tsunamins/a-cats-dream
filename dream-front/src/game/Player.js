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