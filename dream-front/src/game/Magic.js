
/******************* */
//this was es6 attempt, below is original class construction
//cannot get delta value to pass in properly
// export default class Magic extends Phaser.Physics.Arcade.Sprite{
//     constructor(scene, x, y){
//         super(scene, x, y, 'magic');
        
//        // this.scene = scene;
//        // Phaser.GameObjects.Sprite.call(scene, 0, 0, 'magic');

//         scene.add.existing(this);
//         scene.physics.add.existing(this);
        

//         this.speed = 1;
        
//         this.born = 0;
//         this.direction = 0;
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//         this.setSize(12, 12, true);
//     }


//     // initialize(){

//     // }

//     //a fire function
//     fire(player){
//         console.log('has fired')
//         this.setPosition(player.x, player.y);
//             if (player.flipX){
//                       //shooting to left
//                       this.speed = Phaser.Math.GetSpeed(-1000, 1);
                      
//                   } else {
//                       //shooting to right
//                       this.speed = Phaser.Math.GetSpeed(1000, 1);
                     
//                   }
//                   this.born = 0;
//     }

//     update(delta){

//         console.log('has updated')
//         console.log(delta)
//         console.log(this.x)
      
//         this.x += this.speed * delta;
        
//         console.log(this.x += this.speed * delta)
//         this.born += delta;

//         console.log(this.born += delta)
//         if (this.born > 1000){
//             this.setActive(false);
//             this.setVisible(false);
//         }

//     }

// }

var Magic = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
    initialize:
      function Magic (scene)
      {     
            
          Phaser.GameObjects.Sprite.call(this, scene, 0, 0, 'magic'); //this is undefined
         
          this.speed = 1;
          this.born = 0;
          this.direction = 0;
          this.xSpeed = 0;
          this.ySpeed = 0;
          this.setSize(12, 12, true);
          
      },
      fire: function (player)
      {
          this.setPosition(player.x, player.y);
          if (player.flipX)
          {
              //face left
              this.speed = Phaser.Math.GetSpeed(-1000, 1);
              
          }
          else
          {
              //face right
              this.speed = Phaser.Math.GetSpeed(1000, 1);
              
          }
          this.born = 0;
      },
      update: function (time, delta)
      {
       
          this.x += this.speed * delta;
         
          this.born += delta;
         
          if (this.born > 1000)
          {
             
              this.setActive(false);
              this.setVisible(false);
          }
      }
    });

    export default Magic